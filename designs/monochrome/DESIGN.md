---
slug: monochrome
name: "Monochrome"
description: "Single-hue discipline: black, white and grays engineered into full interfaces."
category: Minimal
tags: [minimal, black-white, contrast]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#FFFFFF"
  surface: "#F5F5F5"
  ink: "#0A0A0A"
  muted: "#707070"
  accent: "#0A0A0A"
  accent2: "#525252"
  display: "Inter, Helvetica Neue, Arial, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Monochrome — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more restrained interpretation.

## 1. Overall aesthetic

One hue, infinite control. Monochrome interfaces prove that value contrast alone can build complete products: black type, gray meta, white surfaces, inverted black sections for drama. Photography becomes the color. It reads premium, timeless, and ruthlessly coherent.

**Three principles:**

- Value contrast does all the work — test every screen in grayscale
- Invert deliberately: black sections punctuate long white pages
- Photography and imagery carry all chromatic energy

## 2. Typography

- **Display:** Inter, Helvetica Neue, Arial, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 32–48px headlines, H2 24–30px, H3 19–21px, body 15–16px, meta/labels 11–12px tracked uppercase.
- **Weights:** display 500–700; body 400; labels 500–600 with +0.08–0.15em tracking (contrast from tone, never color).
- **Rules:** flush-left headlines graded by gray value alone; never color-tinted type, never decorative treatments.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F5F5F5` | Cards, panels, wells |
| Ink | `#0A0A0A` | Headlines, body text |
| Muted | `#707070` | Captions, meta, secondary text |
| Accent | `#0A0A0A` | Primary actions, highlights |
| Accent 2 | `#525252` | Secondary text, borders on dark, subtle tonal steps |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base; sections 80–120px; rely on tonal steps (#FAFAFA → #F5F5F5 → #E5E5E5) for separation

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Strong tonal rhythm: alternate white, #F5F5F5, and #0A0A0A bands. Oversized black headlines on white; reversed white type on black chapters.

## 6. Borders

Grayscale hairlines (#E5E5E5 light, #262626 dark); weight carries hierarchy

## 7. Shadows

Grayscale only: 0 2px 12px rgba(0,0,0,0.08). No colored shadows ever

## 8. Radius

6px standard; sharp 0px for editorial moments

## 9. Buttons

Black fill / white text primary; 1px black outline secondary. On black sections, invert to white fill. Hover shifts to #525252 (or #E5E5E5 inverted).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White on gray-ground, or gray-tinted panels on white, hairline borders. Black feature cards with white type for emphasis moments.

## 11. Navigation

Transparent-over-hero turning white with hairline on scroll; or permanent black bar with white mono links. Always high contrast.

## 12. Imagery

Black-and-white photography preferred; color images acceptable if the UI ignores their hues. Full-bleed image chapters work beautifully.

## 13. Icons

Pure black or white line icons, uniform 1.75px stroke. No fills, no color, no exceptions.

## 14. Textures / Patterns

Fine film grain (3–6%) or halftone dots in gray; paper whites. Texture stays achromatic.

## 15. Motion

Crisp 150–250ms ease-out; hard wipes and clip reveals suit the palette. Avoid soft pastel-feeling springs.

Durations: micro 150–250ms, standard 300–450ms tonal fades. Easings: ease-out only; no springs, no color-transition theatrics.

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

- Any chromatic color in UI chrome — including focus rings (use black/white)
- Colored status hues; use icons + labels (OK / WARN / ERR in mono)
- Gray text below 4.5:1 contrast on its ground
- Gradient meshes or duotone photo treatments
- Low-contrast light-gray-on-white body copy

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F5F5F5;
  --ink: #0A0A0A;
  --muted: #707070;
  --accent: #0A0A0A;
  --accent-2: #525252;
  --font-display: Inter, Helvetica Neue, Arial, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Monochrome -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/monochrome/DESIGN.md`.*
