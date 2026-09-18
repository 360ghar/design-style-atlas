---
slug: deconstructivism
name: "Deconstructivism"
description: "Non-orthogonal architectural tension: colliding planes, 15° diagonal cuts, fragmented grids, and raw titanium."
category: Experimental
tags: [architectural, broken-grid, angles, fragmented, avant-garde]
related: [anti-design, chaos-design, editorial-brutalism]
preview:
  bg: "#141619"
  surface: "#20242A"
  ink: "#E6E9EE"
  muted: "#8B95A5"
  accent: "#FF2A55"
  accent2: "#4E5868"
  display: "Monument Extended, Space Grotesk, sans-serif"
  body: "Space Grotesk, Inter, sans-serif"
---

# Deconstructivism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Deconstructivism channels the architectural rebellion of Zaha Hadid, Daniel Libeskind, and Peter Eisenman: deliberate fragmentation, non-orthogonal geometry (15°–30° shears), intersecting structural planes, controlled instability, and raw titanium/slate tones pierced by laser-crimson focal cuts.

**Three principles:**

- Non-orthogonal defiance: right angles are disrupted by 15°–30° diagonal cuts and skewed planes
- Fragmented structural planes: content cards intersect, collide, and float in controlled disequilibrium
- Titanium and laser crimson: architectural industrial slates ignited by razor-sharp red laser cuts

## 2. Typography

- **Display:** Monument Extended, Space Grotesk, sans-serif
- **Body:** Space Grotesk, Inter, sans-serif
- **Scale:** hero 52–80px wide structural bold, H2 32–42px, body 14–16px, coordinate tags 11px mono.
- **Weights:** display 800–900; body 500; extreme architectural mass.
- **Rules:** transform: skewX(-8deg) or rotate(3deg) on headline fragments; overlapping text over card boundaries.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#141619` | Page ground |
| Surface | `#20242A` | Cards, panels, containers |
| Ink | `#E6E9EE` | Headlines, primary text |
| Muted | `#8B95A5` | Secondary copy, metadata, borders |
| Accent | `#FF2A55` | Primary action, key highlights |
| Accent 2 | `#4E5868` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Laser Crimson (#FF2A55) cuts through the monochromatic concrete and titanium surfaces.

## 4. Spacing

8px base; intentional asymmetric tensions; colliding negative margins (-24px to -48px); angular clip-paths.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Fragmented architectural canvas: skewed diagonal banner slices (clip-path polygon); floating angled cards; overlapping structural frames.

## 6. Borders

2px solid #4E5868; sharp laser-cut diagonal borders; 1.5px crimson accent rules at unexpected angles.

## 7. Shadows

High-contrast architectural plane shadows: 0 20px 48px rgba(0,0,0,0.7); 0 0 24px rgba(255,42,85,0.25).

## 8. Radius

0px absolute — pure crystalline facets and sheared polygon vertices.

## 9. Buttons

Angular polygon buttons using clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%); hover inverts sharply.

## 10. Cards

Fragmented titanium slate panels (#20242A); 15-degree corner chamfers; overlapping content layers with z-index tension.

## 11. Navigation

Non-horizontal header with angled slice accents; fragmented architectural logo; monospace index coordinates.

## 12. Imagery

Deconstructivist architecture, angular titanium facades, raw concrete cantilevers, fragmented geometric 3D renders.

## 13. Icons

Sharp polygonal glyphs, compass deviation arrows, angular crosshairs, sheared coordinate grids.

## 14. Textures

Brushed titanium metal grain, architectural raw concrete aggregate, wireframe perspective meshes.

## 15. Motion

Aggressive geometric plane shifts: elements slide along 15-degree vector angles; fast structural snaps.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using Ink when accent is under 3:1 on the adjacent ground.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Boring predictable 12-column symmetrical box grids
- Soft rounded pill shapes or friendly bubbly forms
- Gentle romantic pastels or floral colors
- Slow polite fades that lack architectural tension
- Centering everything in passive symmetry

## 20. Quick-start snippet

```css
:root {
  --bg: #141619;
  --surface: #20242A;
  --ink: #E6E9EE;
  --muted: #8B95A5;
  --accent: #FF2A55;
  --accent-2: #4E5868;
  --font-display: Monument Extended, Space Grotesk, sans-serif;
  --font-body: Space Grotesk, Inter, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Deconstructivism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Deconstructivism headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/deconstructivism/DESIGN.md`.*
