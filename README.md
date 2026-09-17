# Design Styles — 100 design styles for AI coding agents

Give your coding agent a reusable visual direction covering typography, colors, spacing, layout, components, effects, motion, and design principles.

Instead of choosing “Apple”, “Stripe”, or “Linear”, choose **“Neo-Brutalism”, “Swiss”, “Y2K”, “Bauhaus”** — or any of 100 visual styles.

## Use a style in 30 seconds

```bash
# 1. copy a style into your project
cp designs/neo-brutalism/DESIGN.md ./DESIGN.md

# 2. tell your agent (Codex, Claude Code, Cursor, Windsurf):
"Follow @DESIGN.md for all UI work."
```

Or open the site, hit **Copy DESIGN.md** on any style, and paste it straight into your agent chat.

Raw files are also served over HTTP for agents that fetch URLs:

```
https://<your-deploy>/designs/neo-brutalism/DESIGN.md
```

## Repo structure

```text
/
├── designs/                  ← canonical source of truth (100 styles)
│   ├── neo-brutalism/
│   │   └── DESIGN.md         ← frontmatter + 20-section agent spec
│   ├── swiss-design/
│   │   └── DESIGN.md
│   └── ...98 more
├── frontend/                 ← Next.js + TS + Tailwind site (static export)
│   ├── app/
│   │   ├── page.tsx          ← hero + catalog + search
│   │   ├── styles/[slug]/    ← detail: specimen, tokens, rendered md, actions
│   │   ├── components/previews/  ← 100 bespoke HTML/CSS specimens
│   │   └── lib/styles.ts     ← fs index over ../designs (no duplicated content)
│   └── scripts/              ← generators + data
├── README.md
└── CONTRIBUTING.md
```

The frontend never duplicates style content: `app/lib/styles.ts` reads `../designs` at build time (frontmatter via `gray-matter`, markdown via `remark`), and `next.config.ts` copies the raw files into `public/designs/` so `/designs/<slug>/DESIGN.md` works live.

## Every DESIGN.md covers

Overall aesthetic · typography · colors · spacing · layout/grid · borders · shadows · radius · buttons · cards · navigation · imagery · icons · textures · motion · interactions · responsive behavior · accessibility · what to avoid · quick-start snippet (CSS variables + starter HTML).

Frontmatter carries the machine-readable contract:

```yaml
---
slug: neo-brutalism
name: Neo-Brutalism
description: Bold borders, hard shadows, saturated colors...
category: Brutalist
tags: [bold, high-contrast, playful]
related: [brutalism, playful-brutalism, colorful-brutalism]
preview: { bg, surface, ink, muted, accent, accent2, display, body }
---
```

## Local dev

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → frontend/out (100 pages + raw files)
```

Requires Node 18+.

## The 100 styles

Minimalism · Ultra-Minimalism · Swiss Design · Japanese Minimalism · Scandinavian · Monochrome · Editorial Minimalism · Luxury Minimalism · Product Minimalism · Functional Minimalism · Brutalism · Neo-Brutalism · Playful Brutalism · Corporate Brutalism · Editorial Brutalism · Minimal Brutalism · Colorful Brutalism · Anti-Design · Post-Brutalism · Industrial Brutalism · Maximalism · Playful Maximalism · Editorial Maximalism · Psychedelic Maximalism · Typography Maximalism · Color Maximalism · Digital Maximalism · Chaos Design · Luxury Maximalism · Graphic Maximalism · Editorial/Magazine · Newspaper · Fashion Editorial · Poster-Inspired · Swiss Poster · Bauhaus · Memphis · Y2K · Retro Internet · Webcore · Desktop UI · Windows 95 · Mac OS · Terminal · Hacker Aesthetic · Cyberpunk · Futurism · Sci-Fi UI · Glassmorphism · Neumorphism · Claymorphism · Skeuomorphism · Bento Grid · Card-Based UI · Corporate SaaS · Stripe-Inspired · Linear-Inspired · Notion-Inspired · Gradient Design · Aurora/Glow · Holographic · Liquid Chrome · 3D Web Design · Immersive · Scrollytelling · Parallax · Kinetic Typography · Typography-First · Variable Fonts · Oversized Typography · Collage · Scrapbook · Zine/Punk · Risograph · Halftone · Grain/Noise · Hand-Drawn · Illustration-Led · Corporate Memphis · Organic/Biophilic · Eco/Sustainable · Japandi · Wabi-Sabi · Art Deco · Art Nouveau · Mid-Century Modern · 70s Retro · 80s Retro · 90s Retro · Vaporwave · Synthwave · Pixel/8-Bit · Gaming UI · Comic/Pop Art · Graffiti/Streetwear · Quiet Luxury · Surrealism · Dreamcore · Liminal/Weirdcore · Generative/Algorithmic Design.

## License

Slug notes: `generative-algorithmic` shortens "Generative/Algorithmic Design"; `pixel-8bit` shortens "Pixel/8-Bit". Both canonical.
MIT — use the styles in anything, attribute if you're kind.
