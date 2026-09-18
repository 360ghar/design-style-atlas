---
slug: luxury-maximalism
name: "Luxury Maximalism"
description: "Baroque digital opulence: gold leaf, deep velvet and jewel-box density."
category: Maximalist
tags: [luxury, baroque, ornate]
related: [luxury-minimalism, maximalism, playful-maximalism]
preview:
  bg: "#100C08"
  surface: "#1C1510"
  ink: "#EFE3C8"
  muted: "#9A8B6F"
  accent: "#D4AF37"
  accent2: "#7A1E2B"
  display: "Cormorant Garamond, Playfair Display, serif"
  body: "EB Garamond, Georgia, serif"
---

# Luxury Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more opulent interpretation — excess is elegance.

## 1. Overall aesthetic

A Venetian palazzo rendered in pixels: black lacquer, gold leaf, oxblood velvet, malachite, and chandeliers of light. Dense with treasure — galleries, monograms, crests — yet composed with museum precision. For haute brands, hotels, spirits, and jewels.

**Three principles:**

- Gold is architecture: frames, rules, and flourishes — never body fills
- Dark lacquer grounds; light appears as candlelight, not daylight
- Density with hierarchy: treasure rooms need a docent (typographic order)

## 2. Typography

- **Display:** Cormorant Garamond, Playfair Display, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 52–88px grand serif (Cormorant/Playfair), H2 34–44px, H3 24px, body 16–17px, meta/labels 12–13px letterspaced gold.
- **Weights:** display 600–800 high-contrast serif; body 400–500; labels 600–700 with +0.15–0.25em tracking.
- **Rules:** centered ceremonial serif headlines with gold rules and crests; symmetrical grandeur; never casual left-aligned SaaS layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#100C08` | Page ground |
| Surface | `#1C1510` | Cards, panels, wells |
| Ink | `#EFE3C8` | Headlines, body text |
| Muted | `#9A8B6F` | Captions, meta, secondary text |
| Accent | `#D4AF37` | Primary actions, highlights |
| Accent 2 | `#7A1E2B` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Palatial: 120–180px ceremonial sections, dense jewel-box galleries, 32px framed padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Palatial sequence: grand foyer hero, treasure-room galleries, certificate chapters, crest footer. Centered axis with flanking ornament. Max-width 1200px centered, 12-column grid, 24px gutters.

## 6. Borders

Gold filigree: double rules (1px line + 4px gap + 1px line), corner flourishes, guilloche patterns via SVG; 1–2px gold keylines

## 7. Shadows

Candlelight depth: 0 24px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(212,175,55,0.35) + inset 0 0 24px rgba(212,175,55,0.15) gold inner glow on frames

## 8. Radius

Arches 999px top radius on portals, oval pills 999px, cartouches 4px; 0px on framed certificates

## 9. Buttons

Gold cartouches: 1px gold border, tracked caps serif labels, dark fill; hover fills gold with black text over 500ms.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Jewel boxes: dark lacquer panels, gold filigree frames, cameo imagery, ribbon seals.

## 11. Navigation

Crest bar: centered monogram, hairline gold rules, tracked serif links, member CTA in cartouche.

## 12. Imagery

Candlelit product, marble halls, velvet macro, gold detail. Deep blacks, warm speculars, slow drift.

## 13. Icons

Engraved thin-line icons in gold; crests, keys, laurel marks; Roman numerals.

## 14. Textures / Patterns

Gold leaf noise, velvet pile, marble, damask at 8–15% — richness with restraint in opacity.

## 15. Motion

Ceremonial slowness: 700–1000ms reveals, chandelier shimmer, curtain wipes between chapters.

Durations: micro 200–300ms, standard 500–700ms curtain reveals, ceremonial 1000ms+. Easings: cubic-bezier(0.22,1,0.36,1) ceremonial ease-out; bouncy springs forbidden.

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

- Bright modern color or neon
- Rounded SaaS geometry
- Sans-serif display type
- Fast bouncy motion
- White backgrounds anywhere

## 20. Quick-start snippet

```css
:root {
  --bg: #100C08;
  --surface: #1C1510;
  --ink: #EFE3C8;
  --muted: #9A8B6F;
  --accent: #D4AF37;
  --accent-2: #7A1E2B;
  --font-display: Cormorant Garamond, Playfair Display, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Luxury Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/luxury-maximalism/DESIGN.md`.*
