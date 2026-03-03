import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { registerObjectStorageRoutes } from "./replit_integrations/object_storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Register object storage routes for file uploads
  registerObjectStorageRoutes(app);
  // API Routes
  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get(api.events.get.path, async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  });

  app.get(api.sponsors.list.path, async (req, res) => {
    const sponsors = await storage.getSponsors();
    res.json(sponsors);
  });

  app.post(api.events.create.path, async (req, res) => {
    try {
      const body = req.body;
      const eventData = {
        title: body.title,
        description: body.description,
        date: new Date(body.date),
        location: body.location,
        imageUrl: body.imageUrl || null,
        externalUrl: body.externalUrl || null,
      };
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ message: 'Failed to create event' });
    }
  });

  app.patch("/api/events/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const updateData: Record<string, any> = {};
      if (body.title !== undefined) updateData.title = body.title;
      if (body.description !== undefined) updateData.description = body.description;
      if (body.date !== undefined) updateData.date = new Date(body.date);
      if (body.location !== undefined) updateData.location = body.location;
      if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl;
      if (body.externalUrl !== undefined) updateData.externalUrl = body.externalUrl;
      const event = await storage.updateEvent(id, updateData);
      if (!event) return res.status(404).json({ message: "Event not found" });
      res.json(event);
    } catch {
      return res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/events/:id", async (req, res) => {
    const deleted = await storage.deleteEvent(Number(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Event deleted" });
  });

  // Seed database on startup
  await storage.seed();

  return httpServer;
}
