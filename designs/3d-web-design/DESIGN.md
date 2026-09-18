---
slug: 3d-web-design
name: "3D Web Design"
description: "Dimensional product storytelling: depth, lighting and spatial scenes around content."
category: Immersive & Motion
tags: [3d, depth, spatial]
related: [claymorphism, immersive, scrollytelling]
preview:
  bg: "#0B0B12"
  surface: "#14141D"
  ink: "#F2F0FF"
  muted: "#8E8AB0"
  accent: "#8466FF"
  accent2: "#00E5FF"
  display: "Space Grotesk, Sora, sans-serif"
  body: "Inter, Space Grotesk, sans-serif"
---

# 3D Web Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the deeper, more dimensional interpretation — flat is failure.

## 1. Overall aesthetic

Product as cinema: real-time or rendered 3D scenes (product floats, explodes, configures) staged between editorial bands. Lighting does the branding. For hardware, footwear, automotive, and flagship launches. Performance budgets are part of the design.

**Three principles:**

- 3D serves story beats: reveal → explore → configure → buy
- Light the brand: consistent key/rim palette across scenes
- Fallbacks are first-class: poster frames + copy carry no-WebGL

## 2. Typography

- **Display:** Space Grotesk, Sora, sans-serif
- **Body:** Inter, Space Grotesk, sans-serif
- **Scale:** hero 44–72px Space Grotesk/Sora over 3D scenes, H2 30–40px, H3 22px, body 15–17px, meta/labels 12–13px floating labels.
- **Weights:** display 600–800; body 400–500; labels 600–700 with +0.06–0.12em tracking.
- **Rules:** headlines staged over perspective scenes with depth-of-field; floating UI chips; never flat poster walls.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0B12` | Page ground |
| Surface | `#14141D` | Cards, panels, wells |
| Ink | `#F2F0FF` | Headlines, body text |
| Muted | `#8E8AB0` | Captions, meta, secondary text |
| Accent | `#8466FF` | Primary actions, highlights |
| Accent 2 | `#00E5FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Staging: full-viewport 3D chapters alternating with 88px content bands; 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Stage + script: sticky 3D viewport chapters with scroll-driven camera, spec bands, configurator section, CTA. Max-width 1280px content.

## 6. Borders

Scene frames: 1px solid #8466FF40 keylines; depth-cue vignettes; floor-grid overlays at 22px

## 7. Shadows

Cinematic: 0 30px 100px rgba(0,0,0,0.6) under scenes; rim-light glows 0 0 40px #8466FF80 + 0 0 24px #00E5FF66

## 8. Radius

18–24px viewport cards; pills for scene labels

## 9. Buttons

Cinematic pills with glow; accent-filled pills carry near-black `#0B0B12` labels (5.0:1 on `#8466FF` — white labels fail at 3.9:1); scene controls (rotate/explode) as icon HUD; configurator swatches large.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Spec plates floating over scenes; chapter cards with scene labels (01 — Unibody).

## 11. Navigation

Minimal overlay: mark + chapter links + configurator CTA; progress rail for scroll chapters.

## 12. Imagery

3D renders, turntables, exploded views, material macros. Consistent studio HDRI.

## 13. Icons

HUD glyphs: orbit, explode, slice, AR — thin with glow.

## 14. Textures / Patterns

Studio backdrops, floor grids, particulate depth haze, film grain 4%.

## 15. Motion

Scroll-driven camera (scrub, damped); idle turntable 20s; reduced-motion = poster + manual rotate buttons.

Durations: micro 150–250ms, standard 400–700ms parallax orbits, ceremonial 1000–1600ms scroll-scrubbed. Easings: smooth ease-out with scroll-scrub; jarring snaps forbidden.

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

- 3D without story or fallbacks
- Heavy scenes on mobile without lite mode
- Unreadable text over busy renders (use scrims)
- Autoplay camera that fights the user
- Ignoring load budgets — show progress honestly

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0B12;
  --surface: #14141D;
  --ink: #F2F0FF;
  --muted: #8E8AB0;
  --accent: #8466FF;
  --accent-2: #00E5FF;
  --font-display: Space Grotesk, Sora, sans-serif;
  --font-body: Inter, Space Grotesk, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in 3D Web Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/3d-web-design/DESIGN.md`.*
