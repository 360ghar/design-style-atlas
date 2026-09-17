---
slug: bauhaus
name: "Bauhaus"
description: "Geometric forms and primary colors composed with modernist rigor."
category: Editorial & Print
tags: [bauhaus, geometric, primary]
related: [editorial-magazine, newspaper, fashion-editorial]
preview:
  bg: "#F2EDE3"
  surface: "#FFFFFF"
  ink: "#1A1A1A"
  muted: "#6E675C"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "ITC Bauhaus, Poppins, Futura, sans-serif"
  body: "Futura, Century Gothic, Inter, sans-serif"
---

# Bauhaus — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more geometric, primary-colored interpretation.

## 1. Overall aesthetic

Dessau 1925 as a design system: red/yellow/blue primaries plus black, circle-triangle-square compositions, Futura-like geometric type, and diagonal energy balanced by grids. Playful but rigorous — every shape earns its place. For education, architecture, kids' brands with brains, and cultural institutions.

**Three principles:**

- Circle, triangle, square: the only decoration allowed
- Primaries + black on warm paper; never pastels
- Asymmetric balance — weight, not symmetry

## 2. Typography

- **Display:** ITC Bauhaus, Poppins, Futura, sans-serif
- **Body:** Futura, Century Gothic, Inter, sans-serif
- **Scale:** hero 44–72px geometric sans (Futura/Poppins), H2 30–40px, H3 22px, body 15–16px, meta/labels 12–13px bold uppercase.
- **Weights:** display 600–800 geometric; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** flush-left headlines locked to circles, triangles, and grid bars; primary-color blocks; never organic curves, never centered ceremony.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2EDE3` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1A1A1A` | Headlines, body text |
| Muted | `#6E675C` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Secondary shape fills and blocks (flat fills only — never gradients or glows) |

Supporting primary yellow `#E8B90F` — square blocks, dots, and small highlights (flat only, use sparingly alongside red/blue).

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base; sections 64–96px; cards 24–32px; asymmetric balance of circle/triangle/square masses

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Compositional grids: geometric hero masses, diagonal dividers, program rows with shape bullets. Max-width 1280px.

## 6. Borders

Primary-color bars and rules; black 2–3px structural lines; no decorative borders on text

## 7. Shadows

None — flat modernist planes

## 8. Radius

Full circles (999px) and semicircles as shapes; 0px on all text containers including buttons and cards

## 9. Buttons

Primary-color blocks (red `#E30613` / blue `#0B3D91` / yellow `#E8B90F`) with black or white geometric labels; black hover frames. Shapes: sharp rectangles (0px); circles/pills only for non-text dots and badges, never text buttons.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Shape-led panels: semicircle headers, primary mass blocks, black rules. Playful geometry, strict alignment.

## 11. Navigation

Bar with geometric mark (three shapes), Futura links, primary-color active states. Yellow highlight hovers.

## 12. Imagery

Architecture, shadows, geometric still life, masks and theater. High contrast, primary overlays.

## 13. Icons

Pure geometry: circle/triangle/square constructions, uniform 2px strokes. The set designs itself.

## 14. Textures / Patterns

Paper flat; letterpress grain 4%; blueprint grid in spec zones.

## 15. Motion

Mechanical ballet: shapes rotate/slide on scroll (slow, linear), type reveals in steps. Bauhaus-calm pacing.

Durations: micro 150–250ms, standard 300–450ms geometric slides. Easings: crisp ease-out with right angles; bouncy springs forbidden.

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

- Pastels, gradients, or organic blobs
- Serif typefaces
- Shadows and elevation
- Symmetric corporate layouts
- More hues than the primaries + black

## 20. Quick-start snippet

```css
:root {
  --bg: #F2EDE3;
  --surface: #FFFFFF;
  --ink: #1A1A1A;
  --muted: #6E675C;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: ITC Bauhaus, Poppins, Futura, sans-serif;
  --font-body: Futura, Century Gothic, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Bauhaus -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/bauhaus/DESIGN.md`.*
