---
slug: de-stijl
name: "De Stijl"
description: "Pure geometric harmony: primary red, blue, and yellow anchored by thick black orthogonal grids."
category: Editorial & Print
tags: [mondrian, primary-colors, geometric, art-movement]
related: [bauhaus, swiss-design, poster-inspired]
preview:
  bg: "#F7F7F7"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#777777"
  accent: "#E52521"
  accent2: "#0045A5"
  display: "Futura, Trebuchet MS, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# De Stijl — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

De Stijl (The Style), pioneered by Piet Mondrian and Gerrit Rietveld in 1917, is the ultimate celebration of pure abstraction: rigid orthogonal black structural grids (4–8px), asymmetrical balance, and rectangular fields of pure primary colors (cadmium red, cobalt blue, yellow) against crisp white and light gray negative space.

**Three principles:**

- Orthogonal law: only strict horizontal and vertical lines; zero diagonals or curves
- Primary purity: color is restricted to pure red, blue, yellow, black, white, and gray
- Dynamic equilibrium: asymmetric rectangular proportions achieve perfect visual balance

## 2. Typography

- **Display:** Futura, Trebuchet MS, sans-serif
- **Body:** Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–72px Futura bold uppercase, H2 28–36px, body 15–16px, labels 12px mono or caps.
- **Weights:** display 700; body 400–500; structural headlines 700.
- **Rules:** flush-left or justified block typography; strict adherence to grid intersections; uppercase display headings.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F7F7` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, containers |
| Ink | `#111111` | Headlines, primary text |
| Muted | `#777777` | Secondary copy, metadata, borders |
| Accent | `#E52521` | Primary action, key highlights |
| Accent 2 | `#0045A5` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Cadmium Red (#E52521) for the dominant focal block; Cobalt Blue (#0045A5) and Yellow (#FED100) for counterbalance.

## 4. Spacing

8px base; heavy black gutters 4–8px wide; rectangular modules scaled in mathematical proportions (1:1, 1:2, 2:3).

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Mondrian grid: 6–12 column asymmetric grid partitioned by continuous thick black border rules; content lives inside bounded color/white cells.

## 6. Borders

Heavy solid black lines: 4px to 8px solid #111111 between all layout blocks; no rounded corners anywhere.

## 7. Shadows

None — strictly flat 2D plane; zero elevation or ambient shading.

## 8. Radius

0px absolute — all corners are razor-sharp 90-degree right angles.

## 9. Buttons

Solid rectangular blocks with 4px black borders; hover shifts fill between white, red, and yellow with zero transition delay.

## 10. Cards

Bounded grid cells; solid white, pale gray (#EAEAEA), or primary color fills; headline locked to top-left grid intersection.

## 11. Navigation

Top grid strip partitioned into black-bordered rectangular tabs; active tab filled with primary red or yellow.

## 12. Imagery

Strictly non-representational: architectural black-and-white photos or pure geometric compositions.

## 13. Icons

Minimal geometric icons constructed from right angles and lines; square bullets.

## 14. Textures

None — smooth flat matte surfaces; clean offset paper white.

## 15. Motion

Instantaneous or mechanical sliding along orthogonal axes; no rotation, no easing bounce, no diagonals.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section, oversized hero type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Any curves, circles, rounded corners, or organic forms
- Secondary or tertiary colors (purple, green, orange, teal)
- Drop shadows, gradients, or 3D skeuomorphic lighting
- Diagonal lines or angled layouts
- Soft pastel washes or low-contrast borders

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F7F7;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #777777;
  --accent: #E52521;
  --accent-2: #0045A5;
  --font-display: Futura, Trebuchet MS, sans-serif;
  --font-body: Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in De Stijl -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>De Stijl headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/de-stijl/DESIGN.md`.*
