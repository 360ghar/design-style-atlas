---
slug: analog-hifi
name: "Analog Hi-Fi"
description: "Brushed anodized aluminum faceplates, warm amber backlit VU needle meters, and knurled knobs."
category: Soft & Dimensional
tags: [audio, hifi, vu-meter, aluminum, tactile]
related: [skeuomorphism, industrial-brutalism, cassette-futurism]
preview:
  bg: "#1E1F22"
  surface: "#2A2C31"
  ink: "#F0F2F5"
  muted: "#959CA6"
  accent: "#FF9E1B"
  accent2: "#4ADE80"
  display: "Helvetica Neue, Inter, sans-serif"
  body: "Inter, Roboto, sans-serif"
---

# Analog Hi-Fi — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Analog Hi-Fi celebrates the golden age of high-end acoustic audio equipment (McIntosh, Marantz, Braun). Precision brushed anodized aluminum faceplates, warm amber-backlit analog VU meters with ballistic needle dynamics, solid machined knurled volume knobs, oiled walnut cabinet sides, and phosphor green frequency scales produce supreme tactile satisfaction.

**Three principles:**

- Audiophile material honesty: real brushed aluminum, knurled metal dials, and oiled walnut wood
- Backlit analog instrumentation: warm amber/incandescent illumination on calibrated meters
- Precision German/Japanese typography: clean Swiss sans-serif with technical decibel scales

## 2. Typography

- **Display:** Helvetica Neue, Inter, sans-serif
- **Body:** Inter, Roboto, sans-serif
- **Scale:** hero 34–48px Helvetica bold, meter scale 10–12px mono, body 14–15px, knob indicators 9–10px.
- **Weights:** display 600–700; body 400–500; technical labels 600.
- **Rules:** left-aligned component labels; uppercase functional markers (PHONO, AUX, TAPE, TUNER); strict dB calibrations (-20dB to +3dB).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1E1F22` | Page ground |
| Surface | `#2A2C31` | Cards, panels, containers |
| Ink | `#F0F2F5` | Headlines, primary text |
| Muted | `#959CA6` | Secondary copy, metadata, borders |
| Accent | `#FF9E1B` | Primary action, key highlights |
| Accent 2 | `#4ADE80` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Warm Amber Glow (#FF9E1B) for the backlit meter window; Phosphor Green (#4ADE80) for stereo signal locks.

## 4. Spacing

8px base; heavy 24–32px chassis margins; rack-mount screw spacing (16px); balanced horizontal layout.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Hi-Fi receiver chassis: top dual VU meter bay; center frequency tuner dial band; bottom row of machined knobs and toggle switches.

## 6. Borders

1px #FFFFFF18 hairline edge bevels; machined chamfered faceplate borders; 1px inset groove around meter window.

## 7. Shadows

Tactile depth: 0 16px 40px rgba(0,0,0,0.6); inset 0 2px 4px rgba(0,0,0,0.4); warm incandescent inner glow inside VU meters.

## 8. Radius

2–4px subtle faceplate rounding; perfect circles for rotary dials; sharp 0px for meter glass frame.

## 9. Buttons

Solid aluminum push-buttons; latching toggle switches with satisfying physical throw; knurled rotary knobs with radial indicator line.

## 10. Cards

Machined aluminum component blocks; inset backlit meter displays; dark brushed anodized finish.

## 11. Navigation

Rotary selector switch or push-button input array (TUNER / CD / STREAM / AUX) with illuminated amber LED pip.

## 12. Imagery

Macro photography of acoustic drivers, turntable cartridges, tube amplifiers, and machined metal details.

## 13. Icons

Audio engineering glyphs: sine waves, decibel bars, headphones, tape reels, balanced XLR pins.

## 14. Textures

Horizontal brushed aluminum grain, subtle glass reflections with incandescent lamp falloff.

## 15. Motion

Ballistic needle physics: rapid rise with gentle overshoot and smooth decay; tactile rotary knob detent clicks.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using a ring that clears 3:1 on the adjacent ground — Ink when it clears, otherwise Background.
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

- Plastic-looking saturated RGB gaming colors
- Flat borderless SaaS cards with no physical material texture
- Decorative script or playful comic typefaces
- Digital pixelation where smooth analog needles belong
- Zero-thickness paper-flat interfaces

## 20. Quick-start snippet

```css
:root {
  --bg: #1E1F22;
  --surface: #2A2C31;
  --ink: #F0F2F5;
  --muted: #959CA6;
  --accent: #FF9E1B;
  --accent-2: #4ADE80;
  --font-display: Helvetica Neue, Inter, sans-serif;
  --font-body: Inter, Roboto, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Analog Hi-Fi -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Analog Hi-Fi headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/analog-hifi/DESIGN.md`.*
