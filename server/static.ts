import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(`Build directory not found: ${distPath}`);
    app.use("*", (_req, res) => {
      res.status(200).send("Hoss Boss Foundation");
    });
    return;
  }

  const indexPath = path.resolve(distPath, "index.html");
  const indexExists = fs.existsSync(indexPath);

  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    if (indexExists) {
      res.sendFile(indexPath, (err) => {
        if (err && !res.headersSent) {
          console.error("Failed to send index.html:", err);
          res.status(200).send("Hoss Boss Foundation");
        }
      });
    } else {
      res.status(200).send("Hoss Boss Foundation");
    }
  });
}
