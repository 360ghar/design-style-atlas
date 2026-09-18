# Contributing a style

A style is one folder + one file + one preview component:

```text
designs/<your-slug>/DESIGN.md
frontend/app/components/previews/batchN-*.tsx  (add export)
frontend/app/components/previews/index.tsx      (register slug → component)
```

## 1. Create the folder

Slug rules: lowercase kebab-case, stable forever (it's the URL: `/styles/<slug>` and the raw path `/designs/<slug>/DESIGN.md`).

## 2. Write DESIGN.md

Copy `designs/neo-brutalism/DESIGN.md` as a template. Requirements:

- **Frontmatter** (all fields required): `slug`, `name`, `description` (one line), `category`, `tags` (2–4), `related` (2–3 existing slugs), `preview` (`bg, surface, ink, muted, accent, accent2, display, body`).
- **All 20 sections** in order: aesthetic → typography → colors → spacing → layout → borders → shadows → radius → buttons → cards → navigation → imagery → icons → textures → motion → interactions → responsive → accessibility → avoid → quick-start snippet.
- **Concrete values**: hex codes, px sizes, durations, easings. An agent must be able to recreate the style without guessing.
- **Accessible tokens**: `ink` and `muted` must clear 4.5:1 against **both** `bg` and `surface`, and `accent`/`accent2` fills need at least one readable label (white, black, or `ink`). `npm run validate` enforces this — the §18 "verified against both Background and Surface" claim is only allowed when it holds.
- Description must differ from every existing style — check with search first.

## 3. Add the preview specimen

Previews are pure HTML/CSS (Tailwind + inline styles, small `<style>`-free keyframes from `app/globals.css`: `pv-marquee`, `pv-blink`, `pv-float`, `pv-spin-slow`, `pv-drift`, `pv-flicker`, `pv-chrome-text`, `pv-outline-text`).

- Wrap in `<Frame meta large?>` + `<Meta meta>` from `./frame`.
- Compact (`4/3`) is the catalog card; `large` (`16/8`) is the detail page — support both via the `large` prop (scale type/spacing).
- No images, no external assets, no JS interaction. `Frame` marks compact previews `aria-hidden` (the catalog card wraps them in `inert`); large studio/fullscreen previews stay in the accessibility tree, so anything interactive there must be real, focusable, and labelled.
- Read every color from `p = meta.preview` — never hardcode a hex. `BespokePreview` resolves the light/dark preview theme into `meta.preview` before your component runs, so hardcoded colors break theme switching.
- Respect `prefers-reduced-motion` (global CSS already kills preview animations).

## 4. Validate

```bash
cd frontend
npx tsc --noEmit
npm run validate        # sections, frontmatter, API JSON + the contrast gate
npm run check:contrast  # just the contrast gate, if you want the fast answer
npm run build           # must emit the new /styles/<slug> page + raw file
```

## Regenerating files

`frontend/scripts/style-data-*.mjs` + `generate-designs.mjs` produced the original 100 files. They are one-shot scaffolding, not the source of truth — **edit `designs/*` directly** from here on. The generators now skip any spec that already exists; passing `--force` overwrites hand-curated files and reverts their accessibility fixes.
