---
slug: gradient-design
name: "Gradient Design"
description: "Color in transition: mesh washes, aurora fields and glow-led hierarchy."
category: Atmosphere & Gradient
tags: [gradient, mesh, colorful]
related: [colorful-brutalism, color-maximalism, stripe-inspired]
preview:
  bg: "#0B0620"
  surface: "#2A1B5E"
  ink: "#F4F1FF"
  muted: "#9A90C0"
  accent: "#7C5CFF"
  accent2: "#00E5FF"
  display: "Outfit, Inter, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Gradient Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more fluid, gradient-drenched interpretation.

## 1. Overall aesthetic

Mesh-gradient romance: violet→magenta→cyan washes flowing across dark space, glass panels floating, glowing display type. Feeling-forward and premium-night. For AI products, music, fintech, and launches that need wonder.

**Three principles:**

- Gradients always move (slow drift) — static mesh feels dead
- Dark grounds make color luminous; light text floats
- One gradient story per page — variations, not new rainbows

## 2. Typography

- **Display:** Outfit, Inter, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 40–64px Outfit over mesh washes, H2 28–38px, H3 20–22px, body 15–17px, meta/labels 12–13px tracked uppercase.
- **Weights:** display 600–800; body 400–500; labels 600 with +0.08–0.15em tracking.
- **Rules:** flush-left or centered headlines dissolving into violet→magenta→cyan washes; glow-led hierarchy; never flat corporate boxes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0620` | Page ground |
| Surface | `#2A1B5E` | Cards, panels, wells |
| Ink | `#F4F1FF` | Headlines, body text |
| Muted | `#9A90C0` | Captions, meta, secondary text |
| Accent | `#7C5CFF` | Primary actions, highlights |
| Accent 2 | `#00E5FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Flowing: full-bleed gradient chapters 88–120px, floating glass panels 28px padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Aurora scroll: gradient hero with glass panel, feature bands alternating mesh/dark, glow CTA finale. Max-width 1200px.

## 6. Borders

1px gradient hairlines (border-image or mask); 1px glass keylines (rgba white 35%) over bright fields

## 7. Shadows

Colored ambient: 0 20px 80px violet/30, cyan/20; text glow on display lines

## 8. Radius

20–28px fluid panels; pills for chips

## 9. Buttons

Gradient pills (violet→cyan) with glow; deep ink `#0B0620` labels so contrast holds at every gradient stop (4.6:1 on the violet end, 12.9:1 on the cyan end — white fails at 1.5:1 on cyan); hover brightens + lifts. Ghost glass secondaries.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or Ink when accent is under 3:1 on the button ground), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Glass over mesh: blur 20px, gradient keyline, 24px radius, glow metrics.

## 11. Navigation

Floating glass pill; gradient logo text; glowing CTA.

## 12. Imagery

Mesh fields, 3D gradient blobs, glowing product shots, aurora photography.

## 13. Icons

White-on-glass glyphs with glow; gradient icon tiles for features.

## 14. Textures / Patterns

Mesh gradients, grain 4%, light-leak streaks. Blur orbs behind everything.

## 15. Motion

20s gradient drift, floating panels (8s), glow pulses. Reduced-motion = still aurora poster.

Durations: micro 150–250ms, standard 400–700ms mesh-drift loops. Easings: slow ease-in-out gradient flow; harsh snaps forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use Ink for the ring so focus stays visible).
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

- Static flat gradients
- Light-mode pastel without dark contrast plan
- Text directly on bright mesh without scrim
- Multiple unrelated gradients per page
- Glow that kills contrast below 4.5:1

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0620;
  --surface: #2A1B5E;
  --ink: #F4F1FF;
  --muted: #9A90C0;
  --accent: #7C5CFF;
  --accent-2: #00E5FF;
  --font-display: Outfit, Inter, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Gradient Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/gradient-design/DESIGN.md`.*
