---
slug: game-boy-dmg
name: "Game Boy DMG"
description: "Iconic 4-shade pea-soup olive LCD matrix, dot-grid ghosting, and chunky 8-bit handheld charm."
category: Retro & Internet
tags: [nintendo, gameboy, lcd, pixel, chiptune]
related: [pixel-8bit, retro-internet, gaming-ui]
preview:
  bg: "#8BAC0F"
  surface: "#9BBC0F"
  ink: "#0F380F"
  muted: "#1E471E"
  accent: "#0F380F"
  accent2: "#306230"
  display: "Press Start 2P, Courier, monospace"
  body: "Silkscreen, monospace"
---

# Game Boy DMG — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Game Boy DMG is the authentic nostalgia of Nintendo's 1989 handheld masterpiece. Built entirely upon the legendary 4-shade monochromatic pea-soup olive-green LCD palette (#0F380F, #306230, #8BAC0F, #9BBC0F), dot-matrix pixel grid overlays, authentic LCD pixel response ghosting, chunky beveled gray plastic framing, and magenta B/A action buttons.

**Three principles:**

- The sacred four shades: every element is built strictly using the 4 DMG green values
- Dot-matrix resolution: crisp pixel grids with authentic 1px pixel scanline spacing
- Chunky handheld ergonomics: rounded bezel borders, tactile directional pad, and slanted pills

## 2. Typography

- **Display:** Press Start 2P, Courier, monospace
- **Body:** Silkscreen, monospace
- **Scale:** hero 18–24px pixel font, subheadings 12–14px, body 8–10px pixel font, HUD stats 8px mono.
- **Weights:** display 400 (pixel-rendered bold); body 400 pixel.
- **Rules:** uppercase pixel headlines; strict baseline pixel alignment; zero anti-aliasing fuzziness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#8BAC0F` | Page ground |
| Surface | `#9BBC0F` | Cards, panels, containers |
| Ink | `#0F380F` | Headlines, primary text |
| Muted | `#1E471E` | Secondary copy, metadata, borders |
| Accent | `#0F380F` | Primary action, key highlights |
| Accent 2 | `#306230` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Deepest Forest Green (#0F380F) acts as the primary ink and button color; Dark Olive (#306230) for active highlights.

## 4. Spacing

8px/16px pixel-aligned increments; 160x144 internal aspect-ratio screen viewport; 16px screen bezel padding.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Handheld console layout: top cartridge notch line; central green LCD viewport inside dark gray bezel; bottom D-pad and B/A button cluster.

## 6. Borders

3px solid #0F380F for in-game frames; 2px recessed bezel border; outer chassis molding seams.

## 7. Shadows

Hard 2px-4px offset pixel drop shadows: 4px 4px 0px #0F380F; zero blurred ambient drop shadows.

## 8. Radius

0px inside the LCD screen; 16px rounded outer handheld chassis corners; 20px pill battery indicator.

## 9. Buttons

Chunky 8-bit pixel buttons; slanted pill SELECT/START buttons; circular magenta or dark green action buttons.

## 10. Cards

Recessed LCD dialogue boxes; 2px black pixel border with double-line corners; typing dialogue text.

## 11. Navigation

In-game menu selection cursor (▶ arrow) that steps between items with retro chiptune feedback.

## 12. Imagery

Authentic 4-shade 1-bit pixel art sprites, retro game maps, pixelated portraits, chiptune soundwaves.

## 13. Icons

8x8 and 16x16 pixel art icons: hearts, swords, potions, coins, directional arrows.

## 14. Textures

Dot-matrix LCD grid texture (1px pixel grid pattern with 4% gap), horizontal pixel scanlines.

## 15. Motion

Step-based 8-frame animations; LCD pixel ghosting trail on rapid scrolling; screen wipe transitions.

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

- Any colors outside the 4-shade green spectrum in the primary viewport
- Smooth modern anti-aliased curved typography
- Blurred box-shadows or modern glossy glass filters
- Continuous smooth floating transitions
- High-resolution photographic images without 4-shade dithering

## 20. Quick-start snippet

```css
:root {
  --bg: #8BAC0F;
  --surface: #9BBC0F;
  --ink: #0F380F;
  --muted: #1E471E;
  --accent: #0F380F;
  --accent-2: #306230;
  --font-display: Press Start 2P, Courier, monospace;
  --font-body: Silkscreen, monospace;
}
```

```html
<!-- Starter specimen: button + card in Game Boy DMG -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Game Boy DMG headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/game-boy-dmg/DESIGN.md`.*
