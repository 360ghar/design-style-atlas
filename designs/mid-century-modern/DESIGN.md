---
slug: mid-century-modern
name: "Mid-Century Modern"
description: "Eames-era optimism: starbursts, tapered lines and warm atomic geometry."
category: Heritage Luxury
tags: [mid-century, atomic, retro]
related: [art-deco, japandi, scandinavian]
preview:
  bg: "#F5F1E8"
  surface: "#FFFFFF"
  ink: "#2B2B2B"
  muted: "#7A766E"
  accent: "#E4572E"
  accent2: "#2E86AB"
  display: "Futura, Century Gothic, sans-serif"
  body: "Helvetica Neue, Inter, sans-serif"
---

# Mid-Century Modern — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more atomic, teak-and-mustard interpretation.

## 1. Overall aesthetic

A 1958 Herman Miller showroom: teak and mustard, starburst clocks (CSS!), tapered legs on everything, barkcloth patterns. Optimistic, warm, well-made. For furniture, interiors, coffee, and lifestyle.

**Three principles:**

- Taper everything: legs, rules, type details
- Mustard + teal + rust on warm cream
- Starbursts and boomerangs: the atomic motif pair

## 2. Typography

- **Display:** Futura, Century Gothic, sans-serif
- **Body:** Helvetica Neue, Inter, sans-serif
- **Scale:** hero 40–60px Futura/Century Gothic clean geometric, H2 28–36px, H3 20–22px, body 15–16px, meta/labels 12–13px starburst labels.
- **Weights:** display 500–700 geometric; body 400; labels 600 with +0.1–0.18em tracking.
- **Rules:** flush-left headlines with boomerang and starburst motifs, tapered legs logic; never brutalist rawness, never kitsch overload.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F1E8` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2B2B2B` | Headlines, body text |
| Muted | `#7A766E` | Captions, meta, secondary text |
| Accent | `#E4572E` | Primary actions, highlights |
| Accent 2 | `#2E86AB` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs. Supporting tint: mustard `#D9A441` for starburst/badge bars only (as in preview), never body text.

## 4. Spacing

Showroom rhythm: low horizontal bands, 88–110px sections, 28px card padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Showroom scroll: hero room-set, collection rows with tapered cards, maker story, catalog footer. Max-width 1280px.

## 6. Borders

Atomic keylines: 1–2px `#D8D0BE` frames; starburst dividers; tapered rules

## 7. Shadows

Showroom soft: `0 10px 30px rgba(43,43,43,0.10)`; long soft furniture-catalog shadows

## 8. Radius

Boomerang curves and tapered forms; 8–16px friendly panels

## 9. Buttons

Tapered buttons: rust/teal fills, cream labels, 10px radius. Hover warms + lifts.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Catalog cards: product on cream, tapered image masks, spec rows in `ui-monospace, SFMono-Regular, Menlo, monospace` 12px, starburst sale badges.

## 11. Navigation

Showroom bar: geometric wordmark, collection links, cart. Warm and low.

## 12. Imagery

Styled room-sets, product on seamless, atomic patterns, vintage ads as flavor.

## 13. Icons

Starbursts, boomerangs, tapered arrows — atomic glyph set.

## 14. Textures / Patterns

Teak grain, barkcloth, tweed, starburst fields at 8–12%.

## 15. Motion

Showroom smooth: 300ms warm fades, starburst slow-spins, drawer-like panel slides.

Durations: micro 150–250ms, standard 350–550ms starburst pops. Easings: crisp ease-out; bouncy springs forbidden.

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

- Cold grays or neon
- Sharp brutalist geometry
- Dense packed grids
- Sans-mono tech chrome
- Fast bouncy motion

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F1E8;
  --surface: #FFFFFF;
  --ink: #2B2B2B;
  --muted: #7A766E;
  --accent: #E4572E;
  --accent-2: #2E86AB;
  --font-display: Futura, Century Gothic, sans-serif;
  --font-body: Helvetica Neue, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Mid-Century Modern -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/mid-century-modern/DESIGN.md`.*
