---
slug: generative-algorithmic
name: "Generative / Algorithmic"
description: "Systems-made visuals: code-drawn patterns, live parameters and data beauty."
category: Experimental
tags: [generative, code-art, data]
related: [scrollytelling, surrealism, dreamcore]
preview:
  bg: "#0A0A0B"
  surface: "#131316"
  ink: "#F2F0EA"
  muted: "#8A877E"
  accent: "#D6FF3F"
  accent2: "#7C5CFF"
  display: "Space Grotesk, IBM Plex Mono, sans-serif"
  body: "Inter, IBM Plex Mono, monospace"
---

# Generative / Algorithmic — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more systematic, rule-visible interpretation — show the algorithm.

## 1. Overall aesthetic

The algorithm is the artist: canvas-drawn flows, parametric grids, seed-based editions, sliders that re-grow the visuals. Transparent systems, beautiful outputs. For AI products, data tools, festivals, and studios.

**Three principles:**

- Show the system: seeds, parameters, and code are content
- Every visual reproducible from a seed — display it
- Interactivity grows understanding: sliders > paragraphs

## 2. Typography

- **Display:** Space Grotesk, IBM Plex Mono, sans-serif
- **Body:** Inter, IBM Plex Mono, monospace
- **Scale:** hero 40–64px Space Grotesk/IBM Plex Mono systematic headlines, H2 28–36px, H3 20px, body 14–16px mono-data, meta/labels 12px parameter labels.
- **Weights:** display 500–700 systematic; body 400; labels 500–600 mono with parameter honesty.
- **Rules:** grid-field headlines with visible rules, seeds, and plotter lines; data overlays; never organic decoration.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A0B` | Page ground |
| Surface | `#131316` | Cards, panels, wells |
| Ink | `#F2F0EA` | Headlines, body text |
| Muted | `#8A877E` | Captions, meta, secondary text |
| Accent | `#D6FF3F` | Primary actions, highlights |
| Accent 2 | `#7C5CFF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Lab rhythm: live canvas hero, parameter decks, gallery of seeds, 88–110px sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Lab scroll: live hero canvas + parameter deck, gallery of seeds (regenerate!), methodology band, API CTA.

## 6. Borders

System frames: 1px solid #FFFFFF1F (white 12%), parameter-readout chips, seed displays (SEED #4821)

## 7. Shadows

Data glow: 0 0 30px rgba(214,255,63,0.15); canvas bloom on dark

## 8. Radius

2–8px; system-sharp with soft panels

## 9. Buttons

Lab controls: regenerate (dice), slider decks, seed chips, export PNG. Primary: #D6FF3F bg, #0A0A0B text.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Seed cards: canvas thumb + seed number + parameter readout + remix button.

## 11. Navigation

System bar: mark, gallery/method/API links, live seed readout, export CTA.

## 12. Imagery

Canvas-generated: flows, grids, topographies. No stock — the system draws everything.

## 13. Icons

Dice, sliders, seeds, export glyphs — lab-instrument style, mono labels.

## 14. Textures / Patterns

Canvas grain, plotter lines, halftone-from-code. Generated, never pasted.

## 15. Motion

Living canvases (rAF, paused offscreen + reduced-motion stills); parameter morphs 400ms; seed transitions.

Durations: micro 100–200ms, standard 400–700ms seeded redraws. Easings: linear and steps() for plotter logic; bouncy springs forbidden.

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

- Static fake-generative gradients
- Hiding seeds/parameters (kills trust)
- Heavy canvases without perf budgets
- Unexplained randomness
- Motion without pause controls

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0A0B;
  --surface: #131316;
  --ink: #F2F0EA;
  --muted: #8A877E;
  --accent: #D6FF3F;
  --accent-2: #7C5CFF;
  --font-display: Space Grotesk, IBM Plex Mono, sans-serif;
  --font-body: Inter, IBM Plex Mono, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Generative / Algorithmic -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/generative-algorithmic/DESIGN.md`.*
