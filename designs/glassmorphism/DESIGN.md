---
slug: glassmorphism
name: "Glassmorphism"
description: "Translucent blurred surfaces floating over vibrant gradient fields."
category: Soft & Dimensional
tags: [glass, blur, translucent]
related: [neumorphism, claymorphism, skeuomorphism]
preview:
  bg: "#6C5CE7"
  surface: "#8B7CF0"
  ink: "#FFFFFF"
  muted: "#F5F2FD"
  accent: "#FFFFFF"
  accent2: "#00E5FF"
  display: "Inter, SF Pro Display, sans-serif"
  body: "Inter, SF Pro Text, sans-serif"
---

# Glassmorphism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more translucent, blur-forward interpretation — glass is the message.

## 1. Overall aesthetic

Frosted control-center panels floating over aurora gradients: backdrop-blur 20px, white-at-15% fills, hairline light borders, vivid blurred blobs behind. Airy, premium, and calm-tech. For fintech dashboards, music apps, weather, and productivity tools.

**Three principles:**

- Blur needs a subject: always compose vivid fields behind glass
- White text + 15–25% fills + hairline light borders = the recipe
- One blur value (14–24px) across the whole product

## 2. Typography

- **Display:** Inter, SF Pro Display, sans-serif
- **Body:** Inter, SF Pro Text, sans-serif
- **Scale:** hero 36–56px light Inter over blur, H2 26–34px, H3 20px, body 15–16px, meta/labels 12–13px soft uppercase.
- **Weights:** display 500–700; body 400–500; labels 600 with +0.08–0.15em tracking (never harsh blacks over glass).
- **Rules:** left-aligned or centered headlines floating on backdrop-blur 20px panels over aurora gradients; never opaque brutalist boxes.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#6C5CE7` | Page ground |
| Surface | `#8B7CF0` | Solid fallback under glass; visible cards use white 15–20% + blur 14–24px over Background |
| Ink | `#FFFFFF` | Headlines, body text |
| Muted | `#F5F2FD` | Captions, meta, secondary text |
| Accent | `#FFFFFF` | Primary actions, highlights |
| Accent 2 | `#00E5FF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. White (`#FFFFFF`) on Background/Surface alone does not pass — put body text on a scrim (darken field 20–30% behind glass) or use text-shadow/solid fallback. Muted (`#F5F2FD`) holds 3:1 on purple fields and surfaces; still never small body. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Floating rhythm: glass panels overlap gradient blobs, 24–32px padding, 80–110px sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Field + float: full-viewport gradient/blob canvas, frosted nav pill, hero glass panel, widget grid of glass tiles. Max-width 1200px.

## 6. Borders

Frosted keylines: 1px solid rgba(255,255,255,0.35); inner top-light (inset 0 1px 0 white/30)

## 7. Shadows

Soft depth: 0 8px 32px rgba(0,0,0,0.18); colored ambient from the field behind

## 8. Radius

16–24px soft frosted rounding

## 9. Buttons

Frosted pills: white/20 blur fills with ink labels, or a 20–30% dark scrim behind white labels so the pair clears 4.5:1 across the whole glass stack; primary solid white with colored text. Hover brightens fill 10%.

All buttons: 44px minimum touch target, pointer cursor, and a disabled state that is visibly disabled. Focus ring: 2px accent-2 `#00E5FF` plus a 1px Ink outer outline — cyan alone is under 3:1 on the pale glass fills, so never ship it as the only ring.

## 10. Cards

Glass tiles: blur 14–20px, 20px radius, light keyline, 24px padding; metric + sparkline + delta patterns.

## 11. Navigation

Floating frosted pill nav centered top; icon links; blur intensifies on scroll.

## 12. Imagery

Gradient blobs, aurora fields, blurred product shots behind glass; avatars with white rings.

## 13. Icons

White duotone glyphs, 1.75px strokes on frosted chips; SF-style clarity.

## 14. Textures / Patterns

Mesh gradients, blurred orbs, film grain at 3% for premium tooth.

## 15. Motion

Buttery 250–350ms ease-out; panels drift on parallax (±6px); blobs morph slowly (20s).

Durations: micro 150–250ms, standard 250–350ms; ambient blob morphs up to 20s. Easings: soft ease-out on blur and glow; springs forbidden — glass drifts, never snaps.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent-2 `#00E5FF`, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against the actual glass stack (text + translucent fill + field behind, not the flat tokens). White/muted on `#6C5CE7`/`#8B7CF0` alone fail — add a 20–30% dark scrim or solid fallback to pass.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Glass over busy photos without scrim (text dies)
- Too-transparent fills (<10% white)
- Dark text on glass without testing every field
- Competing blur values
- Assuming backdrop-filter everywhere — provide solid fallbacks

## 20. Quick-start snippet

```css
:root {
  --bg: #6C5CE7;
  --surface: #8B7CF0;
  --ink: #FFFFFF;
  --muted: #F5F2FD;
  --accent: #FFFFFF;
  --accent-2: #00E5FF;
  --font-display: Inter, SF Pro Display, sans-serif;
  --font-body: Inter, SF Pro Text, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Glassmorphism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/glassmorphism/DESIGN.md`.*
