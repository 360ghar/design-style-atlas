---
slug: minimal-brutalism
name: "Minimal Brutalism"
description: "One black frame, one idea: gallery-spare layouts with brutalist conviction."
category: Brutalist
tags: [minimal, structural, gallery]
related: [brutalism, minimalism, japanese-minimalism]
preview:
  bg: "#FAFAF8"
  surface: "#FFFFFF"
  ink: "#101010"
  muted: "#73736F"
  accent: "#101010"
  accent2: "#4D4DFF"
  display: "Helvetica Neue, Inter, Arial, sans-serif"
  body: "Helvetica Neue, Inter, Arial, sans-serif"
---

# Minimal Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the barer, more honest interpretation — never add anything.

## 1. Overall aesthetic

A white cube with a backbone: vast empty rooms, single black-framed statements, enormous quiet type. Where neo-brutalism shouts in color, minimal brutalism whispers in structure — one rule, one idea, total conviction. Built for portfolios, architects, and galleries.

**Three principles:**

- One idea per viewport, framed in black
- Two weights of one grotesk do all typographic work
- Isolation creates value — space is the pedestal

## 2. Typography

- **Display:** Helvetica Neue, Inter, Arial, sans-serif
- **Body:** Helvetica Neue, Inter, Arial, sans-serif
- **Scale:** hero 36–52px plain grotesk, H2 26–32px, H3 20px, body 15–16px, meta/captions/labels 12–13px monospace (system mono stack).
- **Weights:** display 500–700 plain grotesk; body 400; mono labels 400–500 with no added tracking.
- **Rules:** left-aligned bare headlines with visible restraint; borders thin or absent; never decorative, never centered ceremony. Exception: buttons alone use uppercase 12px tracked labels (see §9).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF8` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#101010` | Headlines, body text |
| Muted | `#73736F` | Captions, meta, secondary text |
| Accent | `#101010` | Primary actions, highlights |
| Accent 2 | `#4D4DFF` | Single spare blue for one link, selection, or focus mark per viewport — flat only, never gradients, glows, or fills |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Gallery rhythm: one work per viewport, 120px+ pauses, 24px frame insets, tiny mono captions

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Single-column exhibition sequence; each section a framed room (2px border, 24px inset). Index page as numbered list with 2px rules. Max-width 1000px.

## 6. Borders

A single confident weight: 2px solid ink for frames and dividers, hairlines nowhere

## 7. Shadows

None at all — presence comes from scale and isolation

## 8. Radius

0px throughout

## 9. Buttons

Text-scale actions: 2px-bordered rectangles, uppercase 12px tracked labels, generous padding. Hover fills black with white text instantly.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Framed plates: 2px border, image or statement inside, mono caption at the frame's top edge or directly below it. No shadows, no fills.

## 11. Navigation

2px top and bottom rules, wordmark left, index right in mono. Fixed, white, severe.

## 12. Imagery

One image at a time, large, bordered, captioned like an exhibit plate. Grayscale or muted; no collages.

## 13. Icons

Effectively none — numerals and arrows (→) in mono serve as wayfinding.

## 14. Textures / Patterns

Flat gallery white; faint concrete or paper grain at 3% maximum.

## 15. Motion

Stillness with intent: instant hover inversions; optional 500ms linear fade-in on scroll (disabled under `prefers-reduced-motion`). No image zoom, no parallax, no springs.

Durations: hovers instant–150ms; scroll fades 500ms max. Easings: linear only; no springs, no flourishes.

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

- Color fills or accent hues beyond one blue
- Multiple ideas competing in one viewport
- Shadows, radius, or decoration
- Small timid type
- Carousels — sequence vertically instead

## 20. Quick-start snippet

```css
:root {
  --bg: #FAFAF8;
  --surface: #FFFFFF;
  --ink: #101010;
  --muted: #73736F;
  --accent: #101010;
  --accent-2: #4D4DFF;
  --font-display: Helvetica Neue, Inter, Arial, sans-serif;
  --font-body: Helvetica Neue, Inter, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Minimal Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/minimal-brutalism/DESIGN.md`.*
