---
slug: poster-inspired
name: "Poster-Inspired"
description: "Single-message impact: huge type, flat color and compositions that shout."
category: Editorial & Print
tags: [poster, bold, graphic]
related: [neo-brutalism, playful-brutalism, editorial-brutalism]
preview:
  bg: "#F0303A"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#181412"
  accent: "#111111"
  accent2: "#FFD802"
  display: "Anton, Archivo Black, Impact, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Poster-Inspired — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more screen-printed interpretation.

## 1. Overall aesthetic

Every page a one-sheet: a single enormous message, flat spot colors, and a strict margin frame. Sub-pages are supporting posters, not dashboards. For events, campaigns, drops, and causes where one idea must travel.

**Three principles:**

- One message per page at poster scale
- Flat spot color + ink; gradients are cowardice here
- A margin frame turns a webpage into a poster

## 2. Typography

- **Display:** Anton, Archivo Black, Impact, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 10–18vw Anton/Archivo Black poster lines, H2 6–9vw, H3 26–30px, body 15–17px, meta/labels 12–13px bold uppercase.
- **Weights:** display 800–900; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** flush-left poster walls with stacked condensed lines; outline/fill mixes; never timid card grids, never justified copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F0303A` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#181412` | Captions, meta, secondary text |
| Accent | `#111111` | Primary actions, highlights |
| Accent 2 | `#FFD802` | Secondary moments, price bursts, starburst badges |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs. Muted `#181412` is for text on Surface (16.3:1); on the red ground use Ink `#111111` only (4.7:1) — white is 4.1:1 and fails.

## 4. Spacing

Poster hierarchy: one dominant message at 15vw+, supporting lines small, generous margin frame (24–40px)

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

One-sheet stacks: giant statement, flat color field, detail strip, footer colophon. Full-bleed with 24–40px safe frame.

## 6. Borders

Poster keylines: thick ink frames, color-block seams, starburst badges

## 7. Shadows

Print-flat; hard offsets only on pasted sticker elements

## 8. Radius

0–8px; posters are mostly sharp

## 9. Buttons

Ticket-block buttons: ink bars with condensed caps; hover floods accent. Big, full-width on mobile.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Showbill panels: date block + headline + venue + stub edge (perforation dashes). No soft shadows.

## 11. Navigation

Billhead: wordmark, date block, single CTA. Thin frame around the whole page optional but encouraged.

## 12. Imagery

Silkscreen-style illustration, duotone photos, oversized numerals. Flat and graphic, never photorealistic heroes.

## 13. Icons

Ticket, star, arrow, date-block devices — poster furniture, thick and few.

## 14. Textures / Patterns

Screen-print grain, halftone, paper tooth at 6–10%.

## 15. Motion

Paste-up energy: slam-in entrances, marquee date tickers, hover misregistration. Fast and flat.

Durations: micro 150–250ms, standard 350–550ms print-slam reveals. Easings: punchy ease-out; bouncy springs forbidden.

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

- Dashboards, tables, or dense UI on poster pages
- Photorealistic glossy heroes
- More than two spot colors
- Small polite headlines
- Rounded SaaS chrome

## 20. Quick-start snippet

```css
:root {
  --bg: #F0303A;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #181412;
  --accent: #111111;
  --accent-2: #FFD802;
  --font-display: Anton, Archivo Black, Impact, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Poster-Inspired -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/poster-inspired/DESIGN.md`.*
