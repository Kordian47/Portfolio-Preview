# Kordian Cebulla — Engineering Portfolio

## Architecture

Full-stack application with separated frontend and backend:

- **Frontend**: React + Vite (port 5000) — served via Express dev server
- **Backend**: Python FastAPI (port 8000) — standalone API server
- **Proxy**: Express `server/routes.ts` forwards `/api/*` requests to FastAPI

## Running Locally

Both servers must be running:

1. **Frontend** (Express + Vite): `npm run dev` → port 5000
2. **Python Backend**: `cd backend && python main.py` → port 8000

## Key Directories

```
backend/           Python FastAPI backend
  main.py          API server with /api/beam endpoint
client/            React frontend (Vite)
  src/pages/       Page components
  src/components/  Shared components (Navbar, ProjectSidebar, ArtifactModal, etc.)
  src/data/        Static data (projects.ts, artifacts.ts)
  public/          Static assets (favicon, etc.)
server/            Express server (proxies /api to Python, serves Vite)
shared/            Shared TypeScript schemas
attached_assets/   Uploaded images/videos (NOT served directly)
```

## Pages

- `/` — Home (About, Skills, Experience, Goals, Contact)
- `/projects` — Projects index (includes Engineering Artifacts section)
- `/projects/automated-garden-watering` — Garden project (dedicated page)
- `/projects/beam-deflection-calculator` — Beam calculator project (dedicated page)
- `/projects/artifacts` — Engineering Artifacts gallery with modal detail view
- `/tools` — Engineering Tools (interactive beam calculator with backend)

## Design

- Dark theme: `hsl(215, 25%, 9%)` background
- Primary accent: cyan `hsl(199, 89%, 48%)`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- Blueprint grid pattern effects

## Features

- Floating section sidebar on project pages (collapsible, tracks scroll position)
- Mobile-responsive sidebar repositioned to bottom-left
- KC Logo favicon and OG image
- Python-powered beam deflection calculator via `/api/beam`
- Engineering Artifacts gallery with reusable modal overlay (Framer Motion animated)

## API Endpoints

- `GET /api/health` — Health check
- `POST /api/beam` — Beam deflection calculator (accepts length, load, E, I)
