---
slug: psychedelic-maximalism
name: "Psychedelic Maximalism"
description: "Liquid swirls, melting type and kaleidoscopic color in full trip."
category: Maximalist
tags: [psychedelic, trippy, fluid]
related: [maximalism, playful-maximalism, editorial-maximalism]
preview:
  bg: "#12041F"
  surface: "#1E0B33"
  ink: "#F7ECFF"
  muted: "#A98FC7"
  accent: "#FF4FD8"
  accent2: "#00E5CC"
  display: "Shrikhand, Bungee, Impact, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Psychedelic Maximalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the trippier, more molten interpretation.

## 1. Overall aesthetic

A 1967 concert poster fed through a GPU: liquid gradients, melting display type, kaleidoscope symmetry, and chrome bubbles floating over deep violet space. Built for music, festivals, cannabis, and nightlife brands. Legibility bends — but never fully breaks.

**Three principles:**

- Color in motion: gradients always animated, never static
- Type melts: warp, outline, and layer display lettering
- Dark cosmic grounds make neon hues hallucinate

## 2. Typography

- **Display:** Shrikhand, Bungee, Impact, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 56–100px liquid display (Shrikhand/Bungee), H2 36–48px warped, H3 24px, body 16–17px, meta/labels 12–14px bold.
- **Weights:** display 700–900 blobby; body 400–500; labels 700 with wavy baselines.
- **Rules:** warped centered headlines melting across the grid; outlines, gradients, swirls stacked; never straight Swiss lines.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#12041F` | Page ground |
| Surface | `#1E0B33` | Cards, panels, wells |
| Ink | `#F7ECFF` | Headlines, body text |
| Muted | `#A98FC7` | Captions, meta, secondary text |
| Accent | `#FF4FD8` | Primary actions, highlights |
| Accent 2 | `#00E5CC` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Flowing and overlapping: sections melt into each other with SVG wave dividers; 64–96px overlap bleeds.

Use an 8px base unit (4px for dense product UI). Section padding 96–144px desktop / 64px mobile; card padding 24–32px; gaps 16–24px; never let text touch a container edge (16px minimum inset).

## 5. Layout / Grid

Seamless trip: wave-divided chapters on deep violet, mirrored/kaleidoscope hero compositions, floating bubble cards. Max-width 1280px.

## 6. Borders

Iridescent keylines: 2px gradient borders via border-image; glow outlines over flat fills

## 7. Shadows

Neon blooms: 0 0 24px #FF4FD880, 0 0 64px #7B3CFF66; card glow 0 8px 48px #FF4FD833; layered colored glows, zero black shadows

## 8. Radius

Organic blobs and waves; 24px+ or fully fluid border-radius (30% 70% 70% 30%)

## 9. Buttons

Gooey pills with animated gradient fills and glow shadows; swirling hover states. Labels bold, often with glow.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Glass-bubble panels over animated gradient fields; iridescent borders; floating with slow idle drift.

## 11. Navigation

Transparent over the trip; warped logo lettering; glowing pill links; melting CTA.

## 12. Imagery

Liquid chrome, melting portraits, fractal flora, concert haze. Heavy gradient-map treatments unify everything.

## 13. Icons

Trippy line icons with glow: mushrooms, eyes, waves, peace marks — metaphysical sticker set.

## 14. Textures / Patterns

Liquid marble, oil-slick gradients, grain + chromatic aberration on type, lens-dirt sparkles.

## 15. Motion

Everything breathes: 6–12s gradient loops, 8s float cycles, melting hover warps. Reduced-motion shows a still poster.

Durations: micro 200–300ms, standard 500–800ms slow-morph loops, ceremonial endless. Easings: cubic-bezier(0.37, 0, 0.63, 1) liquid loops; snappy motion forbidden — everything melts.

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

- Corporate restraint or single-accent discipline
- Sharp grid visibility
- Static gradients
- Tiny timid type
- Light-mode-first thinking

## 20. Quick-start snippet

```css
:root {
  --bg: #12041F;
  --surface: #1E0B33;
  --ink: #F7ECFF;
  --muted: #A98FC7;
  --accent: #FF4FD8;
  --accent-2: #00E5CC;
  --font-display: Shrikhand, Bungee, Impact, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Psychedelic Maximalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/psychedelic-maximalism/DESIGN.md`.*
