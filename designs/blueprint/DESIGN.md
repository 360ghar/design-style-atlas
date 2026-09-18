---
slug: blueprint
name: "Blueprint"
description: "Architectural cyanotype precision: crisp white drafting schematics on deep Prussian blue grids."
category: Data
tags: [technical, cad, schematic, grid, engineering]
related: [dataviz-terminal, terminal, carbon-enterprise]
preview:
  bg: "#0A2540"
  surface: "#0F3356"
  ink: "#FFFFFF"
  muted: "#7FA8CC"
  accent: "#00E5FF"
  accent2: "#64FFDA"
  display: "Space Mono, Courier New, monospace"
  body: "Courier Prime, JetBrains Mono, monospace"
---

# Blueprint — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Blueprint is the timeless visual language of architectural drafts and engineering cyanotypes. Deep Prussian blue paper is etched with razor-sharp white and cyan millimeter grid lines, dimension arrows, drafting compass radii, coordinate callouts, and official drawing title blocks that exude structural authority.

**Three principles:**

- Drafting precision: every element is measured, annotated, and pinned to the millimeter grid
- Prussian blue ground: deep cyanotype blue background with crisp white and cyan vector lines
- Architectural typography: monospaced technical lettering with coordinates and spec callouts

## 2. Typography

- **Display:** Space Mono, Courier New, monospace
- **Body:** Courier Prime, JetBrains Mono, monospace
- **Scale:** sheet title 28–38px mono, drawing labels 16–20px uppercase, body 13–14px, dimension coordinates 10–11px.
- **Weights:** display 600–700; body 400; numbers and labels 500 mono.
- **Rules:** all-caps for titles and callouts (+0.06em tracking); technical decimal coordinate annotations (e.g., X: 420.00 Y: 180.50).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A2540` | Page ground |
| Surface | `#0F3356` | Cards, panels, containers |
| Ink | `#FFFFFF` | Headlines, primary text |
| Muted | `#7FA8CC` | Secondary copy, metadata, borders |
| Accent | `#00E5FF` | Primary action, key highlights |
| Accent 2 | `#64FFDA` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Electric Cyan (#00E5FF) for active dimension callouts, crosshairs, and primary drawing markers.

## 4. Spacing

10px/20px drafting grid; title block pinned to bottom-right corner; 24px margins with coordinate tick marks.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Drafting board canvas: outer border with numerical/alphabetical border grid (A–H, 1–8); main schematic viewport; bottom-right engineering revision stamp.

## 6. Borders

1px crisp solid white and cyan drafting lines; double 2px outer sheet border; dotted and dashed centerlines.

## 7. Shadows

None — blueprints are flat ink-on-paper prints; subtle 0 0 12px #00E5FF33 glow on active vector selections.

## 8. Radius

0px absolute — strict engineering right angles.

## 9. Buttons

Outlined drafting boxes with 1px cyan border; technical crosshairs at corners; hover fills with #00E5FF22 wash.

## 10. Cards

Schematic sub-drawing frames; title block in upper-left corner; dimension lines with arrows along container bounds.

## 11. Navigation

Top coordinate toolbar with sheet numbers (DWG NO: 001/014, SCALE: 1:1, REV: B); monospace tab labels.

## 12. Imagery

Vector CAD line drawings, isometric wireframe building blocks, orthographic projection diagrams.

## 13. Icons

Drafting symbols: compass arcs, section arrows, centerlines, plumb bobs, dimension markers.

## 14. Textures

Subtle cyanotype paper grain; dual millimeter grid (10px minor white lines at 8% opacity, 50px major lines at 18%).

## 15. Motion

Draw-in vector stroke animations: SVG stroke-dasharray reveal; crosshair cursor tracking.

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

- Warm earthy colors or commercial SaaS purple gradients
- Organic rounded blobs or soft diffuse shadows
- Decorative serif typefaces
- Messy asymmetric alignment that breaks grid registration
- Opaque cards that obscure the underlying drafting grid

## 20. Quick-start snippet

```css
:root {
  --bg: #0A2540;
  --surface: #0F3356;
  --ink: #FFFFFF;
  --muted: #7FA8CC;
  --accent: #00E5FF;
  --accent-2: #64FFDA;
  --font-display: Space Mono, Courier New, monospace;
  --font-body: Courier Prime, JetBrains Mono, monospace;
}
```

```html
<!-- Starter specimen: button + card in Blueprint -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Blueprint headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/blueprint/DESIGN.md`.*
