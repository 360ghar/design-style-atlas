---
slug: fluent-design
name: "Fluent Design"
description: "Acrylic depth, soft light, and calm Microsoft-grade enterprise clarity."
category: Design System
tags: [enterprise, clean, subtle]
related: [corporate-saas, desktop-ui, minimalism]
preview:
  bg: "#F3F2F1"
  surface: "#FFFFFF"
  ink: "#201F1E"
  muted: "#605E5C"
  accent: "#0078D4"
  accent2: "#8764B8"
  display: "Segoe UI, Inter, Helvetica Neue, sans-serif"
  body: "Segoe UI, Inter, Helvetica Neue, Arial, sans-serif"
---

# Fluent Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Microsoft Fluent 2 is calm enterprise depth: acrylic panels with subtle luminosity, soft directional light, and restrained reveal highlights that follow the pointer. It feels like a well-lit office — professional, accessible, quietly dimensional. Nothing shouts; everything is findable.

**Three principles:**

- Depth through light: acrylic, elevation, and soft shadows — never flat gray
- Reveal on hover: light follows intent, guiding without noise
- One accent, used sparingly: blue means actionable, always

## 2. Typography

- **Display:** Segoe UI, Inter, Helvetica Neue, sans-serif
- **Body:** Segoe UI, Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 40–56px semibold, H2 28–32px, body 14–16px/1.5, captions 12px.
- **Weights:** display 600; body 400–600; semibold for emphasis, never black.
- **Rules:** left-aligned; sentence case; Segoe's humanist warmth at UI sizes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F3F2F1` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#201F1E` | Headlines, body text |
| Muted | `#605E5C` | Captions, meta, secondary text |
| Accent | `#0078D4` | Primary actions, highlights |
| Accent 2 | `#8764B8` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Blue #0078D4 reserved for interactive elements; purple accent2 for illustration only.

## 4. Spacing

4px base (dense enterprise); cards 16–24px; sections 64–96px; command bars 44–48px tall.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

App shell: left nav (240–300px), top command bar, content grid 12-col max 1280px; panels slide over, never full-page takeovers.

## 6. Borders

1px #201F1E10 hairlines; acrylic edges get 1px rgba(255,255,255,0.5) top light.

## 7. Shadows

Elevation scale: 4/8/16/64 — 0 4px 16px rgba(0,0,0,0.12) standard; flyouts deeper with soft spread.

## 8. Radius

4–8px controls and cards; 0px for window chrome dividers; pills only for tags and personas.

## 9. Buttons

4px buttons, 32px default height; primary blue filled; hover reveal-lightens; focus is 2px blue outline offset 1px.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White 8px cards with hairline + elevation-8; header semibold 16px; compound buttons as clickable rows.

## 11. Navigation

Left nav with 4px accent indicator on selected; collapsible to 48px icons; top command bar with contextual actions.

## 12. Imagery

Abstract light-trail hero art; product screenshots in browser frames; people photography natural, never duotone.

## 13. Icons

Fluent outline icons 20px, 1.5px strokes; filled variant for selected states; consistent optical padding.

## 14. Textures / Patterns

Acrylic noise at 3–5% + luminosity; mica washes on app backgrounds; no grain overlays.

## 15. Motion

Fast and purposeful: 100–200ms ease-out; fade+scale 150ms for flyouts; connected animations for navigation.

Durations: 100–250ms; standard curve cubic-bezier(0.1,0.9,0.2,1). Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Consumer-grade gradients and neon glows
- Centered marketing layouts inside product UI
- More than two accent hues per view
- Slow 500ms+ transitions on frequent actions
- Custom icon styles mixed with Fluent icons

## 20. Quick-start snippet

```css
:root {
  --bg: #F3F2F1;
  --surface: #FFFFFF;
  --ink: #201F1E;
  --muted: #605E5C;
  --accent: #0078D4;
  --accent-2: #8764B8;
  --font-display: Segoe UI, Inter, Helvetica Neue, sans-serif;
  --font-body: Segoe UI, Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Fluent Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/fluent-design/DESIGN.md`.*
