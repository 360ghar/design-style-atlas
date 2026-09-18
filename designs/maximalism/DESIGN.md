---
slug: maximalism
name: "Maximalism"
description: "More is more: layered color, pattern and ornament in joyful overload."
category: Maximalist
tags: [maximalist, layered, ornate]
related: [playful-maximalism, editorial-maximalism, psychedelic-maximalism]
preview:
  bg: "#1E1B2E"
  surface: "#2A2540"
  ink: "#F5EFE0"
  muted: "#A89FC0"
  accent: "#FF4FA3"
  accent2: "#FFD802"
  display: "Playfair Display, Georgia, serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more abundant interpretation — restraint is failure.

## 1. Overall aesthetic

Maximalism celebrates abundance: jewel tones, damask and animal prints, gallery walls of mismatched frames, tassels rendered in CSS. Every surface holds something — pattern on pattern, serif on serif. It suits hospitality, beauty, and brands whose promise is richness itself. Restraint would be a broken promise.

**Three principles:**

- Layer relentlessly: pattern over color over texture over type
- Jewel tones and metallics; neutrals only as breathing seams
- Ornament is content — trim, fringe, and frames carry meaning

## 2. Typography

- **Display:** Playfair Display, Georgia, serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 56–96px layered serif, H2 36–48px, H3 24–28px, body 16–17px, meta/labels 12–14px bold tracked uppercase.
- **Weights:** display 700–900; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** layered centered and flush-left headlines colliding; symmetry optional; never empty space, never whisper.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1E1B2E` | Page ground |
| Surface | `#2A2540` | Cards, panels, wells |
| Ink | `#F5EFE0` | Headlines, body text |
| Muted | `#A89FC0` | Captions, meta, secondary text |
| Accent | `#FF4FA3` | Primary actions, highlights |
| Accent 2 | `#FFD802` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Abundant and layered: overlapping bands, 24px panel padding, 72–100px sections, collaged margins

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Collaged abundance: overlapping bands and frames, gallery-wall grids, full-bleed patterned chapters. Max-width 1280px but edges constantly bleed.

## 6. Borders

Ornamental borders: double gold rules, patterned trims, 2px contrasting keylines around layered panels

## 7. Shadows

Rich and deep: 0 20px 60px rgba(0,0,0,0.45), gold glows 0 0 40px rgba(255,216,2,0.25)

## 8. Radius

12–20px lush rounding; arches and scallops welcome

## 9. Buttons

Jeweled buttons: gradient or velvet fills, gold 2px borders, serif labels with letterspacing. Hover glows gold; press sinks into pile.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Layered panels: patterned grounds, gold keylines, cameo medallions, ribbon corners. Shadows deep and warm.

## 11. Navigation

Ornate bar: monogram crest, serif links with gold hover underlines, jeweled CTA. Patterned trim top and bottom.

## 12. Imagery

Opulent photography: velvet, marble, florals, candlelight, peacocks. Gilt frames (CSS borders) on every image, mismatched deliberately.

## 13. Icons

Ornamental glyphs: filigree dividers, crest-like marks, gold thin-stroke icons. Emoji-scale richness in moderation.

## 14. Textures / Patterns

Damask, velvet noise, marble veining, animal print at 10–25% — texture is a headline act, not a background.

## 15. Motion

Lush motion: micro 150–250ms, standard 400–600ms festive reveals, ceremonial 800–1000ms flourishes. Slow Ken Burns on imagery; shimmer sweeps on gold. Everything moves like heavy fabric.

Durations: micro 150–250ms, standard 350–550ms festive reveals, ceremonial 800–1000ms flourishes. Easings: bouncy springs cubic-bezier(0.34,1.56,0.64,1) welcome; never funereal fades.

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

- Whitespace as a feature — fill it with intent
- Flat grays or corporate blue
- Single typeface throughout
- Sharp brutalist geometry
- Fast snappy micro-interactions

## 20. Quick-start snippet

```css
:root {
  --bg: #1E1B2E;
  --surface: #2A2540;
  --ink: #F5EFE0;
  --muted: #A89FC0;
  --accent: #FF4FA3;
  --accent-2: #FFD802;
  --font-display: Playfair Display, Georgia, serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/maximalism/DESIGN.md`.*
