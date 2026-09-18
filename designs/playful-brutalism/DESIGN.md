---
slug: playful-brutalism
name: "Playful Brutalism"
description: "Chunky friendly shapes, candy colors and wobbling stickers with structural bite."
category: Brutalist
tags: [playful, bold, friendly]
related: [brutalism, neo-brutalism, corporate-brutalism]
preview:
  bg: "#FFF9F0"
  surface: "#FFFFFF"
  ink: "#222222"
  muted: "#797269"
  accent: "#FF4FA3"
  accent2: "#00B3FF"
  display: "Baloo 2, Fredoka, Arial Rounded MT Bold, sans-serif"
  body: "Nunito, Quicksand, Helvetica Neue, sans-serif"
---

# Playful Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, chunkier interpretation — never be subtle.

## 1. Overall aesthetic

A toy box with rules: rounded candy forms outlined in thick ink, pastel-meets-neon color, googly stickers, squiggles, and starbursts. Underneath the cuteness the grid is strict — every wobble is aligned. Appeals to Gen-Z brands, kids' products, and anyone allergic to corporate gray.

**Three principles:**

- Cute but constructed: wobbles align to the grid
- Candy color with ink outlines — sweetness needs structure
- Motion is physical: squish, wobble, boing

## 2. Typography

- **Display:** Baloo 2, Fredoka, Arial Rounded MT Bold, sans-serif
- **Body:** Nunito, Quicksand, Helvetica Neue, sans-serif
- **Scale:** hero 44–68px chunky rounded bold (Baloo/Fredoka), H2 30–38px, H3 22px, body 16–17px, meta/labels 12–14px bold uppercase.
- **Weights:** display 700–800 rounded bold; body 400–500; labels 700 with +0.04–0.08em tracking.
- **Rules:** flush-left chunky headlines with sticker borders and rotations; centered only for badge bursts; never restrained minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF9F0` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#222222` | Headlines, body text |
| Muted | `#797269` | Captions, meta, secondary text |
| Accent | `#FF4FA3` | Primary actions, highlights |
| Accent 2 | `#00B3FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Bouncy rhythm: 24px card padding, 64–88px sections, stickers overlapping edges by 8–16px

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Centered bouncy stacks with scattered sticker constellations; wavy and zigzag section dividers; alternating pastel grounds. Max-width 1120px, lots of overlap.

## 6. Borders

2.5–3px solid #222222 outlines around everything cute — plush with a frame

## 7. Shadows

Hard but sweet: 5px 5px 0 #222222; hover squishes to 2px with a boing

## 8. Radius

14–20px squishy rounding on cards; pills for stickers

## 9. Buttons

Pill buttons, 3px ink border, candy fill, bold rounded labels; hard 5px shadow. Hover wobbles (rotate ±2deg); press squishes flat with a 150ms spring.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Squishy rounded cards with ink borders and hard shadows; icon medallions, squiggle underlines, and sticker badges breaking the frame.

## 11. Navigation

Cream bar, 3px bottom border, rounded logo sticker, pill links with candy hover fills; CTA is a pink pill with shadow.

## 12. Imagery

Flat vector mascots, blob shapes, candy patterns, thick-outlined doodles. Photos masked in arches and blobs with ink borders.

## 13. Icons

Rounded filled icons with 2px ink outlines; emoji-scale expressiveness; consistent chunky set.

## 14. Textures / Patterns

Confetti dots, squiggles, checkerboard trims, scalloped edges, subtle paper grain under candy fills.

## 15. Motion

Springy: 200–350ms cubic-bezier(0.34,1.56,0.64,1) pops; sticker wiggle on hover; floating idle bob on mascots. Joyful but snappy.

Durations: 150–350ms sticker pops. Easings: snappy cubic-bezier(0.34,1.56,0.64,1) for sticker pops only; no slow fades.

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

- Thin lines or hairline anything
- Muted desaturated palettes
- Sharp corporate rectangles
- Slow fades and gentle ease-outs
- Cynical or cold copy tone

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF9F0;
  --surface: #FFFFFF;
  --ink: #222222;
  --muted: #797269;
  --accent: #FF4FA3;
  --accent-2: #00B3FF;
  --font-display: Baloo 2, Fredoka, Arial Rounded MT Bold, sans-serif;
  --font-body: Nunito, Quicksand, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Playful Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/playful-brutalism/DESIGN.md`.*
