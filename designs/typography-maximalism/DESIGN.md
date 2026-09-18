---
slug: typography-maximalism
name: "Typography Maximalism"
description: "Type as image: wall-to-wall letterforms, kinetic headlines, zero chrome."
category: Maximalist
tags: [typography, kinetic, expressive]
related: [swiss-design, maximalism, playful-maximalism]
preview:
  bg: "#0F0F0F"
  surface: "#161616"
  ink: "#F4F1EA"
  muted: "#8F8B82"
  accent: "#FF4D00"
  accent2: "#F4F1EA"
  display: "Anton, Archivo Black, Impact, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Typography Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bigger, denser interpretation — type is the image.

## 1. Overall aesthetic

The website is a poster that scrolls: viewport-filling condensed headlines, outlined echo lines, marquee tickers, and index-style meta in mono. Images are guests; letterforms are hosts. For type foundries, festivals, studios, and brands with something to shout.

**Three principles:**

- Set headlines at 12–20vw and commit
- Mix filled, outlined, and italic treatments of one family
- Meta in mono, headlines in display — nothing in between

## 2. Typography

- **Display:** Anton, Archivo Black, Impact, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 10–20vw condensed black (Anton/Archivo Black), H2 6–10vw, H3 28–32px, body 15–17px, meta/labels 12–13px mono uppercase.
- **Weights:** display 800–900 condensed black; body 400–500; labels 600–700 with +0.08–0.15em tracking.
- **Rules:** wall-to-wall flush-left type monuments filling every viewport; outlines and fills mixed; never small polite headlines, never image-led layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0F0F0F` | Page ground |
| Surface | `#161616` | Cards, panels, wells |
| Ink | `#F4F1EA` | Headlines, body text |
| Muted | `#8F8B82` | Captions, meta, secondary text |
| Accent | `#FF4D00` | Primary actions, highlights |
| Accent 2 | `#F4F1EA` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Type-driven: 100–200px display lines, tight -0.03em tracking, sections paced like chapters (96–140px)

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Poster stack, single column, full-bleed: no content max-width (cap at 1600px + 24px gutters only on ultrawide); sections 96–140px vertical padding with 24px inner padding on mobile, 48px on desktop; ticker dividers 32–40px tall between chapters; index/TOC as full-width ruled rows (1px ink at 22% + 16px row padding); footer as colophon block with same section padding. Type bleeds to the padding edge, never to the raw viewport edge.

## 6. Borders

Typographic rules: baseline grids visible, 2px ink rules between type movements, outlined-text strokes

## 7. Shadows

Type shadows only: hard offset duplicates (4px 4px 0 accent), layered echo stacks on heroes

## 8. Radius

0–6px; type needs no rounding

## 9. Buttons

Type-buttons: giant underlined links or black bars with condensed caps; hover fills accent with instant swap.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — type blocks with rules. Schedules, lineups, and indexes ARE the content design.

## 11. Navigation

Minimal overlay: wordmark + menu toggle + ticket CTA; full-screen type menu on open.

## 12. Imagery

Type-first: images masked inside letterforms or confined to breakout bands; duotone to match ink.

## 13. Icons

Arrows, asterisks, and numerals as ornaments (→ ↗ * №). No pictogram sets.

## 14. Textures / Patterns

Paper grain on dark, misregistration splits, photocopy noise on display type.

## 15. Motion

Kinetic type: scroll-scrubbed headlines, marquee tickers, char-by-char reveals. 60fps transforms only.

Durations: micro 150–250ms, standard 400–600ms scroll-scrubbed line reveals. Easings: damped ease-out; bouncy springs forbidden.

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

- Body-copy layouts and card grids
- Multiple font families competing
- Small polite headlines
- Decorative illustration over type
- Centering long-form text

## 20. Quick-start snippet

```css
:root {
  --bg: #0F0F0F;
  --surface: #161616;
  --ink: #F4F1EA;
  --muted: #8F8B82;
  --accent: #FF4D00;
  --accent-2: #F4F1EA;
  --font-display: Anton, Archivo Black, Impact, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Typography Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/typography-maximalism/DESIGN.md`.*
