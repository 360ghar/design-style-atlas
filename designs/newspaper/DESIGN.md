---
slug: newspaper
name: "Newspaper"
description: "Broadsheet density: columns, headlines and datelines with ink urgency."
category: Editorial & Print
tags: [news, broadsheet, dense]
related: [editorial-magazine, fashion-editorial, poster-inspired]
preview:
  bg: "#F7F4EC"
  surface: "#FFFFFF"
  ink: "#1A1A1A"
  muted: "#6E6A61"
  accent: "#A6192E"
  accent2: "#1A1A1A"
  display: "Times New Roman, Times, serif"
  body: "Georgia, Times New Roman, serif"
---

# Newspaper — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder interpretation.

## 1. Overall aesthetic

The front page as interface: nameplate, dateline, multi-column story wells, jump lines, weather-box widgets, and market tickers. Blackletter or Old Style nameplate, Times headlines, justified narrow columns. Trust through density and ritual.

**Three principles:**

- Density signals authority — pack the front with signal
- Nameplate, dateline, folio: the ritual frame matters
- Justified columns, ragged nothing, rules everywhere

## 2. Typography

- **Display:** Times New Roman, Times, serif
- **Body:** Georgia, Times New Roman, serif
- **Scale:** nameplate 48–72px blackletter/Old Style, headlines 28–56px Times, H3 20–24px, body 14–15px Georgia in narrow justified columns, agate/meta 11–12px.
- **Weights:** display 700–900 Times; body 400; labels 600–700 small caps with +0.06–0.1em tracking.
- **Rules:** justified narrow columns with hyphenation, ragged nothing; nameplate centered, headlines spanning columns; rules everywhere.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F4EC` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1A1A1A` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#A6192E` | Primary actions, highlights |
| Accent 2 | `#1A1A1A` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Dense and disciplined: 3–5 columns at 1240px, 16–20px story rhythm, 56px headlines, folio headers

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Broadsheet grid, max-width 1280px centered with 24px page gutters (16px at 360–768px): nameplate band 96–140px tall, 5-column grid at desktop with 24px gutters and 1px column rules, lede story spanning 3 columns + 2-column secondary wells, 320px sidebar for briefs and agate-type data strips. Section wells separated by 3px bars with 32–48px stack spacing; full-width folio/dateline bars top and bottom.

## 6. Borders

Column rules (1px), section bars (3px black), dateline hairlines, boxed briefs

## 7. Shadows

None — flat ink

## 8. Radius

0px — newsprint has no rounding

## 9. Buttons

Section bars and boxed links; subscribe as ink bar; e-edition toggle. Hover underlines, no fills jumping.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Story boxes with 1px rules and 3px section bars; briefs in agate 12px; no shadows, no radius.

## 11. Navigation

Nameplate block: edition + date + weather; nav as section index in small caps with rules above/below.

## 12. Imagery

Wire-service photography: hard crops, grayscale-leaning, cutlines with credits. Charts in ink with red accents.

## 13. Icons

Weather glyphs, market arrows (▲▼), section numerals. Functional only.

## 14. Textures / Patterns

Newsprint grain 6–10%, slight show-through tint, halftone on photos.

## 15. Motion

Telegraph minimal: ticker updates, edition timestamp, instant hovers. News doesn't dance.

Durations: micro instant–150ms, standard 200ms ticker fades at most; no ceremonial transitions. Easings: linear for tickers and timestamps; no springs, no ease-out flourishes — news doesn't dance.

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

- Rounded cards or soft shadows
- Sans-serif headlines
- Hero lifestyle photography
- Infinite scroll without sections
- Breaking-news theatrics on evergreen content

## 20. Quick-start snippet

```css
:root {
  --bg: #F7F4EC;
  --surface: #FFFFFF;
  --ink: #1A1A1A;
  --muted: #6E6A61;
  --accent: #A6192E;
  --accent-2: #1A1A1A;
  --font-display: Times New Roman, Times, serif;
  --font-body: Georgia, Times New Roman, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Newspaper -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/newspaper/DESIGN.md`.*
