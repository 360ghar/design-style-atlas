---
slug: dark-academia
name: "Dark Academia"
description: "Oxford libraries, oxblood leather, and candlelit scholarly romance."
category: Cultural
tags: [moody, serif, literary]
related: [editorial-minimalism, newspaper, fashion-editorial]
preview:
  bg: "#1E1A16"
  surface: "#2A241E"
  ink: "#EDE6D6"
  muted: "#A89C86"
  accent: "#B08D57"
  accent2: "#7A1F2B"
  display: "EB Garamond, Georgia, Times New Roman, serif"
  body: "Georgia, Times New Roman, serif"
---

# Dark Academia — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Dark Academia is Dead Poets Society as UI: candlelit libraries, oxblood leather, brass lamps, and Garamond set like poetry. Latin epigraphs, margin annotations, wax-seal badges. Melancholy, romantic, and erudite — knowledge as candlelight against the dark.

**Three principles:**

- Candlelight palette: parchment ink on near-black umber, brass and oxblood only
- Typography is literature: Garamond, italics, epigraphs, footnotes
- Texture of age: paper grain, leather, marble, oil-painting darkness

## 2. Typography

- **Display:** EB Garamond, Georgia, Times New Roman, serif
- **Body:** Georgia, Times New Roman, serif
- **Scale:** chapter 40–56px Garamond, H2 28px italic options, body 17–19px/1.75, marginalia 13–14px italic.
- **Weights:** 400–500 body; 500–600 headings; italics carry the romance.
- **Rules:** centered chapter openings with epigraphs; justified-ish left prose; Latin/Greek accents welcome.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1E1A16` | Page ground |
| Surface | `#2A241E` | Cards, panels, wells |
| Ink | `#EDE6D6` | Headlines, body text |
| Muted | `#A89C86` | Captions, meta, secondary text |
| Accent | `#B08D57` | Primary actions, highlights |
| Accent 2 | `#7A1F2B` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Brass #B08D57 for rules, seals, CTAs; oxblood #7A1F2B for stamps, wax seals, alerts.

## 4. Spacing

Margins like book pages: 28–40px; sections 88–120px; footnotes tucked with hairlines.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Book-like single column 680–760px for prose; library-grid for collections; oil-painting full-bleed heroes.

## 6. Borders

1px brass (#B08D5766) keylines; double rules for chapter heads; wax-seal circular badges.

## 7. Shadows

Candle-soft vignettes: inset darkening at edges; cards 0 16px 40px rgba(0,0,0,0.5); no neon.

## 8. Radius

4–8px restrained; circles for seals and portraits; arches for windows and niches.

## 9. Buttons

Brass-outlined or oxblood filled, 6px radius, 48px, letterspaced serif labels; hover deepens like lamplight.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Leather-dark panels with brass keyline: serif title, italic excerpt, footnote meta, wax-seal badge.

## 11. Navigation

Dark bar with serif wordmark; roman-numeral sections; search as card-catalog drawer.

## 12. Imagery

Oil-dark libraries, marble busts, candles, ivy quads, handwritten letters; duotone umber treatment.

## 13. Icons

Quills, keys, columns, laurel, seals — brass line icons 18–22px, engraved style.

## 14. Textures / Patterns

Paper grain 6%, leather, marble veins, oil-canvas darkness, dust motes in light beams.

## 15. Motion

Stillness with breath: candle-flicker 3s on glows, page fades 200ms, ink-underline draws on hover.

Durations: 150–300ms; flicker loops 2–4s subtle. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Bright daylight palettes
- Sans-serif body copy
- Neon or chrome effects
- Rounded playful blobs
- Hustle-culture copy — contemplation only

## 20. Quick-start snippet

```css
:root {
  --bg: #1E1A16;
  --surface: #2A241E;
  --ink: #EDE6D6;
  --muted: #A89C86;
  --accent: #B08D57;
  --accent-2: #7A1F2B;
  --font-display: EB Garamond, Georgia, Times New Roman, serif;
  --font-body: Georgia, Times New Roman, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Dark Academia -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/dark-academia/DESIGN.md`.*
