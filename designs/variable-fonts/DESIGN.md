---
slug: variable-fonts
name: "Variable Fonts"
description: "Living letterforms: weight, width and optical size reacting to context."
category: Type-Led
tags: [variable, interactive-type, fluid]
related: [psychedelic-maximalism, typography-first, oversized-typography]
preview:
  bg: "#F4F2ED"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#6E6A61"
  accent: "#E30613"
  accent2: "#1D4ED8"
  display: "Inter Variable, Fraunces Variable, sans-serif"
  body: "Inter Variable, system-ui, sans-serif"
---

# Variable Fonts — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more fluid, axis-shifting interpretation — show the variable range.

## 1. Overall aesthetic

A type lab you can play: headlines whose weight follows scroll or cursor, width that breathes with viewport, optical sizes that snap at breakpoints. Interactive specimens teach the system. For foundries, design tools, and brands with a voice that modulates.

**Three principles:**

- Map axes to meaning: weight = emphasis, width = space, italic = aside
- Show the controls: sliders and readouts invite play
- Performant play: font-variation-settings with will-change discipline

## 2. Typography

- **Display:** Inter Variable, Fraunces Variable, sans-serif
- **Body:** Inter Variable, system-ui, sans-serif
- **Scale:** hero 44–80px variable display (Fraunces/Inter Variable), H2 30–42px, H3 22px, body 15–17px, meta/labels 12–13px with width-axis labels.
- **Weights:** display variable 300–900 demonstrated; body 400–500; labels 500–600 with axis annotations.
- **Rules:** headlines that morph weight, width, and optical size interactively; sliders welcome; never static single-weight layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F2ED` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#1D4ED8` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Specimen rhythm: giant interactive lines (10vw), axis control decks, 72–96px lab sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Lab sequence: playable hero line + axis deck, waterfall specimens, pairing playground, buy/get section. Max-width 1280px.

## 6. Borders

Specimen frames: 1–2px ink rules, axis sliders styled as lab controls, waterfall dividers

## 7. Shadows

Lab-calm: 0 4px 20px rgba(0,0,0,0.06) on playground panels; type stays flat

## 8. Radius

0–8px; type playgrounds sharp, UI softly rounded

## 9. Buttons

Lab controls: axis sliders, preset chips (Caption → Display), Get-the-font CTA in ink. Readouts in mono.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Specimen panels: bordered playgrounds with axis labels, waterfall rows, pairing cards.

## 11. Navigation

Foundry bar: wordmark, family index, weights dropdown, trial CTA. Axis readout in mono.

## 12. Imagery

Type specimens as imagery; process sketches; variable animations exported as loops.

## 13. Icons

Axis glyphs (wght/wdth/opsz), play/reset, download — lab-instrument style.

## 14. Textures / Patterns

Paper flat; slider-track grooves; faint waterfall gridlines.

## 15. Motion

The product: scroll/cursor-mapped variation (rAF-throttled), preset morphs 400ms. Reduced-motion = preset stepper.

Durations: live axis interpolation 200–500ms; micro 100–200ms. Easings: smooth ease-out axis glides; bouncy springs forbidden.

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

- Animating axes on body copy (display only)
- Janky unthrottled variation updates
- Hiding axis values (show the numbers!)
- Too many families at once
- Faux bold/italic on variable files

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F2ED;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #6E6A61;
  --accent: #E30613;
  --accent-2: #1D4ED8;
  --font-display: Inter Variable, Fraunces Variable, sans-serif;
  --font-body: Inter Variable, system-ui, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Variable Fonts -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/variable-fonts/DESIGN.md`.*
