---
slug: chaos-design
name: "Chaos Design"
description: "Controlled demolition: overlapping, rotated, colliding elements that still convert."
category: Maximalist
tags: [chaotic, experimental, bold]
related: [neo-brutalism, playful-brutalism, editorial-brutalism]
preview:
  bg: "#F4EFE6"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E675C"
  accent: "#FF3D00"
  accent2: "#1E40FF"
  display: "Archivo Black, Arial Black, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Chaos Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the messier, more overloaded interpretation — control is failure.

## 1. Overall aesthetic

A beautiful accident, rehearsed: rotated polaroids, taped type, colliding grids, marker highlights — composed with a strict underlying alignment so it converts. For streetwear, agencies, festivals, and launches that need controlled demolition energy.

**Three principles:**

- Collide with a plan: one alignment axis survives the chaos
- Tape, markers, and torn edges are the material palette
- Every collision must survive 360px mobile without breaking

## 2. Typography

- **Display:** Archivo Black, Arial Black, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero clashing 48–96px blocks, H2 oversized collisions, H3 22–28px, body 16px, meta/labels loud stickers.
- **Weights:** display 800–900 clashing; body 400–700 mixed; labels 700–900 stickers.
- **Rules:** overlap, rotate, collide headlines deliberately, but keep one alignment axis (edge, baseline, or tape-line) intact; never tidy columns into a neat grid.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4EFE6` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#FF3D00` | Primary actions, highlights |
| Accent 2 | `#1E40FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Collision choreography: overlaps of 16–40px, rotations ±3deg, sections crashing into each other

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Composed collisions: overlapping framed blocks on paper ground, rotated ±3deg, marker-highlight headlines. Max-width 1280px, edges bleed.

## 6. Borders

Colliding weights: 3px frames, taped edges, torn clip-paths, highlighter strokes

## 7. Shadows

Mixed: hard offsets on frames, washi-tape translucency, marker highlights behind type

## 8. Radius

Mixed deliberately: sharp frames + occasional blob stickers

## 9. Buttons

Sticker buttons: rotated, taped corners, hard shadows; hover straightens with a snap.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Overlapping framed panels with tape strips, marker annotations, and sticker badges breaking edges.

## 11. Navigation

Taped-together bar: logo sticker, marker-highlight links, CTA with hard shadow. Slight rotation on the whole bar (-0.5deg).

## 12. Imagery

Polaroids with tape, torn magazine cuts, marker-annotated screenshots, highlighter-circled details.

## 13. Icons

Hand-circled arrows, stars, tape flags — annotation-graphics as iconography.

## 14. Textures / Patterns

Paper grain, tape translucency, marker strokes, torn edges, coffee-ring optional (one, tasteful).

## 15. Motion

Snap physics: rotations settle with spring overshoot; hovers straighten; entrances drop in with a thud (300ms spring).

Durations: instant–250ms for jarring cuts and shakes; up to 300ms for settle/entrance springs. Easings: harsh steps for cuts; spring overshoot only for rotation settles and drop-in entrances.

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

- Actual randomness — chaos must be art-directed
- Breaking tap targets or text contrast
- Chaos in checkout/finance flows
- More than ±3deg rotation on text blocks
- Forgetting the mobile stacking order

## 20. Quick-start snippet

```css
:root {
  --bg: #F4EFE6;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E675C;
  --accent: #FF3D00;
  --accent-2: #1E40FF;
  --font-display: Archivo Black, Arial Black, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Chaos Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/chaos-design/DESIGN.md`.*
