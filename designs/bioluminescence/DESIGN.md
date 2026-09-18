---
slug: bioluminescence
name: "Bioluminescence"
description: "Deep midnight abyss illuminated by ethereal glowing jellyfish cyan, marine violet, and fluid light."
category: Atmosphere & Gradient
tags: [glow, ocean, bioluminescent, neon, ethereal]
related: [aurora-glow, gradient-design, holographic]
preview:
  bg: "#030712"
  surface: "#0A1128"
  ink: "#F3F4F6"
  muted: "#768BA3"
  accent: "#00F5D4"
  accent2: "#A855F7"
  display: "Plus Jakarta Sans, Outfit, sans-serif"
  body: "Inter, -apple-system, sans-serif"
---

# Bioluminescence — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Bioluminescence plunges into the pitch-black ocean abyss, where life illuminates the dark with ethereal organic light. Deep midnight navy backgrounds (#030712) come alive with glowing electric cyan (#00F5D4) and marine violet (#A855F7) fluid light trails, translucent aquatic cards, and soft ambient pulses that mimic deep-sea siphonophores.

**Three principles:**

- The abyssal void: deep black-indigo ocean waters provide infinite contrast for emitted light
- Self-luminous organic color: glowing cyan and violet gradients that appear to generate their own photons
- Fluid aquatic motion: smooth, floating, drifting movement like marine life in deep currents

## 2. Typography

- **Display:** Plus Jakarta Sans, Outfit, sans-serif
- **Body:** Inter, -apple-system, sans-serif
- **Scale:** hero 48–70px semibold, H2 32–44px, body 16px/1.5, aquatic captions 12–13px.
- **Weights:** display 600–700; body 400; glow labels 500.
- **Rules:** centered ambient hero text; luminous gradient headlines; generous leading for tranquil readability.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#030712` | Page ground |
| Surface | `#0A1128` | Cards, panels, containers |
| Ink | `#F3F4F6` | Headlines, primary text |
| Muted | `#768BA3` | Secondary copy, metadata, borders |
| Accent | `#00F5D4` | Primary action, key highlights |
| Accent 2 | `#A855F7` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Bioluminescent Cyan (#00F5D4) for the hottest photon emissions and primary buttons; Marine Violet (#A855F7) for ambient fluid glow.

## 4. Spacing

8px base; spacious deep-sea padding 80–120px; generous gaps between floating luminous cards.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Fluid floating ecosystem layout: background radial glow orbs; floating translucent creature cards; drifting particle trails.

## 6. Borders

1px glowing translucent keyline: border 1px solid rgba(0,245,212,0.3); gradient border highlights.

## 7. Shadows

Radiant photon emission glows: 0 0 32px rgba(0,245,212,0.35), 0 0 64px rgba(168,85,247,0.2); deep ambient drop shadow.

## 8. Radius

20–28px flowing organic rounded cards; pill buttons with 9999px radius.

## 9. Buttons

Luminous cyan filled or translucent glowing pill; radial glow bloom on hover; white/deep teal text.

## 10. Cards

Translucent aquatic cards (#0A1128cc with backdrop-blur 20px); glowing perimeter keylines; soft ambient backlight.

## 11. Navigation

Floating curved glass navigation bar; glowing status orb; translucent links that light up on hover.

## 12. Imagery

Deep-sea underwater photography, ethereal glowing jellyfish, microscopic plankton light, fluid caustics.

## 13. Icons

Flowing organic line glyphs, water droplets, spark stars, nautilus spirals, light rays.

## 14. Textures

Subtle underwater caustic light ripples, deep ocean particulate noise, soft mesh gradients.

## 15. Motion

Slow undulating breathing pulses: 3s to 5s infinite gentle breathing animations; floating card drifts; ripple waves.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section, oversized hero type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Harsh angular brutalist cuts or jagged spiked shapes
- Flat dry matte paper textures with zero luminosity
- High-contrast jarring black-on-white text blocks
- Stiff mechanical linear transitions without organic easing
- Warm desert earth tones that break the deep ocean illusion

## 20. Quick-start snippet

```css
:root {
  --bg: #030712;
  --surface: #0A1128;
  --ink: #F3F4F6;
  --muted: #768BA3;
  --accent: #00F5D4;
  --accent-2: #A855F7;
  --font-display: Plus Jakarta Sans, Outfit, sans-serif;
  --font-body: Inter, -apple-system, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Bioluminescence -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Bioluminescence headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/bioluminescence/DESIGN.md`.*
