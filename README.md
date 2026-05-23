# Ravi Kumar — Portfolio

Premium personal portfolio for **Ravi Kumar**, Senior Data & AI Engineer. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deployed to [ravikr96.github.io](https://ravikr96.github.io).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, stagger, magnetic buttons
- **cmdk** — command palette (`⌘K` / `Ctrl+K`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## GitHub Pages deployment

1. Push to `main` (or `master`).
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

For a **user site** (`username.github.io`), `vite.config.ts` uses `base: '/'`.

## Project structure

```
src/
├── components/     # UI, layout, effects
├── data/           # Content (site, skills, projects, experience)
├── hooks/
├── sections/       # Page sections
└── App.tsx
public/
├── profile.jpg
├── images/portfolio/
└── Ravi_Kumar_AI.pdf
```

## Customization

| Item | File |
|------|------|
| Copy & links | `src/data/site.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Experience | `src/data/experience.ts` |
| Freelance services | `src/data/services.ts` |
| Calendly URL | `src/sections/Contact.tsx` |
| Resume PDF | `public/Ravi_Kumar_AI.pdf` |

## Legacy template

The previous Bootstrap iPortfolio site lives in `legacy/` for reference.
