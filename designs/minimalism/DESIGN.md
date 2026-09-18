---
slug: minimalism
name: "Minimalism"
description: "Restrained layouts, generous whitespace and quiet typography that lets content breathe."
category: Minimal
tags: [minimal, clean, whitespace]
related: [ultra-minimalism, swiss-design, japanese-minimalism]
preview:
  bg: "#FAFAF9"
  surface: "#FFFFFF"
  ink: "#1A1A1A"
  muted: "#737373"
  accent: "#1A1A1A"
  accent2: "#2F66FE"
  display: "Inter, Helvetica Neue, Arial, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter interpretation.

## 1. Overall aesthetic

Minimalism removes everything that does not earn its place. One typeface, near-monochrome color, and large fields of whitespace create calm, confident interfaces. Restraint is the decoration: alignment, proportion, and timing carry the entire design.

**Three principles:**

- Subtract before you add — every element must justify itself
- One typeface, two weights, three sizes per view
- Whitespace is a structural material, not empty space

## 2. Typography

- **Display:** Inter, Helvetica Neue, Arial, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 28–40px, H2 22–28px, H3 18–20px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.
- **Weights:** display 400–500; body 400; labels 500 with +0.1–0.18em tracking (never 700–900 poster blacks).
- **Rules:** flush-left headlines with generous whitespace; centered only for single quiet statements; never justify body copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1A1A1A` | Headlines, body text |
| Muted | `#737373` | Captions, meta, secondary text |
| Accent | `#1A1A1A` | Primary actions, highlights |
| Accent 2 | `#2F66FE` | Links, focus rings, and rare functional highlights only — never fills, gradients, or glows; at most once per view to stay near-monochrome |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base unit; section padding 96–128px; card padding 24–32px; max line length 65ch

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Single centered column, max-width 1120px, 12-column grid for features. One idea per viewport; sections separated by 96px+ of space, never by rules — boxes only for cards (Sec. 10), never nested.

## 6. Borders

1px solid #D9D9D6 on cards (keeps a perceivable white-card boundary on the off-white ground); no borders on sections — whitespace separates

## 7. Shadows

Almost none: 0 1px 2px rgba(0,0,0,0.04) on cards; no shadows on text or buttons

## 8. Radius

8px cards, 6px buttons, pills only for small tags

## 9. Buttons

Solid black 44px buttons with 6px radius and white labels; secondary is 1px-bordered transparent. Hover darkens to #000 with a 150ms ease; no shadows, no gradients.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White cards on off-white ground with 1px hairline borders and 8px radius. Title in 17px medium (500), body in 15px gray; no icons unless functional.

## 11. Navigation

Top bar: wordmark left, 4–5 links center or right in 14px medium, single CTA. Sticky with backdrop blur and hairline bottom border on scroll.

## 12. Imagery

Sparse, large, and deliberate — one hero image or none. Photography should be desaturated and geometric; prefer product shots on plain grounds.

## 13. Icons

1.5px stroke line icons (Lucide/Feather style), 18–20px, ink or gray. Never filled, never multicolor.

## 14. Textures / Patterns

None. Flat matte surfaces only; depth comes from layering whitespace, never from grain or gradients.

## 15. Motion

150–200ms ease-out micro-transitions only. Fades and 4px rises on reveal; nothing bounces, nothing spins.

Durations: micro 150–200ms, page reveals up to 250ms. Easings: ease-out only; no springs, no mechanical snaps.

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

- Adding gradients, shadows, or decoration to fill space
- More than one accent or more than two font weights
- Centering everything — use left alignment for text blocks
- Boxes inside boxes; let whitespace group content
- Uppercase micro-labels for anything longer than a kicker — keep them to 1–3 words per view

## 20. Quick-start snippet

```css
:root {
  --bg: #FAFAF9;
  --surface: #FFFFFF;
  --ink: #1A1A1A;
  --muted: #737373;
  --accent: #1A1A1A;
  --accent-2: #2F66FE;
  --font-display: Inter, Helvetica Neue, Arial, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/minimalism/DESIGN.md`.*
