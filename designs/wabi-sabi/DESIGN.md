---
slug: wabi-sabi
name: "Wabi-Sabi"
description: "Perfect imperfection: asymmetry, cracks and weathered beauty, honored."
category: Organic & Calm
tags: [wabi-sabi, imperfect, serene]
related: [japanese-minimalism, organic-biophilic, eco-sustainable]
preview:
  bg: "#EFE9DD"
  surface: "#F7F3E9"
  ink: "#3A352C"
  muted: "#746D65"
  accent: "#9C2B2E"
  accent2: "#4A5D4E"
  display: "Cormorant Garamond, Yu Mincho, serif"
  body: "EB Garamond, Georgia, serif"
---

# Wabi-Sabi — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more imperfect interpretation — cracks are beauty.

## 1. Overall aesthetic

Beauty in the broken: cracked bowls mended with gold, weathered wood, uneven edges, moss in the margins. Asymmetric, impermanent, incomplete — and complete because of it. For tea, ceramics, slow travel, and contemplative brands.

**Three principles:**

- Honor the crack: kintsugi seams are features
- Asymmetry and incompleteness feel alive
- Weathered materials over new ones, always

## 2. Typography

- **Display:** Cormorant Garamond, Yu Mincho, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 28–44px weathered Cormorant/Yu Mincho, H2 22–30px, H3 18–20px, body 15–16px wide leading, meta/labels 11–12px humble labels.
- **Weights:** display 400–500 weathered; body 400; labels 400–500 with +0.1–0.18em tracking (never bold perfection).
- **Rules:** asymmetric, intentionally off-center headlines with cracked and mended textures; never symmetry, never polish.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EFE9DD` | Page ground |
| Surface | `#F7F3E9` | Cards, panels, wells |
| Ink | `#3A352C` | Headlines, body text |
| Muted | `#746D65` | Captions, meta, secondary text |
| Accent | `#9C2B2E` | Primary actions, highlights |
| Accent 2 | `#4A5D4E` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Contemplative: vast ma pauses (140px+), off-center placements, single-object views

Use an 8px base unit (4px for dense product UI). Section padding 96–140px vertical; card padding 24–32px; never let text touch a container edge.

## 5. Layout / Grid

Tea-garden sequence: single-object views, gold-seam dividers, poem-like captions, quiet maker colophon. Max-width 1000px.

## 6. Borders

Weathered edges: torn deckle masks, 2–3px kintsugi seams (production #C9A24B metallic gold; previews use Accent #9C2B2E), 1px ash-gray hairlines (#746D65 at 40%)

## 7. Shadows

Faint and warm: 0 4px 16px rgba(58,53,44,0.08); seam glow 0 0 8px rgba(201,162,75,0.25)

## 8. Radius

Irregular: hand-torn edges, 2–6px uneven, kintsugi gold seams as dividers

## 9. Buttons

Quiet ink rectangles with gold-seam hover; tea-order CTAs ceremonial and few.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Object plates: weathered grounds, gold seam accents, wabi captions. No grids of plenty.

## 11. Navigation

Whisper bar: mark, two links, cart. Fades to a gold hairline on scroll.

## 12. Imagery

Cracked ceramics, moss gardens, weathered wood, morning mist. Desaturated warmth, soft focus edges.

## 13. Icons

Enso circles, crack lines, stone stacks — minimal Zen glyphs.

## 14. Textures / Patterns

Clay, ash, moss, gold dust at 6–12%. Imperfection rendered faithfully.

## 15. Motion

Stillness: 600ms breath fades, drifting mist, gold-seam draws. Silence between moves.

Durations: micro 250–400ms, standard 600–900ms slow patina fades. Easings: barely-there ease-out; hurried or bouncy motion forbidden.

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

- Symmetry and polish
- Bright new-looking materials
- Dense grids
- Fast motion or urgency
- More than one gold seam per view

## 20. Quick-start snippet

```css
:root {
  --bg: #EFE9DD;
  --surface: #F7F3E9;
  --ink: #3A352C;
  --muted: #746D65;
  --accent: #9C2B2E;
  --accent-2: #4A5D4E;
  --font-display: Cormorant Garamond, Yu Mincho, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Wabi-Sabi -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/wabi-sabi/DESIGN.md`.*
