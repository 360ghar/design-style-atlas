---
slug: parallax
name: "Parallax"
description: "Layered depth scrolling: foreground, midground and skies drifting apart."
category: Immersive & Motion
tags: [parallax, depth, layers]
related: [3d-web-design, immersive, scrollytelling]
preview:
  bg: "#0E1A2B"
  surface: "#16273D"
  ink: "#F0F6FF"
  muted: "#7E96B3"
  accent: "#FFC24B"
  accent2: "#4DD8FF"
  display: "Sora, Outfit, sans-serif"
  body: "Inter, Outfit, sans-serif"
---

# Parallax — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the deeper, more layered interpretation.

## 1. Overall aesthetic

Diorama scrolling: 4–6 depth layers (sky → peaks → forest → foreground) drifting at different rates over illustrated or photographic vistas. Wonder through depth. For travel, outdoors, gaming, and cinematic launches.

**Three principles:**

- 4+ layers minimum or the effect reads flat
- Content rides the near layer — never strand text mid-depth
- Provide a still-vista fallback; depth is enhancement

## 2. Typography

- **Display:** Sora, Outfit, sans-serif
- **Body:** Inter, Outfit, sans-serif
- **Scale:** hero 44–72px Sora/Outfit layered headlines, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px depth labels.
- **Weights:** display 600–800; body 400–500; labels 600 with +0.06–0.12em tracking.
- **Rules:** multi-plane headlines drifting over layered scenes; depth cues everywhere; never single-plane flatness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0E1A2B` | Page ground |
| Surface | `#16273D` | Cards, panels, wells |
| Ink | `#F0F6FF` | Headlines, body text |
| Muted | `#7E96B3` | Captions, meta, secondary text |
| Accent | `#FFC24B` | Primary actions, highlights |
| Accent 2 | `#4DD8FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Expedition pacing: 120vh vista chapters, floating content plates, 100px+ sky pauses

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Vista chapters: full-bleed layered scenes with floating content plates; interlude maps; summit CTA. Max-width 1200px plates.

## 6. Borders

1px `rgba(240,246,255,0.14)` on near floating plates; 1px `rgba(240,246,255,0.08)` on mid layers; mist dividers as 24–48px gradient fades (`transparent → rgba(14,26,43,0.6)`), never hard lines between depths

## 7. Shadows

Near plates: `0 16px 48px rgba(4,10,20,0.45)`; mid layers: `0 8px 24px rgba(4,10,20,0.30)`; distant layers: no shadow — use haze (`brightness(1.08) saturate(0.85)`) + 40–60% `#0E1A2B` scrim instead

## 8. Radius

16px floating panels; 999px pill for altitude/chapter chips; 12px inner cards

## 9. Buttons

Expedition pills with glow; altitude/chapter chips; solid amber for book-style conversion.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Floating plates: dark glass over vistas with scrims; trail-stat rows; waypoint lists.

## 11. Navigation

Altitude HUD: mark + elevation readout + chapter dots; minimal over skies.

## 12. Imagery

Layered vista art (SVG/photo composite), mist PNGs, peak silhouettes, tiny explorers for scale.

## 13. Icons

Peaks, compasses, altitude marks, weather — outdoor glyph set, light on dark.

## 14. Textures / Patterns

Mist bands, grain, paper-map textures in interludes, star layers at night.

## 15. Motion

Multi-rate scroll layers (0.1×–0.6×), mist drift 20s, bird/particle accents. Reduced-motion = composed stills.

Durations: scroll-linked multi-speed drifts; micro 150ms layer ticks. Easings: linear scroll-link with soft ease-out landings; springs forbidden.

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

- Parallax on text (readability killer)
- Too-subtle layer rates
- Busy content over busy vistas (scrim!) 
- Motion sickness speeds — keep rates gentle
- No fallback for reduced-motion

## 20. Quick-start snippet

```css
:root {
  --bg: #0E1A2B;
  --surface: #16273D;
  --ink: #F0F6FF;
  --muted: #7E96B3;
  --accent: #FFC24B;
  --accent-2: #4DD8FF;
  --font-display: Sora, Outfit, sans-serif;
  --font-body: Inter, Outfit, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Parallax -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/parallax/DESIGN.md`.*
