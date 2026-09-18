---
slug: constructivism
name: "Constructivism"
description: "Revolutionary dynamic diagonals, stark cadmium red wedges, and industrial typographic power."
category: Editorial & Print
tags: [avant-garde, diagonal, bold, propaganda-poster]
related: [bauhaus, editorial-brutalism, zine-punk]
preview:
  bg: "#F0EADE"
  surface: "#E2DAC9"
  ink: "#121212"
  muted: "#635D54"
  accent: "#D32F2F"
  accent2: "#1A1A1A"
  display: "Impact, Anton, Arial Black, sans-serif"
  body: "Arial, Helvetica, sans-serif"
---

# Constructivism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Constructivism channels the raw momentum of the 1920s avant-garde (El Lissitzky, Rodchenko): dynamic 15° to 45° diagonal axes, forceful geometric wedges, stark dual-tone printing (cadmium red and pitch black), heavy industrial typography, and dramatic photomontage that treats the webpage as a visual manifesto.

**Three principles:**

- Dynamic diagonal energy: layouts tilt and thrust along 15°–45° action lines
- Cadmium red and pitch black: stark two-color poster palette over unbleached newsprint
- Typography as visual weapon: giant sans-serif characters integrated into geometric wedges

## 2. Typography

- **Display:** Impact, Anton, Arial Black, sans-serif
- **Body:** Arial, Helvetica, sans-serif
- **Scale:** manifesto hero 54–84px condensed uppercase, H2 32–44px, body 14–16px, slogan callouts 20–24px bold.
- **Weights:** display 800–900; body 600; extreme weight contrast.
- **Rules:** slanted typography (transform: rotate(-3deg) to rotate(-15deg)); justified blocks; all-caps slogans with black exclamation accents.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F0EADE` | Page ground |
| Surface | `#E2DAC9` | Cards, panels, containers |
| Ink | `#121212` | Headlines, primary text |
| Muted | `#635D54` | Secondary copy, metadata, borders |
| Accent | `#D32F2F` | Primary action, key highlights |
| Accent 2 | `#1A1A1A` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Cadmium Red (#D32F2F) used for directional arrows, giant circle backgrounds, and banner bars.

## 4. Spacing

8px base; asymmetric dynamic margins; overlapping elements with tight negative margins; full-bleed diagonal banners.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Diagonal split grid; triangular geometric wedges; overlapping planes with photomontage cutouts; bold vertical and angled text columns.

## 6. Borders

Thick 3–6px solid black rules; diagonal slash dividers; heavy rectangular brackets.

## 7. Shadows

Flat solid offset shadows (4px 4px 0px #121212); zero blurred ambient drops.

## 8. Radius

0px absolute — razor-sharp geometric cuts, wedges, and rectangles.

## 9. Buttons

Solid red or black rectangular blocks; heavy 3px black border; hover inverts colors with stark punch; active state steps 3px down-right.

## 10. Cards

Newsprint surface tiles with thick black borders; red corner flags; bold numbered indices (01, 02, 03) in giant condensed numerals.

## 11. Navigation

Angled header band with bold condensed nav links; active link encased in a red rectangular badge.

## 12. Imagery

High-contrast black-and-white duotone cutouts, industrial machinery, architectural angles, geometric ray bursts.

## 13. Icons

Heavy geometric arrows, lightning bolts, exclamation triangles, bold solid circles and stars.

## 14. Textures

Newsprint/kraft paper grain, coarse lithographic halftone dots, letterpress ink bleed.

## 15. Motion

Rapid forceful thrusts: elements slide in along diagonal paths with punchy snap; stamp-down entrance effects.

Durations: micro 150–250ms / standard 350–500ms diagonal entrances and stamp-downs. Easings: cubic-bezier(0.2,0.9,0.2,1) thrust, steps(2) stamp snap. Reduced-motion: static final states, no diagonal slide.

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

- Soft pastel palettes or gentle gradients
- Rounded friendly pill shapes
- Delicate serif fonts or script lettering
- Centering content in peaceful symmetrical balance
- Gentle slow floating animations

## 20. Quick-start snippet

```css
:root {
  --bg: #F0EADE;
  --surface: #E2DAC9;
  --ink: #121212;
  --muted: #635D54;
  --accent: #D32F2F;
  --accent-2: #1A1A1A;
  --font-display: Impact, Anton, Arial Black, sans-serif;
  --font-body: Arial, Helvetica, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Constructivism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Constructivism headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/constructivism/DESIGN.md`.*
