import { db, isDatabaseAvailable } from "./db";
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
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
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

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  async updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined> {
    const [updated] = await db.update(events).set(event).where(eq(events.id, id)).returning();
    return updated;
  }

  async deleteEvent(id: number): Promise<boolean> {
    const result = await db.delete(events).where(eq(events.id, id)).returning();
    return result.length > 0;
  }

  async getSponsors(): Promise<Sponsor[]> {
    return await db.select().from(sponsors);
  }

  async seed(): Promise<void> {
    const existingEvents = await this.getEvents();

    const hasGala = existingEvents.some(e => e.title.toLowerCase().includes("gala"));
    const hasOldTitle = existingEvents.some(e => e.title.includes("8th Annual") || (e.title.includes("Memorial") && !e.title.includes("9th Annual")));

    if (hasGala || hasOldTitle) {
      await db.delete(events);
      console.log("Cleared stale event data");
    }

    const wrongTimeEvents = existingEvents.filter(e =>
      e.title.includes("9th Annual") && e.date && new Date(e.date).getUTCHours() !== 9
    );
    for (const evt of wrongTimeEvents) {
      await db.update(events)
        .set({ date: new Date("2026-06-19T09:00:00") })
        .where(eq(events.id, evt.id));
      console.log(`Fixed event time for id=${evt.id} to 9:00 AM`);
    }

    const currentEvents = await this.getEvents();
    if (currentEvents.length === 0) {
      await db.insert(events).values([
        {
          title: "9th Annual Captain Jeffery Howard Conord Memorial Classic",
          description: "Join us for our signature fundraising event at the beautiful Bull Run Country Club. The event includes a 4-person scramble, fundraising raffle and prizes, Chick-fil-A lunch delivered on course plus a hot dog station, beverages throughout the round, and an awards reception with dinner and drinks afterward. Check-in starts at 7:30 AM for a 9:00 AM shotgun start. Please arrive early to register, purchase mulligans and raffle tickets (cash/Venmo/PayPal accepted), and practice before the round (included). All proceeds benefit MCVET — Maryland Center for Veterans Education and Training — in Jeff's name.",
          date: new Date("2026-06-19T09:00:00"),
          location: "Bull Run Country Club, Haymarket, VA",
          imageUrl: "/assets/IMG_4277_1768183625522.jpeg",
          externalUrl: "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026",
        },
      ]);
      console.log("Database seeded with current event data");
    }

    const existingSponsors = await this.getSponsors();
    if (existingSponsors.length === 0) {
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
      console.log("Sponsors seeded successfully");
    }
  }
}

class DegradedStorage implements IStorage {
  private fallbackEvents: Event[] = [
    {
      id: 1,
      title: "9th Annual Captain Jeffery Howard Conord Memorial Classic",
      description: "Join us for our signature fundraising event at the beautiful Bull Run Country Club. The event includes a 4-person scramble, fundraising raffle and prizes, Chick-fil-A lunch delivered on course plus a hot dog station, beverages throughout the round, and an awards reception with dinner and drinks afterward. Check-in starts at 7:30 AM for a 9:00 AM shotgun start. Please arrive early to register, purchase mulligans and raffle tickets (cash/Venmo/PayPal accepted), and practice before the round (included). All proceeds benefit MCVET — Maryland Center for Veterans Education and Training — in Jeff's name.",
      date: new Date("2026-06-19T09:00:00"),
      location: "Bull Run Country Club, Haymarket, VA",
      imageUrl: "/assets/IMG_4277_1768183625522.jpeg",
      externalUrl: "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026",
    },
  ];

  async getEvents(): Promise<Event[]> { return this.fallbackEvents; }
  async getEvent(id: number): Promise<Event | undefined> { return this.fallbackEvents.find(e => e.id === id); }
  async createEvent(_event: InsertEvent): Promise<Event> { throw new Error("Database unavailable"); }
  async updateEvent(_id: number, _event: Partial<InsertEvent>): Promise<Event | undefined> { throw new Error("Database unavailable"); }
  async deleteEvent(_id: number): Promise<boolean> { throw new Error("Database unavailable"); }
  async getSponsors(): Promise<Sponsor[]> { return []; }
  async seed(): Promise<void> {}
}

export const storage: IStorage = isDatabaseAvailable ? new DatabaseStorage() : new DegradedStorage();
