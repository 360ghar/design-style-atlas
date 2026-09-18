---
slug: racing-telemetry
name: "Racing Telemetry"
description: "High-g cockpit telemetry: carbon fiber weave, digital tachometer rev-counter redline, and lap split telemetry."
category: Data
tags: [automotive, telemetry, carbon-fiber, cockpit, racing]
related: [dataviz-terminal, sci-fi-ui, gaming-ui]
preview:
  bg: "#0A0B0E"
  surface: "#13161C"
  ink: "#F1F3F7"
  muted: "#848E9D"
  accent: "#FF1801"
  accent2: "#FFD32A"
  display: "Chakra Petch, Rajdhani, -apple-system, sans-serif"
  body: "Rajdhani, Inter, sans-serif"
---

# Racing Telemetry — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Racing Telemetry channels the adrenaline-fueled precision of Formula 1 and GT3 supercar digital cockpits (Porsche, Ferrari, McLaren). Matte carbon fiber weave textures (#0A0B0E), blazing redline digital rev counters (#FF1801), circular tachometers, real-time G-force diamond meters, digital lap delta splits (-0.184s), and high-contrast telemetry dials.

**Three principles:**

- Cockpit ergonomics: high-contrast telemetry readable at 200mph in direct sunlight
- Redline intensity: racing red (#FF1801) and warning yellow (#FFD32A) command immediate driver focus
- Engineered carbon fiber: matte woven carbon surfaces framed by machined aluminum and LED shift bars

## 2. Typography

- **Display:** Chakra Petch, Rajdhani, -apple-system, sans-serif
- **Body:** Rajdhani, Inter, sans-serif
- **Scale:** gear indicator 64–84px bold mono, tachometer readouts 32–44px, telemetry stats 18–22px, sensor tags 11–12px uppercase.
- **Weights:** display 700; body 600; numbers tabular mono bold.
- **Rules:** uppercase technical telemetry labels; tabular numerals for lap times and speed readouts (00:01:24.482); angled racing italics (font-style: italic).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0B0E` | Page ground |
| Surface | `#13161C` | Cards, panels, containers |
| Ink | `#F1F3F7` | Headlines, primary text |
| Muted | `#848E9D` | Secondary copy, metadata, borders |
| Accent | `#FF1801` | Primary action, key highlights |
| Accent 2 | `#FFD32A` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Racing Red (#FF1801) for redline RPM limits, critical warning flags, and active lap deltas.

## 4. Spacing

8px base; compact HUD grid; 16–20px telemetry module padding; high density without clutter.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Cockpit HUD dashboard: top LED shift-light strip; central circular tachometer and gear indicator; flanking left/right telemetry cards (tire temps, delta splits, throttle/brake gauges).

## 6. Borders

1px #FFFFFF18 hairline borders on carbon tiles; 2px racing red active border; angled 45-degree chamfered corners.

## 7. Shadows

High-intensity cockpit LED glows: 0 0 20px #FF180166; 0 0 16px #FFD32A44 on shift lights; deep matte chassis drops.

## 8. Radius

4–6px subtle chamfers; circular arcs for tachometers and G-force sensors; angled 45° corner cuts.

## 9. Buttons

Steering wheel thumb buttons: chunky high-contrast push buttons with LED status rings; PIT / DRS / RADIO controls.

## 10. Cards

Matte carbon-fiber instrument tiles (#13161C) with subtle 45-degree carbon weave pattern; top sensor label; live telemetry graph.

## 11. Navigation

Top telemetry mode selector (RACE / QUALY / PRACTICE / PIT) with illuminated color pips.

## 12. Imagery

Vector telemetry waveforms, throttle/brake bar graphs, track sector maps with mini delta flags, G-force coordinate plots.

## 13. Icons

Automotive telemetry icons: speedometer, checkered flag, oil temp, brake disc, tire pressure, stopwatch.

## 14. Textures

Subtle 45-degree carbon fiber twill weave pattern, matte cockpit anti-glare finish.

## 15. Motion

Rapid responsive needle sweeps: tachometer rev-up with RPM bounce; flashing sequential shift lights at redline (80ms flash).

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

- Soft pastel luxury tones or cute cartoon illustrations
- Serif academic typography or decorative Victorian script
- Slow, sluggish 500ms marketing fades that feel laggy
- Low-contrast gray-on-gray numbers that are hard to read
- Casual unformatted text blocks

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0B0E;
  --surface: #13161C;
  --ink: #F1F3F7;
  --muted: #848E9D;
  --accent: #FF1801;
  --accent-2: #FFD32A;
  --font-display: Chakra Petch, Rajdhani, -apple-system, sans-serif;
  --font-body: Rajdhani, Inter, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Racing Telemetry -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Racing Telemetry headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/racing-telemetry/DESIGN.md`.*
