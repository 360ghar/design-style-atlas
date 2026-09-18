---
slug: heritage-classic
name: "Heritage Classic"
description: "Savile Row distinction: British racing green, gold foil serif crests, warm parchment, and quiet pedigree."
category: Minimal
tags: [old-money, luxury, heritage, serif, gold]
related: [quiet-luxury, luxury-minimalism, dark-academia]
preview:
  bg: "#0B1E15"
  surface: "#122C20"
  ink: "#F5F2EA"
  muted: "#9FB3A6"
  accent: "#C5A869"
  accent2: "#E2D1A6"
  display: "Cinzel, Cormorant Garamond, Georgia, serif"
  body: "EB Garamond, Georgia, serif"
---

# Heritage Classic — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Heritage Classic embodies timeless Old Money distinction: bespoke Savile Row tailoring, vintage horology, and centuries-old country estates. Deep British racing green (#0B1E15) and warm parchment paper harmonize with embossed gold foil serif typography (#C5A869), subtle Roman numeral chapter markers, heraldic crests, and quiet aristocratic pedigree.

**Three principles:**

- Aristocratic restraint: luxury is whispered through materials and proportion, never shouted
- British racing green & gold: timeless heritage palette of deep dark forest green and gilded foil
- Classical typographic majesty: high-contrast Roman serif letterforms with wide letter-spacing

## 2. Typography

- **Display:** Cinzel, Cormorant Garamond, Georgia, serif
- **Body:** EB Garamond, Georgia, serif
- **Scale:** hero 42–60px Cinzel serif, H2 28–36px, body 16–17px/1.6, crest tags 11–12px tracked.
- **Weights:** display 600; body 400; subheadings with regal tracking (+0.12em).
- **Rules:** centered regal headlines; Roman numerals for section indices (I, II, III, IV); generous paragraph spacing.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B1E15` | Page ground |
| Surface | `#122C20` | Cards, panels, containers |
| Ink | `#F5F2EA` | Headlines, primary text |
| Muted | `#9FB3A6` | Secondary copy, metadata, borders |
| Accent | `#C5A869` | Primary action, key highlights |
| Accent 2 | `#E2D1A6` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Burnished Gold Foil (#C5A869) for crests, rules, monograms, and key button outlines.

## 4. Spacing

8px base; expansive section padding 96–128px; elegant thin gold separator rules with diamond center ornaments.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Symmetrical heritage layout: centered crest banner; grand serif title; two-column archival narrative; footer with hallmark certification.

## 6. Borders

1px delicate gold hairline (#C5A86944); double-line gold frame borders on product certificates.

## 7. Shadows

Subtle aristocratic depth: 0 16px 48px rgba(0,0,0,0.5); soft gold ambient warmth around featured pieces.

## 8. Radius

2–4px stately subtle rounding or 0px classic sharp edges; never oversized toy-like curves.

## 9. Buttons

Refined gold-bordered buttons (1px solid #C5A869); transparent or deep green background; gold tracked serif text; hover fills with warm gold wash.

## 10. Cards

Deep green velvet-like panels (#122C20); delicate gold border keylines; Roman numeral kicker; gold foil headline.

## 11. Navigation

Centered heraldic monogram crest in nav header; spaced uppercase serif links; bespoke book-a-consultation link.

## 12. Imagery

Heritage horology close-ups, bespoke tailoring fabrics (cashmere, tweed), leather-bound archives, equestrian landscapes.

## 13. Icons

Heraldic crests, antique keys, fountain pen nibs, horological gears, compasses, wax seals.

## 14. Textures

Subtle vellum/parchment grain, fine herringbone fabric weave, gold leaf foil speckles.

## 15. Motion

Slow, dignified, confident transitions: graceful 400ms opacity dissolves; zero bouncy overshoots.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using a ring that clears 3:1 on the adjacent ground — Ink when it clears, otherwise Background.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Trendy neon gradients, candy pastels, or cybernetic glow
- Casual slang, conversational AI jargon, or all-caps shouting
- Chunky rounded plastic pill buttons
- Fast snappy bouncy animations that destroy gravitas
- Cheap synthetic primary colors

## 20. Quick-start snippet

```css
:root {
  --bg: #0B1E15;
  --surface: #122C20;
  --ink: #F5F2EA;
  --muted: #9FB3A6;
  --accent: #C5A869;
  --accent-2: #E2D1A6;
  --font-display: Cinzel, Cormorant Garamond, Georgia, serif;
  --font-body: EB Garamond, Georgia, serif;
}
```

```html
<!-- Starter specimen: button + card in Heritage Classic -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Heritage Classic headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/heritage-classic/DESIGN.md`.*
