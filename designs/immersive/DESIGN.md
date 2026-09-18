---
slug: immersive
name: "Immersive"
description: "Full-bleed worlds: scroll-driven scenes, sound-off cinema and total absorption."
category: Immersive & Motion
tags: [immersive, cinematic, scroll]
related: [3d-web-design, scrollytelling, parallax]
preview:
  bg: "#060606"
  surface: "#101010"
  ink: "#F5F3EC"
  muted: "#8A877E"
  accent: "#E8FF47"
  accent2: "#FF5C00"
  display: "Anton, Archivo Black, sans-serif"
  body: "Inter, Helvetica Neue, sans-serif"
---

# Immersive — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more enveloping, full-bleed interpretation.

## 1. Overall aesthetic

Cinema you scroll: full-bleed film chapters, letterboxed scenes, giant condensed titles, chapter cards (ACT I), and a world that absorbs the chrome. For destinations, flagships, documentaries, and brand worlds.

**Three principles:**

- Full-bleed or nothing — chrome dissolves into scenes
- Pace like film: establish, develop, cut
- Sound-off cinema: captions and score-lines in type

## 2. Typography

- **Display:** Anton, Archivo Black, sans-serif
- **Body:** Inter, Helvetica Neue, sans-serif
- **Scale:** hero 56–96px Anton/Archivo full-bleed display, H2 36–48px, H3 24px, body 16–17px, meta/labels 12–14px overlay labels.
- **Weights:** display 800–900; body 400–500; labels 700 with +0.08–0.15em tracking over media.
- **Rules:** edge-to-edge media stages with overlaid headlines; scroll chapters; never boxed card grids.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#060606` | Page ground |
| Surface | `#101010` | Cards, panels, wells |
| Ink | `#F5F3EC` | Headlines, body text |
| Muted | `#8A877E` | Captions, meta, secondary text |
| Accent | `#E8FF47` | Primary actions, highlights |
| Accent 2 | `#FF5C00` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Film pacing: full-viewport acts (100vh stages), 0px between scenes (cuts, not gaps), 96px credit-style closers.

Use an 8px base unit (4px for dense product UI). Scene overlay type: 24–32px inset (16–20px on mobile); HUD plates: 16–20px padding; overlay labels never closer than 16px to a viewport edge.

## 5. Layout / Grid

Acts: 100vh scene chapters with overlay type, intertitle cards, map/data interludes, credit closer. Persistent minimal HUD.

## 6. Borders

Cinematic mattes: letterbox bars, hairline chapter marks, scrims over imagery

## 7. Shadows

Theater dark: vignettes + scrims; no UI shadows — depth from layering planes

## 8. Radius

0–12px; cinema is sharp, UI floats rounded

## 9. Buttons

Ghost-on-film buttons with scrims; solid lime `#E8FF47` conversion buttons take black `#060606` labels only (18.16:1 — off-white on lime is 1.00:1 and never ships). Accent-2 `#FF5C00` fills take black `#060606` labels (6.54:1) so contrast holds.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards in scenes — floating HUD plates with scrims; chapters listed as title cards.

## 11. Navigation

Dissolving HUD: mark + act links + mute/progress; hides on scroll down, returns on up.

## 12. Imagery

Cinematic full-bleed film/stills; drone sweeps; portrait inserts. Heavy grade, consistent LUT.

## 13. Icons

Playback glyphs, compass, chapter marks — thin white with scrim chips.

## 14. Textures / Patterns

Film grain 8%, gate weave (subtle), light leaks on cuts, vignette.

## 15. Motion

Scroll-scrubbed dolly/zoom (damped), cross-dissolve cuts, parallax ±8%. Reduced-motion = stills + fade cuts.

Durations: micro 150–250ms, standard 500–800ms scroll-chapter dissolves. Easings: cinematic ease-out; bouncy springs forbidden.

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

- Sidebars and dashboards inside the film
- Small timid media
- Autoplay sound
- Popups over scenes
- Ending without a credit-style closer + CTA

## 20. Quick-start snippet

```css
:root {
  --bg: #060606;
  --surface: #101010;
  --ink: #F5F3EC;
  --muted: #8A877E;
  --accent: #E8FF47;
  --accent-2: #FF5C00;
  --font-display: Anton, Archivo Black, sans-serif;
  --font-body: Inter, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + HUD plate in Immersive -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-hud">
  <p class="ds-kicker">ACT I — THE CROSSING</p>
  <h3>Walk into the film</h3>
  <p>One supporting caption line over the scrim.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/immersive/DESIGN.md`.*
