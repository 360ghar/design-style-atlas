---
slug: liquid-chrome
name: "Liquid Chrome"
description: "Molten metal interfaces: flowing silver, mirror reflections and Y2K luxury."
category: Atmosphere & Gradient
tags: [chrome, liquid, metallic]
related: [y2k, gradient-design, aurora-glow]
preview:
  bg: "#0A0A0F"
  surface: "#121218"
  ink: "#F2F2F5"
  muted: "#8E8E99"
  accent: "#C0C0C8"
  accent2: "#7DF9FF"
  display: "Unbounded, Michroma, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Liquid Chrome — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more molten-metal interpretation.

## 1. Overall aesthetic

Mercury with taste: flowing silver masses, mirror-duplicate reflections, Y2K bubble lettering in chrome, dark voids. Liquid luxury for fashion, fragrance, music, and tech flagships.

**Three principles:**

- Chrome needs darkness to mirror
- Reflections sell liquidity: duplicate + fade + flip
- One molten moment per page; support with matte darks

## 2. Typography

- **Display:** Unbounded, Michroma, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 48–80px molten Unbounded/Michroma, H2 32–42px, H3 22px, body 15–17px, meta/labels 12–13px chrome uppercase.
- **Weights:** display 700–800 liquid metal; body 400–500; labels 700 with +0.08–0.15em tracking.
- **Rules:** centered liquid-metal headlines with drip and reflection treatments; dark grounds; never matte minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A0F` | Page ground |
| Surface | `#121218` | Cards, panels, wells |
| Ink | `#F2F2F5` | Headlines, body text |
| Muted | `#8E8E99` | Captions, meta, secondary text |
| Accent | `#C0C0C8` | Primary actions, highlights |
| Accent 2 | `#7DF9FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Gallery-fluid: hero metal mass, 100–130px dark pauses, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Molten showcase: chrome hero mass with reflection, matte dark chapters, bubble-type intertitles, mirror CTA. Max-width 1280px.

## 6. Borders

Mirror keylines: 1–2px silver gradients; reflection dividers (flipped faded duplicates)

## 7. Shadows

Molten ambient: 0 20px 80px silver/20; sharp specular highlights (white streaks)

## 8. Radius

Organic metal: blob radii (40% 60% 60% 40%), pill capsules, mirror cards 20px

## 9. Buttons

Chrome pills: silver gradient, dark labels, specular sweep on hover. Matte black secondaries.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Mirror panels: dark glass with chrome keylines and reflected headers; blob-masked media.

## 11. Navigation

Dark bar, chrome wordmark, minimal links, silver CTA pill.

## 12. Imagery

Liquid metal 3D, mercury macro, chrome fashion, bubble renders. Silver-graded.

## 13. Icons

Liquid glyphs: melting blobs, droplets, orbs — silver gradient fills.

## 14. Textures / Patterns

Brushed + liquid metal, reflection fades, bubble clusters, star sparkles.

## 15. Motion

Slow mercury morphs (SVG blobs 12s), specular sweeps, floating orbs. Hypnotic, never hurried.

Durations: micro 150–250ms shine sweeps, standard 500–900ms molten drifts. Easings: slow liquid ease-in-out; bouncy springs forbidden.

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

- Matte flat grays without speculars
- Colorful rainbows (silver + one accent max)
- Sharp brutalist frames
- Static chrome (must show light motion)
- Light-mode-first layouts

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0A0F;
  --surface: #121218;
  --ink: #F2F2F5;
  --muted: #8E8E99;
  --accent: #C0C0C8;
  --accent-2: #7DF9FF;
  --font-display: Unbounded, Michroma, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Liquid Chrome -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/liquid-chrome/DESIGN.md`.*
