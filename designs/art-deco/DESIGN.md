---
slug: art-deco
name: "Art Deco"
description: "Geometric luxury ornament: gold fans, sunbursts and Gatsby-era glamour."
category: Heritage Luxury
tags: [art-deco, luxury, geometric]
related: [luxury-minimalism, luxury-maximalism, fashion-editorial]
preview:
  bg: "#0E0E12"
  surface: "#16161C"
  ink: "#EFE6D0"
  muted: "#8E8574"
  accent: "#D4AF37"
  accent2: "#0E7C7B"
  display: "Cinzel, Marcellus, serif"
  body: "Jost, Futura, sans-serif"
---

# Art Deco — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more gilded, more symmetrical interpretation.

## 1. Overall aesthetic

1925 Paris in pixels: black lacquer, gold fan ornament, stepped ziggurat layouts, teal accents, dynastic symmetry. Glamour through geometry. For hotels, cocktails, jazz, weddings, and luxury.

**Three principles:**

- Symmetry is sacred — center everything ceremonially
- Gold ornament + black lacquer + one jewel accent
- Fans, sunbursts, chevrons: the motif trio

## 2. Typography

- **Display:** Cinzel, Marcellus, serif
- **Body:** Jost, Futura, sans-serif
- **Scale:** hero 44–72px Cinzel/Marcellus geometric caps, H2 30–40px, H3 22px, body 15–16px, meta/labels 11–12px wide-tracked gold labels.
- **Weights:** display 600–700 deco caps; body 400; labels 600 with +0.2–0.3em tracking.
- **Rules:** centered sunburst headlines with fan and chevron geometry; mirrored symmetry; never casual asymmetry.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0E0E12` | Page ground |
| Surface | `#16161C` | Cards, panels, wells |
| Ink | `#EFE6D0` | Headlines, body text |
| Muted | `#8E8574` | Captions, meta, secondary text |
| Accent | `#D4AF37` | Primary actions, highlights |
| Accent 2 | `#0E7C7B` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Ceremonial geometry: centered symmetric axis, 120–160px movements, 32px framed padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Ballroom axis: fan-crested hero, stepped gallery tiers, certificate chapters, marquee footer. Max-width 1200px centered.

## 6. Borders

Deco frames: 1px + 3px double gold rules (#D4AF37) on cards/buttons, fan/sunburst SVG corners, 1px chevron dividers, stepped borders

## 7. Shadows

Ballroom glow: 0 20px 60px black/60, gold inner light on frames

## 8. Radius

0–2px on framed certificates/cards, 50% arches and 999px pills on badges/fans; chevron clips stay sharp

## 9. Buttons

Gold cartouches with tracked caps; hover fills gold/black-text. Champagne CTA for bookings.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Deco plaques: black lacquer, gold fan corners, cameo imagery, stepped edges.

## 11. Navigation

Marquee bar: centered monogram in fan crest, tracked links, gold rules above/below.

## 12. Imagery

Jazz-age photography, champagne macro, skyline geometry, feather/silk textures. Gold-graded.

## 13. Icons

Fans, sunbursts, chevrons, cocktail glyphs — gold thin-line Deco set.

## 14. Textures / Patterns

Gold leaf, lacquer, velvet, marble at 8–12%; fan-pattern wallpapers subtle.

## 15. Motion

Ballroom slow: 600ms fan-opens, shimmer sweeps, curtain reveals. Charleston restraint.

Durations: micro 200–300ms, standard 500–700ms gold-shimmer reveals. Easings: ceremonial ease-out; bouncy springs forbidden.

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

- Asymmetry (heresy here)
- Sans-serif display type
- Bright modern color
- Rounded SaaS geometry
- Fast playful motion

## 20. Quick-start snippet

```css
:root {
  --bg: #0E0E12;
  --surface: #16161C;
  --ink: #EFE6D0;
  --muted: #8E8574;
  --accent: #D4AF37;
  --accent-2: #0E7C7B;
  --font-display: Cinzel, Marcellus, serif;
  --font-body: Jost, Futura, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Art Deco -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/art-deco/DESIGN.md`.*
