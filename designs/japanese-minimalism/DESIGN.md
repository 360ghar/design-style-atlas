---
slug: japanese-minimalism
name: "Japanese Minimalism"
description: "Ma-inspired negative space, muted natural tones and quiet wabi-sabi restraint."
category: Minimal
tags: [minimal, ma, serene]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#F7F4EE"
  surface: "#FFFDF8"
  ink: "#2B2B28"
  muted: "#736F67"
  accent: "#9C2B2E"
  accent2: "#4A5D4E"
  display: "Hiragino Mincho ProN, Yu Mincho, Georgia, serif"
  body: "Hiragino Sans, Inter, Helvetica Neue, sans-serif"
---

# Japanese Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more restrained interpretation — emptiness is the point.

## 1. Overall aesthetic

Inspired by ma — the pregnant emptiness between things — and wabi-sabi imperfection. Warm paper tones, a vermilion hanko-like accent, vertical rhythm, and content placed low and off-center. Designs feel like a tea room: still, warm, and complete with very little.

**Three principles:**

- Ma first: space between elements matters more than the elements
- Natural, desaturated color drawn from paper, stone, moss, and clay
- Asymmetry and off-center placement feel more alive than symmetry

## 2. Typography

- **Display:** Hiragino Mincho ProN, Yu Mincho, Georgia, serif
- **Body:** Hiragino Sans, Inter, Helvetica Neue, sans-serif
- **Scale:** hero 28–40px Mincho serif, H2 22–28px, H3 18px, body 15–16px with wide leading at a narrow measure, meta/labels 11–12px with wide tracking.
- **Weights:** display 400–500; body 400; labels 400–500 with +0.15–0.25em tracking (never heavy poster weights).
- **Rules:** left-aligned headlines with ma (negative space), vertical accents allowed; never crowd, never justify.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F4EE` | Page ground |
| Surface | `#FFFDF8` | Cards, panels, wells |
| Ink | `#2B2B28` | Headlines, body text |
| Muted | `#736F67` | Large meta / decorative only — body text stays Ink |
| Accent | `#9C2B2E` | Primary actions, highlights |
| Accent 2 | `#4A5D4E` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Ma (negative space) as the primary material: sections breathe 120–160px; line-height 2.0 for prose; wide letter-spacing on labels

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Off-center compositions with large voids; content often sits in the lower two-thirds. Vertical Japanese-style dividers and small caps labels; max-width 960px.

## 6. Borders

1px hairline warm-gray borders (#E3DED2); vertical rules and generous margins do the grouping

## 7. Shadows

A single whisper: 0 1px 3px rgba(43,43,40,0.05). Ink-inspired, never lifted

## 8. Radius

2–4px, barely-there softness; never pills

## 9. Buttons

Quiet rectangles with 1px warm-gray borders and dark text; primary fills deep ink (#2B2B28). Hover deepens color slowly (300ms). Wide letter-spacing on labels.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Paper-toned panels with hairline borders and vast internal padding (32–48px). Images bleed; text floats in space.

## 11. Navigation

Sparse top bar or side column with vertical options. Small tracked labels; a red hanko-square mark as the logo device.

## 12. Imagery

Mist, stone, wood, paper, shadow — natural textures photographed softly. Low contrast, warm white balance, generous crops.

## 13. Icons

Thin brush-like line icons with varied stroke, or simple kanji-like geometric marks. Restrained and few.

## 14. Textures / Patterns

Subtle washi-paper grain at 3–5% opacity; soft vignettes. Imperfection is welcome if barely visible.

## 15. Motion

Slow and breath-like: 400–600ms ease-out fades, ink-wash reveals. Nothing sudden; transitions feel like seasons changing.

Durations: micro 200–300ms, standard 400–600ms slow fades with long stillness. Easings: ease-out only; no springs, no hurried motion.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1099px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Saturated color fields or neon accents
- Dense grids and packed layouts
- Sharp pure-black on pure-white contrast
- Fast bouncy animation
- Western-style centered hero sections

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F4EE;
  --surface: #FFFDF8;
  --ink: #2B2B28;
  --muted: #736F67;
  --accent: #9C2B2E;
  --accent-2: #4A5D4E;
  --font-display: Hiragino Mincho ProN, Yu Mincho, Georgia, serif;
  --font-body: Hiragino Sans, Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Japanese Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/japanese-minimalism/DESIGN.md`.*
