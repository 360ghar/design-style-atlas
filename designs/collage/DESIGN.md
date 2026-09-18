---
slug: collage
name: "Collage"
description: "Cut-and-paste energy: torn edges, tape and layered fragments with intent."
category: Cut & Paste
tags: [collage, cut-paste, layered]
related: [maximalism, editorial-maximalism, scrapbook]
preview:
  bg: "#EFE9DC"
  surface: "#FFFFFF"
  ink: "#1C1B1A"
  muted: "#6E675C"
  accent: "#C81E1E"
  accent2: "#0F4C81"
  display: "Archivo Black, Georgia, serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Collage — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more torn, more layered interpretation.

## 1. Overall aesthetic

A studio wall mid-project, art-directed: torn magazine fragments, taped type, circled details, sticker interventions — layered over warm paper with one alignment axis keeping it shippable. For agencies, music, fashion, and culture brands.

**Three principles:**

- Layer with hierarchy: hero fragment, support cluster, tape accents
- Torn + taped + circled = the material trio
- One axis of alignment survives the beautiful mess

## 2. Typography

- **Display:** Archivo Black, Georgia, serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–80px mixed Archivo Black + Georgia ransom type, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px cut-out labels.
- **Weights:** display 700–900 mixed faces; body 400–500; labels 700 cut-paper with rotations.
- **Rules:** overlapping torn headlines with tape and ripped edges; mixed faces deliberate; never clean grids, never single-type discipline.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EFE9DC` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1C1B1A` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#C81E1E` | Primary actions, highlights |
| Accent 2 | `#0F4C81` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Composed clutter: 12–32px overlaps, rotations ±4deg, 72–96px chapters with breathing room

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Wall composition on a 12-column grid (24px gutters, max-width 1280px, 24px page margins, 16px on mobile): hero fragment cluster spanning 7 columns with 12–32px overlaps, support strip stack spanning 4 columns with 1-column offset, chapter breaks as full-width taped labels.

## 6. Borders

Torn edges (clip-path polygons), tape strips, deckled frames, marker outlines

## 7. Shadows

Paste depth: 4px 6px 0 rgba(28,27,26,0.9) under lifted fragments; tape translucency

## 8. Radius

0px + torn clip-paths; tape strips translucent

## 9. Buttons

Taped stickers and circled links; hover peels (rotate 0 + lift). Big and few.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Fragment clusters: bordered scraps with tape, captions handwritten-style, sticker badges.

## 11. Navigation

Taped bar: logo cut-out, marker links, CTA sticker. Slight tilt (-0.5deg) on the strip.

## 12. Imagery

Torn photos, magazine cuts, ticket stubs, stamped textures. Mixed eras unified by paper grade.

## 13. Icons

Hand-circled arrows, tape flags, star stickers — annotation graphics.

## 14. Textures / Patterns

Paper grain 6%, tape gloss, marker strokes, stamp ink, deckle edges.

## 15. Motion

Peel physics: hover straightens with spring; entrances drop with thud; tape shimmer subtle. 300ms springs.

Durations: micro 150–250ms, standard 350–550ms paste-down drops. Easings: papery ease-out with slight rotate; smooth premium motion forbidden.

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

- Randomness without composition
- Digital-perfect edges on torn elements
- Unreadable overlaps
- Chaos in transactional flows
- Forgetting mobile stacking order

## 20. Quick-start snippet

```css
:root {
  --bg: #EFE9DC;
  --surface: #FFFFFF;
  --ink: #1C1B1A;
  --muted: #6E675C;
  --accent: #C81E1E;
  --accent-2: #0F4C81;
  --font-display: Archivo Black, Georgia, serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Collage -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/collage/DESIGN.md`.*
