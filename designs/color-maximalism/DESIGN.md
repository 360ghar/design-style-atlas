---
slug: color-maximalism
name: "Color Maximalism"
description: "Unapologetic saturation: full-spectrum fields, clashing grounds, dopamine UX."
category: Maximalist
tags: [colorful, saturated, dopamine]
related: [colorful-brutalism, maximalism, playful-maximalism]
preview:
  bg: "#FFD802"
  surface: "#FFFFFF"
  ink: "#161616"
  muted: "#675E54"
  accent: "#FF2E88"
  accent2: "#2B4EFF"
  display: "Archivo Black, Inter Tight, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Color Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more saturated interpretation — beige is the enemy.

## 1. Overall aesthetic

Dopamine dressing for interfaces: every section a saturated field — taxi yellow, hot pink, cobalt — with white content cards floating on top. Color carries the information architecture. For food, music, kids, fitness, and festival brands where energy IS the product.

**Three principles:**

- One saturated ground per section; never repeat adjacently
- White cards float content above the noise
- Black keylines keep clashing hues from vibrating apart

## 2. Typography

- **Display:** Archivo Black, Inter Tight, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 52–88px Archivo Black on hot grounds, H2 34–44px, H3 24px, body 16–17px, meta/labels 12–14px bold uppercase.
- **Weights:** display 800–900; body 400–500; labels 700–900 with +0.06–0.12em tracking.
- **Rules:** flush-left and centered black type on clashing saturated fields; color-block sections; never muted palettes, never thin weights.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFD802` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#161616` | Headlines, body text |
| Muted | `#675E54` | Captions, meta, secondary text |
| Accent | `#FF2E88` | Primary actions, highlights |
| Accent 2 | `#2B4EFF` | Secondary moments, gradients, glows |

Extended spectrum (alternating chapters only, never adjacent repeats): cyan `#00C2FF`, hot pink `#FF2E88` (= Accent). Gradients and glows allowed — this separates Color Maximalism from Colorful Brutalism (flat-only).

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs. Accent fills take ink/black labels — white on `#FF2E88` is 3.5:1 and never ships.

## 4. Spacing

High-energy rhythm: full-bleed color chapters every 64–88px, white cards floating with 24px padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Color-chapter scroll: full-bleed saturated bands, white rounded cards inside, rainbow rules between. Max-width 1200px content wells.

## 6. Borders

Thick ink or white keylines (3px) separating color fields; rainbow divider strips

## 7. Shadows

Saturated color shadows: 8px 8px 0 rgba(22,22,22,1) on cards; colored glows matching grounds

## 8. Radius

14–20px juicy rounding on white content cards

## 9. Buttons

Ink-black buttons on color grounds (white text), or white buttons with ink text on dark grounds. Accent `#FF2E88` fills take ink/black labels, never white (3.5:1). Hover inverts with a pop.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White juicy cards with 16px radius and hard ink shadows on saturated grounds; colored header chips.

## 11. Navigation

Ink bar with rainbow underline, or white bar over the hero ground; CTA in clashing accent.

## 12. Imagery

High-saturation photography with boosted contrast; cut-out stickers; duotone overlays in section hues.

## 13. Icons

Bold duotone icons: ink glyph on candy chip. Thick strokes, high energy.

## 14. Textures / Patterns

Halftone dots, diagonal candy stripes, confetti at 10–20% over color grounds.

## 15. Motion

Snappy color-wipe transitions between chapters; hover pops 150ms; marquee rainbow tickers.

Durations: micro 150–250ms, standard 350–500ms saturated panel swaps, ceremonial 800ms. Easings: punchy ease-out with spring pops; funereal fades forbidden.

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

- White/gray section grounds
- Muted or pastel-only palettes
- Thin borders and soft gray shadows
- Long text directly on saturated grounds (use cards)
- Autumnal or corporate color stories

## 20. Quick-start snippet

```css
:root {
  --bg: #FFD802;
  --surface: #FFFFFF;
  --ink: #161616;
  --muted: #675E54;
  --accent: #FF2E88;
  --accent-2: #2B4EFF;
  --font-display: Archivo Black, Inter Tight, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Color Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/color-maximalism/DESIGN.md`.*
