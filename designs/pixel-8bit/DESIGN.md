---
slug: pixel-8bit
name: "Pixel / 8-Bit"
description: "Crisp chunky pixels: sprite logic, limited palettes and arcade honesty."
category: Neon & Play
tags: [pixel, 8-bit, arcade]
related: [gaming-ui, comic-pop-art, graffiti-streetwear]
preview:
  bg: "#0F0F1B"
  surface: "#1B1B2E"
  ink: "#F2F0FF"
  muted: "#8E8AB0"
  accent: "#7DF9FF"
  accent2: "#FFD802"
  display: "Press Start 2P, VT323, monospace"
  body: "VT323, IBM Plex Mono, monospace"
---

# Pixel / 8-Bit — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more faithfully 8-bit interpretation — every pixel visible.

## 1. Overall aesthetic

A cartridge come to life: chunky pixel type at display sizes, sprite icons, 4-color ramps, scanline overlays, HP bars and dialogue boxes as UI. Honest constraints, endless charm. For games, devtools with humor, education, and portfolios.

**Three principles:**

- Pixels stay crisp: image-rendering pixelated, no smoothing
- Limited ramps (4–8 colors per scene); dither for gradients
- Game UI is the UI: HP bars, dialogue boxes, quest logs

## 2. Typography

- **Display:** Press Start 2P, VT323, monospace
- **Body:** VT323, IBM Plex Mono, monospace
- **Scale:** hero 24–40px Press Start 2P (short lines only), H2 16–24px, H3 14–16px, body 14–16px VT323 readable, meta/labels 12px pixel labels.
- **Weights:** display 400 pixel (weight is the grid); body 400; labels 400 with no anti-aliased smoothing.
- **Rules:** left-aligned or centered pixel headlines with sprite frames; short lines (pixels eat width); never smooth vector type, never blur.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0F0F1B` | Page ground |
| Surface | `#1B1B2E` | Cards, panels, wells |
| Ink | `#F2F0FF` | Headlines, body text |
| Muted | `#8E8AB0` | Captions, meta, secondary text |
| Accent | `#7DF9FF` | Primary actions, highlights |
| Accent 2 | `#FFD802` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Sprite-grid: 8px pixel unit, 16/24/32px steps, 64–88px quest chapters

Use an 8px base unit (4px half-step for dense product UI only). Section padding 64–88px, card padding 16–24px; never let text touch a container edge (12px minimum inset).

## 5. Layout / Grid

Quest scroll: title-screen hero (PRESS START), world-map chapters, dialogue-box content, game-over CTA. Max-width 1100px.

## 6. Borders

Pixel frames: 4px stepped borders (box-shadow pixel-corners); 2px sprite outlines

## 7. Shadows

Hard pixel offsets: 4px 4px 0 black; no blur (blur is the enemy)

## 8. Radius

0px — pixels are square (stepped corners via box-shadow trick allowed)

## 9. Buttons

Arcade buttons: stepped pixel frames, chunky fills (#7DF9FF / #FFD802 with #0F0F1B text), PRESS-style labels; hover inverts fill in 1 frame (steps(1)); press translates 2px and collapses 4px shadow to 0.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Dialogue boxes: bordered panels with portrait sprite + typed text + ▼ advance cue.

## 11. Navigation

HUD bar: hearts/coins counters, world tabs, mute toggle. Quest-log menu on mobile.

## 12. Imagery

Pixel art scenes, sprites, tilesets. Consistent pixel scale (e.g. 4x) throughout.

## 13. Icons

Sprite icons: hearts, coins, swords, potions — pixel-drawn, limited palette.

## 14. Textures / Patterns

Scanlines, CRT vignette, dither patterns. Pixel-perfect, never blurry.

## 15. Motion

Frame-step motion (steps() easing!): sprite walks, blink cursors, typed dialogue. 8fps charm; reduced-motion = static frames.

Durations: instant–200ms frame flips. Easings: steps(2–4) frame animation; smooth tweening forbidden — sprites snap.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Blur or anti-aliasing on pixel assets
- Proportional fonts in HUD zones
- Photorealistic imagery
- Smooth eased motion on sprites (use steps!)
- Unlimited rainbow palettes

## 20. Quick-start snippet

```css
:root {
  --bg: #0F0F1B;
  --surface: #1B1B2E;
  --ink: #F2F0FF;
  --muted: #8E8AB0;
  --accent: #7DF9FF;
  --accent-2: #FFD802;
  --font-display: Press Start 2P, VT323, monospace;
  --font-body: VT323, IBM Plex Mono, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Pixel / 8-Bit -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/pixel-8bit/DESIGN.md`.*
