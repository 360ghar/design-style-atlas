---
slug: aurora-glow
name: "Aurora / Glow"
description: "Northern-light interfaces: dark skies, luminous ribbons and soft radiance."
category: Atmosphere & Gradient
tags: [aurora, glow, atmospheric]
related: [gradient-design, holographic, liquid-chrome]
preview:
  bg: "#050914"
  surface: "#0A1220"
  ink: "#E8F1FF"
  muted: "#6E86A3"
  accent: "#00E5A0"
  accent2: "#7C5CFF"
  display: "Outfit, Sora, sans-serif"
  body: "Inter, Outfit, sans-serif"
---

# Aurora / Glow — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the dreamier, more northern-lights interpretation.

## 1. Overall aesthetic

Polar night with living light: deep navy-black skies, green-violet aurora ribbons drifting overhead, glass observatory panels, glowing telemetry. Serene and vast. For climate, space, sleep, and premium AI brands.

**Three principles:**

- Darkness is the canvas — protect it; light is precious
- Green→violet ribbons; amber only for human warmth moments
- Glow marks life: active, live, present

## 2. Typography

- **Display:** Outfit, Sora, sans-serif
- **Body:** Inter, Outfit, sans-serif
- **Scale:** hero 40–64px Outfit/Sora under aurora veils, H2 28–38px, H3 20–22px, body 15–17px, meta/labels 12–13px glowing uppercase.
- **Weights:** display 600–700; body 400–500; labels 600 with +0.1–0.18em tracking and glow.
- **Rules:** centered or flush-left headlines beneath flowing aurora curtains; dark grounds mandatory; never daylight minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050914` | Page ground |
| Surface | `#0A1220` | Cards, panels, wells |
| Ink | `#E8F1FF` | Headlines, body text |
| Muted | `#6E86A3` | Captions, meta, secondary text |
| Accent | `#00E5A0` | Primary actions, highlights |
| Accent 2 | `#7C5CFF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Night-sky pacing: vast dark pauses (120px+), glowing content bands, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Observatory scroll: sky hero with ribbons, dark pauses, glowing data bands, horizon CTA. Max-width 1200px.

## 6. Borders

Luminous hairlines: 1px rgba(0,229,160,0.35) decorative only, never the sole meaningful boundary; ribbon dividers via SVG aurora bands

## 7. Shadows

Radiance: 0 0 40px rgba(0,229,160,0.25) + 0 0 100px rgba(124,92,255,0.20); card ambient matching ribbon hues

## 8. Radius

16–24px soft panels; pill badges

## 9. Buttons

Glow pills: green-tinted fills with dark text, or glass with green keyline; hover radiates.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Observatory panels: dark glass, luminous keylines, ribbon-top accents, live-dot headers.

## 11. Navigation

Minimal dark bar with aurora-dot logo; live status readout; glowing CTA.

## 12. Imagery

Aurora photography, night landscapes, glowing flora, star timelapses. Green-violet grade.

## 13. Icons

Thin luminous glyphs: waves, peaks, orbits, sleep moons — 1.5px with glow.

## 14. Textures / Patterns

Aurora ribbons (SVG/canvas), starfields, mist, frost grain at 5%.

## 15. Motion

Slow ribbon drift (30s), twinkle stars, breathing glows (6s). Serenity in timing; still poster for reduced-motion.

Durations: micro 150–250ms, standard 500–900ms aurora-curtain drifts. Easings: cubic-bezier(0.37,0,0.63,1) slow ease-in-out; snappy motion forbidden.

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

- Bright daylight sections
- Harsh neon cyberpunk energy
- Multiple competing glow hues
- Fast motion (nothing here hurries)
- Gray corporate chrome

## 20. Quick-start snippet

```css
:root {
  --bg: #050914;
  --surface: #0A1220;
  --ink: #E8F1FF;
  --muted: #6E86A3;
  --accent: #00E5A0;
  --accent-2: #7C5CFF;
  --font-display: Outfit, Sora, sans-serif;
  --font-body: Inter, Outfit, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Aurora / Glow -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/aurora-glow/DESIGN.md`.*
