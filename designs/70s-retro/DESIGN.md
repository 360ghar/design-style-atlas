---
slug: 70s-retro
name: "70s Retro"
description: "Warm analog groove: burnt orange, harvest gold and curvy mushroom type."
category: Decades
tags: [70s, groovy, warm]
related: [80s-retro, 90s-retro, mid-century-modern]
preview:
  bg: "#F3E9D2"
  surface: "#FFF8EA"
  ink: "#3B2E23"
  muted: "#8A7A66"
  accent: "#D96C2B"
  accent2: "#7A8450"
  display: "Cooper Black, Shrikhand, serif"
  body: "Karla, Inter, sans-serif"
---

# 70s Retro — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the groovier, more harvest-gold interpretation.

## 1. Overall aesthetic

A fondue night in pixels: burnt orange + harvest gold + avocado, Cooper Black headlines, rainbow arches, flower power, wood paneling warmth. Cozy and groovy. For food, music, cannabis, and lifestyle nostalgia.

**Three principles:**

- Earth-tone triad: orange + gold + avocado on cream
- Curvy display type (Cooper!) with tight spacing
- Rainbows, mushrooms, flowers: the motif trio

## 2. Typography

- **Display:** Cooper Black, Shrikhand, serif
- **Body:** Karla, Inter, sans-serif
- **Scale:** hero 48–76px Cooper Black/Shrikhand groovy, H2 32–42px, H3 22–24px, body 16–17px, meta/labels 12–13px rounded labels.
- **Weights:** display 700–900 groovy; body 400–500; labels 700 with +0.04–0.1em tracking.
- **Rules:** centered bubbly lowercase headlines (e.g. `groovy, baby`) in Cooper Black/Shrikhand with rainbow arches above and shag textures; meta labels uppercase at 12–13px with +0.25em tracking (e.g. `ORANGE · GOLD · AVOCADO ✿`); never minimal whitespace.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F3E9D2` | Page ground |
| Surface | `#FFF8EA` | Cards, panels, wells |
| Ink | `#3B2E23` | Headlines, body text |
| Muted | `#8A7A66` | Captions, meta, secondary text |
| Accent | `#D96C2B` | Primary actions, highlights |
| Accent 2 | `#7A8450` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

Display headlines render warmer/lighter than body ink: use `#5B3A1E` for large Cooper Black headlines on Background. Body copy stays `#3B2E23`.

Rainbow support stripes (decorative only, not interactive tokens): rust `#B33A2B`, harvest gold `#D9A441`, chocolate `#8A4A2B` — pair with Accent `#D96C2B` + Accent 2 `#7A8450` for arches/dividers.

## 4. Spacing

Lounge rhythm: groovy 88–110px sections, flower-scattered margins, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Lounge scroll: rainbow-arch hero, groovy feature rows, flower-break interludes, fondue-pot CTA. Max-width 1200px.

## 6. Borders

Groovy frames: thick rounded outlines in brown/orange; rainbow-arch dividers as 5 concentric bands outside-in `#B33A2B` → `#D96C2B` → `#D9A441` → `#7A8450` → `#8A4A2B`

## 7. Shadows

Shag warmth: 0 12px 32px brown/15; sunset-glow accents

## 8. Radius

Mushroom curves: 20px+ blobs, rainbow-arch dividers, flower-power rounds

## 9. Buttons

Groovy pills: orange fills, cream Cooper labels; hover melts (scale + warm).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Lounge panels: cream, brown frames, flower-corner stickers, sunset header strips.

## 11. Navigation

Lounge bar: flower mark, groovy links, orange CTA. Rainbow trim top.

## 12. Imagery

Analog photography: vans, vinyl, fondue, shag. Warm faded grade, grain.

## 13. Icons

Mushrooms, flowers, vans, rainbows — groovy glyph set in earth tones.

## 14. Textures / Patterns

Shag, wood paneling, flower fields, sunset stripes at 10–15%.

## 15. Motion

Groovy drift: lava-lamp blobs (12s), flower spins (slow), 300ms warm pops.

Durations: micro 150–250ms, standard 400–600ms wavy groove loops. Easings: loopy ease-in-out; harsh snaps forbidden.

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

- Cool blues or neon
- Sharp minimal geometry
- Sans-serif display type
- Fast techy motion
- Cynical copy (good vibes only)

## 20. Quick-start snippet

```css
:root {
  --bg: #F3E9D2;
  --surface: #FFF8EA;
  --ink: #3B2E23;
  --muted: #8A7A66;
  --accent: #D96C2B;
  --accent-2: #7A8450;
  --font-display: Cooper Black, Shrikhand, serif;
  --font-body: Karla, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in 70s Retro -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/70s-retro/DESIGN.md`.*
