---
slug: spatial-computing
name: "Spatial Computing"
description: "Volumetric frosted glass, 3D z-depth layering, eye-tracking glow, and floating optical surfaces."
category: Design System
tags: [vision-os, glass, spatial, 3d-ui]
related: [apple-liquid-glass, glassmorphism, 3d-web-design]
preview:
  bg: "#0B0E14"
  surface: "#1C2331"
  ink: "#F8FAFC"
  muted: "#94A3B8"
  accent: "#38BDF8"
  accent2: "#818CF8"
  display: "SF Pro Display, Inter, system-ui, sans-serif"
  body: "SF Pro Text, Inter, system-ui, sans-serif"
---

# Spatial Computing — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Spatial Computing brings interfaces into physical space: thick refractive glass panels floating in z-depth, illuminated by real-time ambient lighting. Circular app orbs, gaze-activated edge glows, and depth-tested specular reflections make digital surfaces feel tangible yet weightless, existing in room-scale harmony with the environment.

**Three principles:**

- Volumetric depth: surfaces float in 3D layers (z-axis separation 12–32px) with parallax
- Dynamic specular optics: light bends around rounded glass rims as the user moves
- Gaze and gesture cues: hover expands subtle concentric luminescence around targets

## 2. Typography

- **Display:** SF Pro Display, Inter, system-ui, sans-serif
- **Body:** SF Pro Text, Inter, system-ui, sans-serif
- **Scale:** hero 48–64px bold, H2 32–40px, H3 20–24px, body 16px/1.5, floating labels 12–13px.
- **Weights:** display 600–700; body 400–500; titles never heavy black — optical clarity over density.
- **Rules:** centered spatial headlines; left-aligned panel text; generous letter-spacing on subheadings.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0E14` | Page ground |
| Surface | `#1C2331` | Cards, panels, containers |
| Ink | `#F8FAFC` | Headlines, primary text |
| Muted | `#94A3B8` | Secondary copy, metadata, borders |
| Accent | `#38BDF8` | Primary action, key highlights |
| Accent 2 | `#818CF8` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Cyan-blue (#38BDF8) indicates focus and active gaze; soft violet (#818CF8) for ambient dimensional backdrops.

## 4. Spacing

8px base; floating panel padding 24–36px; gap between spatial sheets 20–32px; ample negative space.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Freeform floating window panels over immersive environment; circular orb dock pinned to lower spatial anchor; multi-window canvas.

## 6. Borders

1px translucent specular keyline: border 1px solid rgba(255,255,255,0.22); top edge highlight rgba(255,255,255,0.5).

## 7. Shadows

Deep volumetric drop shadows: 0 20px 50px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4); gaze hover glow 0 0 28px rgba(56,189,248,0.35).

## 8. Radius

28–36px floating windows; pills (9999px) for buttons and dock bars; perfect circular 56px app icon orbs.

## 9. Buttons

Translucent frosted pills; backdrop-blur 30px; hover triggers specular shimmer and slight scale (1.04); active press creates depth compression.

## 10. Cards

Volumetric glass tiles with dual-layer backdrop filter (blur 32px, saturate 180%); subtle refraction bevels.

## 11. Navigation

Floating spatial dock with circular orb icons; pinned close/back controls floating 16px outside the primary window.

## 12. Imagery

Spatial 3D stereoscopic photography, immersive panoramic wallpapers, floating rounded media tiles.

## 13. Icons

Smooth rounded SF-style glyphs, enclosed in translucent frosted circular badges.

## 14. Textures

Subtle specular refractive gradients; zero coarse printed grain; ambient light-field reactive highlights.

## 15. Motion

Fluid physics springs: stiffness 240, damping 26; floating windows have gentle ambient idle hover (2px floating oscillation).

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

- Flat opaque dark rectangles with zero optical blur
- Sharp 0px corners that break the optical lens metaphor
- High-contrast harsh borders without specular translucency
- Static 2D layouts that ignore depth and perspective
- Cluttered text-heavy layouts without spatial breathing room

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0E14;
  --surface: #1C2331;
  --ink: #F8FAFC;
  --muted: #94A3B8;
  --accent: #38BDF8;
  --accent-2: #818CF8;
  --font-display: SF Pro Display, Inter, system-ui, sans-serif;
  --font-body: SF Pro Text, Inter, system-ui, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Spatial Computing -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Spatial Computing headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/spatial-computing/DESIGN.md`.*
