---
slug: holographic
name: "Holographic"
description: "Iridescent foil surfaces: shifting rainbows, light-streak cards and prism play."
category: Atmosphere & Gradient
tags: [holographic, iridescent, foil]
related: [gradient-design, aurora-glow, liquid-chrome]
preview:
  bg: "#0D0D14"
  surface: "#15151F"
  ink: "#F2F0FF"
  muted: "#8E8AB0"
  accent: "#7DF9FF"
  accent2: "#FF7AD9"
  display: "Unbounded, Outfit, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Holographic — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more iridescent, light-shifting interpretation.

## 1. Overall aesthetic

Trading-card foil as UI: conic-rainbow surfaces that shift with cursor tilt, chrome text, light-streak seals, dark velvet grounds. Collectible energy. For drops, music, gaming, fintech metal cards, and beauty.

**Three principles:**

- Foil responds to light: tilt/hover must shift the rainbow
- Dark velvet grounds make foil read precious
- One foil moment per viewport — ration the rainbow

## 2. Typography

- **Display:** Unbounded, Outfit, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 44–72px Unbounded holographic display, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px prismatic uppercase.
- **Weights:** display 700–800; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** centered rainbow-foil headlines with tilt-reactive gradients; dark grounds; never matte flatness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0D0D14` | Page ground |
| Surface | `#15151F` | Cards, panels, wells |
| Ink | `#F2F0FF` | Headlines, body text |
| Muted | `#8E8AB0` | Captions, meta, secondary text |
| Accent | `#7DF9FF` | Primary actions, highlights |
| Accent 2 | `#FF7AD9` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Showcase pacing: hero foil moment, 88–110px galleries, 24px card padding, dark pauses

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Showcase: foil hero card with tilt, gallery of holo tiles, dark spec bands, drop CTA. Max-width 1200px.

## 6. Borders

Prism keylines: 1–2px conic-gradient borders (rainbow at 20–30% alpha); 1px light-streak dividers

## 7. Shadows

Foil light: rainbow ambient 0 12px 48px rgba(125,249,255,.25); white specular streaks on tilt

## 8. Radius

16–24px foil cards; pills for seals

## 9. Buttons

Foil pills with shifting gradients + dark labels; hover sweeps the spectrum. Secondary dark glass.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Holo tiles: conic-gradient surface, specular streak overlay, tilt-on-mouse, dark back with specs.

## 11. Navigation

Dark bar with foil logo mark; drop-countdown pill; glowing CTA.

## 12. Imagery

Foil textures, chrome 3D, iridescent product shots, light-streak photography.

## 13. Icons

Prism glyphs with gradient strokes; seal/stamp devices for authenticity.

## 14. Textures / Patterns

Conic rainbows, light streaks, foil noise, velvet dark grounds.

## 15. Motion

Tilt-reactive foil (pointer-tracked), spectrum sweeps 6s, shimmer on scroll. Static foil fallback for reduced-motion.

Durations: micro 150–250ms tilt shimmers, standard 400–700ms foil shifts. Easings: fluid ease-in-out foil flow; harsh steps forbidden.

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

- Foil on everything (visual inflation)
- Light grounds behind foil (kills the shift)
- Static rainbow gradients without light response
- Competing foil hues per card
- Tiny foil text (rainbows need area)

## 20. Quick-start snippet

```css
:root {
  --bg: #0D0D14;
  --surface: #15151F;
  --ink: #F2F0FF;
  --muted: #8E8AB0;
  --accent: #7DF9FF;
  --accent-2: #FF7AD9;
  --font-display: Unbounded, Outfit, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Holographic -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/holographic/DESIGN.md`.*
