---
slug: material-expressive
name: "Material Expressive"
description: "Springy rounded shapes, bold tonal color, and playful Google-grade motion."
category: Design System
tags: [colorful, playful, rounded]
related: [corporate-saas, card-based-ui, playful-maximalism]
preview:
  bg: "#FEF7FF"
  surface: "#F3EDF7"
  ink: "#1D1B20"
  muted: "#49454F"
  accent: "#6750A4"
  accent2: "#EFB8C8"
  display: "Google Sans, Roboto, Helvetica Neue, sans-serif"
  body: "Roboto, Helvetica Neue, Arial, sans-serif"
---

# Material Expressive — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Material 3 Expressive is Google's bouncy, emotional design language: supersized rounded shapes, tonal color containers, and motion with personality. FABs morph, cards pop with springy emphasis, and color comes in coordinated tonal families rather than single loud accents. Friendly, chunky, and unmistakably alive.

**Three principles:**

- Shape carries emotion: big radii, pill morphs, playful geometry
- Tonal color families, not lone accents — containers in related hues
- Motion overshoots: springs and emphasis scales make taps feel joyful

## 2. Typography

- **Display:** Google Sans, Roboto, Helvetica Neue, sans-serif
- **Body:** Roboto, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 44–64px Google Sans medium, H2 28–36px, body 16px/1.5, labels 14px medium.
- **Weights:** display 500–700; body 400–500; rounded warmth over sharp authority.
- **Rules:** left-aligned app type; centered only for empty states; dynamic-color aware headings.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FEF7FF` | Page ground |
| Surface | `#F3EDF7` | Cards, panels, wells |
| Ink | `#1D1B20` | Headlines, body text |
| Muted | `#49454F` | Captions, meta, secondary text |
| Accent | `#6750A4` | Primary actions, highlights |
| Accent 2 | `#EFB8C8` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Primary #6750A4 for actions; tonal containers (#EADDFF family) for emphasis blocks.

## 4. Spacing

8px base; cards 20–24px; sections 64–96px; FAB 16px from edges, 56–96px sizes.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Single-column app flows with edge-to-edge tonal headers; cards 16–28px radius in 12–16px gutters; nav rail or bottom bar.

## 6. Borders

None — separation via tonal fills; 1px outline (#79747E at 20%) only on outlined inputs.

## 7. Shadows

Tonal elevation: level-1 0 1px 3px rgba(0,0,0,0.12); FAB level-3 with colored tint shadow (accent at 30%).

## 8. Radius

16–28px cards; pills for buttons, chips, FABs; 4px only for data tables.

## 9. Buttons

Pill buttons, 44–56px tall; filled tonal primary; hover adds 8% overlay + emphasis scale 1.02; ripple on press.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Tonal filled cards (surface-container tones), 20px radius, no border; headline 20–24px medium; icon in tonal circle.

## 11. Navigation

Navigation bar (bottom, 80px) or rail (left, 80px) with pill indicators; large FAB docked; search as rounded field.

## 12. Imagery

Rounded illustrations in tonal washes; photos in 16–24px rounded frames; dynamic-color hero art.

## 13. Icons

Rounded Material Symbols, filled for active / outlined for idle, 24px optical, in tonal containers.

## 14. Textures / Patterns

Tonal washes and soft blobs; dot grids at 6% in empty states; no grain.

## 15. Motion

Emphasized springs: 300–500ms with slight overshoot; shared-element morphs between screens; ripple 200ms.

Durations: 200–500ms expressive springs; exiting 150ms. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Sharp corners and thin hairline borders everywhere
- Single-accent flat minimalism with no tonal range
- Stiff linear motion with no spring
- iOS-style translucency and blur
- Uppercase micro-labels as primary voice

## 20. Quick-start snippet

```css
:root {
  --bg: #FEF7FF;
  --surface: #F3EDF7;
  --ink: #1D1B20;
  --muted: #49454F;
  --accent: #6750A4;
  --accent-2: #EFB8C8;
  --font-display: Google Sans, Roboto, Helvetica Neue, sans-serif;
  --font-body: Roboto, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Material Expressive -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/material-expressive/DESIGN.md`.*
