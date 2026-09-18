---
slug: cyberpunk
name: "Cyberpunk"
description: "Neon-drenched dystopia: rain, chrome and high-tech low-life interfaces."
category: Future & Sci-Fi
tags: [cyberpunk, neon, dystopian]
related: [futurism, sci-fi-ui, 80s-retro]
preview:
  bg: "#0A0A12"
  surface: "#131320"
  ink: "#EDEDF5"
  muted: "#7C7C9C"
  accent: "#FCEE0A"
  accent2: "#00F0FF"
  display: "Rajdhani, Orbitron, Impact, sans-serif"
  body: "Rajdhani, Inter, sans-serif"
---

# Cyberpunk — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, more neon-soaked interpretation.

## 1. Overall aesthetic

Night City UI: rain-slicked neon, Japanese vertical signage, chrome implants, megacorp HUDs, yellow warning blocks. High-tech, low-life. For games, music, streetwear, and tech with teeth. Beauty in the overload.

**Three principles:**

- Neon on wet black; yellow is warning, cyan is system, magenta is vice
- Chamfer everything — rounded corners are for corpo suburbs
- Layer HUD over world: scanlines, markers, Japanese microtype

## 2. Typography

- **Display:** Rajdhani, Orbitron, Impact, sans-serif
- **Body:** Rajdhani, Inter, sans-serif
- **Scale:** hero 52–88px glitch display (Rajdhani/Orbitron), H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px neon uppercase.
- **Weights:** display 700–900 with glitch treatments; body 400–500; labels 700 with +0.1–0.2em tracking and glow.
- **Rules:** flush-left or skewed neon headlines over rain-slick grids; scanlines and kanji accents; never quiet minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A12` | Page ground |
| Surface | `#131320` | Cards, panels, wells |
| Ink | `#EDEDF5` | Headlines, body text |
| Muted | `#7C7C9C` | Captions, meta, secondary text |
| Accent | `#FCEE0A` | Primary actions, highlights |
| Accent 2 | `#00F0FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Dense street-level: overlapping HUD layers, 16px panel padding, 64–88px chapters, ticker seams

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

HUD collage: fullscreen rain-city hero with overlay panels, wanted-board grids, vendor-stall sections. Max-width 1400px.

## 6. Borders

Neon frames: 1–2px cyan/magenta keylines; chamfered corner cuts; hazard chevrons

## 7. Shadows

Neon bleed: 0 0 24px magenta/cyan; rain-streak motion blur on heroes

## 8. Radius

0–4px sharp; clipped corners (cyber-chamfer via clip-path on decorative wrappers only — never clip buttons, links, or focus rings; keep 2px accent outline fully visible)

## 9. Buttons

Chamfered neon frames with dark fills and glowing labels; yellow `#FCEE0A` solid for warnings, always with Background `#0A0A12` labels and focus rings (16.3:1) — Ink `#EDEDF5` is 1.0:1 on yellow. Hover floods neon with black text.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Vendor panels: dark glass, neon keylines, chamfered corners, Japanese vertical accents, price tags in mono.

## 11. Navigation

Megacorp bar: logo + district links + wanted-level dots + credit readout in mono. Ticker below.

## 12. Imagery

Rain neon streets, chrome portraits, hover cars, kanji signage. Teal-magenta grade, anamorphic streaks.

## 13. Icons

HUD glyphs: targets, chevrons, chips, katanas-minimal — thin neon strokes with glow.

## 14. Textures / Patterns

Rain streaks, wet asphalt reflections, scanlines, poster wheat-paste walls, sticker slaps.

## 15. Motion

Rain loops, neon flicker (subtle, accessible), glitch cuts, HUD boot sequences. Flicker must respect vestibular safety.

Durations: micro 250–400ms single glitch cuts (max 2 flashes, max 3 flashes/s, never fullscreen/large-area, never looping), standard 300–500ms neon pulses. Easings: harsh steps() and linear for single glitch cuts; smooth springs forbidden. Never auto-loop flicker; flicker is opt-in only and disabled under `prefers-reduced-motion`.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1099px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Daylight or pastel palettes
- Rounded friendly geometry
- Clean minimal layouts
- Single-accent restraint
- Neon flicker that triggers photosensitivity — keep it slow and optional

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0A12;
  --surface: #131320;
  --ink: #EDEDF5;
  --muted: #7C7C9C;
  --accent: #FCEE0A;
  --accent-2: #00F0FF;
  --font-display: Rajdhani, Orbitron, Impact, sans-serif;
  --font-body: Rajdhani, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Cyberpunk -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/cyberpunk/DESIGN.md`.*
