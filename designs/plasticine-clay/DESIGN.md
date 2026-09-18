---
slug: plasticine-clay
name: "Plasticine Clay"
description: "Chunky handmade claymation: soft matte plasticine volumes, finger-pressed indentations, and warm studio depth."
category: Soft & Dimensional
tags: [claymation, tactile, stop-motion, playful, chunky]
related: [claymorphism, playful-maximalism, comic-pop-art]
preview:
  bg: "#F3EFE6"
  surface: "#FFFFFF"
  ink: "#2D2B28"
  muted: "#7A756D"
  accent: "#FF5E3A"
  accent2: "#38B6FF"
  display: "Fredoka, Nunito, -apple-system, sans-serif"
  body: "Nunito, -apple-system, sans-serif"
---

# Plasticine Clay — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Plasticine Clay channels the tactile handmade charm of Aardman claymation and physical modeling clay. Chunky, pillowy, finger-molded 3D shapes with soft ambient contact shadows, matte non-glossy plasticine surfaces, subtle thumbprint curves, warm studio lighting, and friendly saturated primary colors.

**Three principles:**

- Handmade modeling clay: chunky pillowy volumes with soft rounded contours as if sculpted by fingers
- Matte physical depth: soft diffuse contact drop shadows and inner ambient occlusion — never glossy glass
- Playful warmth: cheerful stop-motion energy with bold primary colors (clay coral, cobalt, sunny yellow)

## 2. Typography

- **Display:** Fredoka, Nunito, -apple-system, sans-serif
- **Body:** Nunito, -apple-system, sans-serif
- **Scale:** hero 44–64px rounded bold, H2 30–42px, body 16px/1.5, fun pill badges 13px.
- **Weights:** display 700; body 600; plump friendly stroke weights.
- **Rules:** centered or bouncy left-aligned rounded text; title case headlines; generous letter-spacing for friendliness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F3EFE6` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, containers |
| Ink | `#2D2B28` | Headlines, primary text |
| Muted | `#7A756D` | Secondary copy, metadata, borders |
| Accent | `#FF5E3A` | Primary action, key highlights |
| Accent 2 | `#38B6FF` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Clay Coral (#FF5E3A) for primary chunky action buttons; Sky Blue (#38B6FF) and Mustard Yellow (#FFB800) for accents.

## 4. Spacing

8px base; generous plump padding 28–36px; 20–24px gaps between clay blocks.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Playful diorama layout: floating clay tiles with soft contact shadows; chunky action buttons; friendly sticker-style badges.

## 6. Borders

None or subtle 2px soft tonal border (#E6DEC8); depth comes from inner and outer diffuse clay shadows.

## 7. Shadows

Soft diffuse clay drop shadow: 0 12px 24px rgba(45,43,40,0.12), inset 0 3px 6px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.08).

## 8. Radius

24–36px extra-rounded chunky corners; full pills (9999px) for buttons and tags.

## 9. Buttons

Plump 3D clay pills; top white clay highlight; hover gives squishy spring bounce; active squishes down 3px with scale(0.97).

## 10. Cards

Molded clay tablets (#FFFFFF); ultra-soft rounded corners; deep contact shadow on warm beige table ground (#F3EFE6).

## 11. Navigation

Floating clay pill bar; colorful spherical icon buttons with squishy hover response.

## 12. Imagery

Physical stop-motion clay sculptures, plasticine characters, miniature studio dioramas, colorful molded shapes.

## 13. Icons

Chunky rounded glyphs, smiling stars, heart badges, cloud shapes, molded speech bubbles.

## 14. Textures

Subtle matte clay grain, delicate thumbprint surface micro-texture, warm studio softbox illumination.

## 15. Motion

Squishy clay physics: springy overshoot on hover (scale 1.05); tactile squash-and-stretch on click.

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

- Sharp 0px corners, sharp knives, or technical wireframe lines
- Glossy mirror specular reflections or translucent glass blur
- Cold industrial dark-mode terminal palettes
- Stiff corporate enterprise tables
- Intimidating technical jargon

## 20. Quick-start snippet

```css
:root {
  --bg: #F3EFE6;
  --surface: #FFFFFF;
  --ink: #2D2B28;
  --muted: #7A756D;
  --accent: #FF5E3A;
  --accent-2: #38B6FF;
  --font-display: Fredoka, Nunito, -apple-system, sans-serif;
  --font-body: Nunito, -apple-system, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Plasticine Clay -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Plasticine Clay headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/plasticine-clay/DESIGN.md`.*
