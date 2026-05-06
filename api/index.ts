import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const EVENTS = [
  {
    id: 1,
    title: "9th Annual Captain Jeffery Howard Conord Memorial Classic",
    description:
      "Join us for our signature fundraising event at the beautiful Bull Run Country Club. The event includes a 4-person scramble, fundraising raffle and prizes, Chick-fil-A lunch delivered on course plus a hot dog station, beverages throughout the round, and an awards reception with dinner and drinks afterward. Check-in starts at 7:30 AM for a 9:00 AM shotgun start. Please arrive early to register, purchase mulligans and raffle tickets (cash/Venmo/PayPal accepted), and practice before the round (included). All proceeds benefit MCVET — Maryland Center for Veterans Education and Training — in Jeff's name.",
    date: "2026-06-19T09:00:00.000Z",
    location: "Bull Run Country Club, Haymarket, VA",
    imageUrl: "/assets/IMG_4277_1768183625522.jpeg",
    externalUrl:
      "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026",
  },
];

app.get("/api/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/api/events", (_req: Request, res: Response) => {
  res.json(EVENTS);
});

app.get("/api/events/:id", (req: Request, res: Response) => {
  const event = EVENTS.find((e) => e.id === Number(req.params.id));
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
});

app.get("/api/sponsors", (_req: Request, res: Response) => {
  res.json([]);
});

export default app;
