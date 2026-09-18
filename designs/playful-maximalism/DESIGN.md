---
slug: playful-maximalism
name: "Playful Maximalism"
description: "Confetti interfaces: stickers, squiggles and candy color at full volume."
category: Maximalist
tags: [playful, confetti, gen-z]
related: [neo-brutalism, playful-brutalism, maximalism]
preview:
  bg: "#FFF3E4"
  surface: "#FFFFFF"
  ink: "#232323"
  muted: "#6E665D"
  accent: "#FF4FA3"
  accent2: "#00C2FF"
  display: "Fredoka, Baloo 2, Comic Sans MS, sans-serif"
  body: "Nunito, Quicksand, sans-serif"
---

# Playful Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the sillier, more crowded interpretation.

## 1. Overall aesthetic

A birthday party that never ends: confetti, googly stickers, squiggle underlines, candy gradients, and three mascots minimum. Every scroll reveals a new surprise. Built for Gen-Z brands, games, snacks, and anyone selling joy. The grid exists — it's just wearing a costume.

**Three principles:**

- Surprise per scroll: never let two viewports feel alike
- Candy color + ink outlines = joy with structure
- Motion is slapstick: wobble, boing, confetti burst

## 2. Typography

- **Display:** Fredoka, Baloo 2, Comic Sans MS, sans-serif
- **Body:** Nunito, Quicksand, sans-serif
- **Scale:** hero 52–88px bubbly display (Fredoka/Baloo), H2 34–44px, H3 24px, body 16–17px, meta/labels 12–14px bold uppercase.
- **Weights:** display 700–800 rounded bold; body 400–500; labels 700 with +0.06–0.12em tracking.
- **Rules:** centered bouncy headlines with sticker rotations; mixed alignments welcome; never corporate grids, never quiet columns.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF3E4` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#232323` | Headlines, body text |
| Muted | `#6E665D` | Captions, meta, secondary text |
| Accent | `#FF4FA3` | Primary actions, highlights (large display ≥18px bold only as text; never body copy) |
| Accent 2 | `#00C2FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Festival packing: stickers overlap by 12–20px, 20px card padding, 56–80px sections, 12–24px confetti gaps between decals and content

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Sticker-bomb stacks: centered bouncy columns with scattered overlapping decals; wavy dividers; alternating candy grounds. Max-width 1120px.

## 6. Borders

Chunky 2–3px ink outlines on stickers; rainbow keylines; scalloped and zigzag edges

## 7. Shadows

Bouncy hard shadows: 5px 5px 0 ink (6px on heroes); pastel glow shadows `0 4px 24px rgba(255,79,163,0.35)` and `0 4px 24px rgba(0,194,255,0.35)` on candy grounds

## 8. Radius

16–24px blob rounding; stickers fully pill; wavy dividers

## 9. Buttons

Candy pills with ink borders and hard shadows; labels bold rounded. Hover wobbles; click bursts tiny confetti (CSS/canvas).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Sticker cards: white, ink-bordered, tilted ±2deg, with washi-tape corners and badge overlaps.

## 11. Navigation

Cream bar with sticker logo, pill links in rotating candy fills, and a bouncing CTA.

## 12. Imagery

Mascots, 3D candy renders, emoji-scale illustrations, polaroid-framed photos with doodle captions.

## 13. Icons

Chunky filled sticker icons with 2px white borders plus 2.5px ink outlines; 24–32px sizes; wildly expressive, strictly one set.

## 14. Textures / Patterns

Confetti, polka dots, squiggles, checkerboards, terrycloth noise — loud at 15–30%.

## 15. Motion

Slapstick springs: 250–400ms cubic-bezier(0.34,1.56,0.64,1); idle float on mascots; confetti on conversion actions.

Durations: micro 150–250ms, standard 350–500ms wobbles, ceremonial 800ms confetti. Easings: springs cubic-bezier(0.34,1.56,0.64,1) everywhere playful; linear forbidden.

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

- Muted palettes or corporate restraint
- Hairlines and subtle anything
- Long gray paragraphs — break into sticker bites
- Slow fades; everything should boing
- More than a glance of whitespace unfilled

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF3E4;
  --surface: #FFFFFF;
  --ink: #232323;
  --muted: #6E665D;
  --accent: #FF4FA3;
  --accent-2: #00C2FF;
  --font-display: Fredoka, Baloo 2, Comic Sans MS, sans-serif;
  --font-body: Nunito, Quicksand, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Playful Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/playful-maximalism/DESIGN.md`.*
