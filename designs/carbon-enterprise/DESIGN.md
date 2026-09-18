---
slug: carbon-enterprise
name: "Carbon Enterprise"
description: "Dense data tables, strict IBM-grade grids, and no-nonsense enterprise precision."
category: Design System
tags: [enterprise, data, functional]
related: [corporate-saas, functional-minimalism, terminal]
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F4"
  ink: "#161616"
  muted: "#525252"
  accent: "#0F62FE"
  accent2: "#002D9C"
  display: "IBM Plex Sans, Inter, Helvetica Neue, sans-serif"
  body: "IBM Plex Sans, Inter, Helvetica Neue, Arial, sans-serif"
---

# Carbon Enterprise — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

IBM Carbon is the uniform of serious software: a strict 2x grid, 16px mini-units, dense data tables with zebra discipline, and blue that means exactly one thing. No decoration survives review. The beauty is in density done right — more rows, less chrome, every pixel accountable.

**Three principles:**

- Density is a feature: 32–48px rows, 16px gutters, zero wasted chrome
- Blue is action: #0F62FE reserved for interactive, never decoration
- Grid law: everything aligns to the 16px mini-unit and 2x grid

## 2. Typography

- **Display:** IBM Plex Sans, Inter, Helvetica Neue, sans-serif
- **Body:** IBM Plex Sans, Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** page titles 28–32px, section 20px, body 14px/1.4, helper 12px, code/mono 12–13px.
- **Weights:** 400 body, 600 headings; Plex's engineered neutrality; tabular numerals for data.
- **Rules:** left-aligned always; sentence case; Plex Mono for IDs, timestamps, code.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F4F4F4` | Cards, panels, wells |
| Ink | `#161616` | Headlines, body text |
| Muted | `#525252` | Captions, meta, secondary text |
| Accent | `#0F62FE` | Primary actions, highlights |
| Accent 2 | `#002D9C` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Blue for links, buttons, focus, active states — never for illustration fills.

## 4. Spacing

16px mini-unit base; table cells 16px horizontal; page gutters 32px; side nav 256px fixed.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Shell: 48px header, 256px left nav, fluid content with 16-col grid; dashboards of data-table cards; max 1584px.

## 6. Borders

1px #16161615 dividers; table row bottom hairlines; borderless-cards exception — no card borders, separation via background bands/spacing, not borders.

## 7. Shadows

Minimal: layer-01 0 1px 2px rgba(0,0,0,0.1); modals layer-02; restraint is the aesthetic.

## 8. Radius

0px — Carbon is square; 2px only for tags; pills only for status dots.

## 9. Buttons

Square 40–48px buttons; primary blue; secondary 1px outline; danger red #DA1E28; ghost for tertiary.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Flat white tiles on gray-10 ground, 16px padding, header with 16px semibold + overflow menu; data first.

## 11. Navigation

Top 48px ui-shell header (product switcher, search, profile); left nav with category labels and counters.

## 12. Imagery

Geometric data-viz (Plex-coded charts); empty states with line illustrations; photos rare, documentary style.

## 13. Icons

Carbon pictograms 16/20px, 1.5px strokes, square optical frame; status dots 8px colored.

## 14. Textures / Patterns

None — flat grays; subtle 16px grid visible only in design specs, never in product.

## 15. Motion

150ms ease-out micro-transitions; skeleton loading for tables; no parallax, no delight animation.

Durations: 100–200ms; functional only. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Rounded cards and pill buttons
- Marketing gradients inside product surfaces
- Centered layouts wasting horizontal data space
- Decorative illustration as primary content
- Low-contrast gray text below 4.5:1

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F4F4F4;
  --ink: #161616;
  --muted: #525252;
  --accent: #0F62FE;
  --accent-2: #002D9C;
  --font-display: IBM Plex Sans, Inter, Helvetica Neue, sans-serif;
  --font-body: IBM Plex Sans, Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Carbon Enterprise -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/carbon-enterprise/DESIGN.md`.*
