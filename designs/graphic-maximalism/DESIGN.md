---
slug: graphic-maximalism
name: "Graphic Maximalism"
description: "Poster-wall energy: bold shapes, duotones and oversized graphics edge to edge."
category: Maximalist
tags: [graphic, poster, duotone]
related: [neo-brutalism, color-maximalism, editorial-brutalism]
preview:
  bg: "#F5F2EA"
  surface: "#FFFFFF"
  ink: "#101010"
  muted: "#6E675C"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "Archivo Black, Anton, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Graphic Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, more poster-wall interpretation.

## 1. Overall aesthetic

A gallery wall of gig posters that you scroll through: huge vector graphics, duotone photos, starbursts, and condensed headlines colliding edge to edge. Vector-first, ink-heavy, screen-printed. For sports, music, events, and challenger brands.

**Three principles:**

- Graphics lead, text follows — every section needs a visual punch
- Duotone + ink + one spot color unifies any imagery
- Bleed everything: posters have no margins

## 2. Typography

- **Display:** Archivo Black, Anton, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 56–100px stacked poster blocks (Archivo/Anton), H2 36–48px, H3 24–28px, body 16–17px, meta/labels 12–14px bold.
- **Weights:** display 800–900; body 400–500; labels 700–900 with +0.06–0.12em tracking.
- **Rules:** full-bleed poster stacks with mixed fills, outlines, and rotations; grid-breaking collage; never timid centered cards.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F2EA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#101010` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Wall rhythm: full-bleed graphic chapters 72–100px, overlapping headline/image collisions, ticker seams

Use an 8px base unit (4px for dense product UI). Section padding 72–100px full-bleed chapters (24–32px page gutters); card padding 20–28px; never let text touch a container edge (16px minimum inset).

## 5. Layout / Grid

Poster wall: full-bleed graphic chapters alternating with ink-black set pieces; overlapping type/image collisions. Max-width 1400px.

## 6. Borders

Poster frames: 3px ink borders, color-block keylines, starburst badges

## 7. Shadows

Poster-shop: hard 6px offsets on feature blocks; print misregistration on display type

## 8. Radius

0–10px; sharp frames, rounded stickers as accents

## 9. Buttons

Poster bars: full-width ink or red blocks with condensed caps; hover misregisters (offset echo).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Gig-poster panels: duotone image, huge condensed title, date strip, starburst badge. Hard borders, hard shadows.

## 11. Navigation

Showbill bar: black with condensed links, red date/CTA block, ticker below for tour dates.

## 12. Imagery

Vector illustrations, duotone photography, halftone textures, screen-print grain. High contrast always.

## 13. Icons

Poster devices: stars, lightning bolts, ticket stubs, arrows — thick and few.

## 14. Textures / Patterns

Screen-print grain 8–12%, halftones, misregistration offsets, paper tooth on light grounds.

## 15. Motion

Gig energy: marquee tickers, poster-slam entrances (scale 1.04→1, 250ms), hover misregistration shifts.

Durations: micro 150–250ms, standard 400–600ms poster slams, ceremonial 800ms. Easings: punchy ease-out with hard cuts; gentle fades forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, oversized display type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Delicate hairlines or soft shadows
- Muted corporate palettes
- Polite centered layouts
- Photography without duotone treatment
- More than two spot colors plus ink

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F2EA;
  --surface: #FFFFFF;
  --ink: #101010;
  --muted: #6E675C;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: Archivo Black, Anton, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Graphic Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/graphic-maximalism/DESIGN.md`.*
