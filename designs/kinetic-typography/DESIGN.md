---
slug: kinetic-typography
name: "Kinetic Typography"
description: "Type in motion: words that slide, scramble and perform the message."
category: Immersive & Motion
tags: [kinetic, motion-type, expressive]
related: [typography-maximalism, 3d-web-design, immersive]
preview:
  bg: "#0E0E0E"
  surface: "#161616"
  ink: "#F4F1EA"
  muted: "#8F8B82"
  accent: "#D6FF3F"
  accent2: "#FF5C00"
  display: "Archivo Black, Anton, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Kinetic Typography — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more kinetic interpretation — type must move.

## 1. Overall aesthetic

Music-video typography as interface: lines that scramble in, words that highlight like karaoke, marquees that argue with headlines. The message performs itself. For launches, manifestos, music, and studios.

**Three principles:**

- Motion carries meaning: scramble = decode, highlight = emphasize
- One kinetic moment per viewport
- Always ship a static final state (SEO + reduced-motion)

## 2. Typography

- **Display:** Archivo Black, Anton, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 10–18vw Archivo Black/Anton kinetic lines, H2 6–9vw, H3 26px, body 15–17px, meta/labels 12–13px system mono (`ui-monospace, SFMono-Regular, Menlo, monospace`).
- **Weights:** display 800–900 kinetic black; body 400–500; labels 600–700 with +0.06–0.12em tracking.
- **Rules:** full-viewport moving type walls with marquees and scrubs; hero headlines animate by default but always render a static final DOM state; never image-led layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0E0E0E` | Page ground |
| Surface | `#161616` | Cards, panels, wells |
| Ink | `#F4F1EA` | Headlines, body text |
| Muted | `#8F8B82` | Captions, meta, secondary text |
| Accent | `#D6FF3F` | Primary actions, highlights |
| Accent 2 | `#FF5C00` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Performance pacing: full-viewport statements, 40px caption rails, 100px act breaks

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Set list: full-bleed full-viewport type acts, centered caption rails (max-width 1200px), encore CTA. Persistent progress dots.

## 6. Borders

Baseline rules and ticker frames; captions in bordered chips

## 7. Shadows

Type echoes: layered offset duplicates on key words; UI stays flat

## 8. Radius

0–8px; type moments sharp, UI quietly rounded

## 9. Buttons

Lyric-links: giant underlined phrases as CTAs; bordered replay buttons; solid lime `#D6FF3F` for conversion with near-black `#000000` labels (18.2:1 — Ink `#F4F1EA` would be 1.0:1 on lime).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Set cards: act number + kinetic line + caption; no boxes around performing type.

## 11. Navigation

Minimal overlay + act menu; mute-motion toggle always visible.

## 12. Imagery

Type-first; cutaway imagery in letterform masks or breakout bands; secondary supporting photography only.

## 13. Icons

Play, replay, sound, motion-toggle glyphs — functional, quiet.

## 14. Textures / Patterns

Dark flat with grain; lyric-highlight washes; scanline shimmer on performing lines.

## 15. Motion

Core: char-split reveals, scramble decodes, karaoke highlights, marquee arguments. 60fps transforms; reduced-motion = final frames + stepper.

Durations: marquee loops 15–25s linear infinite, scramble decodes 600–900ms, char-stagger entrances 400–600ms, scroll-scrubbed karaoke highlights tied to line progress. Easings: damped ease-out for entrances with linear marquees; bouncy springs forbidden.

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

- Kinetic body copy (headlines only)
- Multiple simultaneous animations
- Motion without a mute toggle
- SEO-empty animated canvases (mirror text in DOM)
- Seasickness speeds

## 20. Quick-start snippet

```css
:root {
  --bg: #0E0E0E;
  --surface: #161616;
  --ink: #F4F1EA;
  --muted: #8F8B82;
  --accent: #D6FF3F;
  --accent-2: #FF5C00;
  --font-display: Archivo Black, Anton, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Kinetic Typography -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/kinetic-typography/DESIGN.md`.*
