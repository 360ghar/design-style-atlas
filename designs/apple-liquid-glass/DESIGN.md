---
slug: apple-liquid-glass
name: "Apple Liquid Glass"
description: "Translucent specular layers, floating glass bars, and fluid Apple-grade restraint."
category: Design System
tags: [glass, premium, minimal]
related: [glassmorphism, mac-os, minimalism]
preview:
  bg: "#F5F7FA"
  surface: "#FFFFFF"
  ink: "#1D1D1F"
  muted: "#6E6E73"
  accent: "#006EDE"
  accent2: "#913AFF"
  display: "SF Pro Display, Inter, Helvetica Neue, sans-serif"
  body: "SF Pro Text, Inter, Helvetica Neue, Arial, sans-serif"
---

# Apple Liquid Glass — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Liquid Glass is Apple's 2025 design language: interface as a physical material. Translucent bars float above content, refracting what scrolls beneath; specular highlights trace rounded edges like light on real glass. Everything is calm, spacious, and confident — color is used sparingly so the material itself carries the luxury.

**Three principles:**

- Content stays hero — chrome floats above it, never competes
- Every surface refracts: translucency with blur, never flat opacity
- Motion is fluid physics: springy, interruptible, 60fps or nothing

## 2. Typography

- **Display:** SF Pro Display, Inter, Helvetica Neue, sans-serif
- **Body:** SF Pro Text, Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 56–72px semibold tight (-0.02em), H2 32–40px, H3 22–24px, body 17px/1.5, captions 13px.
- **Weights:** display 600–700; body 400–500; never black weights — elegance over loudness.
- **Rules:** centered heroes with generous air; left-aligned app text; sentence case everywhere, never all-caps shouting.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F7FA` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1D1D1F` | Headlines, body text |
| Muted | `#6E6E73` | Captions, meta, secondary text |
| Accent | `#006EDE` | Primary actions, highlights |
| Accent 2 | `#913AFF` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Accent is for key actions and links only; large fills stay white or glass.

## 4. Spacing

8px base; cards 24–32px padding; sections 96–128px; glass bars float with 16–24px insets from viewport edges.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Full-bleed imagery with floating glass nav and tab bars; content max-width 1120px; rounded 20–28px containers layered over photography.

## 6. Borders

1px translucent white keylines (rgba(255,255,255,0.4)) on glass; hairlines (1px #1D1D1F14) on light surfaces.

## 7. Shadows

Soft ambient: 0 8px 32px rgba(0,0,0,0.12) under glass; inset 0 1px 0 rgba(255,255,255,0.5) specular edge.

## 8. Radius

20–28px cards and sheets; pills (999px) for controls and tab bars; 12px for small elements.

## 9. Buttons

Glassy pills with blur, blue filled primary (#006EDE, white text); hover deepens to #0077ED with 150ms ease; 44px targets.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Frosted cards (backdrop-blur 20px, saturate 180%) over imagery; title in semibold 20px; quiet hairline separators.

## 11. Navigation

Floating frosted nav pill centered or full-width glass bar; SF symbols; search field embedded in glass.

## 12. Imagery

Full-bleed photography and gradient wallpapers; content scrolls visibly beneath translucent bars — imagery is the background.

## 13. Icons

SF-symbol style: 1.8px rounded strokes, medium weight, enclosed in frosted circles when on imagery.

## 14. Textures / Patterns

None printed — depth comes from live blur and refraction; subtle mesh gradients only as wallpaper.

## 15. Motion

Spring physics (stiffness ~300, damping ~30); sheets slide 300ms spring; interruptible gestures; parallax restraint under 8px.

Durations: 120–300ms springs; no linear fades. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against the rendered glass stack (text + translucent fill + backdrop), never against the flat token values alone. Flat Background/Surface ratios do not transfer to a translucent surface — put body text on an opaque or 20–30% dark-scrim fallback.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Flat opaque gray boxes where glass belongs
- Heavy black borders or hard offset shadows
- All-caps shouting or ultra-black type
- More than one saturated accent per screen
- Static translucency without backdrop blur

## 20. Quick-start snippet

```css
:root {
  --bg: #F5F7FA;
  --surface: #FFFFFF;
  --ink: #1D1D1F;
  --muted: #6E6E73;
  --accent: #006EDE;
  --accent-2: #913AFF;
  --font-display: SF Pro Display, Inter, Helvetica Neue, sans-serif;
  --font-body: SF Pro Text, Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Apple Liquid Glass -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/apple-liquid-glass/DESIGN.md`.*
