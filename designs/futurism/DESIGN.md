---
slug: futurism
name: "Futurism"
description: "Speed-worship modernism: diagonals, motion lines and machine-age optimism."
category: Future & Sci-Fi
tags: [futurist, speed, avant-garde]
related: [cyberpunk, sci-fi-ui]
preview:
  bg: "#F4F1EA"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E675C"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "Futura, ITC Avant Garde, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Futurism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the sleeker, more aerodynamic interpretation.

## 1. Overall aesthetic

Marinetti meets the motorway: diagonal compositions, speed lines, chrome numerals, and manifestos set like scripture. Optimistic machine worship — planes, turbines, velocity. For automotive, aerospace, sport, and infrastructure brands.

**Three principles:**

- Diagonals signal motion — horizontals are parking lots
- Manifestos, not paragraphs: short violent lines of copy
- Chrome + red + ink; the palette of velocity

## 2. Typography

- **Display:** Futura, ITC Avant Garde, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–80px streamlined Futura/Avant Garde, H2 32–44px, H3 22px, body 15–16px, meta/labels 12–13px tracked uppercase.
- **Weights:** display 500–800 streamlined; body 400; labels 600–700 with +0.12–0.2em tracking.
- **Rules:** flush-left speed-line headlines with diagonal motion; chrome accents; never nostalgic clutter, never centered ceremony.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F1EA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Forward-leaning: diagonal section cuts, overlapping speed bands, 72–100px movements

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Speedway scroll: diagonal-cut bands, overlapping motion graphics, giant italic numerals. Max-width 1400px, edges sliced.

## 6. Borders

Speed rules: diagonal slashes, 3px motion bars, chevron dividers

## 7. Shadows

Motion-implied: skewed duplicates and speed-line echoes instead of shadows

## 8. Radius

0px — speed is sharp

## 9. Buttons

Chevron-cut buttons (clip-path arrows) in red or ink; italic condensed caps. Hover lunges forward (translate + skew snap).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Spec plates with speed-line headers, skewed image masks, mono telemetry rows.

## 11. Navigation

Aerodynamic bar: italic wordmark, chevron links, red launch CTA. Slight forward skew on the whole bar.

## 12. Imagery

Motion-blur racing, turbines, runways, chrome macro. Diagonal crops, red duotone options.

## 13. Icons

Arrows, chevrons, gauges, wings — velocity glyphs, 2px italic strokes.

## 14. Textures / Patterns

Speed lines, carbon weave, brushed aluminum, blueprint grids in spec zones.

## 15. Motion

Velocity: scroll-linked diagonal slides, speed-line draws, number spool-ups. 200ms lunges, ease-in acceleration (`cubic-bezier(0.55, 0.06, 0.35, 1)`).

Durations: micro 150–250ms, standard 350–550ms velocity slides. Easings: sharp ease-in like acceleration; bouncy springs forbidden.

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

- Rounded soft anything
- Pastoral or handmade textures
- Long calm paragraphs
- Static symmetric layouts
- Flat corporate-blue fills (use `#0B3D91` only for motion accents, never solid blocks)

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F1EA;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E675C;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: Futura, ITC Avant Garde, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Futurism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/futurism/DESIGN.md`.*
