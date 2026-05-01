import express from "express";
import type { Request, Response } from "express";
import { storage } from "../server/storage";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/api/events", async (_req: Request, res: Response) => {
  try {
    const events = await storage.getEvents();
    res.json(events);
  } catch {
    res.status(500).json({ message: "Failed to load events" });
  }
});

app.get("/api/events/:id", async (req: Request, res: Response) => {
  try {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch {
    res.status(500).json({ message: "Failed to load event" });
  }
});

app.get("/api/sponsors", async (_req: Request, res: Response) => {
  try {
    const sponsors = await storage.getSponsors();
    res.json(sponsors);
  } catch {
    res.status(500).json({ message: "Failed to load sponsors" });
  }
});

export default app;
