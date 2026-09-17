---
slug: memphis
name: "Memphis"
description: "Sottsass playfulness: squiggles, terrazzo and pastel geometry with attitude."
category: Editorial & Print
tags: [memphis, playful, 80s]
related: [neo-brutalism, playful-brutalism, playful-maximalism]
preview:
  bg: "#FFF9F0"
  surface: "#FFFFFF"
  ink: "#222222"
  muted: "#7A736A"
  accent: "#00B3B3"
  accent2: "#FF4FA3"
  display: "Archivo Black, Poppins, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Memphis — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, more squiggly interpretation.

## 1. Overall aesthetic

Milan 1981, digitized: terrazzo confetti, squiggle lines, pastel cones and toruses (CSS shapes), black-and-white striped bars. Sophisticated silliness for creative tools, fintech challengers, and lifestyle brands with a wink.

**Three principles:**

- Scatter with intent: floating shapes on a strict grid
- Pastel grounds + ink outlines + one neon jolt
- Terrazzo and squiggles are signature — use both

## 2. Typography

- **Display:** Archivo Black, Poppins, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–76px Archivo Black with squiggles, H2 32–42px, H3 22–24px, body 16–17px, meta/labels 12–14px bold.
- **Weights:** display 800–900; body 400–500; labels 700 with +0.06–0.12em tracking.
- **Rules:** flush-left or scattered headlines with terrazzo shapes and squiggle underlines; pastel clashes welcome; never corporate grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF9F0` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#222222` | Headlines, body text |
| Muted | `#7A736A` | Captions, meta, secondary text |
| Accent | `#00B3B3` | Primary actions, highlights |
| Accent 2 | `#FF4FA3` | Secondary moments, shapes, badges |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Gallery-playful: scattered compositions with 24px card padding, 72–96px sections, shapes bleeding off edges

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Floating gallery: white content cards over cream with scattered CSS shapes; striped divider bars; dot-grid zones. Max-width 1200px.

## 6. Borders

Graphic outlines: 2–3px ink on shapes; squiggle and dotted keylines as dividers

## 7. Shadows

Flat floating: offset solid pastels (6px 6px 0 #FFD1DC) behind white cards — colorful hard shadows

## 8. Radius

Playful mix: circles, squiggles, rounded blobs + sharp triangles

## 9. Buttons

Bold geometric buttons in teal/pink/yellow with ink text or white text; pastel hard shadows; hover swaps shape color.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White cards with pastel offset shadows and ink borders; squiggle underlines on titles; shape badges.

## 11. Navigation

Cream bar with geometric mark, pill links, striped top border (signature), and a candy CTA.

## 12. Imagery

3D pastel renders, terrazzo textures, still-life with squiggles, duotone portraits in Memphis hues.

## 13. Icons

Geometric confetti icons: confetti dots, squiggles, triangles — 2px ink outlines on pastel chips.

## 14. Textures / Patterns

Terrazzo confetti, dotted grids, striped bars, squiggle fields at 10–20%.

## 15. Motion

Playful physics: floating shapes bob (6s), hover tilts, squiggle draw-on-scroll. Cheerful 250ms springs.

Durations: micro 150–250ms, standard 350–500ms shape-dance entrances. Easings: springy cubic-bezier(0.34,1.56,0.64,1); funereal fades forbidden.

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

- Corporate blue-gray palettes
- Hairline minimalism
- Photorealistic seriousness
- Gradients (flat pastels only)
- Empty undecorated zones — scatter something

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF9F0;
  --surface: #FFFFFF;
  --ink: #222222;
  --muted: #7A736A;
  --accent: #00B3B3;
  --accent-2: #FF4FA3;
  --font-display: Archivo Black, Poppins, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Memphis -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/memphis/DESIGN.md`.*
