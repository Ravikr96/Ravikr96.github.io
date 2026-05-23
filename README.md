# Ravi Kumar — Portfolio

Premium personal portfolio for **Ravi Kumar**, Senior Data & AI Engineer. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

**Live site:** [ravikr96.github.io](https://ravikr96.github.io) (after deployment)

## Features

- Cinematic dark theme with glassmorphism and animated gradients
- Hero with rotating role titles, availability badge, and profile image
- Interactive skills with category tabs and animated progress bars
- Filterable project cards with expandable case-study details
- Animated experience timeline from resume
- Freelance services section with conversion-focused CTAs
- Trust section with stats and testimonial placeholders
- Contact form (mailto integration) + Calendly placeholder
- Command palette (`⌘K` / `Ctrl+K`)
- Scroll progress indicator, spotlight cursor, magnetic buttons
- SEO metadata, Open Graph, sitemap, robots.txt
- GitHub Pages ready (`.nojekyll`, SPA 404 fallback)

## Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion |
| Icons | Lucide React |
| Command menu | cmdk |

## Quick start

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

Output goes to `dist/`. The build script also copies `index.html` → `404.html` for GitHub Pages SPA routing.

## Project structure

```
src/
├── components/
│   ├── effects/      # Grid, cursor, scroll progress
│   ├── layout/       # Navbar, footer, command palette
│   └── ui/           # Buttons, section headings
├── data/             # All site content (edit here)
│   ├── site.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── services.ts
│   └── blog.ts       # Blog placeholder
├── hooks/
├── sections/         # Page sections
├── App.tsx
└── main.tsx
public/
├── profile.jpg
├── images/portfolio/
├── Ravi_Kumar_AI.pdf
├── robots.txt
├── sitemap.xml
└── manifest.webmanifest
legacy/               # Old Bootstrap iPortfolio template
.github/workflows/    # Deploy workflow (run when ready)
```

## Customization checklist

| What to change | File |
|----------------|------|
| Name, tagline, links | `src/data/site.ts` |
| Skills & levels | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Work history | `src/data/experience.ts` |
| Freelance services | `src/data/services.ts` |
| Calendly link | `src/sections/Contact.tsx` |
| Testimonials | `src/sections/Trust.tsx` |
| Resume PDF | `public/Ravi_Kumar_AI.pdf` |
| Profile photo | `public/profile.jpg` |

## Deployment (when ready)

1. Push to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/`.

For a user site (`username.github.io`), `vite.config.ts` uses `base: '/'`.

## Legacy template

The previous Bootstrap iPortfolio site is archived in `legacy/`. Safe to delete after confirming the new site works.
