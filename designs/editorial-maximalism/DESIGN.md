---
slug: editorial-maximalism
name: "Editorial Maximalism"
description: "Magazine excess: colliding headlines, pull quotes and image pile-ups."
category: Maximalist
tags: [editorial, collage, print]
related: [editorial-minimalism, editorial-brutalism, post-brutalism]
preview:
  bg: "#F6F1E7"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E675C"
  accent: "#C81E1E"
  accent2: "#0F4C81"
  display: "Playfair Display, Didot, Georgia, serif"
  body: "Georgia, Source Serif 4, serif"
---

# Editorial Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the grander, more operatic interpretation.

## 1. Overall aesthetic

A fashion issue exploded across the screen: colliding serif headlines, oversized pull quotes, image pile-ups, red kickers, and footnotes as decoration. High-low mixing — couture imagery beside raw rules. For publishers and brands with editorial nerve.

**Three principles:**

- Headlines collide: overlap, scale-clash, and interrupt the grid
- Print devices at poster scale: kickers, folios, pull quotes, captions
- Red + ink + paper; photography supplies the rest

## 2. Typography

- **Display:** Playfair Display, Didot, Georgia, serif
- **Body:** Georgia, Source Serif 4, serif
- **Scale:** hero 56–96px Didot/Playfair display, H2 36–48px, H3 24–28px, body 16–17px in rich columns, meta/labels 12–14px tracked uppercase.
- **Weights:** display 700–900 high-contrast serif; body 400–500; labels 700 with +0.1–0.18em tracking.
- **Rules:** centered and oversized serif headlines with pull-quotes and marginalia; justified accents allowed; never minimal whitespace worship.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F6F1E7` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#C81E1E` | Primary actions, highlights |
| Accent 2 | `#0F4C81` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Newsstand density: overlapping kickers, 16px story rhythm, giant 72–140px headlines, full-bleed breaks

Use an 8px base unit (4px for dense product UI). Section padding 72–96px desktop / 40–48px mobile; card padding 24–32px; never let text touch a container edge (16px minimum inset).

## 5. Layout / Grid

Magazine spread logic: full-bleed openers, multi-column wells, breakout pull quotes spanning gutters, folio footers. Max-width 1400px.

## 6. Borders

Print rules: thick-thin-thick masthead rules, 2px story frames, red kickers with rules

## 7. Shadows

Print-flat: none, except hard offset drop-shadows (8px 8px 0 ink) on pull-quote blocks

## 8. Radius

0–4px print-sharp; torn edges via clip-path welcome

## 9. Buttons

Ink bars with white serif caps labels; red hover flood. Bookmark-style ribbons for saves.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Story packages: kicker + headline + lede + byline + rule stacks; image-led features break the grid deliberately.

## 11. Navigation

Masthead with issue number, giant serif wordmark, section tabs in small caps; red breaking strip optional.

## 12. Imagery

Fashion-grade photography, full-bleed openers, contact-sheet grids, captioned figures. Grayscale-to-color hover reveals.

## 13. Icons

Typographic ornaments and section numerals; star ratings and arrows in serif style.

## 14. Textures / Patterns

Newsprint grain 5–8%, halftone portraits, registration-mark motifs in margins.

## 15. Motion

Editorial reveals: clip-path headline wipes, image scale-settle 600ms, footnote smooth-scroll. No bounce.

Durations: micro 150–250ms, standard 400–600ms curtain reveals, ceremonial up to 1000ms. Easings: theatrical ease-out; restrained springs for ornaments.

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

- Uniform card grids and SaaS chrome
- Sans-serif headlines
- Timid 40px headlines
- Stock-photo smiles
- Infinite scroll without issue breaks

## 20. Quick-start snippet

```css
:root {
  --bg: #F6F1E7;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E675C;
  --accent: #C81E1E;
  --accent-2: #0F4C81;
  --font-display: Playfair Display, Didot, Georgia, serif;
  --font-body: Georgia, Source Serif 4, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Editorial Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/editorial-maximalism/DESIGN.md`.*
