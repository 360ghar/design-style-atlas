---
slug: typography-first
name: "Typography-First"
description: "Reading-led design: exquisite measure, scale and hierarchy over decoration."
category: Type-Led
tags: [typography, reading, hierarchy]
related: [swiss-design, typography-maximalism, editorial-magazine]
preview:
  bg: "#FDFCF9"
  surface: "#FFFFFF"
  ink: "#1B1A17"
  muted: "#74706A"
  accent: "#1B1A17"
  accent2: "#2B4EFF"
  display: "Newsreader, Georgia, serif"
  body: "Newsreader, Source Serif 4, Georgia, serif"
---

# Typography-First — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more readerly, type-led interpretation.

## 1. Overall aesthetic

A book that happens to be a website: perfect measure, considered scale steps (1.25 ratio), footnotes, sidenotes, and pull quotes. Links are the only blue. For publishers, docs, essays, and tools where reading IS the job.

**Three principles:**

- Measure, leading, and scale — in that order of importance
- Hierarchy through type alone: size, weight, italic, caps
- Footnotes and sidenotes are first-class citizens

## 2. Typography

- **Display:** Newsreader, Georgia, serif
- **Body:** Newsreader, Source Serif 4, Georgia, serif
- **Scale:** hero 40–64px Newsreader/Georgia readerly serif, H2 28–36px, H3 21px, body 17–18px at 680px measure, meta/labels 12–13px tracked.
- **Weights:** display 500–700 serif; body 400–500; labels 600 with +0.08–0.15em tracking (never 900 poster blacks).
- **Rules:** flush-left longform headlines with exquisite leading; pull-quotes and footnotes; never image-led or centered marketing layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FDFCF9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1B1A17` | Headlines, body text |
| Muted | `#74706A` | Captions, meta, secondary text |
| Accent | `#1B1A17` | Primary actions, highlights |
| Accent 2 | `#2B4EFF` | Links, footnote markers, citations only |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Reading science: 60–70ch measure, 1.6–1.8 line-height, 32px paragraph rhythm, 96px chapters

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Reading column (680px) + sidenote rail (220px, desktop); chapter openers; TOC sidebar for long works. Quiet progress hairline.

## 6. Borders

Typographic rules only: kickers with rules, footnote dividers, chapter numerals

## 7. Shadows

None — paper has no elevation

## 8. Radius

0–4px; print-sharp

## 9. Buttons

Text-scale actions: small-caps links, footnote-style buttons, one ink subscribe bar. Hover underlines deepen.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — pull quotes, asides, and footnote blocks with rules. Index rows for archives.

## 11. Navigation

Chapter nav: TOC with current-section highlight; prev/next chapter footer; print/reading-mode toggles.

## 12. Imagery

Figures with captions and numbers; diagrams in ink; author portraits small. Images serve the text.

## 13. Icons

Section marks (§), pilcrows (¶), footnote daggers (†) — typographic furniture, not pictograms.

## 14. Textures / Patterns

Paper white flat; deckle edge on covers only; ink-friendly 3% grain.

## 15. Motion

Reading-calm: smooth anchor scroll, footnote popovers 150ms, highlight-on-cite. Nothing else moves.

Durations: micro 150–250ms, standard 350–500ms ink-settle fades. Easings: soft ease-out; springs forbidden — reading is calm.

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

- Cards, shadows, or SaaS chrome
- Sans-serif body text
- Wide measures over 75ch
- Popups interrupting reading
- Decorative animation

## 20. Quick-start snippet

```css
:root {
  --bg: #FDFCF9;
  --surface: #FFFFFF;
  --ink: #1B1A17;
  --muted: #74706A;
  --accent: #1B1A17;
  --accent-2: #2B4EFF;
  --font-display: Newsreader, Georgia, serif;
  --font-body: Newsreader, Source Serif 4, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + pull-quote in Typography-First -->
<a class="ds-btn" href="#">Get started</a>
<blockquote class="ds-pullquote">
  <p>Good typography is invisible.</p>
</blockquote>
<p class="ds-footnote"><sup>1</sup> Bringhurst, <i>Elements of Typographic Style</i>, §2.1</p>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/typography-first/DESIGN.md`.*
