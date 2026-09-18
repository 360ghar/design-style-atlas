---
slug: cassette-futurism
name: "Cassette Futurism"
description: "Analog 1970s/80s high-tech: chunky beige chassis, amber phosphor displays, and rocker switches."
category: Future & Sci-Fi
tags: [analog, retro-future, tactile, hardware]
related: [cyberpunk, 70s-retro, industrial-brutalism]
preview:
  bg: "#E4DCBE"
  surface: "#D6CEAF"
  ink: "#1A1A18"
  muted: "#686355"
  accent: "#E05A2B"
  accent2: "#3C887E"
  display: "DIN Alternate, Space Mono, monospace"
  body: "IBM Plex Sans, Helvetica Neue, sans-serif"
---

# Cassette Futurism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Cassette Futurism is the retro-engineered future that never arrived: the world of Alien's Nostromo, 2001: A Space Odyssey, and Apollo-era mission control. Heavy almond-beige injection-molded plastics, glowing amber/green phosphor CRT displays, mechanical toggle switches, magnetic tape counters, and DIN industrial lettering convey rugged engineering durability.

**Three principles:**

- Tactile physical hardware: chunky bezels, raised plastic seams, recessed switch bays
- Cathode ray glow: amber or green phosphor readouts over deep scanline dark wells
- Functional utilitarian typography: DIN and monospace telemetry over decorative lettering

## 2. Typography

- **Display:** DIN Alternate, Space Mono, monospace
- **Body:** IBM Plex Sans, Helvetica Neue, sans-serif
- **Scale:** hero 32–44px DIN bold, display readout 18–24px mono, body 14–15px, telemetry labels 11–12px uppercase.
- **Weights:** display 700; body 500; readouts 600 monospace.
- **Rules:** uppercase tracked labels (+0.08em); left-aligned spec sheets; monospace numerical readouts with leading zeroes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E4DCBE` | Page ground |
| Surface | `#D6CEAF` | Cards, panels, containers |
| Ink | `#1A1A18` | Headlines, primary text |
| Muted | `#686355` | Secondary copy, metadata, borders |
| Accent | `#E05A2B` | Primary action, key highlights |
| Accent 2 | `#3C887E` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Safety orange (#E05A2B) for warnings and active breakers; teal (#3C887E) for status indicators.

## 4. Spacing

8px base; chunky 16–24px panel borders; recessed display wells with 12px padding; sections separated by stamped grooves.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Modular rack-mount layout; top telemetry readout bay; central control console with toggle matrices; side tape/drive status bay.

## 6. Borders

2px solid #544F43 outer panel borders; 1px inset groove shadows simulating molded plastic seams; double borders on CRT screens.

## 7. Shadows

Hard mechanical bevels: inset 2px 2px 0px #FFFFFF66, inset -2px -2px 0px #00000044; amber CRT glow 0 0 16px #FFB00044.

## 8. Radius

6–10px rounded exterior chassis corners; 2–4px for buttons and displays; sharp 0px for interior meter grids.

## 9. Buttons

Chunky mechanical keycaps; raised 3D bevels with travel state (:active translates down 2px); physical rocker switch components.

## 10. Cards

Recessed instrument bays with darker surface fill (#C4BC9E); stamped label plates; screw rivets in corners.

## 11. Navigation

Rotary dial frequency selector or push-button rack-mount navigation with illuminated green status LEDs.

## 12. Imagery

Vector wireframe 3D schematics, monochrome green/amber vector plots, tape spool diagrams, technical cross-sections.

## 13. Icons

Industrial equipment symbols: power toggles, tape spools, waveform diagrams, safety hazard triangles.

## 14. Textures

Subtle matte plastic grain, CRT horizontal scanlines (2px repeat), phosphor noise overlay.

## 15. Motion

Simulated analog latency: 200ms mechanical click snaps; CRT power-on line flare; needle bounce on gauges.

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

- Ultra-thin glassy modern lines or floating pastel blur
- Sleek smartphone touch gestures where mechanical switches belong
- High-gloss pure white backgrounds
- Generic modern serif typography
- Frictionless instant fades without mechanical tactility

## 20. Quick-start snippet

```css
:root {
  --bg: #E4DCBE;
  --surface: #D6CEAF;
  --ink: #1A1A18;
  --muted: #686355;
  --accent: #E05A2B;
  --accent-2: #3C887E;
  --font-display: DIN Alternate, Space Mono, monospace;
  --font-body: IBM Plex Sans, Helvetica Neue, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Cassette Futurism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Cassette Futurism headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/cassette-futurism/DESIGN.md`.*
