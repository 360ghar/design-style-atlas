---
slug: art-nouveau
name: "Art Nouveau"
description: "Flowing botanical ornament: whiplash curves, stained glass and Mucha grace."
category: Heritage Luxury
tags: [art-nouveau, botanical, ornamental]
related: [art-deco, mid-century-modern, quiet-luxury]
preview:
  bg: "#F5EFE2"
  surface: "#FFFDF6"
  ink: "#3B3128"
  muted: "#7C7265"
  accent: "#687144"
  accent2: "#B3541E"
  display: "Cormorant Garamond, Playfair Display, serif"
  body: "EB Garamond, Georgia, serif"
---

# Art Nouveau — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more whiplash-curved, botanical interpretation.

## 1. Overall aesthetic

Mucha posters and Métro entrances: whiplash vines, haloed maidens (illustrated, tasteful), stained-glass color, arch windows. Romantic organic ornament. For perfume, wine, hospitality, and craft.

**Three principles:**

- Curves, never corners — whiplash lines lead the eye
- Stained-glass palette: olive, amber, teal, rust on cream
- Arches frame everything precious

## 2. Typography

- **Display:** Cormorant Garamond, Playfair Display, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 40–64px Cormorant/Playfair flowing serif, H2 28–36px, H3 21px, body 15–16px, meta/labels 11–12px organic labels.
- **Weights:** display 400–600 flowing; body 400; labels 500–600 with +0.12–0.2em tracking.
- **Rules:** centered or arching headlines inside vine borders and stained-glass frames; symmetry with curves; never hard grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5EFE2` | Page ground |
| Surface | `#FFFDF6` | Cards, panels, wells |
| Ink | `#3B3128` | Headlines, body text |
| Muted | `#7C7265` | Captions, meta, secondary text |
| Accent | `#687144` | Primary actions, highlights |
| Accent 2 | `#B3541E` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Flowing: arched compositions, 110–140px garden movements, 32px framed padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Garden gallery: arched hero cameo, vine-chapter rows, stained-glass interludes, ornate footer. Max-width 1200px.

## 6. Borders

2px vine borders in accent olive, stained-glass leading lines, arch-window frames; 1px inner keylines in accent-2 rust

## 7. Shadows

Glasshouse soft: 0 12px 32px warm/12; stained-glass glow accents

## 8. Radius

Arch windows `50% 50% 8px 8px`, oval cameos / pills 999px, small accents 8–12px; sharp corners forbidden

## 9. Buttons

Cameo buttons: arched/oval, olive fills, cream serif labels; hover glows amber.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Arch-window panels: vine frames, cameo imagery, ornamental captions.

## 11. Navigation

Arched bar: vine monogram, serif links, amber CTA. Ornamental rules.

## 12. Imagery

Botanical illustration, stained glass, portrait cameos, vineyard light. Romantic grade.

## 13. Icons

Vines, dragonflies, lilies, arches — Nouveau glyph set in olive/amber.

## 14. Textures / Patterns

Stained glass, vine patterns, paper grain, mosaic at 8–12%.

## 15. Motion

Growing vines (SVG draw on scroll), petal drifts, glow pulses. Languorous 500ms+.

Durations: micro 200–300ms, standard 500–750ms vine-unfurl reveals. Easings: slow organic ease-out; mechanical snaps forbidden.

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

- Sharp geometric modernism
- Neon or synthetic color
- Sans-serif display
- Symmetric Deco rigidity (flow, don't step)
- Fast motion

## 20. Quick-start snippet

```css
:root {
  --bg: #F5EFE2;
  --surface: #FFFDF6;
  --ink: #3B3128;
  --muted: #7C7265;
  --accent: #687144;
  --accent-2: #B3541E;
  --font-display: Cormorant Garamond, Playfair Display, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Art Nouveau -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/art-nouveau/DESIGN.md`.*
