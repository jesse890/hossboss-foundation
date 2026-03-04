import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";
import fs from "fs";

const app = express();

let indexHtml: string | null = null;
if (process.env.NODE_ENV === "production") {
  const candidates = [
    typeof __dirname !== "undefined" ? path.resolve(__dirname, "public", "index.html") : null,
    path.resolve(process.cwd(), "dist", "public", "index.html"),
  ].filter(Boolean) as string[];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        indexHtml = fs.readFileSync(p, "utf-8");
        break;
      }
    } catch {}
  }
}

app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (_req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    return next();
  }
  if (indexHtml) {
    return res.status(200).type("html").send(indexHtml);
  }
  return res.status(200).send("OK");
});

app.use('/assets', express.static(path.resolve(process.cwd(), 'attached_assets')));

const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  const message = err.message || "Internal Server Error";
  console.error(`[error] ${req.method} ${req.path}: ${message}`, err.stack || "");
  if (req.path === "/" || req.path === "/healthz" || req.path === "/api/healthz") {
    return res.status(200).send("OK");
  }
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ message });
});

const port = parseInt(process.env.PORT || "5000", 10);
httpServer.listen(
  {
    port,
    host: "0.0.0.0",
    reusePort: true,
  },
  () => {
    log(`serving on port ${port}`);
  },
);

(async () => {
  try {
    await registerRoutes(httpServer, app);
  } catch (err) {
    console.error("Route registration failed:", err);
    log(`Warning: Route registration encountered an error: ${err}`, "startup");
  }

  if (process.env.NODE_ENV === "production") {
    try {
      serveStatic(app);
    } catch (err) {
      console.error("Static file serving failed:", err);
      log(`Warning: Could not serve static files: ${err}`, "startup");
    }
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  log("Application fully initialized");
})();
