---
slug: steampunk
name: "Steampunk"
description: "Victorian brass clockwork, interlocking bronze gears, riveted copper seams, and aged mahogany."
category: Future & Sci-Fi
tags: [victorian, clockwork, brass, gears, industrial]
related: [dark-academia, gothic-victorian, skeuomorphism]
preview:
  bg: "#1C1510"
  surface: "#2A2018"
  ink: "#F5E8D3"
  muted: "#A89582"
  accent: "#D4A017"
  accent2: "#C86D3B"
  display: "Playfair Display, Georgia, serif"
  body: "Cinzel, Cormorant Garamond, serif"
---

# Steampunk — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Steampunk reimagines modern technology through 19th-century Victorian steam power and industrial romanticism. Deep oiled mahogany and dark leather foundations are adorned with burnished brass borders, interlocking gear wheels, copper rivets, analog pressure gauge needles, and ornate gilded serif typography.

**Three principles:**

- Victorian mechanical craft: exposed gears, copper tubing, and brass boiler plate rivets
- Warm metallic luster: burnished gold, antiqued brass (#D4A017), and aged copper (#C86D3B)
- Ornate classical typography: high-contrast Victorian serifs with decorative roman numeral accents

## 2. Typography

- **Display:** Playfair Display, Georgia, serif
- **Body:** Cinzel, Cormorant Garamond, serif
- **Scale:** hero 40–56px Playfair Display bold, H2 28–36px, body 15–16px, gauge numerals 12–14px.
- **Weights:** display 700; body 400–600; headings with ornate drop-caps.
- **Rules:** centered chapter headings; justified body text; small-caps subheadings with letter-spacing (+0.1em).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1C1510` | Page ground |
| Surface | `#2A2018` | Cards, panels, containers |
| Ink | `#F5E8D3` | Headlines, primary text |
| Muted | `#A89582` | Secondary copy, metadata, borders |
| Accent | `#D4A017` | Primary action, key highlights |
| Accent 2 | `#C86D3B` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Burnished Brass Gold (#D4A017) for borders, gear teeth, and primary actions; Copper (#C86D3B) for highlights.

## 4. Spacing

8px base; generous ornate borders (16–24px); decorative corner ornament insets; multi-tiered panels.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Architectural boiler-plate layout: ornamental top arch; central dials and apparatus panels; riveted copper sidebar; brass footer trim.

## 6. Borders

2px double brass border (solid #D4A017 with inner 1px hairline); decorative brass corner brackets with rivet dots.

## 7. Shadows

Deep Victorian warmth: 0 10px 30px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,215,0,0.25); warm amber dial glow.

## 8. Radius

4–8px for boiler plates; perfect circles for pressure dials and gear housing; ornamental bracket cuts.

## 9. Buttons

Heavy burnished brass buttons with metallic bevel: linear-gradient(180deg, #F0C450, #AA7C11); dark engraved text; active press 2px down.

## 10. Cards

Rich mahogany/dark leather panels with riveted copper frames; inset circular brass pressure dial; gilded header.

## 11. Navigation

Brass pipe manifold nav bar with pressure valves; circular cog buttons for navigation items.

## 12. Imagery

Antique patent drawings, copperplate engravings of locomotives and airships, sepia-toned apparatus photos.

## 13. Icons

Ornate mechanical symbols: intermeshing gear wheels, pressure gauges, steam valves, Victorian compass roses.

## 14. Textures

Subtle crosshatched dark leather grain, brushed copper specular highlights, warm paper age patina.

## 15. Motion

Clockwork mechanical motion: ticking second-hand jumps (step easing), rotating gear wheels, steam-release gauge swings.

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

- Cold digital blue or flat modern neon highlights
- Sleek minimalist white cards with zero ornamentation
- Modern geometric sans-serif typefaces (like Inter or Roboto)
- Flat borders lacking metallic bevel or rivet depth
- Ultra-fast frictionless transitions devoid of mechanical weight

## 20. Quick-start snippet

```css
:root {
  --bg: #1C1510;
  --surface: #2A2018;
  --ink: #F5E8D3;
  --muted: #A89582;
  --accent: #D4A017;
  --accent-2: #C86D3B;
  --font-display: Playfair Display, Georgia, serif;
  --font-body: Cinzel, Cormorant Garamond, serif;
}
```

```html
<!-- Starter specimen: button + card in Steampunk -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Steampunk headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/steampunk/DESIGN.md`.*
