---
slug: papercut
name: "Papercut"
description: "Dimensional physical paper craft: stacked textured cardstock silhouettes with soft cast drop shadows."
category: Handmade & Texture
tags: [paper, craft, layered, shadows, tactile]
related: [claymorphism, hand-drawn, organic-biophilic]
preview:
  bg: "#F7F3EB"
  surface: "#FFFFFF"
  ink: "#2D2823"
  muted: "#766D64"
  accent: "#D96B43"
  accent2: "#4E6E58"
  display: "Recoleta, Playfair Display, serif"
  body: "Inter, -apple-system, sans-serif"
---

# Papercut — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Papercut transforms web layouts into tactile layered paper dioramas. Clean silhouette sheets of heavy cardstock appear stacked in dimensional physical space, separated by soft, realistic directional drop shadows. Flowing topographic contour curves, rich matte earthy swatches (terracotta, sage, cream), and fibrous textures create deep handcrafted warmth.

**Three principles:**

- Physical sheet depth: every layer casts realistic directional light shadows onto the surface beneath
- Organic contour cuts: sweeping curved cutouts inspired by topographic maps and paper art
- Matte cardstock palette: warm unbleached paper whites, terracotta, ochre, and deep forest greens

## 2. Typography

- **Display:** Recoleta, Playfair Display, serif
- **Body:** Inter, -apple-system, sans-serif
- **Scale:** hero 44–64px warm serif, H2 30–40px, body 15–16px, craft labels 12–13px.
- **Weights:** display 600–700; body 400–500; editorial warmth.
- **Rules:** centered or left-aligned serif headlines; generous leading for body prose; sentence case everywhere.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F3EB` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, containers |
| Ink | `#2D2823` | Headlines, primary text |
| Muted | `#766D64` | Secondary copy, metadata, borders |
| Accent | `#D96B43` | Primary action, key highlights |
| Accent 2 | `#4E6E58` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Terracotta (#D96B43) for primary craft buttons; Sage Green (#4E6E58) for natural accents.

## 4. Spacing

8px base; generous layered sheet padding 32–48px; overlapping sheet offsets 16–32px.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Multi-layered z-indexed paper sheets: background topography wave; floating content cardstock; foreground decorative silhouette.

## 6. Borders

None — depth and edge separation is achieved entirely through physical cast drop shadows.

## 7. Shadows

Realistic directional paper shadows: 0 4px 12px rgba(45,40,35,0.08), 0 12px 28px rgba(45,40,35,0.12); multi-stage elevation.

## 8. Radius

16–24px for card sheets; continuous SVG bezier curves for organic contour waves; 12px for buttons.

## 9. Buttons

Tactile cardstock pills; subtle top inner highlight (inset 0 1px 0 rgba(255,255,255,0.6)); hover deepens shadow.

## 10. Cards

Thick matte paper cards (#FFFFFF) floating over warm beige ground (#F7F3EB); soft 20px cast shadow; deckle-edge accents.

## 11. Navigation

Top paper ribbon with gentle curved bottom edge; clean serif logo; quiet text links.

## 12. Imagery

Layered vector paper silhouettes, botanical paper cuts, origami birds, tactile lifestyle photography.

## 13. Icons

Handcrafted line glyphs, scissors, folded paper planes, leaves, sun rays.

## 14. Textures

Fine cardstock fiber texture, unbleached linen grain, subtle watercolor washes.

## 15. Motion

Gentle physical parallax: background paper sheets drift slower than foreground; soft spring lift on card hover.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using a ring that clears 3:1 on the adjacent ground — Ink when it clears, otherwise Background.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1099px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Hard neon glowing borders or cybernetic elements
- Glossy plastic reflections or high-specular glassmorphism
- Harsh 1px solid black wireframe borders
- Flat design with zero shadow depth
- Aggressive rapid glitch or strobe animations

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F3EB;
  --surface: #FFFFFF;
  --ink: #2D2823;
  --muted: #766D64;
  --accent: #D96B43;
  --accent-2: #4E6E58;
  --font-display: Recoleta, Playfair Display, serif;
  --font-body: Inter, -apple-system, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Papercut -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Papercut headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/papercut/DESIGN.md`.*
