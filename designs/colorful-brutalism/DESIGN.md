---
slug: colorful-brutalism
name: "Colorful Brutalism"
description: "Rainbow concrete: clashing primaries inside heavy black structure."
category: Brutalist
tags: [colorful, bold, high-energy]
related: [brutalism, neo-brutalism, playful-brutalism]
preview:
  bg: "#7C5CFF"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#55504A"
  accent: "#FFD802"
  accent2: "#FF4FA3"
  display: "Archivo Black, Arial Black, sans-serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Colorful Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, flatter interpretation — never gradient, never shadow-blur.

## 1. Overall aesthetic

Every section a different saturated ground — violet, yellow, pink, cyan — stitched with black bands and white sticker cards. Maximal color, brutalist bones. It feels like a music festival poster that became a website: joyful, loud, and impossible to ignore.

**Three principles:**

- Change the ground color every section — rhythm through hue
- Black bands and borders stitch clashing colors together
- White sticker cards float the content above the noise

## 2. Typography

- **Display:** Archivo Black, Arial Black, sans-serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–72px Archivo Black on saturated grounds, H2 32–40px, H3 22px, body 16–17px, meta/labels 12–14px bold uppercase.
- **Weights:** display 800–900; body 400–500; labels 700–900 with +0.04–0.08em tracking.
- **Rules:** flush-left black headlines on loud flat grounds with thick black borders; centered only for badges; never gradients, never subtlety.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#7C5CFF` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#55504A` | Captions, meta, secondary text |
| Accent | `#FFD802` | Primary actions, highlights |
| Accent 2 | `#FF4FA3` | Secondary stickers, badges, alternating chapters |

Extended chapters (use sparingly, flat only): cyan `#00E5FF`, violet `#7C5CFF` (= Background). Never gradient, never glow — flat fills + black structure only.

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Dense festival rhythm: 20px card padding, 56–80px color-block sections, rotated stickers overlapping

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Full-bleed color chapters separated by 4px black bands; white bordered cards carry text; marquee tickers and starbursts punctuate. Max-width 1200px inside bands.

## 6. Borders

3px solid #111111 everywhere; sections divided by black bands, not whitespace

## 7. Shadows

Hard 6px 6px 0 #111111; stacked double shadows (white + black) on heroes

## 8. Radius

10–16px chunky rounding colliding with sharp black frames

## 9. Buttons

Black or white 3px-bordered buttons with hard shadows on color grounds; labels uppercase black or white. Hover swaps fill color with a 150ms pop.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White sticker cards with 3px borders and 6px hard shadows on saturated grounds; colored header strips; rotating badge stickers.

## 11. Navigation

Black bar with white links and a yellow CTA with black text; or cream bar with 3px bottom border. Always high-contrast against the hero ground.

## 12. Imagery

Cut-out stickers, flat vector scenes, halftone portraits in clashing duotones. Photos bordered thick and tilted ±2deg.

## 13. Icons

Sticker icons: filled candy shapes with 2.5px black outlines and white inner detail.

## 14. Textures / Patterns

Checkerboards, stripes, polka dots, and halftones in black/white over color grounds at 10–20%.

## 15. Motion

Festival energy: marquees, spinning starbursts (slow 12s), hover pops with 150ms flat color swaps. Color-block wipe transitions between sections.

Durations: instant–150ms flat color swaps with shadow pops. Easings: none or steps(2); no springs, no gradients animating.

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

- White or gray section grounds — commit to color
- Thin borders or soft shadows
- Muted or pastel-only palettes
- Long gray paragraphs on color (use white cards)
- Timid single-accent restraint

## 20. Quick-start snippet

```css
:root {
  --bg: #7C5CFF;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #55504A;
  --accent: #FFD802;
  --accent-2: #FF4FA3;
  --font-display: Archivo Black, Arial Black, sans-serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Colorful Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/colorful-brutalism/DESIGN.md`.*
