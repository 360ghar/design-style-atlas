---
slug: graffiti-streetwear
name: "Graffiti / Streetwear"
description: "Concrete-culture edge: tags, drips and drop-model urgency."
category: Neon & Play
tags: [graffiti, streetwear, urban]
related: [pixel-8bit, gaming-ui, comic-pop-art]
preview:
  bg: "#111111"
  surface: "#1A1A1A"
  ink: "#F5F2EA"
  muted: "#8A877E"
  accent: "#D6FF3F"
  accent2: "#FF4D00"
  display: "Permanent Marker, Archivo Black, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Graffiti / Streetwear — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the rawer, more tagged-up interpretation.

## 1. Overall aesthetic

A fresh wall at 2am: wildstyle tags, wheat-paste layers, sticker slaps, drop countdowns, sold-out stamps. Hype with concrete credibility. For streetwear, sneakers, music, energy drinks, and youth culture.

**Three principles:**

- Tags are signatures — commission real lettering
- Drops drive design: countdowns, stock bars, stamps
- Concrete textures ground the hype

## 2. Typography

- **Display:** Permanent Marker, Archivo Black, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 52–88px Permanent Marker/Archivo Black tags, H2 32–44px, H3 24px, body 16–17px, meta/labels 12–14px spray-stencil labels.
- **Weights:** display 700–900 tagged; body 400–500; labels 700 with drip treatments.
- **Rules:** wildstyle headlines with drips, arrows, and wheatpaste layers; wall logic; never gallery restraint.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#111111` | Page ground |
| Surface | `#1A1A1A` | Cards, panels, wells |
| Ink | `#F5F2EA` | Headlines, body text |
| Muted | `#8A877E` | Captions, meta, secondary text |
| Accent | `#D6FF3F` | Primary actions, highlights |
| Accent 2 | `#FF4D00` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Drop rhythm: countdown hero, wall-of-fame grids, 72–96px chapters, sold-out stamps

Use an 8px base unit (4px for dense product UI). Section padding 72–96px, card padding 20–24px, 16px product-grid gaps; never let text touch a container edge.

## 5. Layout / Grid

Drop sequence: countdown hero, lookbook wall, 2–4-col product grid with stock bars, wall-of-fame UGC, restock footer. Max-width 1200px, 16–24px gutters.

## 6. Borders

Spray edges: rough SVG masks, 12–24px drip dividers, sticker frames with 2–3px white keylines

## 7. Shadows

Alley depth: 0 16px 48px black/60; spray-glow tags in lime/orange

## 8. Radius

0–8px; tags freeform, product sharp

## 9. Buttons

Slap stickers and spray blocks; hover drips; sold-out stamps replace buttons honestly.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Product slabs: dark, sticker-framed, stock-bar footers, size-row selects.

## 11. Navigation

Alley bar: tag logo, drop links, cart with count, countdown pill.

## 12. Imagery

Wall photography, lookbook flash shots, product on concrete, sticker macros. High contrast flash grade.

## 13. Icons

Crowns, drips, arrows, stars — tag-adjacent glyphs, rough strokes.

## 14. Textures / Patterns

Concrete, wheat-paste, spray grain, sticker vinyl at 10–18%.

## 15. Motion

Spray-ins (masked reveals), drip loops (subtle), countdown urgency, sticker slaps on add-to-cart.

Durations: instant–250ms spray hits and sticker slaps. Easings: none or hard steps; smooth premium motion forbidden.

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

- Clean minimal luxury cues
- Fake urgency without real stock logic
- Thin delicate type
- Stock lifestyle photography
- Cultural tourism without credibility

## 20. Quick-start snippet

```css
:root {
  --bg: #111111;
  --surface: #1A1A1A;
  --ink: #F5F2EA;
  --muted: #8A877E;
  --accent: #D6FF3F;
  --accent-2: #FF4D00;
  --font-display: Permanent Marker, Archivo Black, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Graffiti / Streetwear -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/graffiti-streetwear/DESIGN.md`.*
