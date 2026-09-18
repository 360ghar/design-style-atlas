---
slug: editorial-magazine
name: "Editorial / Magazine"
description: "Magazine-inspired layouts driven by expressive typography and imagery."
category: Editorial & Print
tags: [editorial, magazine, typography]
related: [swiss-design, editorial-minimalism, editorial-brutalism]
preview:
  bg: "#FFFFFF"
  surface: "#F7F4EE"
  ink: "#191817"
  muted: "#746E68"
  accent: "#B3001B"
  accent2: "#8C6A2B"
  display: "Playfair Display, Georgia, serif"
  body: "Source Serif 4, Georgia, serif"
---

# Editorial / Magazine — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more composed, spread-like interpretation.

## 1. Overall aesthetic

A glossy monthly rendered interactive: cover-style openers, department grids, pull quotes, folios, and captioned figures. Serif display with italic accents, red kickers, generous photography. Authority through editing — every page feels art-directed.

**Three principles:**

- Art-direct every scroll: alternate openers, wells, and breakouts
- Pull quotes and captions are design elements, not afterthoughts
- Departments (recurring grids) create ritual and return visits

## 2. Typography

- **Display:** Playfair Display, Georgia, serif
- **Body:** Source Serif 4, Georgia, serif
- **Scale:** hero 44–72px Playfair/Georgia cover serif, H2 30–40px, H3 21–24px, body 15–16px at 660px measure, meta/labels 11–12px tracked uppercase kickers.
- **Weights:** display 600–800 serif; body 400; labels 600–700 with +0.12–0.2em tracking.
- **Rules:** cover-style headlines with drop-caps, pull-quotes, and column spans; centered covers allowed; body never justified except narrow columns.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F7F4EE` | Cards, panels, wells |
| Ink | `#191817` | Headlines, body text |
| Muted | `#746E68` | Captions, meta, secondary text |
| Accent | `#B3001B` | Primary actions, highlights |
| Accent 2 | `#8C6A2B` | Folios, figure credits, hairline rules on cream |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Spread rhythm: 72–110px features, 24px baseline grid, 65ch measure, pull quotes breaking columns; card padding 20–24px

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Issue architecture: cover opener, TOC index, feature wells, department grids, back-page sign-off. Max-width 1240px with full-bleed openers.

## 6. Borders

Magazine rules: masthead double rules (3px double #191817), column hairlines (1px #19181722), captioned figure frames (1px #19181733)

## 7. Shadows

None — ink on paper

## 8. Radius

0–3px print sharp

## 9. Buttons

Subscribe bars (ink fill, white serif caps), text-link reads, bookmark ribbons. Hover floods red.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Story packages with kicker/headline/dek/byline; cover tiles with issue-style typography; no floating shadows.

## 11. Navigation

Masthead: date + issue, centered serif wordmark, double rule, department links in small caps.

## 12. Imagery

Commissioned-feel photography: portraits, reportage, still life. Full-bleed openers, captioned figures, credit lines.

## 13. Icons

Minimal: section numerals, arrows, save ribbons. Ornaments (❦) as dividers.

## 14. Textures / Patterns

Coated-paper flat with 3% grain; cover gloss via subtle top-light gradient on openers only.

## 15. Motion

Page-turn calm: 250ms fades, cover Ken Burns (slow), smooth anchor scroll. Nothing bouncy.

Durations: micro 150–250ms, standard 350–550ms page-turn fades. Easings: soft editorial ease-out; bouncy springs forbidden.

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

- Card-shadow SaaS patterns
- Sans-serif display headlines
- Autoplay video openers
- Infinite scroll without issue structure
- Popups interrupting reading

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F7F4EE;
  --ink: #191817;
  --muted: #746E68;
  --accent: #B3001B;
  --accent-2: #8C6A2B;
  --font-display: Playfair Display, Georgia, serif;
  --font-body: Source Serif 4, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Editorial / Magazine -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/editorial-magazine/DESIGN.md`.*
