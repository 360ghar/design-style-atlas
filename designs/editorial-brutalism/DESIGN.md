---
slug: editorial-brutalism
name: "Editorial Brutalism"
description: "Poster-scale headlines, raw rules and ink-heavy layouts with newsroom urgency."
category: Brutalist
tags: [editorial, bold, poster]
related: [editorial-minimalism, brutalism, neo-brutalism]
preview:
  bg: "#F2EFE9"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6F6A60"
  accent: "#D92300"
  accent2: "#111111"
  display: "Arial Black, Archivo Black, Helvetica Neue, sans-serif"
  body: "Helvetica Neue, Arial, sans-serif"
---

# Editorial Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bigger, rawer interpretation — never whisper.

## 1. Overall aesthetic

A protest poster crossed with a front page: enormous condensed headlines, red urgency accents, black rules everywhere, and layouts that shout. Stories stack like bills on a wall. Made for publications, campaigns, and launches that need to feel like news, not content.

**Three principles:**

- Headlines are the design — set them enormous and tight
- Red means now: reserve the accent for urgency
- Stack, don't nest — flat sequences of strong blocks

## 2. Typography

- **Display:** Arial Black, Archivo Black, Helvetica Neue, sans-serif
- **Body:** Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–76px Arial Black column headlines, H2 30–38px, H3 22px, body 15–16px in tight columns, meta/labels 12–13px bold uppercase.
- **Weights:** display 900 Arial Black; body 400–500; labels 700–900 with +0.04–0.08em tracking.
- **Rules:** massive flush-left headlines colliding with column rules; centered layouts forbidden; never polite whitespace.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2EFE9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#6F6A60` | Captions, meta, secondary text |
| Accent | `#D92300` | Primary actions, highlights |
| Accent 2 | `#111111` | Rules, masthead bars, ticker ground (same as Ink — intentional two-color discipline: one red, one black) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Newsroom density: tight 16–24px story rhythm, giant 80–160px display headlines, full-bleed image breaks

Use an 8px base unit (4px for dense product UI). Section padding tight (16–24px rhythm); never let body copy touch a container edge — images and rules bleed instead.

## 5. Layout / Grid

Front-page stack: masthead, giant headline, full-bleed image, rule, story grid, ticker. Multi-column story wells with drop caps. Max-width 1400px, edges bleed.

## 6. Borders

Thick black rules (3–6px) between stories; red kickers; bordered pull-quote blocks

## 7. Shadows

None — ink on paper, no elevation

## 8. Radius

0px sharp; images may bleed full-bleed

## 9. Buttons

Black bars with white uppercase condensed labels, full-bleed on mobile. Hover floods red. No radius, no shadow, all caps.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Story blocks: kicker, huge headline, dek, byline, rule — no containing card. Image-led features bleed edge to edge.

## 11. Navigation

Masthead bar: date/edition mono, giant wordmark, section links in condensed caps; breaking-news ticker below in red-on-black.

## 12. Imagery

High-contrast reportage photography, full-bleed, hard crops, red duotone options. Captions small with credit lines.

## 13. Icons

None decorative — use typographic devices: ★, →, №, rules, and boxed section numbers.

## 14. Textures / Patterns

Newsprint grain and halftone at 6–10%; misregistration offsets (red/black split) on display type for print fury.

## 15. Motion

Typewriter tickers, clip-path headline reveals, hard cuts. 200ms steps; urgency over smoothness.

Durations: instant–150ms hard cuts; marquees allowed. Easings: none or linear for marquees; no springs, no soft fades.

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

- Soft shadows, rounded cards, or pastel palettes
- Polite 48px headlines — double them
- Generic stock photography
- Centered delicate layouts
- More than one red and one black

## 20. Quick-start snippet

```css
:root {
  --bg: #F2EFE9;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #6F6A60;
  --accent: #D92300;
  --accent-2: #111111;
  --font-display: Arial Black, Archivo Black, Helvetica Neue, sans-serif;
  --font-body: Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Editorial Brutalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/editorial-brutalism/DESIGN.md`.*
