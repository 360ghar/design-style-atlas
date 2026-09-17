---
slug: synthwave
name: "Synthwave"
description: "Night-drive neon: outrun grids, chrome suns and analog-synth glow."
category: Decades
tags: [synthwave, outrun, night]
related: [70s-retro, 80s-retro, 90s-retro]
preview:
  bg: "#0A0118"
  surface: "#150826"
  ink: "#F5EDFF"
  muted: "#9A86C7"
  accent: "#FF2E88"
  accent2: "#FFD319"
  display: "Orbitron, Monoton, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Synthwave — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more midnight-drive, more neon-grid interpretation.

## 1. Overall aesthetic

Midnight on the interstate, 1985: chrome sun sinking into a perspective grid, laser-pink skies, muscle-car silhouettes, analog VU glow. Driving music made visual. For music, automotive, games, and drinks.

**Three principles:**

- Sun + grid + night = instant synthwave
- Amber underglow grounds the pink skies
- Chrome display + mono telemetry details

## 2. Typography

- **Display:** Orbitron, Monoton, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 52–84px Orbitron/Monoton neon display, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px glowing grid labels.
- **Weights:** display 700–900 neon; body 400–500; labels 700 with +0.1–0.2em tracking and glow.
- **Rules:** centered neon headlines over outrun grids and chrome suns; scanlines; never daylight minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0118` | Page ground |
| Surface | `#150826` | Cards, panels, wells |
| Ink | `#F5EDFF` | Headlines, body text |
| Muted | `#9A86C7` | Captions, meta, secondary text |
| Accent | `#FF2E88` | Primary actions, highlights |
| Accent 2 | `#FFD319` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Night-drive pacing: sun hero, 80–100px highway chapters, 24px panels

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Highway scroll: sun hero, grid chapters with content mile-markers, tunnel CTA finale. Max-width 1280px.

## 6. Borders

Laser keylines: 1–2px solid #FF2E88 / #FFD319; perspective grid floors; chrome 1px #F5EDFF33 trims

## 7. Shadows

Night-drive glow: 0 0 30px rgba(255,46,136,0.4) + 0 8px 32px rgba(255,211,25,0.18); sun halo 0 0 60px rgba(255,46,136,0.35)

## 8. Radius

Pills 999px, sun-circles 50%, HUD panels 4px, cards 12px

## 9. Buttons

Laser pills with glow; amber solid for go-moments; hover flares headlights-bright.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Dashboard panels: dark with laser keylines, VU details, sun-thumb headers.

## 11. Navigation

Night bar: chrome mark, laser links, glowing CTA; mile-marker progress.

## 12. Imagery

Grid suns, highways, muscle cars, skylines. Pink-amber grade.

## 13. Icons

Suns, grids, cassettes, steering glyphs — laser-line set.

## 14. Textures / Patterns

Grid floors, VHS grain, lens streaks, asphalt at 8–12%.

## 15. Motion

Drive loops: grid scroll toward viewer (12s), sun pulse, headlight sweeps. Hypnotic highway constancy.

Durations: micro 150–250ms neon flickers, standard 500–900ms grid-cruise loops. Easings: cruise ease-in-out; jarring snaps forbidden.

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

- Daylight palettes
- Earthy minimalism
- Static suns (pulse them)
- Serif typography
- Slow sleepy pacing — this drives

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0118;
  --surface: #150826;
  --ink: #F5EDFF;
  --muted: #9A86C7;
  --accent: #FF2E88;
  --accent-2: #FFD319;
  --font-display: Orbitron, Monoton, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Synthwave -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/synthwave/DESIGN.md`.*
