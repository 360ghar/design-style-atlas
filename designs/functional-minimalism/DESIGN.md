---
slug: functional-minimalism
name: "Functional Minimalism"
description: "Utilitarian clarity: system type, visible structure and zero ornament for tools."
category: Minimal
tags: [minimal, utility, accessible]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#FFFFFF"
  surface: "#F4F4F5"
  ink: "#18181B"
  muted: "#6F6F77"
  accent: "#2563EB"
  accent2: "#047857"
  display: "system-ui, -apple-system, Segoe UI, sans-serif"
  body: "system-ui, -apple-system, Segoe UI, sans-serif"
---

# Functional Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the plainer, more functional interpretation.

## 1. Overall aesthetic

The aesthetic of infrastructure: system fonts, visible tables, explicit labels, and affordances that look clickable. Beauty comes from correctness — aligned columns, honest states, readable errors. Built for operators, admins, and anyone doing real work.

**Three principles:**

- Affordances must look clickable: borders, underlines, hover states always
- Data first: tables, logs, and forms are the design
- System conventions over brand expression

## 2. Typography

- **Display:** system-ui, -apple-system, Segoe UI, sans-serif
- **Body:** system-ui, -apple-system, Segoe UI, sans-serif
- **Scale:** hero 24–32px system type, H2 20–24px, H3 17–18px, body 14–15px, meta/labels 12–13px plain.
- **Weights:** display 500–700 system default; body 400; labels 500–600 with no added tracking (browser honesty).
- **Rules:** left-aligned plain system type; never decorative display faces, never centered marketing layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F4F4F5` | Cards, panels, wells |
| Ink | `#18181B` | Headlines, body text |
| Muted | `#6F6F77` | Captions, meta, secondary text |
| Accent | `#2563EB` | Primary actions, highlights |
| Accent 2 | `#047857` | Success/status body text (5.48:1; #059669 decor only at 3.77:1 — fails body text) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

4px base unit; 8–16px layout rhythm; information density prioritized over airiness

Use 4px base (8px for section rhythm). Section padding 24–32px; card padding 12–16px; never let text touch a container edge.

## 5. Layout / Grid

Dense workbench: toolbar + filter row + data table + status bar. Labels above inputs; units and validation inline; 1280px+ fluid width.

## 6. Borders

System hairlines (#E4E4E7); form fields always visibly bordered; tables fully gridded

## 7. Shadows

None on content; dialogs get standard system elevation only

## 8. Radius

6px controls, 8px panels — system defaults, never custom

## 9. Buttons

Native-looking controls: bordered buttons with 32–36px visual height, blue primary, destructive red reserved for danger. Disabled states always visible, never hidden actions.

All buttons: 32–36px visual height with hit area expanded to 44px minimum, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Panels are flat gray wells with headers, not floating cards. Fieldsets and legends group forms; tables use zebra rows sparingly.

## 11. Navigation

Utility nav: breadcrumbs, tabs with counts, and a persistent status/footer bar. Sidebar is a plain labeled list with section headers.

## 12. Imagery

None decorative. Diagrams, charts, and document thumbnails only; screenshots shown at real size with borders.

## 13. Icons

System/SF-style glyphs, 16px, monochrome. Every icon button has a visible text label or tooltip.

## 14. Textures / Patterns

None. Flat system grays; focus on contrast and legibility.

## 15. Motion

Minimal: 100ms hover feedback, 150ms functional fades; respect reduced motion fully; loading spinners are system-standard.

Durations: micro 100ms, standard 150ms max. Easings: linear or ease-out; no springs, no ceremony.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px tap targets, sticky action bar only for the primary task action.
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

- Custom fonts or brand flourishes in tool UI
- Ghost buttons with no visible boundary
- Icon-only critical actions
- Marketing heroes inside admin tools
- Trendy dark-only themes that hurt daytime ops work

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F4F4F5;
  --ink: #18181B;
  --muted: #6F6F77;
  --accent: #2563EB;
  --accent-2: #047857;
  --font-display: system-ui, -apple-system, Segoe UI, sans-serif;
  --font-body: system-ui, -apple-system, Segoe UI, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Functional Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/functional-minimalism/DESIGN.md`.*
