---
slug: flat-design
name: "Flat Design"
description: "Bold color blocks, zero shadows, and honest two-dimensional clarity."
category: Minimalist
tags: [flat, bold, clean]
related: [product-minimalism, functional-minimalism, swiss-design]
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  ink: "#2D2D2D"
  muted: "#757575"
  accent: "#3498DB"
  accent2: "#E74C3C"
  display: "Open Sans, Helvetica Neue, Arial, sans-serif"
  body: "Open Sans, Helvetica Neue, Arial, sans-serif"
---

# Flat Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Classic 2013 flat: honest two-dimensional color blocks, long shadows only if any, crisp icon grids, and typography doing all the talking. Turquoise, emerald, sunflower, and alizarin in confident rectangles. No bevels, no gloss, no pretending — the web distilled to color, type, and grid.

**Three principles:**

- Zero decoration: no gradients, shadows, or textures — color and type only
- One idea per block: bold rectangles each with a single job
- Typography is the interface: big, light, letterspaced

## 2. Typography

- **Display:** Open Sans, Helvetica Neue, Arial, sans-serif
- **Body:** Open Sans, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–72px light, H2 30–36px, body 16px/1.6, tile labels 14px uppercase letterspaced.
- **Weights:** 300–400 headlines; 400–600 UI; light large type is the signature.
- **Rules:** centered heroes; left app text; generous letterspacing on labels (+0.1em).

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F5F5F5` | Cards, panels, wells |
| Ink | `#2D2D2D` | Headlines, body text |
| Muted | `#757575` | Captions, meta, secondary text |
| Accent | `#3498DB` | Primary actions, highlights |
| Accent 2 | `#E74C3C` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Blue #3498DB links/CTAs; red accent2 sparingly for alerts and sale; section grounds rotate the palette.

## 4. Spacing

8px base; tiles 32–48px padding; sections 80–112px; tile grids gapless or 16px gutters.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Color-block sections alternating white and palette grounds; metro tile grids (square + wide); max 1140px.

## 6. Borders

None — edges are color changes; 2px white dividers inside colored blocks when needed.

## 7. Shadows

None. Depth via color contrast only; long-shadows forbidden in this interpretation (pure flat).

## 8. Radius

2–4px subtle on buttons; tiles square; pills only for avatars and toggles.

## 9. Buttons

Flat rectangles, 44–52px, uppercase 14px letterspaced; hover darkens 8%; no shadow, no gradient.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Flat color tiles: icon + title + one line; white cards on gray ground with zero shadow, 2px radius.

## 11. Navigation

Flat colored top bar (white text) or white bar with colored logo; underline-free links, color-swap hover.

## 12. Imagery

Flat vector illustrations with long shadows; duotone hero shapes; photos rare, full-bleed with color overlay.

## 13. Icons

Glyph-style line icons, 2px strokes, single color (white on color, color on white), 24–48px in tiles.

## 14. Textures / Patterns

None whatsoever — flat means flat.

## 15. Motion

Simple 150–200ms color fades and slides; tile flips on dashboards; no springs, no physics.

Durations: 150–250ms ease; snappy and honest. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Gradients, gloss, and drop shadows
- Skeuomorphic textures (leather, metal, paper)
- More than 5 palette colors per view
- Thin unreadable light type below 16px
- Decorative animation with no function

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F5F5F5;
  --ink: #2D2D2D;
  --muted: #757575;
  --accent: #3498DB;
  --accent-2: #E74C3C;
  --font-display: Open Sans, Helvetica Neue, Arial, sans-serif;
  --font-body: Open Sans, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Flat Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/flat-design/DESIGN.md`.*
