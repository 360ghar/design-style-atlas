---
slug: duotone
name: "Duotone"
description: "Electric two-color posterization: high-voltage contrasting color fields with bold editorial weight."
category: Editorial & Print
tags: [spotify, two-tone, poster, vibrant, music]
related: [swiss-poster, gradient-design, editorial-magazine]
preview:
  bg: "#0C1B33"
  surface: "#14294E"
  ink: "#FFFFFF"
  muted: "#A5B8D8"
  accent: "#FF4F7C"
  accent2: "#00F5D4"
  display: "Montserrat, Syne, -apple-system, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Duotone — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Duotone is the high-energy branding phenomenon made iconic by Spotify and modern festival identities: extreme two-color photographic posterization. Deep midnight cobalt blue (#0C1B33) is mapped to shadows while scorching neon coral (#FF4F7C) or cyan floods the highlights. Massive geometric sans typography cuts across bold color fields with unmistakable visual punch.

**Three principles:**

- Strict two-color mapping: photos and surfaces are strictly converted into the primary dual-hue channel
- High-voltage optical contrast: deep shadow hue vs. ultra-vibrant highlight hue creates instant electricity
- Poster-scale typography: massive bold sans-serif headlines that dominate the viewport

## 2. Typography

- **Display:** Montserrat, Syne, -apple-system, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 56–88px extra-bold, H2 36–48px, body 16px/1.5, track tags 13px bold.
- **Weights:** display 800–900; body 500–600; strong weight presence throughout.
- **Rules:** left-aligned heavy display headlines; tight line-height (0.95–1.05); uppercase track kicker labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0C1B33` | Page ground |
| Surface | `#14294E` | Cards, panels, containers |
| Ink | `#FFFFFF` | Headlines, primary text |
| Muted | `#A5B8D8` | Secondary copy, metadata, borders |
| Accent | `#FF4F7C` | Primary action, key highlights |
| Accent 2 | `#00F5D4` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Hot Neon Coral (#FF4F7C) for key calls-to-action, play buttons, and highlight overlays.

## 4. Spacing

8px base; generous full-bleed viewport sections; content containers max-width 1240px; 24–40px card padding.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Editorial poster grid: full-bleed duotone imagery with bold overlapping typographic headlines; split 50/50 hero blocks.

## 6. Borders

2px solid #FF4F7C on featured cards; clean 1px white/20% dividers; zero fussy ornamentation.

## 7. Shadows

Punchy colored glow: 0 12px 32px rgba(255,64,113,0.35); crisp dark drop on text over imagery.

## 8. Radius

0px to 8px modern clean edges; full circular 48px play buttons.

## 9. Buttons

Solid neon coral pill or rounded rect; deep navy Background `#0C1B33` labels (5.46:1 on the coral — white would be 3.15:1); hover expands with colored bloom.

## 10. Cards

Duotone image-backed cards with a dark scrim or solid fallback behind text over imagery; apply mix-blend-mode: multiply or mix-blend-mode: screen (alternatives, never combined) for the duotone map; title in giant semibold type.

## 11. Navigation

Minimal high-contrast header bar; transparent overlay on imagery; bold brand mark.

## 12. Imagery

Duotone-filtered portraits, crowd photography, album art rendered in strict 2-color gradient maps.

## 13. Icons

Clean 20–24px bold outline and filled glyphs: play, pause, waveform, shuffle, heart.

## 14. Textures

Halftone screen tint, subtle film grain over duotone imagery, clean color blocks.

## 15. Motion

Punchy kinetic hover reveals: color inversion crossfades (180ms), scale lift (1.03), image zoom on card hover.

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

- Full-color unmapped realistic photography that breaks the two-tone identity
- Timid, pale pastel shades that lack visual punch
- Delicate thin-stroke serif fonts
- Muddy multi-colored gradient soups
- Cluttered busy layouts with low-contrast type

## 20. Quick-start snippet

```css
:root {
  --bg: #0C1B33;
  --surface: #14294E;
  --ink: #FFFFFF;
  --muted: #A5B8D8;
  --accent: #FF4F7C;
  --accent-2: #00F5D4;
  --font-display: Montserrat, Syne, -apple-system, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Duotone -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Duotone headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/duotone/DESIGN.md`.*
