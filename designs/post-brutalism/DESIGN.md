---
slug: post-brutalism
name: "Post-Brutalism"
description: "Brutalism grown up: raw grids softened with refined type and restrained color."
category: Brutalist
tags: [refined, structural, editorial]
related: [editorial-minimalism, luxury-minimalism, brutalism]
preview:
  bg: "#F5F3EF"
  surface: "#FFFFFF"
  ink: "#1B1B1B"
  muted: "#75716A"
  accent: "#2B4EFF"
  accent2: "#FF5C00"
  display: "Neue Haas Grotesk, Inter Tight, Helvetica Neue, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Post-Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the rawer, more self-aware interpretation — polish is suspicion.

## 1. Overall aesthetic

What brutalism becomes after design school: the grid and honesty remain, but typography is refined, color is rationed (one electric accent per viewport), and whitespace is back on the team. Raw enough for credibility, polished enough for clients. The agency-portfolio sweet spot.

**Three principles:**

- Keep the skeleton, tailor the suit — structure raw, details refined
- One electric accent against disciplined neutrals
- Typography carries the attitude, not decoration

## 2. Typography

- **Display:** Neue Haas Grotesk, Inter Tight, Helvetica Neue, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 40–60px tight grotesk (Inter Tight), H2 28–36px, H3 20–22px, body 15–16px, meta/labels 12–13px tracked uppercase.
- **Weights:** display 600–800 tight grotesk; body 400–500; labels 600–700 with +0.08–0.12em tracking.
- **Rules:** flush-left confident headlines with raw grid edges; centered only for single statements; never nostalgic web-default ugliness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F3EF` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1B1B1B` | Headlines, body text |
| Muted | `#75716A` | Captions, meta, secondary text |
| Accent | `#2B4EFF` | Primary actions, highlights |
| Accent 2 | `#FF5C00` | Emergency-only marker (spec tick, single label); max once per viewport, never gradients/glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs. Ration color: one saturated accent per viewport — Accent owns actions, Accent 2 appears at most once as a marker.

## 4. Spacing

Disciplined 8px system; 80–110px sections; data-dense zones allowed inside strict frames

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Strong grid with confident asymmetry; bordered work-index rows; case studies alternate raw-specimen and polished-outcome views. Max-width 1280px.

## 6. Borders

1.5–2px ink structure lines; confident but not chunky

## 7. Shadows

Small hard offsets (3px 3px 0 ink) used sparingly on key actions only

## 8. Radius

4px functional rounding; sharp for editorial moments

## 9. Buttons

2px-bordered rectangles, 4px radius, with 3px 3px 0 ink hard shadows in blue or black; labels medium 14px. Hover translates -2px with shadow growing to 5px 5px 0 ink. Restrained but physical.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Bordered index rows and 2px frames with generous padding; mono meta labels; hover reveals accent edge or image.

## 11. Navigation

Ruled bar with wordmark, index links, and availability badge; mono section numbers; blue underline hovers.

## 12. Imagery

Mix of raw process shots and polished finals; duotone treatments unify; images framed with 2px borders and mono captions.

## 13. Icons

Precise 1.75px geometric icons; arrows and numerals do heavy lifting; blue used sparingly.

## 14. Textures / Patterns

Faint grid paper and spec ticks in margins; 4% grain. Studio-draft energy, controlled.

## 15. Motion

Confident 180–250ms ease-outs; image reveals with clip wipes; hover states physical but quick.

Durations: micro 100–200ms, standard 250ms. Easing: ease-out (sharp, confident); no springs, no softness, no linear looping.

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

- Full chaos color or sticker overload (that's neo-brutalism)
- Hairline-only timidity — commit to visible structure
- Generic SaaS softness
- More than one saturated accent per viewport (Accent 2 is emergency-only, max once)
- Centering everything — asymmetry is the heritage

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F3EF;
  --surface: #FFFFFF;
  --ink: #1B1B1B;
  --muted: #75716A;
  --accent: #2B4EFF;
  --accent-2: #FF5C00;
  --font-display: Neue Haas Grotesk, Inter Tight, Helvetica Neue, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Post-Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/post-brutalism/DESIGN.md`.*
