---
slug: 80s-retro
name: "80s Retro"
description: "Miami-VHS nostalgia: chrome script, palm silhouettes and sunset grids."
category: Decades
tags: [80s, outrun, neon]
related: [memphis, cyberpunk, 70s-retro]
preview:
  bg: "#0D0221"
  surface: "#1A0B2E"
  ink: "#F5EDFF"
  muted: "#9A86C7"
  accent: "#FF2E88"
  accent2: "#00E5FF"
  display: "Monoton, Orbitron, Impact, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# 80s Retro — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more chrome-grid, more neon-sunset interpretation.

## 1. Overall aesthetic

Miami midnight, 1986: chrome script logos, grid-suns setting over wireframe, VHS tracking lines, palm silhouettes. Nostalgia with horsepower. For music, games, drinks, and nightlife.

**Three principles:**

- Sunset palette: pink → violet → deep blue, cyan accents
- Grid floors + chrome suns + VHS lines = instant 80s
- Script display + mono details

## 2. Typography

- **Display:** Monoton, Orbitron, Impact, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 52–84px Monoton/Orbitron chrome display, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px neon labels.
- **Weights:** display 700–900 chrome-neon; body 400–500; labels 700 with +0.08–0.15em tracking and glow.
- **Rules:** centered chrome headlines over perspective grids and sunsets; VHS grain; never matte minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0D0221` | Page ground |
| Surface | `#1A0B2E` | Cards, panels, wells |
| Ink | `#F5EDFF` | Headlines, body text |
| Muted | `#9A86C7` | Captions, meta, secondary text |
| Accent | `#FF2E88` | Primary actions, highlights |
| Accent 2 | `#00E5FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Arcade pacing: sunset hero, 72–96px neon chapters, 24px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Outrun scroll: sunset hero with grid floor, neon chapter bands, arcade-grid features, midnight CTA. Max-width 1280px.

## 6. Borders

Neon keylines: 1–2px `#FF2E88` / `#00E5FF`; grid-floor horizons; scanline overlays

## 7. Shadows

Outrun glow: `0 0 30px #FF2E88` + `0 0 80px #3B0A5E`; chrome speculars

## 8. Radius

Chrome rounds: pills `999px`, grid-sun circles `50%`, VHS-card `8px`

## 9. Buttons

Chrome/neon pills with glow; hover flares. High-score CTA styling for conversion.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

VHS-case panels: dark, neon keylines, tracking-line headers, sunset thumbs.

## 11. Navigation

Midnight bar: chrome script mark, neon links, glowing CTA. Grid trim.

## 12. Imagery

Grid suns (`#FFD319` → `#FF2E88` with `#0D0221` slats), chrome cars, palms, cassettes. Pink-cyan grade, VHS grain.

## 13. Icons

Cassettes, grids, lightning, palms — neon-glow set.

## 14. Textures / Patterns

Grid floors, VHS noise, scanlines, chrome gradients.

## 15. Motion

Retro-future: grid scroll (slow), neon flicker (gentle), sun-set parallax. VHS tracking warp on transitions (subtle).

Durations: micro 150–250ms, standard 400–700ms grid-scroll loops. Easings: synthwave ease-in-out cruise; harsh steps forbidden.

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

- Daylight or earthy palettes
- Minimal restraint
- Sans-only typography
- Static gradients (animate glow)
- Modern flat illustration

## 20. Quick-start snippet

```css
:root {
  --bg: #0D0221;
  --surface: #1A0B2E;
  --ink: #F5EDFF;
  --muted: #9A86C7;
  --accent: #FF2E88;
  --accent-2: #00E5FF;
  --font-display: Monoton, Orbitron, Impact, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in 80s Retro -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/80s-retro/DESIGN.md`.*
