---
slug: fashion-editorial
name: "Fashion Editorial"
description: "Runway restraint: towering imagery, whisper typography and gallery pacing."
category: Editorial & Print
tags: [fashion, luxury, imagery]
related: [luxury-minimalism, luxury-maximalism, editorial-magazine]
preview:
  bg: "#F4F1EC"
  surface: "#FFFFFF"
  ink: "#1C1B1A"
  muted: "#6B655D"
  accent: "#1C1B1A"
  accent2: "#8C2F1B"
  display: "Didot, Bodoni Moda, Cormorant Garamond, serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Fashion Editorial — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more dramatic, statuesque interpretation.

## 1. Overall aesthetic

A runway show you scroll: towering full-bleed looks, whisper-quiet captions (Look 12 — wool, silk), enormous serif statements between movements. Negative space is the stylist. For fashion, beauty, jewelry, and anyone selling desire through imagery.

**Three principles:**

- Imagery is 90% of the design — type whispers, photos shout
- One look per viewport; never collage the collection
- Captions are couture: tiny, tracked, precise

## 2. Typography

- **Display:** Didot, Bodoni Moda, Cormorant Garamond, serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 48–84px Didot/Bodoni statuesque serif, H2 30–42px, H3 21–24px, body 15–16px, meta/labels 11–12px wide-tracked uppercase.
- **Weights:** display 400–700 high-contrast serif; body 400; labels 500–600 with +0.2–0.3em tracking.
- **Rules:** towering centered or flush-left serif statements with vast negative space; cropped full-bleed imagery; never dense UI grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F1EC` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1C1B1A` | Headlines, body text |
| Muted | `#6B655D` | Captions, meta, secondary text |
| Accent | `#1C1B1A` | Primary actions, highlights |
| Accent 2 | `#8C2F1B` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Runway pacing: full-viewport looks, 140px+ pauses, tiny tracked captions, 720px text measure

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Runway sequence: full-viewport look chapters, serif intertitles, credit-block footers. Max-width none — bleed everything.

## 6. Borders

Hairlines only: 1px ink rules, captioned figure lines, look-number ticks

## 7. Shadows

None — imagery floats on space, not elevation

## 8. Radius

0px — fashion is sharp

## 9. Buttons

Ghost rectangles with 1px ink borders and tracked 11px labels; book-appointment fills black. Hover fills over 400ms.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — look plates: image, look number, caption, credit. E-commerce PDPs keep gallery purity with quiet buy rows.

## 11. Navigation

Floating minimal: monogram left, collection links center in tiny caps, bag/search right. Transparent over looks.

## 12. Imagery

Full-bleed campaign photography, portrait orientation favored, muted grade, film grain. Backstage candids as secondary.

## 13. Icons

Hairline bag/search/account glyphs, 1.5px stroke. Nothing filled, nothing colorful.

## 14. Textures / Patterns

Film grain 5–8%, paper flat on text chapters, silk gradients barely-there.

## 15. Motion

Runway slow: 800ms crossfades between looks, gentle parallax (±4%), caption fade-ups. Never bouncy.

Durations: micro 200–300ms, standard 500–700ms runway fades, ceremonial 1000ms. Easings: slow ease-out; springs and snaps forbidden.

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

- Grids of small product tiles as the hero
- Loud color or sticker graphics
- Sans-serif display headlines
- Popups and urgency badges
- Fast carousels — pace like a show

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F1EC;
  --surface: #FFFFFF;
  --ink: #1C1B1A;
  --muted: #6B655D;
  --accent: #1C1B1A;
  --accent-2: #8C2F1B;
  --font-display: Didot, Bodoni Moda, Cormorant Garamond, serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Fashion Editorial -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/fashion-editorial/DESIGN.md`.*
