---
slug: surrealism
name: "Surrealism"
description: "Dream-logic interfaces: floating objects, impossible scale and poetic dissonance."
category: Experimental
tags: [surreal, dream, art]
related: [dreamcore, liminal-weirdcore, generative-algorithmic]
preview:
  bg: "#EDE6D8"
  surface: "#F7F2E7"
  ink: "#2B2620"
  muted: "#7A7468"
  accent: "#0F4C81"
  accent2: "#C81E1E"
  display: "Cormorant Garamond, Georgia, serif"
  body: "EB Garamond, Georgia, serif"
---

# Surrealism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the stranger, more dream-logic interpretation.

## 1. Overall aesthetic

Dalí's waiting room: melting clocks optional (one, earned), floating staircases, giant eggs, tiny figures in vast skies. Poetic dissonance with museum manners. For galleries, perfume, film, and brands selling mystery.

**Three principles:**

- One impossibility per view — dreams are sparse
- Vast skies make small objects profound
- Captions are poetry, not UX copy

## 2. Typography

- **Display:** Cormorant Garamond, Georgia, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 44–72px Cormorant/Georgia melting serif, H2 30–40px uncanny, H3 21–22px, body 16–17px, meta/labels 12–13px museum-placard labels.
- **Weights:** display 400–700 uncanny serif; body 400; labels 500 with +0.1–0.18em tracking.
- **Rules:** floating, melting, or doubled headlines in impossible scenes; placard captions; never rational grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EDE6D8` | Page ground |
| Surface | `#F7F2E7` | Cards, panels, wells |
| Ink | `#2B2620` | Headlines, body text |
| Muted | `#7A7468` | Captions, meta, secondary text |
| Accent | `#0F4C81` | Primary actions, highlights |
| Accent 2 | `#C81E1E` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Gallery-dream pacing: vast skies (140px+), single floating subjects, poem captions

Use an 8px base unit (4px for dense product UI). Section padding 120–160px desktop / 64–80px mobile; card padding 24–32px; caption gap 16–24px below object; never let text touch a container edge.

## 5. Layout / Grid

Dream sequence: sky hero with floating subject, horizon chapters, cabinet-of-curiosities grid, waking CTA.

## 6. Borders

Horizon lines 1px ink/20, oval frames 2px ink, shadow-casting rules (objects float 24–40px above grounds)

## 7. Shadows

Impossible light: long dramatic shadows (0 30px 60px warm/25) under floating objects

## 8. Radius

Oval cameos 50% elliptical, arch portals 999px top / 16px bottom, cloud blobs 32–48px

## 9. Buttons

Portal buttons: oval/arch outlines, serif labels; hover levitates. Few and ceremonial.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Curiosity plates: floating object + shadow + poem caption. No grids of many.

## 11. Navigation

Whisper bar over skies: small mark, three dream links. Dissolves on scroll.

## 12. Imagery

Impossible photography and illustration: floating objects, vast skies, ladders to nowhere. Warm desaturated grade.

## 13. Icons

Keys, eyes, eggs, ladders — dream glyphs, thin and few.

## 14. Textures / Patterns

Cloud grain, canvas weave, desert sand at 6–10%.

## 15. Motion

Levitating idles (8s float), slow parallax skies, melting transitions (rare, earned). Hypnotic slowness.

Durations: micro 200–300ms, standard 500–900ms slow levitation loops. Easings: dreamy ease-in-out; hurried or bouncy motion forbidden.

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

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Multiple impossibilities competing
- Explaining the dream (no lore dumps)
- Bright candy color
- Fast motion
- Cluttered curiosity cabinets

## 20. Quick-start snippet

```css
:root {
  --bg: #EDE6D8;
  --surface: #F7F2E7;
  --ink: #2B2620;
  --muted: #7A7468;
  --accent: #0F4C81;
  --accent-2: #C81E1E;
  --font-display: Cormorant Garamond, Georgia, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Surrealism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/surrealism/DESIGN.md`.*
