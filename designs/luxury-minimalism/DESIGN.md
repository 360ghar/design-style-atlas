---
slug: luxury-minimalism
name: "Luxury Minimalism"
description: "Whispered opulence: vast space, hairline gold, serif display and museum pacing."
category: Minimal
tags: [minimal, luxury, refined]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#0E0D0B"
  surface: "#161411"
  ink: "#EDE6D6"
  muted: "#8E8574"
  accent: "#C6A15B"
  accent2: "#E8D5A3"
  display: "Didot, Bodoni Moda, Cormorant Garamond, serif"
  body: "Cormorant Garamond, EB Garamond, Georgia, serif"
---

# Luxury Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more precise interpretation.

## 1. Overall aesthetic

Dark, slow, and certain. Ivory serif type on near-black, hairline gold rules, and enormous pauses between statements. Every screen feels like a gallery wall with one object on it. Scarcity — of color, of words, of elements — is the luxury signal.

**Three principles:**

- One object per view — isolate, then illuminate
- Gold is light, not paint: thin lines, never fills
- Slow everything: motion, scroll pacing, and copy cadence

## 2. Typography

- **Display:** Didot, Bodoni Moda, Cormorant Garamond, serif
- **Body:** Cormorant Garamond, EB Garamond, Georgia, serif
- **Scale:** hero 32–48px Didot/Bodoni serif, H2 24–30px, H3 19–21px, body 15–16px at 720px measure, meta/labels 11–12px tracked uppercase.
- **Weights:** display 400–500 high-contrast serif; body 400; labels 500 with +0.15–0.22em tracking (never heavy blacks).
- **Rules:** flush-left refined serif headlines with vast whitespace; centered only for ceremonial single lines; never justify, never crowd.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0E0D0B` | Page ground |
| Surface | `#161411` | Cards, panels, wells |
| Ink | `#EDE6D6` | Headlines, body text |
| Muted | `#8E8574` | Captions, meta, secondary text |
| Accent | `#C6A15B` | Primary actions, highlights |
| Accent 2 | `#E8D5A3` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Ceremonial: sections 160–220px; letterspacing +0.2em on eyebrow labels; single centered column, 720px measure

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Centered ceremonial axis; full-viewport chapters with a single headline, rule, and action. Alternating black depths (#0E0D0B / #161411) mark movements.

## 6. Borders

Hairline gold (#C6A15B at 40%) rules and frames; double rules on invitations and certificates

## 7. Shadows

None; depth suggested by layering black-on-black tones and gold light lines

## 8. Radius

0px — luxury is sharp and certain

## 9. Buttons

Ghost buttons: 1px gold border, tracked uppercase 12px gold labels, transparent fill. Hover fills gold with black text over 400ms. One per view.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards. Framed panels with double gold hairlines for collections; wide internal margins (48–64px). Never use `.ds-card` — use `.ds-panel` below.

## 11. Navigation

Minimal centered monogram, hairline top/bottom rules, tiny tracked links. Fades to a thin gold line on scroll.

## 12. Imagery

Cinematic low-key photography: marble, silk, watch movements, architecture at night. Deep blacks, warm highlights, slow Ken Burns drift.

## 13. Icons

Hairline gold line icons, 1px stroke, sparse. Monograms and Roman numerals preferred over pictograms.

## 14. Textures / Patterns

Black silk gradients (barely-there radial light), faint marble veining at 4%, fine grain for cinema feel.

## 15. Motion

Slow ceremonial: 600–900ms ease-out reveals, letter-spaced fade-ups, gentle 20s Ken Burns. Reduced-motion yields still frames.

Durations: micro 200–300ms, standard 600–900ms glacial fades. Easings: ease-out only; no springs, no hurried motion.

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

- Bright or multiple accent colors
- Rounded corners, shadows, or elevation
- Dense grids or comparison tables
- Exclamation marks and urgency copy
- Fast snappy transitions or playful easing

## 20. Quick-start snippet

```css
:root {
  --bg: #0E0D0B;
  --surface: #161411;
  --ink: #EDE6D6;
  --muted: #8E8574;
  --accent: #C6A15B;
  --accent-2: #E8D5A3;
  --font-display: Didot, Bodoni Moda, Cormorant Garamond, serif;
  --font-body: Cormorant Garamond, EB Garamond, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + panel in Luxury Minimalism -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-panel">
  <p class="ds-kicker">Kicker label</p>
  <h3>Panel headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/luxury-minimalism/DESIGN.md`.*
