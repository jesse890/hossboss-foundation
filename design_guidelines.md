# Event Management Platform - Design Guidelines

## Design Approach: Reference-Based
**Primary Inspiration**: Eventbrite + Luma (modern event discovery)
**Key Principle**: Image-forward, card-heavy interface that makes events irresistible and sponsors prominent

## Typography System
- **Headlines**: Inter (600-700 weight) for event titles, section headers
- **Body**: Inter (400-500 weight) for descriptions, details
- **Accents**: Inter (500 weight) for metadata (dates, locations, attendee counts)
- **Scale**: text-4xl/5xl for hero, text-2xl/3xl for section headers, text-lg for event titles, text-base for body

## Layout System
**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16 for consistent rhythm
- Section padding: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Internal spacing: p-4 to p-6

## Core Pages & Layouts

### Homepage
**Hero Section** (h-[600px]): Full-width background image of vibrant event scene
- Overlaid search bar (w-full max-w-3xl) with blurred backdrop (backdrop-blur-xl bg-white/90)
- Headline above search: text-5xl font-bold
- Quick filters below (Event Type, Date Range, Location) as pill buttons with blurred backgrounds

**Featured Events Grid**: 
- 3-column grid (lg:grid-cols-3) of large event cards
- Each card: Aspect-ratio 16:9 image, gradient overlay on bottom third
- Card content overlaid: Event title, date/time, location, attendee count
- Hover: subtle scale transform (hover:scale-[1.02])

**Sponsors Showcase**:
- Full-width section with max-w-7xl container
- 4-6 column grid (grid-cols-2 md:grid-cols-4 lg:grid-cols-6) of sponsor logos
- Each logo in rounded container (bg-white shadow-sm p-8)
- Grayscale on default, full color on hover

**Browse by Category**:
- 2-column grid (md:grid-cols-2) of category cards with representative images
- Each card shows category name, event count, trending badge if applicable

### Event Listings Page
**Filter Sidebar** (w-64, sticky):
- Collapsible sections for Date, Category, Location, Price Range
- Checkbox groups with clear visual hierarchy
- "Apply Filters" button at bottom

**Results Grid** (flex-1):
- Masonry-style grid (2 columns md, 3 columns lg) 
- Event cards with varying heights based on content
- Image (aspect-ratio varies), title, brief description, key details, CTA button

### Event Detail Page
**Hero**: Full-width event image (h-[500px]) with gradient overlay
- Floating info card (max-w-md) positioned bottom-right with blurred background
- Contains: Date, time, location, price, "Get Tickets" CTA with backdrop-blur

**Content Layout**: Two-column (lg:grid-cols-3)
- Main column (lg:col-span-2): Description, agenda, speakers/performers
- Sidebar: Organizer info, venue details, sponsors logos (stacked), share buttons

**Similar Events**: 4-column carousel at bottom

### Dashboard (Event Organizers)
**Stats Cards**: 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card: Icon, metric value (text-3xl), label, trend indicator

**Event Management Table**:
- Rows with thumbnail, event name, status badge, date, attendees, actions
- Status badges: Pill-shaped with appropriate backgrounds

**Image Upload Component**:
- Drag-and-drop zone with dashed border
- Preview grid below showing uploaded images with delete X button
- Image cropping interface modal for hero images

## Component Library

**Event Cards**: 
- Rounded corners (rounded-xl), shadow-lg on hover
- Image with 16:9 ratio, title (text-xl font-semibold), metadata row (icons + text-sm)

**Sponsor Cards**:
- Square aspect ratio, centered logo, shadow-sm, rounded-lg
- Hover state: shadow-xl transition

**Search Bar**:
- Large input (h-14) with rounded-full, icon prefix (search), filter button suffix
- Dropdown suggestions appear below with card styling

**CTAs**:
- Primary: Solid with backdrop-blur for image overlays, rounded-lg, px-8 py-3
- Secondary: Outlined with subtle background

**Navigation**:
- Horizontal nav with logo left, menu items center, user avatar + "Create Event" button right
- Sticky on scroll with subtle shadow

**Modals**:
- Centered overlay, rounded-2xl, max-w-2xl
- Close X button top-right, content padding p-8

## Images Required

1. **Homepage Hero**: Energetic crowd at outdoor festival/conference (wide-angle, vibrant)
2. **Featured Events** (3-4): Mix of conference speakers, music festival, networking event, sports event
3. **Category Cards** (6): Representative images for Music, Tech, Sports, Food, Arts, Networking
4. **Event Detail Hero**: High-quality venue/event atmosphere shot
5. **Sponsor Logos**: Placeholder for 8-12 company logos

**Hero Image**: Yes - full-width hero on homepage (h-[600px]) with overlaid search interface

## Interactions
- Card hover: Scale slightly + shadow increase
- Image loading: Skeleton shimmer effect
- Smooth scroll to sections
- Modal transitions: Fade + scale from center