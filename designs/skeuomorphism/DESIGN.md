---
slug: skeuomorphism
name: "Skeuomorphism"
description: "Lifelike materials: leather, metal and glass rendered with loving realism."
category: Soft & Dimensional
tags: [realistic, materials, classic-ios]
related: [glassmorphism, neumorphism, claymorphism]
preview:
  bg: "#E8E4DC"
  surface: "#F5F1E8"
  ink: "#2B2B2B"
  muted: "#68665E"
  accent: "#0B5FFF"
  accent2: "#C8A951"
  display: "Helvetica Neue, Georgia, serif"
  body: "Helvetica Neue, Verdana, sans-serif"
---

# Skeuomorphism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal real-world-material interpretation.

## 1. Overall aesthetic

The 2012 camera roll come back as craft: brushed aluminum, stitched leather, green felt, glass shelves, VU meters with needles. Every pixel earns realism. For music gear, cameras, watches, and luxury analog-digital bridges.

**Three principles:**

- Light is physics: one source, consistent reflections and shadows
- Materials must be recognizable in a 48px thumbnail
- Function first: realism serves affordance, not nostalgia alone

## 2. Typography

- **Display:** Helvetica Neue, Georgia, serif
- **Body:** Helvetica Neue, Verdana, sans-serif
- **Scale:** hero 36–56px stitched/leather realism type, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px engraved labels.
- **Weights:** display 600–700 textured; body 400; labels 600 engraved with subtle tracking.
- **Rules:** headlines as physical objects (stitched, brushed, engraved); left-aligned realism; never flat vector minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E4DC` | Page ground |
| Surface | `#F5F1E8` | Cards, panels, wells |
| Ink | `#2B2B2B` | Headlines, body text |
| Muted | `#68665E` | Captions, meta, secondary text |
| Accent | `#0B5FFF` | Primary actions, highlights |
| Accent 2 | `#C8A951` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Object-oriented: each control a crafted thing with 16–24px padding; shelves and panels group objects with 24–32px gaps; sections 64–96px

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Workbench: device-body panels (brushed metal/leather), rack rows of modules, shelf grids. Max-width 1200px.

## 6. Borders

Material edges: 2px dashed stitching inset 4px on leather, 1–2px machined rings (#8A8478) on metal, 1px top highlight (rgba(255,255,255,.6)) on glass

## 7. Shadows

Photographic: 0 1px 0 rgba(255,255,255,.7) top highlight, 0 8px 24px rgba(0,0,0,.45), 0 2px 6px rgba(0,0,0,.4); inset 0 -2px 6px rgba(0,0,0,.25) — realism through light

## 8. Radius

Real-world: stitched 8px leather panels, round metal dials, glossy buttons

## 9. Buttons

Machined metal or glossy candy buttons with travel (press sinks 2px + shadow collapses); toggle switches with physics.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Material panels: leather with stitching, metal with screws in corners, felt insets for displays.

## 11. Navigation

Bookshelf/tab-bar era: wooden shelf tabs, or brushed-metal toolbar with engraved icons.

## 12. Imagery

Photorealistic renders and macro material shots; product on reflective black glass.

## 13. Icons

Photoreal miniatures: tiny cameras, reels, dials. Craft over consistency-with-systems.

## 14. Textures / Patterns

Leather grain, brushed metal, felt, wood — at full loving fidelity, 15–40%.

## 15. Motion

Physical: needles sweep, reels turn, pages curl, switches thunk (200–400ms ease-in-out). Sound optional, off by default.

Durations: micro 150–250ms switch flicks, standard 350ms dial turns. Easings: mechanical ease-out with clicks; bouncy digital springs forbidden.

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

- Flat minimalism sneaking in
- Inconsistent light sources between objects
- Unreadable engraved microtext
- Nostalgia without function
- Mixing eras (iOS 6 + leather + glass shelf chaos)

## 20. Quick-start snippet

```css
:root {
  --bg: #E8E4DC;
  --surface: #F5F1E8;
  --ink: #2B2B2B;
  --muted: #68665E;
  --accent: #0B5FFF;
  --accent-2: #C8A951;
  --font-display: Helvetica Neue, Georgia, serif;
  --font-body: Helvetica Neue, Verdana, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Skeuomorphism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/skeuomorphism/DESIGN.md`.*
