---
slug: neo-brutalism
name: "Neo-Brutalism"
description: "Bold borders, hard shadows, saturated colors and deliberately raw interfaces."
category: Brutalist
tags: [bold, high-contrast, playful]
related: [brutalism, playful-brutalism, corporate-brutalism]
preview:
  bg: "#FFF6E5"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6B6257"
  accent: "#FF5C00"
  accent2: "#2B4EFF"
  display: "Archivo Black, Arial Black, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Neo-Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the rawer, more confrontational interpretation — never soften it.

## 1. Overall aesthetic

Neo-brutalism is brutalism with a spray can: the raw structure stays, but surfaces explode with saturated color — orange, blue, lime, pink — inside thick black frames. Sticker-like badges, rotated labels, starbursts, and hard shadows make every element feel printed, cut out, and slapped on. Loud, confident, and engineered to be memorable.

**Three principles:**

- Everything gets a border and a hard shadow — no floating elements
- Saturated color fields clash on purpose; black holds them together
- Type is big, black, and uppercase; hierarchy through scale and weight

## 2. Typography

- **Display:** Archivo Black, Arial Black, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–72px Archivo Black, H2 32–40px, H3 22–24px, body 16–17px, meta/labels 12–14px bold uppercase with borders.
- **Weights:** display 800–900; body 400–500; labels 700–900 with +0.04–0.08em tracking.
- **Rules:** flush-left heavy headlines inside thick-bordered boxes; centered only for sticker badges; never delicate serif layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF6E5` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#6B6257` | Captions, meta, secondary text |
| Accent | `#FF5C00` | Primary actions, highlights |
| Accent 2 | `#2B4EFF` | Secondary stickers, badges, highlight blocks (flat fills only — never gradients or glows) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base; chunky 20–28px card padding; sections 72–104px; sticker labels with 8–12px padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Blocky asymmetric grid with overlapping stickers and starbursts; alternating saturated section grounds (cream → yellow → blue). Marquee tickers divide chapters. Max-width 1200px with full-bleed color bands.

## 6. Borders

2–3px solid #111111 on every card, button, input, and tag — borders are the design

## 7. Shadows

Hard offset shadows: 4px 4px 0 #111111 (cards), 6px 6px 0 on heroes; zero blur, always

## 8. Radius

0–6px; cards often sharp, stickers and tags fully pill (999px)

## 9. Buttons

3px-bordered rectangles with hard 4px shadows and uppercase bold labels; primary in accent, secondary white. Hover translates (-2px,-2px) and grows shadow to 6px; active presses flat (0 shadow).

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White or pastel cards, 3px black border, 4–6px hard shadow, sharp or slightly rounded corners. Header strip in accent with black title; footer row with sticker tags.

## 11. Navigation

Cream bar with 3px black bottom border; logo in a black box; links uppercase bold with highlighter hover; CTA is an accent button with hard shadow.

## 12. Imagery

Bold flat illustration, halftone textures, cut-out stickers, thick-outlined doodles. Photos get 3px borders + hard shadows and slight rotation.

## 13. Icons

Thick 2.5px-stroke icons in black circles/squares, or filled sticker icons with white borders. Chunky and few.

## 14. Textures / Patterns

Halftone dots, diagonal stripes, checkerboards, and grain at 8–15% — print-shop energy on section grounds.

## 15. Motion

Snappy 150ms steps; hover lifts with shadow growth; marquee tickers scroll; sticker wiggles on hover. No soft fades — moves are mechanical and proud.

Durations: instant–150ms hard cuts with thick shadow pops; no fades. Easings: none or steps(2); no springs, no smooth ease-outs.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use Ink for the ring so focus stays visible).
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

- Blurred soft shadows or glassmorphism
- Thin 1px borders or hairline anything
- Muted corporate palettes
- Rounded-3xl blob shapes
- Timid small type — go big or go home

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF6E5;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #6B6257;
  --accent: #FF5C00;
  --accent-2: #2B4EFF;
  --font-display: Archivo Black, Arial Black, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Neo-Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/neo-brutalism/DESIGN.md`.*
