---
slug: glitch-art
name: "Glitch Art"
description: "Digital signal degradation: chromatic aberration, horizontal displacement slices, scanlines, and VHS drift."
category: Experimental
tags: [glitch, datamosh, vhs, rgb-split, artifacts]
related: [hacker-aesthetic, cyberpunk, synthwave]
preview:
  bg: "#0B0C10"
  surface: "#1F2833"
  ink: "#66FCF1"
  muted: "#8B9BAE"
  accent: "#FF0055"
  accent2: "#00FFFF"
  display: "VT323, Share Tech Mono, monospace"
  body: "Share Tech Mono, monospace"
---

# Glitch Art — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Glitch Art celebrates the beauty of machine error and broadcast breakdown: RGB channel displacement (red/cyan chromatic aberration), horizontal scanline slice tearing, CRT phosphor flutter, VHS tracking drift timestamps (PLAY ▶ 00:42:19), corrupted digital memory buffers, and raw cyber telemetry.

**Three principles:**

- Embrace the malfunction: signal artifacts, horizontal line slices, and corrupted data are the aesthetic
- Chromatic displacement: text and shapes split into cyan, magenta, and yellow color-fringed twins
- Analog broadcast breakdown: VHS tracking lines, CRT raster scanlines, and audio-reactive stutter

## 2. Typography

- **Display:** VT323, Share Tech Mono, monospace
- **Body:** Share Tech Mono, monospace
- **Scale:** hero 50–76px VT323 mono, H2 28–38px, body 14–15px mono, timestamp badges 12px.
- **Weights:** display 400 (heavy mono); body 400; constant monospace rhythm.
- **Rules:** glitch displacement layers (text-shadow: -2px 0 #FF0055, 2px 0 #00FFFF); all-caps error messaging; system hex dumps.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0C10` | Page ground |
| Surface | `#1F2833` | Cards, panels, containers |
| Ink | `#66FCF1` | Headlines, primary text |
| Muted | `#8B9BAE` | Secondary copy, metadata, borders |
| Accent | `#FF0055` | Primary action, key highlights |
| Accent 2 | `#00FFFF` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Electric Magenta (#FF0055) and Electric Cyan (#00FFFF) split across highlights and chromatic borders.

## 4. Spacing

4px/8px digital raster grid; tight telemetry readouts; offset glitch bands jumping 4–12px horizontally.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Security monitor or broadcast feed: top status telemetry line (REC ● [CH-04]); fragmented card grid with scanline breaks.

## 6. Borders

1px dashed or staggered cyan/magenta borders; broken border keylines simulating missing signal packets.

## 7. Shadows

Chromatic offset shadows: -3px 0 0 #FF0055, 3px 0 0 #00FFFF; neon phosphor CRT glow.

## 8. Radius

0px absolute — digital pixels have no rounded corners.

## 9. Buttons

Terminal-style command buttons; hover triggers rapid horizontal jitter keyframe and chromatic split; active flashes white.

## 10. Cards

Dark CRT buffer cards (#1F2833); horizontal scanline overlay; top corner timestamp; error code footers.

## 11. Navigation

Top broadcast tracking bar with blinking REC dot, timecode (00:34:12), and corrupted channel switcher.

## 12. Imagery

Datamoshed video frames, corrupted JPEG macroblocks, distorted test-pattern bars, thermal camera views.

## 13. Icons

Video cassette tape icons, signal warning triangles, broken antenna bars, noise static boxes.

## 14. Textures

Scanlines (repeating linear gradient 2px), animated TV static noise, chromatic fringe filters.

## 15. Motion

Sudden jitter displacement: keyframe clip-path horizontal slices jumping every 2–4s; instant snap state changes.

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

- Clean corporate flat minimalism with polite rounded corners
- Soft pastel luxury colors with low contrast
- Traditional serif or elegant script typefaces
- Smooth slow corporate fades with zero digital bite
- Perfect symmetrical alignment that looks factory-clean

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0C10;
  --surface: #1F2833;
  --ink: #66FCF1;
  --muted: #8B9BAE;
  --accent: #FF0055;
  --accent-2: #00FFFF;
  --font-display: VT323, Share Tech Mono, monospace;
  --font-body: Share Tech Mono, monospace;
}
```

```html
<!-- Starter specimen: button + card in Glitch Art -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Glitch Art headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/glitch-art/DESIGN.md`.*
