---
slug: bento-grid
name: "Bento Grid"
description: "Compartmentalized delight: varied-size tiles packing features into one view."
category: Product & SaaS
tags: [bento, grid, modular]
related: [swiss-design, corporate-brutalism, swiss-poster]
preview:
  bg: "#F5F5F4"
  surface: "#FFFFFF"
  ink: "#1C1917"
  muted: "#766F6A"
  accent: "#2962FE"
  accent2: "#FF6B9D"
  display: "Inter, SF Pro Display, sans-serif"
  body: "Inter, SF Pro Text, sans-serif"
---

# Bento Grid — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the tidier, more modular interpretation.

## 1. Overall aesthetic

The Apple-keynote grid as a layout system: a 4–6 column board of mismatched tiles — big feature + small stats + wide banner — packing a whole story into one viewport. Dense but digestible; every tile one idea. For product launches, portfolios, dashboards, and features pages.

**Three principles:**

- One idea per tile; size encodes importance (2×2 hero, 1×1 stats)
- Vary tile media: product shot, stat, quote, mini-chart, icon
- Gaps are gutters: uniform 12–16px, never mixed

## 2. Typography

- **Display:** Inter, SF Pro Display, sans-serif
- **Body:** Inter, SF Pro Text, sans-serif
- **Scale:** hero 32–48px Inter in hero tile, H2 24–30px per tile, H3 18–20px, body 14–16px, meta/labels 12–13px medium gray.
- **Weights:** display 600–700 Inter; body 400–500; labels 500–600 with no wide tracking.
- **Rules:** left-aligned headlines inside rounded modular tiles; strict tile rhythm; never full-bleed poster chaos.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F5F4` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1C1917` | Headlines, body text |
| Muted | `#766F6A` | Captions, meta, secondary text |
| Accent | `#2962FE` | Primary actions, highlights |
| Accent 2 | `#FF6B9D` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Tile system: 16px gaps, 24px tile padding, 2–4 column spans; one bento viewport per section

Use an 8px base unit (4px for dense product UI). Section padding 64–96px desktop / 40px mobile; tile padding 24px (16px on small tiles); never let text touch a container edge.

## 5. Layout / Grid

Bento board: 12-col grid (reads as 4–6 visual columns), tiles spanning 3/4/6/8 cols; hero tile 2 rows tall; responsive collapse 2-col then 1-col. Max-width 1200px. Dense specimens may simplify to a 4-col × 2-row board.

## 6. Borders

1px solid #E7E5E4 on tiles; media flush-bleed inside tiles

## 7. Shadows

Soft tile lift: 0 2px 12px rgba(28,25,23,0.06); hover 0 12px 32px rgba(28,25,23,0.12)

## 8. Radius

16–20px tile rounding (14px floor in dense specimens); inner media 12px

## 9. Buttons

Tile CTAs: small pills bottom-left of feature tiles; section CTA below the board. 14px medium labels.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Tiles ARE the cards: white default, 18px radius, border + soft shadow, 24px padding; one dark hero tile per board allowed using Ink ground with white text; hover lifts 4px with deeper shadow.

## 11. Navigation

Standard minimal bar above the board; anchor links jump to tile groups. Board order = story order.

## 12. Imagery

Product screenshots cropped to tiles, mini device mockups, gradient tile grounds, logo chips. Bleed media to tile edges.

## 13. Icons

20px accent-tinted glyphs as tile headers; stat tiles pair icon + giant number.

## 14. Textures / Patterns

Subtle dot grid behind the board; gradient meshes inside feature tiles at low opacity.

## 15. Motion

Staggered tile entrances (50ms cascade, 300ms rise); hover lift 200ms; number count-ups in stat tiles.

Durations: micro 100–200ms tile hovers, standard 300ms tile lifts. Easings: crisp ease-out; springs forbidden — tiles lift, never wobble.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Uniform same-size card grids (that's not bento)
- More than 6–8 tiles per board
- Tiny text inside small tiles
- Mixed gap sizes
- Autoplaying video in every tile

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F5F4;
  --surface: #FFFFFF;
  --ink: #1C1917;
  --muted: #766F6A;
  --accent: #2962FE;
  --accent-2: #FF6B9D;
  --font-display: Inter, SF Pro Display, sans-serif;
  --font-body: Inter, SF Pro Text, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Bento Grid -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/bento-grid/DESIGN.md`.*
