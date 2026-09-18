---
slug: y2k
name: "Y2K"
description: "Chrome, glossy surfaces and optimistic early-2000s digital futurism."
category: Retro & Internet
tags: [y2k, chrome, glossy]
related: [digital-maximalism, retro-internet, webcore]
preview:
  bg: "#0A0A1F"
  surface: "#141432"
  ink: "#F2F0FF"
  muted: "#8E8AB0"
  accent: "#00E5FF"
  accent2: "#FF7AD9"
  display: "Orbitron, Michroma, Impact, sans-serif"
  body: "Outfit, Inter, sans-serif"
---

# Y2K — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the glossier, more chrome-drenched interpretation.

## 1. Overall aesthetic

The future as imagined in 1999: liquid chrome lettering, translucent bubbles, starfields, lens flares, and frosted control pods floating over deep space blue. Optimistic, glossy, and a little alien. For music, beauty-tech, gaming, and Y2K fashion brands.

**Three principles:**

- Chrome everything important: text, buttons, dividers
- Bubbles and orbs float — nothing sits flat
- Glow is the shadow system

## 2. Typography

- **Display:** Orbitron, Michroma, Impact, sans-serif
- **Body:** Outfit, Inter, sans-serif
- **Scale:** hero 48–84px chrome Orbitron/Michroma, H2 32–44px, H3 22–24px, body 15–17px, meta/labels 12–13px glowing uppercase.
- **Weights:** display 700–900 chrome; body 400–500; labels 700 with +0.08–0.15em tracking and glow.
- **Rules:** centered chrome headlines floating over starfield pods; bubble clusters; never matte minimalism, never sharp brutalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A1F` | Page ground |
| Surface | `#141432` | Cards, panels, wells |
| Ink | `#F2F0FF` | Headlines, body text |
| Muted | `#8E8AB0` | Captions, meta, secondary text |
| Accent | `#00E5FF` | Primary actions, highlights |
| Accent 2 | `#FF7AD9` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Bubbly density: floating glass pills, 20px card padding, 64–88px sections, orb constellations

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Orbital collage: frosted pods floating over starfield gradients; chrome headline; bubble nav. Max-width 1280px.

## 6. Borders

Chrome keylines: 1–2px silver gradients via border-image; glowing cyan outlines on dark

## 7. Shadows

Glow stack: 0 0 20px cyan + 0 0 60px blue; glossy top-light insets on buttons (inset 0 1px 0 white/40)

## 8. Radius

Pills and bubbles: 999px chips, 20px cards, circular orbs

## 9. Buttons

Chrome pills: silver-gradient fills, inner top-light, cyan glow; hover intensifies shine with a sweep.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Frosted pods: translucent white/10 blur over space gradients, chrome keylines, orb decorations, glow.

## 11. Navigation

Floating bubble bar: frosted pill with chrome logo text, glowing links, orb CTA.

## 12. Imagery

Liquid chrome 3D, butterfly clips, flip-phone macro, starfield skies, butterfly-tattoo flash. High gloss everything.

## 13. Icons

Glossy orb icons: gradient spheres with star sparkles; pixel-star accents.

## 14. Textures / Patterns

Starfields, lens flares, bubble clusters, chrome gradients, sparkle overlays.

## 15. Motion

Floaty: 5–8s orb drift, shine sweeps on chrome, twinkling stars. Dreamy ease-in-out loops.

Durations: micro 150–250ms, standard 400–700ms, drift loops 5–8s. Easings: ease-in-out cubic-bezier(0.42,0,0.58,1) for drift loops, ease-out for UI, linear for star twinkle.

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

- Matte flat design or paper textures
- Sharp brutalist geometry
- Muted earthy palettes
- Static gradients (animate the shine)
- Serif typography

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0A1F;
  --surface: #141432;
  --ink: #F2F0FF;
  --muted: #8E8AB0;
  --accent: #00E5FF;
  --accent-2: #FF7AD9;
  --font-display: Orbitron, Michroma, Impact, sans-serif;
  --font-body: Outfit, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Y2K -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/y2k/DESIGN.md`.*
