---
slug: oversized-typography
name: "Oversized Typography"
description: "Scale as spectacle: viewport-filling headlines that carry whole pages."
category: Type-Led
tags: [oversized, display, bold]
related: [neo-brutalism, playful-brutalism, editorial-brutalism]
preview:
  bg: "#111111"
  surface: "#1A1A1A"
  ink: "#F5F2EA"
  muted: "#8A877E"
  accent: "#FF4D00"
  accent2: "#F5F2EA"
  display: "Anton, Archivo Black, Impact, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Oversized Typography — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder interpretation.

## 1. Overall aesthetic

Brutalist scale with editorial control: three giant lines per page do the work of ten sections. Words become rooms you walk through. For festivals, studios, athletes, and launches with one huge thing to say.

**Three principles:**

- 3–7 words per giant line; edit until it fits
- One family, three treatments (fill/outline/italic) max
- Small mono meta frames the monuments

## 2. Typography

- **Display:** Anton, Archivo Black, Impact, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 12vw minimum (14–22vw lines, 0.9 leading), H2 8–10vw, H3 32px, body 15–17px, meta/labels 12–13px mono tracked uppercase.
- **Weights:** display 800–900 black condensed; body 400–500; labels 600–700 with +0.08–0.2em tracking.
- **Rules:** flush-left monuments; 3–7 words per giant line (fill/outline/italic treatments max); never set paragraphs at display scale.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#111111` | Page ground |
| Surface | `#1A1A1A` | Cards, panels, wells |
| Ink | `#F5F2EA` | Headlines, body text |
| Muted | `#8A877E` | Captions, meta, secondary text |
| Accent | `#FF4D00` | Primary actions, highlights |
| Accent 2 | `#F5F2EA` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Monumental: 14–22vw lines, -0.04em tracking, 0.9 leading, 100px+ pauses between statements

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Monument stack: full-bleed giant statements alternating with quiet meta bands and one image break. Footer as final monument.

## 6. Borders

Typographic architecture: rules between giant lines, outlined echo rows, index ticks

## 7. Shadows

Scale shadows: hard offset echoes (6px 6px 0 accent) on one line max; UI flat

## 8. Radius

0–6px; scale needs no softening

## 9. Buttons

Monument-links: giant underlined phrases; bordered index buttons; one solid accent conversion block.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — statement blocks with rules and numerals. Lineup/schedule as giant index rows.

## 11. Navigation

Overlay minimal: mark + menu + ticket CTA; full-screen giant-link menu.

## 12. Imagery

Scale contrast: tiny images inside giant type (masks), or single full-bleed breaks. Duotone to match ink.

## 13. Icons

Arrows and numerals at display scale (→ ↗ 01). Nothing small and fussy.

## 14. Textures / Patterns

Dark grain, misregistration on one line, concrete flat alternative on light variant.

## 15. Motion

Scroll-scrubbed line reveals (clip-path), char stagger on entry, marquee echoes. Damped and heavy — monuments move slowly.

Durations: micro 150–250ms UI, standard 300–500ms damped line reveals, ceremonial scroll-scrubbed (clip-path) with char stagger. Easings: damped ease-out for monuments; no bouncy springs, no mechanical linear snaps.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1099px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Paragraphs at display scale
- Multiple competing giant messages
- Thin weights at huge sizes (go black)
- Centering everything (flush-left monuments hit harder)
- Small timid CTAs

## 20. Quick-start snippet

```css
:root {
  --bg: #111111;
  --surface: #1A1A1A;
  --ink: #F5F2EA;
  --muted: #8A877E;
  --accent: #FF4D00;
  --accent-2: #F5F2EA;
  --font-display: Anton, Archivo Black, Impact, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: monument-link + index row in Oversized Typography -->
<a class="ds-monument" href="#">GET TICKETS →</a>
<div class="ds-index-row">
  <span>01</span><span>Headline act — Main stage</span><span>21:00 →</span>
</div>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/oversized-typography/DESIGN.md`.*
