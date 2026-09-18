---
slug: scandinavian
name: "Scandinavian"
description: "Light woods, soft neutrals and functional warmth with hygge approachability."
category: Minimal
tags: [minimal, warm, functional]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#F9F7F3"
  surface: "#FFFFFF"
  ink: "#2E2C29"
  muted: "#76716A"
  accent: "#A35E33"
  accent2: "#577866"
  display: "Inter, Avenir, Nunito Sans, sans-serif"
  body: "Inter, Avenir, Nunito Sans, sans-serif"
---

# Scandinavian — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the softer, quieter interpretation.

## 1. Overall aesthetic

Scandi design pairs minimalism with warmth: pale oak tones, clay and sage accents, rounded soft geometry, and honest materials. Interfaces feel like a bright Copenhagen apartment — functional, cozy, and quietly optimistic. Friendliness is a feature.

**Three principles:**

- Light first: pale backgrounds, daylight-feel shadows, open layouts
- Warm neutrals over cold grays — beige, oat, clay, sage
- Democratic and friendly: readable sizes, clear actions, no intimidation

## 2. Typography

- **Display:** Inter, Avenir, Nunito Sans, sans-serif
- **Body:** Inter, Avenir, Nunito Sans, sans-serif
- **Scale:** hero 30–44px soft geometric sans, H2 24–30px, H3 18–20px, body 15–16px at comfortable measure, meta/labels 11–12px tracked uppercase.
- **Weights:** display 400–600; body 400; labels 500 with +0.1–0.15em tracking (never harsh poster blacks).
- **Rules:** flush-left warm headlines with airy spacing; centered only for single cozy statements; never dense or justified copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F9F7F3` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2E2C29` | Headlines, body text |
| Muted | `#76716A` | Captions, meta, secondary text |
| Accent | `#A35E33` | Primary actions, highlights |
| Accent 2 | `#577866` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

8px base; airy 24–32px card padding; sections 88–120px; comfortable, never sparse or dense

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Open centered layouts with soft card clusters; photography-forward bands alternating with oat backgrounds. Max-width 1200px, generous gutters.

## 6. Borders

Rarely visible; soft tonal separations (#ECE7DD) instead of lines

## 7. Shadows

Soft and warm: 0 8px 30px rgba(46,44,41,0.08). Diffuse like daylight, never hard

## 8. Radius

10–14px friendly rounding on cards and buttons

## 9. Buttons

Pill or 12px-radius buttons in warm clay or deep forest; white 15px labels. Hover lifts 2px with softened shadow. Large touch targets (44px minimum).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

White or cream cards, 12px radius, soft daylight shadow, 28px padding. Rounded image tops; icon in a tinted rounded square.

## 11. Navigation

Light bar with warm wordmark, rounded pill links, and a soft clay CTA. Sticky with blur; friendly and unhurried.

## 12. Imagery

Bright interiors, pale wood, plants, daylight, people at ease. Warm, slightly lifted exposure; rounded corners on all photos.

## 13. Icons

Rounded-line icons (2px, round caps), 20px, in tinted circles. Friendly and consistent sets only.

## 14. Textures / Patterns

Faint linen or oak-grain at very low opacity; soft daylight gradients from #FFFFFF to #F3EEE5.

## 15. Motion

Gentle 200–300ms ease-out; soft rises and fades. Hover lifts feel buoyant, never snappy.

Durations: micro 150–250ms, standard 200–300ms gentle fades. Easings: soft ease-out; no springs, no mechanical snaps.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px minimum tap targets, sticky bottom CTA where conversion matters.
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

- Cold blue-grays and stark pure-white sterility
- Hard shadows, sharp corners, or aggressive contrast
- Tiny 12px body text or cramped layouts
- Dark mode as default — light is the home
- Cynical or edgy copy tone

## 20. Quick-start snippet

```css
:root {
  --bg: #F9F7F3;
  --surface: #FFFFFF;
  --ink: #2E2C29;
  --muted: #76716A;
  --accent: #A35E33;
  --accent-2: #577866;
  --font-display: Inter, Avenir, Nunito Sans, sans-serif;
  --font-body: Inter, Avenir, Nunito Sans, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Scandinavian -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/scandinavian/DESIGN.md`.*
