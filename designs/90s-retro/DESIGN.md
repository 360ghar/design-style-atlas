---
slug: 90s-retro
name: "90s Retro"
description: "Nickelodeon kid-TV 1993: boombox blocks, checkerboard and slime-squiggle energy."
category: Decades
tags: [90s, boombox, checkerboard]
related: [memphis, playful-maximalism, 80s-retro]
preview:
  bg: "#FFF6E5"
  surface: "#FFFFFF"
  ink: "#222222"
  muted: "#767067"
  accent: "#704DFF"
  accent2: "#007B7B"
  display: "Archivo Black, Shrikhand, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# 90s Retro — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more sticker-covered, more savage interpretation.

## 1. Overall aesthetic

1993 in the best way: teal + purple confetti, squiggle underlines, triangle patterns, boombox energy. Loud, fun, geometric. For snacks, games, kids, and throwback drops. Not Memphis (Milan 1981 terrazzo/pastel design-movement); this is US kid-TV: Nickelodeon slime, checkerboards, boomboxes.

**Three principles:**

- Confetti geometry everywhere — with grid discipline
- Teal + purple; black outlines
- Squiggles underline what matters

## 2. Typography

- **Display:** Archivo Black, Shrikhand, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–76px Archivo Black/Shrikhand sticker type, H2 32–42px, H3 22px, body 16–17px, meta/labels 12–14px sticker labels.
- **Weights:** display 800–900; body 400–500; labels 700–900 sticker-bold.
- **Rules:** slapped-sticker headlines with checkerboard and slime accents; overlapping chaos welcome; never corporate restraint.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF6E5` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#222222` | Headlines, body text |
| Muted | `#767067` | Captions, meta, secondary text |
| Accent | `#704DFF` | Primary actions, highlights |
| Accent 2 | `#007B7B` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Saturday-morning density: shape-scattered 72–96px sections, 24px cards

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Throwback stack: confetti hero, shape-feature rows, pattern interludes, boombox CTA. Max-width 1240px.

## 6. Borders

Confetti frames: 2–3px ink outlines; zigzag and squiggle dividers

## 7. Shadows

Fresh-Prince offsets: 5px 5px 0 ink; pastel color-block shadows

## 8. Radius

Bold geo: triangles, zigzags, circles; 12–20px cards

## 9. Buttons

Geo blocks: purple/teal fills, white bold labels, hard shadows; hover pops.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Confetti cards: white, ink borders, shape badges, squiggle titles.

## 11. Navigation

Fresh bar: geometric mark, bold links, Accent CTA. Zigzag trim.

## 12. Imagery

Boomboxes, sneakers, cartoons, geometric patterns. Saturated and fun.

## 13. Icons

Squiggles, triangles, lightning, gamepads — chunky 90s set.

## 14. Textures / Patterns

Confetti, zigzags, dots, checkerboards at 12–20%.

## 15. Motion

Saturday bounce: 200ms pops, shape floats, squiggle draws. Playful springs.

Durations: micro 150–250ms sticker slaps, standard 350–500ms. Easings: springy slap cubic-bezier(0.34,1.56,0.64,1); funereal fades forbidden.

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

- Muted minimal palettes
- Hairlines or subtlety
- Serif display type
- Slow fades
- Taking itself seriously
- Terrazzo speckle or pastel Milan-Memphis softness (that's `memphis`, not this)

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF6E5;
  --surface: #FFFFFF;
  --ink: #222222;
  --muted: #767067;
  --accent: #704DFF;
  --accent-2: #007B7B;
  --font-display: Archivo Black, Shrikhand, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in 90s Retro -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/90s-retro/DESIGN.md`.*
