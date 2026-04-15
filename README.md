# RAIL Website

Website for **RAIL (Reliable AI Lab)** at University College Cork.

Fully static site. All content lives in TypeScript files in this repo. To update the site, edit a file, commit, and push. Cloudflare rebuilds automatically.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Hosting:** Cloudflare Workers (Static Assets)

No database, no backend, no environment variables.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing site content

All content is in `src/data/`:

| File | What it contains |
|------|------------------|
| `src/data/research.ts` | Research groups (SPATIAL, COLLECTIVE, LING, DECISION, MULTI, SCIQ) |
| `src/data/publications.ts` | Publications list |
| `src/data/projects.ts` | Projects list |
| `src/data/team.ts` | Director + research group members (powers the org chart) |

The advisors / partners list is hardcoded in `src/app/(public)/page.tsx` (search for "Advisors").

To update content:

```bash
# 1. Edit the relevant file
# 2. Commit and push
git add src/data/<file>.ts
git commit -m "Add new publication"
git push origin main
```

Cloudflare auto-rebuilds and deploys within about one minute.

## Project Structure

```
src/
  app/
    (public)/        # Pages (single route: Home)
    layout.tsx       # Root layout (Navbar + Footer)
  components/
    public/          # Navbar, Hero, OrgChart, ResearchCard, Footer, etc.
  data/              # Site content (edit these to change the site)
  lib/
    types.ts         # Shared TypeScript types
public/
  images/            # Logo, team photos, logos of partner institutions
wrangler.toml        # Cloudflare Workers deploy config
next.config.ts       # Static export configuration
```

## Build & Deploy

Deploy is fully automated via Cloudflare Workers Builds. On every push to `main`:

1. Cloudflare runs `npm run build` which produces `./out/` (static HTML/CSS/JS)
2. Cloudflare runs `npx wrangler deploy` which uploads `./out/` per `wrangler.toml`

Manual build for local verification:

```bash
npm run build           # Produces ./out/
npx serve out           # Serves the static files on localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static site to `./out/` |
| `npm run lint` | Run ESLint |
