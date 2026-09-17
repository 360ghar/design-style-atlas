---
slug: hand-drawn
name: "Hand-Drawn"
description: "Wobbly human lines: marker strokes, doodles and imperfect warmth."
category: Handmade & Texture
tags: [hand-drawn, doodle, human]
related: [risograph, halftone, grain-noise]
preview:
  bg: "#FFFDF5"
  surface: "#FFFFFF"
  ink: "#2E2A26"
  muted: "#8A8178"
  accent: "#E4572E"
  accent2: "#2E86AB"
  display: "Caveat, Kalam, Comic Sans MS, sans-serif"
  body: "Karla, Nunito, sans-serif"
---

# Hand-Drawn — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the wobblier, more human interpretation.

## 1. Overall aesthetic

A whiteboard that shipped: wobbly dividers, hand-circled prices, arrow doodles pointing at features, one handwritten font for emphasis over a legible body face. Human, funny, and clear. For education, nonprofits, kids, and friendly SaaS.

**Three principles:**

- Wobble everything once: dividers, frames, highlights — never twice the same
- One hand font for emphasis; legible face for paragraphs
- Arrows and circles are wayfinding, not decoration

## 2. Typography

- **Display:** Caveat, Kalam, Comic Sans MS, sans-serif
- **Body:** Karla, Nunito, sans-serif
- **Scale:** hero 40–64px wobbly sentence set in body face (Karla/Nunito) with the emphasis word in Caveat/Kalam; H2 28–36px, H3 20–22px, body 16–17px, meta/labels 12–13px doodled labels.
- **Weights:** display 600–700 hand; body 400; labels 600 with hand-drawn underlines.
- **Rules:** left-aligned wobbly headlines with arrow doodles and imperfect boxes; ruled-paper grounds; never geometric perfection.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFDF5` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2E2A26` | Headlines, body text |
| Muted | `#8A8178` | Captions, meta, secondary text |
| Accent | `#E4572E` | Primary actions, highlights |
| Accent 2 | `#2E86AB` | Secondary links, stamps, diagram ink |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Notebook rhythm: doodle margins, 24px card padding, 72–96px chapters, annotations everywhere

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Notebook flow: hero with circled promise, doodle-annotated features, testimonial margin-notes, FAQ in hand frames. Max-width 1100px.

## 6. Borders

Marker strokes: 3–3.5px uneven SVG underlines with round caps (e.g. `M4 9 Q30 3, 60 8 T116 6` in accent), circled emphasis, arrow doodles as dividers

## 7. Shadows

Paper lift: soft `0 6px 18px rgba(46,42,38,0.15)`; marker wash behind key words: `linear-gradient(transparent 55%, #FFD166 55%)`

## 8. Radius

Wobbly: border-radius with uneven values (e.g. 12px 14px 11px 15px); circled highlights

## 9. Buttons

Hand-framed buttons: wobbly borders, marker-fill hovers, arrow doodle into primary. Big and friendly.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Sticky-note and index-card panels: slight rotations (±1.5deg), tape corners, marker titles.

## 11. Navigation

Notebook bar: doodle logo, hand-underlined links, circled CTA.

## 12. Imagery

Doodles, diagrams, stick-figure explainers, annotated screenshots with marker circles.

## 13. Icons

Doodle icons: wobbly stroke, round caps, inconsistent (charmingly) — one artist's set.

## 14. Textures / Patterns

Paper grain 5%, marker bleed on highlights, tape, coffee ring (one, classic).

## 15. Motion

Draw-on: SVG stroke animations on scroll, doodle wiggles on hover, note rotations settle with spring.

Durations: micro 150–250ms, standard 400–600ms draw-on strokes. Easings: hand ease-out with wobble; mechanical linear forbidden.

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

- Multiple hand fonts competing
- Perfect geometric shapes (wobble them)
- Handwritten body copy (legibility!)
- Corporate stock photography
- Over-doodling until content drowns

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFDF5;
  --surface: #FFFFFF;
  --ink: #2E2A26;
  --muted: #8A8178;
  --accent: #E4572E;
  --accent-2: #2E86AB;
  --font-display: Caveat, Kalam, Comic Sans MS, sans-serif;
  --font-body: Karla, Nunito, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Hand-Drawn -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/hand-drawn/DESIGN.md`.*
