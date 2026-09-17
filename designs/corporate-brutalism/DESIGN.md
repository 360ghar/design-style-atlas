---
slug: corporate-brutalism
name: "Corporate Brutalism"
description: "Boardroom concrete: heavy rules, tabular data and imposing institutional grids."
category: Brutalist
tags: [institutional, grid, authoritative]
related: [swiss-design, brutalism, neo-brutalism]
preview:
  bg: "#EFEFEA"
  surface: "#FFFFFF"
  ink: "#141414"
  muted: "#62625C"
  accent: "#0033AA"
  accent2: "#141414"
  display: "Helvetica Neue, Arial, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# Corporate Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the blunter, more literal interpretation — never decorate.

## 1. Overall aesthetic

The annual-report wing of brutalism: imposing black rules, dense tables, small-caps labels, institutional blue links, and layouts that feel audited. Everything aligns; nothing decorates. Trust is built through visible order — the design equivalent of a headquarters facade.

**Three principles:**

- Order signals trust: align everything, grid everything
- Data density is a virtue — tables over cards
- One institutional blue; everything else is ink and paper

## 2. Typography

- **Display:** Helvetica Neue, Arial, sans-serif
- **Body:** Helvetica Neue, Arial, sans-serif
- **Scale:** hero 40–56px Helvetica Bold, H2 28–34px, H3 20–22px, body 15–16px, meta/labels 12–13px bold uppercase tracked 0.15em.
- **Weights:** display 700 Helvetica Bold; body 400; labels 700 uppercase with 0.15em tracking.
- **Rules:** left-aligned blunt Helvetica headlines with thick 2–3px structural rules and 1px gridded table lines; never centered hero marketing; never decorative faces.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#EFEFEA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#141414` | Headlines, body text |
| Muted | `#62625C` | Captions, meta, secondary text |
| Accent | `#0033AA` | Primary actions, highlights |
| Accent 2 | `#141414` | Structural rules, stamps, rule-stack headers (same as Ink by design) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Rigid 8px system; dense data zones (12–16px), formal 64–96px section breaks; tabular numerals everywhere

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Strict multi-column institutional grid; header band with rule stack; content in bordered ledger panels; footers with dense fine print. Max-width 1280px.

## 6. Borders

2px solid #141414 structural rules; data tables fully gridded with 1px lines

## 7. Shadows

None. Authority comes from mass and order, not lift

## 8. Radius

0px — institutions do not round corners

## 9. Buttons

Square authoritative buttons: black primary, institutional blue links, destructive = black-fill invert. Labels uppercase 12px tracked 0.15em. Instant hover states.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Ledger panels: white, 2px black header rule, gridded rows, tabular figures, status stamps. No elevation, no radius.

## 11. Navigation

Heavy institutional masthead: wordmark, division links, search, and a black rule sandwich (thick-thin-thick). Section tabs with counts.

## 12. Imagery

Architecture, infrastructure, team grid portraits in grayscale; charts are the primary visual. Photos framed with 2px rules and captions.

## 13. Icons

Minimal geometric marks; 1.5px strokes; data glyphs (arrows, carets) over pictograms. Numbers preferred.

## 14. Textures / Patterns

Flat ledger paper; faint blueprint grid in data zones at 5%; security-pattern microprint in footers for flavor.

## 15. Motion

None beyond instant state changes and row highlights. Motion would undermine the gravity.

Durations: instant–150ms blunt state flips; no ceremonial motion. Easings: none (linear instant); no springs, no flourishes.

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

- Playful color, illustration, or rounded anything
- Marketing heroes and lifestyle photography
- Animations, parallax, or scroll theatrics
- Hiding numbers behind vague copy
- Trendy typefaces — Helvetica or equivalent only

## 20. Quick-start snippet

```css
:root {
  --bg: #EFEFEA;
  --surface: #FFFFFF;
  --ink: #141414;
  --muted: #62625C;
  --accent: #0033AA;
  --accent-2: #141414;
  --font-display: Helvetica Neue, Arial, sans-serif;
  --font-body: Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Corporate Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/corporate-brutalism/DESIGN.md`.*
