---
slug: liminal-weirdcore
name: "Liminal / Weirdcore"
description: "Threshold-space unease: empty corridors, low-fi text and strange comfort."
category: Experimental
tags: [liminal, weirdcore, strange]
related: [surrealism, dreamcore, generative-algorithmic]
preview:
  bg: "#D8D5CC"
  surface: "#E4E1D8"
  ink: "#2B2B2B"
  muted: "#6E6A61"
  accent: "#C81E1E"
  accent2: "#0F4C81"
  display: "Arial, Helvetica, sans-serif"
  body: "Arial, Verdana, sans-serif"
---

# Liminal / Weirdcore — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the emptier, more uncanny interpretation — fluorescent unease.

## 1. Overall aesthetic

Backrooms-adjacent: empty offices, pools at night, playgrounds fogged, low-fi overlaid text (YOU ARE HERE). Strange comfort through emptiness. For horror, alt-music, art, and games.

**Three principles:**

- Emptiness is the content — protect the voids
- Low-fi text overlays (IDs, arrows, HELP) as wayfinding
- Fluorescent palette: beige, tile-white, exit red

## 2. Typography

- **Display:** Arial, Helvetica, sans-serif
- **Body:** Arial, Verdana, sans-serif
- **Scale:** hero 28–48px plain Arial/Helvetica fluorescent headlines, H2 22–30px, H3 18–20px, body 14–16px, meta/labels 12px timestamp labels.
- **Weights:** display 400–700 plain; body 400; labels 400–700 with no designed tracking (found-space honesty).
- **Rules:** deadpan centered or left headlines in empty corridors and pools; timestamps; never designed beauty.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#D8D5CC` | Page ground |
| Surface | `#E4E1D8` | Cards, panels, wells |
| Ink | `#2B2B2B` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#C81E1E` | Primary actions, highlights |
| Accent 2 | `#0F4C81` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text — use Ink for all body/small text (Muted is 3.67:1 on Background / 4.12:1 on Surface, so large/meta/decorative only). Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Threshold pacing: long empty corridors (160px+ voids), sparse text islands, echoing footers

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Threshold walk: corridor hero, empty room chapters with text islands, pool-night interlude, exit-sign closer.

## 6. Borders

Institutional edges: tile grids, ceiling-grid dividers, exit-sign red accents

## 7. Shadows

Fluorescent flat: even shadowless light + vignette unease on imagery

## 8. Radius

0–4px; fluorescent-lit sharpness

## 9. Buttons

Institutional plates: beige fills, black labels, exit-red for the one true CTA.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Room cards: empty-space photo + overlay text fragment. Sparse and strange.

## 11. Navigation

Directory-plate bar: floor numbers, YOU-ARE-HERE dot, minimal links.

## 12. Imagery

Liminal photography: empty malls, corridors, pools, playgrounds. Flat fluorescent grade.

## 13. Icons

Exit signs, arrows, IDs, smileys (one, unsettling) — institutional glyphs.

## 14. Textures / Patterns

Carpet tile, ceiling grid, pool ripple, VHS grain at 8–12%.

## 15. Motion

Uncanny stillness: fluorescent hum-flicker (very subtle, safe), slow zooms into emptiness. Mostly still.

Durations: micro 200–400ms fluorescent hum flickers, standard 600ms. Easings: linear hum or steps(); choreographed motion forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, oversized display type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body/small text in Ink only (9.65:1 on Background, 10.83:1 on Surface — verified); Muted (3.67:1 / 4.12:1) and Accent (3.91:1) are large/meta/decorative only, never body. Large display 3:1 minimum.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Filling the voids (the cardinal sin)
- Bright cheerful energy
- Explaining the lore
- Horror gore (unease > shock)
- Photosensitive flicker — keep hum barely-there

## 20. Quick-start snippet

```css
:root {
  --bg: #D8D5CC;
  --surface: #E4E1D8;
  --ink: #2B2B2B;
  --muted: #6E6A61;
  --accent: #C81E1E;
  --accent-2: #0F4C81;
  --font-display: Arial, Helvetica, sans-serif;
  --font-body: Arial, Verdana, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Liminal / Weirdcore -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/liminal-weirdcore/DESIGN.md`.*
