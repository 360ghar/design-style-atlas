---
slug: botanical-herbarium
name: "Botanical Herbarium"
description: "19th-century naturalist archives: pressed floral specimens, Latin taxonomy italics, tea-stained parchment, and ink rules."
category: Handmade & Texture
tags: [botanical, herbarium, naturalist, parchment, vintage]
related: [dark-academia, cottagecore, organic-biophilic]
preview:
  bg: "#F5EFE1"
  surface: "#EFE8D6"
  ink: "#1F3024"
  muted: "#5C6B5C"
  accent: "#A0522D"
  accent2: "#556B2F"
  display: "Cormorant Garamond, Playfair Display, serif"
  body: "Eczar, Garamond, Georgia, serif"
---

# Botanical Herbarium — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Botanical Herbarium opens the weathered specimen drawers of 19th-century royal naturalists and botanical archives. Warm tea-stained parchment (#F5EFE1), deep forest moss-green ink (#1F3024), binomial Latin taxonomy italics, pressed dried floral specimens, fine copperplate engraving rules, and archival collection stamps.

**Three principles:**

- Naturalist archive reverence: scientific respect for botanical specimens, taxonomy, and flora discovery
- Organic parchment harmony: warm aged paper, moss ink, sienna terracotta, and olive leaf tones
- Copperplate editorial elegance: classical italic serifs with delicate engraving lines and specimen callout labels

## 2. Typography

- **Display:** Cormorant Garamond, Playfair Display, serif
- **Body:** Eczar, Garamond, Georgia, serif
- **Scale:** specimen title 38–54px italic serif, Latin binomial 20–26px italic, body 15–16px/1.6, archival labels 11–12px.
- **Weights:** display 600 italic; body 400; taxonomy labels 500.
- **Rules:** binomial nomenclature in italics (*Monstera deliciosa* Liebm.); small caps for family groupings; fine archival margin annotations.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5EFE1` | Page ground |
| Surface | `#EFE8D6` | Cards, panels, containers |
| Ink | `#1F3024` | Headlines, primary text |
| Muted | `#5C6B5C` | Secondary copy, metadata, borders |
| Accent | `#A0522D` | Primary action, key highlights |
| Accent 2 | `#556B2F` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Sienna Earth (#A0522D) for archival seal stamps and specimen numbers; Olive Leaf (#556B2F) for secondary notes.

## 4. Spacing

8px base; generous archival margins 32–48px; delicate double-rule borders around plates.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Herbarium sheet layout: central mounted botanical specimen drawing; bottom-right museum mounting label with Latin taxonomy, collection date, and collector signature.

## 6. Borders

Delicate double hairline borders: 1px solid #1F302433 with 4px inner gap and 0.5px hairline; vintage stamp perforation borders.

## 7. Shadows

Soft natural paper shadow: 0 4px 16px rgba(31,48,36,0.08); slight lift on pressed specimen card.

## 8. Radius

2px subtle archival paper corners; sharp mounting label rectangles.

## 9. Buttons

Archival label buttons with 1px moss-green border; warm parchment fill; serif italic text; hover deepens to sienna brown.

## 10. Cards

Mounted herbarium specimen sheets (#EFE8D6); delicate border frame; Latin nameplate at bottom; corner photo mounts.

## 11. Navigation

Top archival registry header: Folio number, Genus index, Herbarium collection catalog search.

## 12. Imagery

Hand-colored copperplate botanical engravings, dried pressed leaves and flowers, vintage seed packet prints, field notes.

## 13. Icons

Botanical line drawings: pressed leaves, fern fronds, magnifying glass, antique tweezers, ink quill.

## 14. Textures

Tea-stained aged paper grain, subtle deckle edge fiber, vintage ink bleed on paper fibers.

## 15. Motion

Gentle historical reveals: smooth 350ms opacity fades like turning the fragile pages of an archival folio.

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

- Artificial neon cyan or fluorescent synthetic hues
- Cold industrial dark-mode cyber grids
- Aggressive modern sans-serif tech branding
- Glossy plastic buttons or animated neon glowing borders
- Strobe, glitch, or high-speed gaming animations

## 20. Quick-start snippet

```css
:root {
  --bg: #F5EFE1;
  --surface: #EFE8D6;
  --ink: #1F3024;
  --muted: #5C6B5C;
  --accent: #A0522D;
  --accent-2: #556B2F;
  --font-display: Cormorant Garamond, Playfair Display, serif;
  --font-body: Eczar, Garamond, Georgia, serif;
}
```

```html
<!-- Starter specimen: button + card in Botanical Herbarium -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Botanical Herbarium headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/botanical-herbarium/DESIGN.md`.*
