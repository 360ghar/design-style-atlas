---
slug: grain-noise
name: "Grain / Noise"
description: "Analog warmth over digital: film grain, texture overlays and tactile depth."
category: Handmade & Texture
tags: [grain, film, analog]
related: [risograph, halftone, hand-drawn]
preview:
  bg: "#131311"
  surface: "#1C1C1A"
  ink: "#EDEAE2"
  muted: "#8A867C"
  accent: "#E8FF47"
  accent2: "#FF6B4A"
  display: "Inter Tight, Helvetica Neue, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Grain / Noise — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the grainier, more analog interpretation.

## 1. Overall aesthetic

Shot-on-film digital: clean modern layouts with a permanent grain overlay, warm blacks, muted highlights, tactile photography. The grain says human; the grid says professional. For photographers, studios, fashion, and premium content brands.

**Three principles:**

- One grain recipe (SVG turbulence + opacity) across the whole site
- Warm the blacks, mute the whites — filmic tone curve
- Grain over everything equally: UI, photos, gradients

## 2. Typography

- **Display:** Inter Tight, Helvetica Neue, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 36–56px Inter Tight over film grain, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px film-frame labels.
- **Weights:** display 500–700; body 400–500; labels 500–600 with +0.06–0.12em tracking.
- **Rules:** flush-left headlines under animated grain overlays and vignettes; photographic warmth; never sterile vector cleanliness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#131311` | Page ground |
| Surface | `#1C1C1A` | Cards, panels, wells |
| Ink | `#EDEAE2` | Headlines, body text |
| Muted | `#8A867C` | Captions, meta, secondary text |
| Accent | `#E8FF47` | Primary actions, highlights |
| Accent 2 | `#FF6B4A` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Cinematic-modern: 96–128px sections, 28px panel padding, generous image chapters

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Modern editorial with film finish: hero image chapter, feature grid, full-bleed photo breaks, journal footer. Max-width 1280px.

## 6. Borders

1px solid rgba(237,234,226,0.12) hairlines; grain unifies panels and photos into one stock

## 7. Shadows

Analog depth: 0 1px 0 rgba(0,0,0,0.4), 0 12px 32px rgba(0,0,0,0.45) + grain overlay (SVG feTurbulence fractalNoise baseFrequency 0.8, 6–10% opacity) on all surfaces

## 8. Radius

10–16px soft modern; grain over everything

## 9. Buttons

Clean pills/bars with filmic hover (grain intensifies + lift). Lime accent `#E8FF47` for conversion with Background `#131311` labels and focus rings (16.7:1) — Ink `#EDEAE2` is 1.1:1 on lime.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Modern cards with grain finish: image tops graded filmic, 16px radius, soft shadows + noise.

## 11. Navigation

Clean bar with grain finish; mono exposure-readouts as playful meta (ISO 400 · f/2.8).

## 12. Imagery

Filmic photography: warm shadows, soft highlights, visible grain. Consistent preset across all images.

## 13. Icons

Clean line icons; aperture/film glyphs as brand motifs.

## 14. Textures / Patterns

Film grain 6–10% (animated option at 8fps, subtle), paper tooth on light variant, halation on highlights.

## 15. Motion

Subtle: grain shimmer (optional, off by default), slow Ken Burns, 300ms lifts. Calm and confident.

Durations: micro 150–250ms, standard 400–600ms grain-drift loops. Easings: cubic-bezier(0.33,0,0.2,1); snappy digital motion forbidden.

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

- Clean sterile digital without grain (misses the point)
- Heavy HDR or oversaturated looks
- Grain so heavy text suffers
- Mixing film stocks per section
- Forgetting reduced-motion for animated grain

## 20. Quick-start snippet

```css
:root {
  --bg: #131311;
  --surface: #1C1C1A;
  --ink: #EDEAE2;
  --muted: #8A867C;
  --accent: #E8FF47;
  --accent-2: #FF6B4A;
  --font-display: Inter Tight, Helvetica Neue, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Grain / Noise -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/grain-noise/DESIGN.md`.*
