import { db } from "./db";
import {
  events,
  sponsors,
  type Event,
  type InsertEvent,
  type Sponsor,
  type InsertSponsor,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getSponsors(): Promise<Sponsor[]>;
  seed(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async getSponsors(): Promise<Sponsor[]> {
    return await db.select().from(sponsors);
  }

  async seed(): Promise<void> {
    const existingEvents = await this.getEvents();
    if (existingEvents.length === 0) {
      // Seed Events
      await db.insert(events).values([
        {
          title: "8th Annual Captain Jeffery Howard Conord Golf Tournament",
          description: "Join us for our signature fundraising event. A day of golf, camaraderie, and supporting Veterans' mental health. All proceeds align with MCVET.",
          date: new Date("2025-06-15T09:00:00"), // Future date example
          location: "Maryland National Golf Club, Middletown, MD",
          imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b", // Golf course placeholder
        },
        {
          title: "Veterans Day Gala",
          description: "An evening to honor our heroes and celebrate the achievements of the Hoss Boss Foundation.",
          date: new Date("2025-11-11T18:00:00"),
          location: "Baltimore Marriott Waterfront",
          imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865", // Gala placeholder
        },
      ]);

      // Seed Sponsors
      await db.insert(sponsors).values([
        {
          name: "Patriot Construction",
          tier: "Gold",
          logoUrl: "https://via.placeholder.com/150?text=Patriot+Construction",
          websiteUrl: "#",
        },
        {
          name: "Liberty Financial",
          tier: "Silver",
          logoUrl: "https://via.placeholder.com/150?text=Liberty+Financial",
          websiteUrl: "#",
        },
        {
          name: "Maryland Motors",
          tier: "Bronze",
          logoUrl: "https://via.placeholder.com/150?text=Maryland+Motors",
          websiteUrl: "#",
        },
      ]);
      console.log("Database seeded successfully");
    }
  }
}

export const storage = new DatabaseStorage();
