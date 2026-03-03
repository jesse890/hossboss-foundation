# Hoss Boss Foundation Website

## Overview
A veteran-support charity event management website for the Hoss Boss Foundation. Built with React + Express + PostgreSQL (Drizzle ORM).

## Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion, shadcn/ui, wouter (routing), TanStack Query
- **Backend**: Express.js, Drizzle ORM, PostgreSQL
- **File Storage**: Replit Object Storage (presigned URL uploads)

## Project Structure
- `client/src/pages/` — Page components (Home, Events, Sponsors, About, Golf)
- `client/src/components/` — Shared components (Navigation, Footer, SectionHeader, AddEventDialog, ObjectUploader)
- `client/src/hooks/` — Custom hooks (use-upload for object storage uploads)
- `server/` — Express server, routes, storage, database
- `shared/` — Shared schema (Drizzle) and route definitions
- `attached_assets/` — Static assets served at `/assets` path

## Key Features
- **Home Page**: Hero with tournament CTA, impact stats, tournament details section, benefiting/MCVET block, In Memoriam section, upcoming events preview
- **Events Page**: Dynamic event listings from DB with image upload capability (AddEventDialog)
- **Golf Page** (`/golf`): Tournament registration page with EventCaddy iframe embed (with fallback if blocked)
- **Sponsors Page**: Tiered sponsor showcase (Gold/Silver/Bronze)
- **About Page**: Foundation story and MCVET partnership

## Important URLs
- EventCaddy Registration: https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026
- Bull Run Country Club: https://www.golfbullrun.com/

## Current Event
- **9th Annual Jeff Conord Memorial Classic** — June 19, 2026, Bull Run Country Club, Haymarket VA
- 4-person scramble, 9:00 AM shotgun start, check-in at 7:30 AM
- Benefiting MCVET (Maryland Center for Veterans Education and Training)
- Eight-year total: $110,000+, Goal: $200,000

## API Routes
- `GET /api/events` — List all events
- `GET /api/events/:id` — Get single event
- `POST /api/events` — Create event
- `PATCH /api/events/:id` — Update event
- `DELETE /api/events/:id` — Delete event
- `GET /api/sponsors` — List sponsors
- `POST /api/object-storage/presigned-url` — Get upload URL for object storage

## Static Assets
- `attached_assets/` folder served at `/assets` via Express static middleware in `server/index.ts`
- Golf group photo: `/assets/IMG_4277_1768183625522.jpeg`
