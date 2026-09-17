---
slug: neumorphism
name: "Neumorphism"
description: "Soft extruded plastic: dual shadows sculpting controls from the background."
category: Soft & Dimensional
tags: [soft-ui, extruded, tactile]
related: [glassmorphism, claymorphism, skeuomorphism]
preview:
  bg: "#E0E5EC"
  surface: "#E0E5EC"
  ink: "#4A5568"
  muted: "#8A94A6"
  accent: "#4D7CFE"
  accent2: "#FF6B9D"
  display: "Inter, Nunito, sans-serif"
  body: "Inter, Nunito, sans-serif"
---

# Neumorphism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the softer, more extruded-plastic interpretation.

## 1. Overall aesthetic

Controls extruded from smart-plastic: the background IS the material, light rakes from top-left, buttons rise or press with inset flips. Monochrome with one pastel accent. Tactile and calm — perfect for music players, calculators, settings, and dashboards.

**Three principles:**

- Background = material: surfaces share the exact bg color
- Light from top-left, always — shadows obey one sun
- Pressed states inset; never mix up/down lighting

## 2. Typography

- **Display:** Inter, Nunito, sans-serif
- **Body:** Inter, Nunito, sans-serif
- **Scale:** hero 32–48px soft embossed sans, H2 24–32px, H3 19–21px, body 15–16px, meta/labels 12–13px soft uppercase.
- **Weights:** display 500–700 embossed; body 400–500; labels 600 with +0.06–0.12em tracking (never harsh contrast).
- **Rules:** flush-left soft-emboss headlines on same-color grounds with dual shadows; never sharp borders, never flat minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E0E5EC` | Page ground |
| Surface | `#E0E5EC` | Cards, panels, wells |
| Ink | `#4A5568` | Headlines, body text |
| Muted | `#8A94A6` | Captions, meta, secondary text |
| Accent | `#4D7CFE` | Primary actions, highlights |
| Accent 2 | `#FF6B9D` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Muted `#8A94A6` on `#E0E5EC` is ~2.9:1 — large labels/meta only; all body/small text must use Ink `#4A5568`. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Gallery-spaced: controls need room for shadows to read — 24px+ gaps, 20px padding, 72–96px sections

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Sculpture gallery: widely-spaced extruded panels on the gray ground; dials, sliders, and toggles as hero objects. Max-width 1100px.

## 6. Borders

None — shadows ARE the borders (light top-left, dark bottom-right)

## 7. Shadows

The signature: outset `6px 6px 12px #B8BCC4, -6px -6px 12px #FFFFFF`; pressed = inset `4px 4px 8px #B8BCC4, inset -4px -4px 8px #FFFFFF` (small controls: `inset 3px 3px 6px #B8BCC4, inset -3px -3px 6px #FFFFFF`)

## 8. Radius

12–20px soft sculpted rounding

## 9. Buttons

Extruded pills/rounds with dual shadows; active/pressed flips to inset. Accent fills allowed on primaries (shadow tints to match).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Raised panels (dual shadow) for groups; inset wells for displays/readouts; 16px radius, 24px padding.

## 11. Navigation

Extruded tab bar or segmented control; active tab inset; icons + tiny labels, monochrome with accent active.

## 12. Imagery

Minimal: album art in inset wells with rounded frames; soft product renders. Restraint keeps shadows legible.

## 13. Icons

Soft-embossed monochrome glyphs; active states tint accent. 2px rounded strokes.

## 14. Textures / Patterns

Flat matte plastic; micro-noise at 2% maximum. Cleanliness is structural — dirt kills the illusion.

## 15. Motion

Tactile 150–250ms ease-out for hover/press (shadow outset→inset); toggles/sliders slide 350ms soft ease-out with soft thunk.

Durations: micro 150–250ms, standard 350ms. Easings: soft ease-out; springs and hard snaps forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, sticky bottom CTA where conversion matters.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full grid expression, max-width per Layout section, oversized display type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Colorful busy backgrounds (shadows need gray calm)
- Text directly on extruded surfaces below 4.5:1
- Mixing neumorphism with flat cards randomly
- Small dense layouts — shadows need air
- Dark mode neumorphism without re-tuning both shadows

## 20. Quick-start snippet

```css
:root {
  --bg: #E0E5EC;
  --surface: #E0E5EC;
  --ink: #4A5568;
  --muted: #8A94A6;
  --accent: #4D7CFE;
  --accent-2: #FF6B9D;
  --font-display: Inter, Nunito, sans-serif;
  --font-body: Inter, Nunito, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Neumorphism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/neumorphism/DESIGN.md`.*
