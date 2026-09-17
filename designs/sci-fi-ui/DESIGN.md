---
slug: sci-fi-ui
name: "Sci-Fi UI"
description: "Starship consoles: holographic frames, telemetry and systematic wonder."
category: Future & Sci-Fi
tags: [sci-fi, hud, telemetry]
related: [cyberpunk, futurism, gaming-ui]
preview:
  bg: "#04070D"
  surface: "#0A1220"
  ink: "#D7E6FF"
  muted: "#5B7290"
  accent: "#4DD8FF"
  accent2: "#FFB300"
  display: "Michroma, Orbitron, sans-serif"
  body: "Rajdhani, Inter, sans-serif"
---

# Sci-Fi UI — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal starship-console interpretation.

## 1. Overall aesthetic

A believable starship bridge: dark navy void, cyan holographic frames, telemetry that feels alive, amber reserved for cautions. Systematic wonder — every readout labeled, every control plausible. For space, defense-tech, data platforms, and games.

**Three principles:**

- Plausibility over flash: label every readout, units on everything
- Cyan is system, amber is caution, red is emergency — never decorative
- Corners bracketed, never rounded

## 2. Typography

- **Display:** Michroma, Orbitron, sans-serif
- **Body:** Rajdhani, Inter, sans-serif
- **Mono:** ui-monospace, SFMono-Regular, Menlo, Consolas, monospace — telemetry rows, SYS labels, clocks, event log.
- **Scale:** hero 40–64px Michroma/Orbitron HUD type, H2 28–36px, H3 20px, body 14–16px HUD readouts, meta/labels 11–12px tracked uppercase telemetry.
- **Weights:** display 700 HUD; body 400; labels 700 with +0.15–0.25em tracking and glow.
- **Rules:** HUD-frame headlines with brackets and telemetry ticks; left-aligned console logic; never editorial serif layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#04070D` | Page ground |
| Surface | `#0A1220` | Cards, panels, wells |
| Ink | `#D7E6FF` | Headlines, body text |
| Muted | `#5B7290` | Captions, meta, secondary text |
| Accent | `#4DD8FF` | Primary actions, highlights |
| Accent 2 | `#FFB300` | Caution states, warnings, secondary glows |
| Nominal | `#7CFF6B` | Nominal/OK status only — matches preview HULL readout |
| Emergency | `#FF3B30` | Emergency/destructive only, always with label + icon, never decorative |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Bridge layout: command header, 3-column console grid, 16px panel padding, system-wide 8px grid

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Bridge grid: header command bar, left nav systems, center viewport (map/scene), right telemetry stack, bottom event log. Responsive collapse to tabs.

## 6. Borders

Console frames: 1px cyan hairlines + corner brackets; segmented dividers; arc gauges

## 7. Shadows

Hologram glow: 0 0 20px cyan/20; scanline sweeps; soft blue ambient

## 8. Radius

0–2px sharp; chamfered corners via clip-path on hero panels; corner brackets stay square

## 9. Buttons

Console keys: bordered rectangles with corner ticks, cyan labels; engage actions solid cyan with black text. Two-step arm+confirm for destructive.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Holo-panels: hairline frames, bracket corners, header with system name + status dot, telemetry rows in mono.

## 11. Navigation

Command bar: ship/product mark, system tabs, alert level pill, stardate clock in mono.

## 12. Imagery

Starfields, nebulae, wireframe planets, blueprint schematics. Cyan-graded, labeled like star charts.

## 13. Icons

Isometric-ish thin icons: orbit, signal, shield, thruster — 1.5px cyan strokes.

## 14. Textures / Patterns

Starfields, grid spheres, scanlines, holographic noise at 5–8%.

## 15. Motion

Boot sequences, radar sweeps (slow), telemetry tickers, panel power-ons. Calm 300ms system fades; no bounce.

Durations: micro 100–200ms HUD blips, standard 300ms scans. Easings: linear and steps() for scans; springs forbidden — consoles blink, never bounce.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, oversized display type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Fantasy gradients or magic glows without labels
- Rounded playful geometry
- Red/green decorative pairing without status meaning — green is nominal-only (`#7CFF6B`), red is emergency-only (`#FF3B30`)
- Fake data that contradicts itself
- Motion that obscures readings

## 20. Quick-start snippet

```css
:root {
  --bg: #04070D;
  --surface: #0A1220;
  --ink: #D7E6FF;
  --muted: #5B7290;
  --accent: #4DD8FF;
  --accent-2: #FFB300;
  --nominal: #7CFF6B;
  --emergency: #FF3B30;
  --font-display: Michroma, Orbitron, sans-serif;
  --font-body: Rajdhani, Inter, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Sci-Fi UI -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/sci-fi-ui/DESIGN.md`.*
