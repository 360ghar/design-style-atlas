---
slug: swiss-design
name: "Swiss Design"
description: "International Typographic Style — asymmetric Helvetica grid, flush-left type, single red accent."
category: Minimal
tags: [grid, typography, rational]
related: [minimalism, ultra-minimalism, japanese-minimalism]
preview:
  bg: "#F4F2ED"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#6E6A61"
  accent: "#E30613"
  accent2: "#0B3D91"
  display: "Helvetica Neue, Helvetica, Arial, sans-serif"
  body: "Helvetica Neue, Helvetica, Arial, sans-serif"
---

# Swiss Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more disciplined, grid-obedient interpretation.

## 1. Overall aesthetic

The International Typographic Style: asymmetric grids, flush-left ragged-right type, oversized numerals, and one decisive red accent. Objective, systematic, and legible at any distance. Content is engineered, not decorated — mathematics you can see.

**Three principles:**

- The grid is visible logic, not a cage — align everything to it
- Flush left, ragged right, never justified or centered
- One accent color used sparingly and always deliberately

## 2. Typography

- **Display:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Body:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Scale:** hero 40–64px Helvetica flush-left on the grid, H2 28–36px, H3 20px, body 15–16px ragged-right, meta/labels 11–12px tracked uppercase.
- **Weights:** display 500–700 Helvetica; body 400; labels 500–700 with +0.1–0.2em tracking (never decorative blacks).
- **Rules:** flush-left ragged-right on a strict grid with mathematical spacing; never center body copy; never justify.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F2ED` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#E30613` | Primary actions, highlights |
| Accent 2 | `#0B3D91` | Functional reserve only — visited links / info states; never as decoration, never paired with Accent |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base; strict 12-column grid with 24px gutters; section padding 80–120px; baseline rhythm in 4px steps

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Asymmetric 12-column grid; large empty cells are intentional. Oversized headlines span 7–9 columns; meta and body occupy narrow 3–4 column rails. Numbered sections (01, 02, 03).

## 6. Borders

Hairline black rules (1–2px) as structural dividers; grid lines may show deliberately

## 7. Shadows

None. Hierarchy comes from scale, weight, and position — never elevation

## 8. Radius

0px everywhere — Swiss corners are always sharp

## 9. Buttons

Sharp rectangular buttons, black fill with white uppercase 12px labels tracked +0.08em. Secondary is a 2px black outline. Hover inverts.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Borderless white blocks separated by black hairlines, or pure grid cells with number + title + rule. No elevation, no radius.

## 11. Navigation

Top row: index number, wordmark, section links in small uppercase Helvetica caps with +0.1em tracking. A thick black rule (3–4px) may anchor the header.

## 12. Imagery

High-contrast photography cropped hard to grid cells, often duotone or grayscale with red accents. Images align to columns exactly.

## 13. Icons

Geometric, constructed icons with uniform 2px strokes; numerals preferred over pictograms where possible.

## 14. Textures / Patterns

Flat matte paper background (#F4F2ED). Optional visible grid overlay in draft mode; no grain.

## 15. Motion

Precise and fast: 120–180ms linear or ease-out, grid-aligned slides. Number counters and rule-draws suit the style; no bounces.

Durations: micro 100–180ms, standard 180ms restrained fades. Easings: linear or ease-out; no springs, no playful bounces — Swiss motion is invisible.

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

- Centered layouts or decorative asymmetry that ignores the grid
- Rounded corners, shadows, or gradients
- Serif or script typefaces
- More than one accent color in a single view (never pair Accent and Accent 2 as dual accents)
- Centering body copy or justifying text

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F2ED;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #6E6A61;
  --accent: #E30613;
  --accent-2: #0B3D91;
  --font-display: Helvetica Neue, Helvetica, Arial, sans-serif;
  --font-body: Helvetica Neue, Helvetica, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Swiss Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/swiss-design/DESIGN.md`.*
