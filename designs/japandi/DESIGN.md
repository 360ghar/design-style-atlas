---
slug: japandi
name: "Japandi"
description: "Japanese-Scandi fusion: warm minimalism, low lines and crafted calm."
category: Organic & Calm
tags: [japandi, calm, crafted]
related: [organic-biophilic, eco-sustainable, wabi-sabi]
preview:
  bg: "#F5F1E9"
  surface: "#FFFDF8"
  ink: "#33302A"
  muted: "#6B655A"
  accent: "#8C5A2B"
  accent2: "#4A5D4E"
  display: "Cormorant Garamond, Inter Tight, serif"
  body: "Inter, Hiragino Sans, sans-serif"
---

# Japandi — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the calmer, more crafted interpretation.

## 1. Overall aesthetic

Kyoto meets Copenhagen: low oak forms, bouclé and clay, shoji-grid rhythms, single stems in vases. Minimalism with warmth and craft. For furniture, interiors, ceramics, and slow-living brands.

**Three principles:**

- Low and horizontal: compositions hug the ground
- Oak, clay, stone, bouclé — materials lead, color follows
- One stem, one stone: styling restraint as luxury

## 2. Typography

- **Display:** Cormorant Garamond, Inter Tight, serif
- **Body:** Inter, Hiragino Sans, sans-serif
- **Scale:** hero 32–48px Cormorant/Inter Tight calm headlines, H2 24–32px, H3 19–21px, body 15–16px wide leading, meta/labels 11–12px tracked labels.
- **Weights:** display 400–600; body 400; labels 500 with +0.12–0.2em tracking (never heavy blacks).
- **Rules:** flush-left headlines, 1.1–1.25 line-height, -0.01em display tracking; never centered display, never clutter, never loud color.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F1E9` | Page ground |
| Surface | `#FFFDF8` | Cards, panels, wells |
| Ink | `#33302A` | Headlines, body text |
| Muted | `#6B655A` | Captions, meta, secondary text |
| Accent | `#8C5A2B` | Primary actions, highlights |
| Accent 2 | `#4A5D4E` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Grounded calm: low horizontal compositions, 100–130px breathing sections, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding 100–130px; card padding 24–28px; never let text touch a container edge.

## 5. Layout / Grid

Gallery-calm: low hero compositions, material chapters, maker stories, room-set closers. Max-width 1240px.

## 6. Borders

Joinery lines: 1px solid #D6CFC2 frames; shoji-grid dividers; low #33302A 4px plinth bars

## 7. Shadows

Tea-room soft: 0 10px 30px rgba(51,48,42,0.10); low-grounded weight, never floating

## 8. Radius

6–12px soft crafted rounding; low plinth-like panels

## 9. Buttons

Clay fills with cream labels; quiet bordered secondaries; 12px radius, 48px targets. Hover warms color.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Material cards: oak/clay grounds, product centered low, generous air above. Soft shadows.

## 11. Navigation

Calm bar: wordmark, room/maker links, cart with count. Warm blur on scroll.

## 12. Imagery

Low styled interiors, ceramic macro, daylight shadows, single-stem florals. Warm desaturated grade.

## 13. Icons

Thin crafted glyphs: joinery marks, material swatches as navigation aids.

## 14. Textures / Patterns

Oak grain, bouclé, clay, linen at 6–12% — touchable matte richness.

## 15. Motion

Slow craft: 600ms warm fades, daylight-drift gradients, product turns unhurried.

Durations: micro 200–300ms, standard 500–700ms still-air fades. Easings: ease-out cubic-bezier(0.22,1,0.36,1) only; springs and hurry forbidden.

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

- Tall dense layouts
- Cold blue-grays
- Glossy or chrome finishes
- Cluttered styling (one stem!)
- Fast bouncy motion

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F1E9;
  --surface: #FFFDF8;
  --ink: #33302A;
  --muted: #6B655A;
  --accent: #8C5A2B;
  --accent-2: #4A5D4E;
  --font-display: Cormorant Garamond, Inter Tight, serif;
  --font-body: Inter, Hiragino Sans, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Japandi -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/japandi/DESIGN.md`.*
