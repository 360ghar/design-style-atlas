---
slug: frutiger-aero
name: "Frutiger Aero"
description: "Glossy aqua bubbles, dewy nature-tech, and optimistic 2000s glass futurism."
category: Nostalgic
tags: [glossy, nostalgic, optimistic]
related: [y2k, glassmorphism, skeuomorphism]
preview:
  bg: "#E8F7F1"
  surface: "#FFFFFF"
  ink: "#0B3B39"
  muted: "#4A6B68"
  accent: "#00A67E"
  accent2: "#2D9CDB"
  display: "Frutiger, Segoe UI, Helvetica Neue, sans-serif"
  body: "Segoe UI, Helvetica Neue, Arial, sans-serif"
---

# Frutiger Aero — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Frutiger Aero is the future we were promised: dewy grass, glass orbs, tropical fish in bubbles, and UI that looks perpetually hydrated. Glossy highlights, lens flares, aurora skies, and humanist sans type. Optimistic, clean, a little surreal — sustainability as a screensaver. The defining early-2000s techno-utopia, back in a big way.

**Three principles:**

- Everything is dewy: gloss highlights, droplets, lens flares, reflections
- Nature + tech in harmony: leaves, water, glass, light — never grimy
- Humanist clarity: Frutiger/Segoe voice, airy spacing, readable optimism

## 2. Typography

- **Display:** Frutiger, Segoe UI, Helvetica Neue, sans-serif
- **Body:** Segoe UI, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 44–64px light humanist, H2 28–36px, body 15–17px/1.6, captions 13px.
- **Weights:** 300–600; light large headlines, regular body; airy over heavy.
- **Rules:** left or centered with lots of air; sentence case; white type with soft shadow over imagery.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8F7F1` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#0B3B39` | Headlines, body text |
| Muted | `#4A6B68` | Captions, meta, secondary text |
| Accent | `#00A67E` | Primary actions, highlights |
| Accent 2 | `#2D9CDB` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Aqua-green #00A67E primary; sky-blue accent2 for water/sky; gradients glassy, never muddy.

## 4. Spacing

8px base; cards 24–32px; sections 80–120px; floating glass panels with 24px viewport insets.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Wallpaper-bleed heroes (aurora meadow/ocean) with floating glass content panels; taskbar-like bottom docks; max 1140px.

## 6. Borders

1px glassy white (rgba(255,255,255,0.6)) + 1px inner highlight; pill and bubble shapes dominate.

## 7. Shadows

Soft dewy: 0 12px 40px rgba(0,120,100,0.18); inner top highlight inset 0 1px 0 white; orbs get inner glow.

## 8. Radius

Bubbles and pills: 24px–999px; panels 20–28px; sharp corners forbidden.

## 9. Buttons

Glossy aqua gel pills with top-half highlight; aqua fills take dark-ink #0B3B39 labels (white on #00A67E is 3.11:1 — fails; dark ink clears 4.5:1); hover brightens + lifts; active squeezes; 48px tall.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Frosted glass panels over nature wallpaper; 24px radius; icon orbs (glossy spheres) as visual anchors.

## 11. Navigation

Glass top bar with glossy orb logo; bottom dock with magnified-hover icons; search as dewy pill. White text over wallpaper/nature imagery always sits on a dark scrim/overlay (shadow alone is insufficient).

## 12. Imagery

Aurora skies, dewy leaves, koi/bubbles, lens flares, glass orbs; photos hyper-clean and saturated.

## 13. Icons

Glossy 3D-ish orbs and droplets; 20–24px with shine spots; Skeuomorphic-but-clean metaphors (drops, leaves).

## 14. Textures / Patterns

Water caustics, bokeh, condensation dots, light rays; aurora gradient washes.

## 15. Motion

Buoyant 300ms ease-out floats; bubbles drift upward loop; hover gloss sweeps; page transitions ripple.

Durations: 250–400ms UI; 6–10s ambient drifts. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Grunge, noise, or dystopian grit
- Flat monochrome minimalism
- Sharp brutalist corners and hard shadows
- Cynical copy — optimism is mandatory
- Tiny cramped layouts with no air

## 20. Quick-start snippet

```css
:root {
  --bg: #E8F7F1;
  --surface: #FFFFFF;
  --ink: #0B3B39;
  --muted: #4A6B68;
  --accent: #00A67E;
  --accent-2: #2D9CDB;
  --font-display: Frutiger, Segoe UI, Helvetica Neue, sans-serif;
  --font-body: Segoe UI, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Frutiger Aero -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/frutiger-aero/DESIGN.md`.*
