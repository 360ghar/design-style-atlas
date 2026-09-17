---
slug: brutalism
name: "Brutalism"
description: "Raw concrete honesty: system type, exposed structure and zero decoration."
category: Brutalist
tags: [raw, structural, honest]
related: [neo-brutalism, playful-brutalism, corporate-brutalism]
preview:
  bg: "#D6D3CD"
  surface: "#E8E6E1"
  ink: "#1A1A1A"
  muted: "#5C5A55"
  accent: "#0000EE"
  accent2: "#B30000"
  display: "Times New Roman, Times, serif"
  body: "Arial, Helvetica, sans-serif"
---

# Brutalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the rawer, more literal interpretation — never add polish.

## 1. Overall aesthetic

Web brutalism as béton brut: default system fonts, raw gray grounds, visible tables and borders, blue links, and layouts that refuse to flatter. Links are blue and underlined. Buttons are gray and beveled by the browser. Honesty is the whole program — the page shows its skeleton proudly.

**Three principles:**

- Expose the structure: grids, tables, and rules stay visible
- Default browser aesthetics are a feature, not a failure
- Content over chrome — styling budgets go to legibility

## 2. Typography

- **Display:** Times New Roman, Times, serif
- **Body:** Arial, Helvetica, sans-serif
- **Scale:** hero 28–44px system type, H2 22–28px, H3 18px, body 15–16px, meta/labels 12–13px plain (no tracked uppercase micro-labels, no 15vw poster scale).
- **Weights:** display 400–700 system default; body 400; labels 400–700 with no added tracking (browser defaults are the point).
- **Rules:** left-aligned system headlines; never center marketing copy; never use custom webfonts or ceremonial centered layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#D6D3CD` | Page ground |
| Surface | `#E8E6E1` | Cards, panels, wells |
| Ink | `#1A1A1A` | Headlines, body text |
| Muted | `#5C5A55` | Captions, meta, secondary text |
| Accent | `#0000EE` | Browser-link blue: links, primary actions |
| Accent 2 | `#B30000` | Visitor counters, error states, under-construction flags |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Tight and structural: 8px base unit (4px for dense rows); 16–24px page margins; bands separated by 2–4px rules, never whitespace alone. Never let text touch a container edge — 8px minimum inset.

## 5. Layout / Grid

Full-bleed stacked bands with hard edges; left-aligned everything; max-widths are generous (1400px+) or absent. Sidebars are plain bordered columns.

## 6. Borders

Heavy raw dividers: 2–4px solid ink; exposed table grids; unstyled form boxes

## 7. Shadows

None. Mass and weight come from solid blocks, not elevation

## 8. Radius

0px — concrete does not round

## 9. Buttons

Native gray beveled buttons or flat black rectangles with white Arial labels. Hover: invert or underline. No transitions longer than 100ms.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — bordered sections and definition rows. If containment is needed, a 2px solid box with square corners.

## 11. Navigation

A bordered bar with wordmark left and blue underlined links. Breadcrumbs as raw paths (Home / Section / Page). No sticky blur, no pills.

## 12. Imagery

Unretouched, often low-res, shown at native aspect with hard borders. Alt text treated as first-class content.

## 13. Icons

None, or raw Unicode glyphs (▪ ► ●). No icon sets, no SVGs with brand polish.

## 14. Textures / Patterns

Raw concrete gray flats; optional visible scanline or noise at low opacity for age. Never gradients.

## 15. Motion

Effectively static. Instant hover states; marquee and blink are period-accurate if used sparingly.

Durations: effectively none — instant hover states up to 100ms; no ceremonial transitions. Easings: none (linear instant); no springs, no ease-out flourishes, no smooth-scroll theatrics.

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

- Rounded corners, shadows, or gradients of any kind
- Custom webfonts for body text
- Hero sections with centered marketing copy
- Smooth-scroll theatrics or parallax
- Hiding the URL structure — show paths and indexes

## 20. Quick-start snippet

```css
:root {
  --bg: #D6D3CD;
  --surface: #E8E6E1;
  --ink: #1A1A1A;
  --muted: #5C5A55;
  --accent: #0000EE;
  --accent-2: #B30000;
  --font-display: Times New Roman, Times, serif;
  --font-body: Arial, Helvetica, sans-serif;
}
```

```html
<!-- Copy-paste starter: native button + bordered section in Brutalism -->
<button class="ds-btn" type="button">Submit query</button>
<section class="ds-band">
  <h3>Section headline</h3>
  <p>One supporting sentence in body type. <a href="#">A blue underlined link</a>.</p>
</section>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/brutalism/DESIGN.md`.*
