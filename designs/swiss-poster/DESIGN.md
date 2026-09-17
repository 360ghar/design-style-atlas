---
slug: swiss-poster
name: "Swiss Poster"
description: "Müller-Brockmann on screen: objective grids, red/black discipline, huge numerals."
category: Editorial & Print
tags: [swiss, poster, grid]
related: [swiss-design, corporate-brutalism, editorial-brutalism]
preview:
  bg: "#F2EFE9"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6E6A61"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "Helvetica Neue, Helvetica, Arial, sans-serif"
  body: "Helvetica Neue, Helvetica, Arial, sans-serif"
---

# Swiss Poster — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more disciplined, grid-obedient interpretation — geometry is beauty.

## 1. Overall aesthetic

A 1957 Zurich concert poster, interactive: giant Akzidenz numerals, red circles and bars, black diagonal energy, all flush-left on warm paper. Cultural-program gravity for festivals, museums, and civic brands. Objectivity as beauty.

**Three principles:**

- Numerals and geometry ARE the imagery
- Red + black + paper; blue only for historic tri-color moments
- Flush left, ragged right — the law

## 2. Typography

- **Display:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Body:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Scale:** hero 48–80px Helvetica Bold flush-left, H2 32–44px, H3 22px, body 15–16px ragged-right, meta/labels 11–12px tracked uppercase.
- **Weights:** display 700 Helvetica Bold; body 400; labels 700 with +0.1–0.2em tracking.
- **Rules:** strict asymmetric grid, flush-left headlines, geometric color blocks; centered layouts forbidden; never decorative serifs.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2EFE9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Historic tri-color moments only (bars, rules) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Mathematical: 8pt grid, 24px gutters, giant numerals (30vw), flush-left everything, vast active negative space

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Poster-grid: giant numeral hero, program index rows with rules, diagonal red/black footer bands. Max-width 1400px, bleed encouraged.

## 6. Borders

Constructivist rules: 4px black bars, red blocks, hairline grid seams shown deliberately

## 7. Shadows

None — ever

## 8. Radius

0px — always

## 9. Buttons

Black bars with white Helvetica caps; red hover flood. Date-block variants for programs.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Program rows: date numeral + title + venue + rule; no containing cards. Exhibition blocks with red header bars.

## 11. Navigation

Institutional header: crest, program links in caps, red season badge. Rules above and below.

## 12. Imagery

Geometric abstraction preferred; photography (architecture, crowds) cropped hard to grid, often grayscale with red overlay.

## 13. Icons

Circles, bars, arrows, numerals — constructivist primitives, not pictograms.

## 14. Textures / Patterns

Paper flat; letterpress impression on numerals; faint grid overlay in program sections.

## 15. Motion

Precise: rule-draws on scroll, numeral count-ups, diagonal wipes. 200ms linear. No easing theatrics.

Durations: micro 100–200ms. Easings: linear only; no springs, no softness.

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

- Centered layouts
- Serif or script type
- Shadows, gradients, rounding
- Photography as the hero (geometry leads)
- A fourth hue outside historic tri-color blue

## 20. Quick-start snippet

```css
:root {
  --bg: #F2EFE9;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #6E6A61;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Swiss Poster -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/swiss-poster/DESIGN.md`.*
