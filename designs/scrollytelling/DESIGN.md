---
slug: scrollytelling
name: "Scrollytelling"
description: "Narrative scroll: pinned graphics, stepped chapters and data that unfolds."
category: Immersive & Motion
tags: [scrollytelling, narrative, data]
related: [3d-web-design, immersive, parallax]
preview:
  bg: "#FAFAF8"
  surface: "#FFFFFF"
  ink: "#1A1A1A"
  muted: "#6E6A61"
  accent: "#2B4EFF"
  accent2: "#FF5C00"
  display: "Inter Tight, Helvetica Neue, sans-serif"
  body: "Inter, Georgia, sans-serif"
---

# Scrollytelling — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more chapter-driven, scroll-choreographed interpretation.

## 1. Overall aesthetic

The explainer as journey: a sticky graphic evolves as stepped prose scrolls past — maps fill, charts build, diagrams annotate. NYT-graphics discipline. For journalism, research, climate, finance-education, and launches with a real story.

**Three principles:**

- One graphic, many states — continuity teaches
- Steps are short: 2–3 sentences each, one insight per step
- Progress is honest: rail + step dots + back links

## 2. Typography

- **Display:** Inter Tight, Helvetica Neue, sans-serif
- **Body:** Inter, Georgia, sans-serif
- **Scale:** hero 44–72px Inter Tight chapter headlines, H2 30–40px sticky steps, H3 22px, body 16–17px longform measure, meta/labels 12–13px progress labels.
- **Weights:** display 600–800; body 400–500; labels 600–700 with +0.08–0.12em tracking.
- **Rules:** sticky-step headlines pinned beside scrolling visuals; progress rails; never static brochure layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAFAF8` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1A1A1A` | Headlines, body text |
| Muted | `#6E6A61` | Captions, meta, secondary text |
| Accent | `#2B4EFF` | Primary actions, highlights |
| Accent 2 | `#FF5C00` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Chapter rhythm: 100vh steps, pinned graphic left/center, 120px chapter breaks, progress rail

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Desktop (1100px+): 2-column grid `1fr 1fr` with 48px gap, max-width 1280px centered with 32px side gutters. Left column: sticky graphic `position:sticky; top:88px; height:calc(100vh - 176px)`. Right column: step stream max-width 480px, each step min-height 100vh. Mobile (360–768px): single column, graphic static 56vh on top, 4px sticky progress bar at `top:0`, steps stacked with 16px gap.

## 6. Borders

Hairline frames on pinned graphics; progress rail 2px with accent fill

## 7. Shadows

Editorial-calm: 0 8px 30px rgba(0,0,0,0.08) on pinned media; text stays flat

## 8. Radius

10–14px graphic panels; pills for step dots

## 9. Buttons

Chapter jumps (prev/next), replay-graphic, share-this-step, methodology toggle. Quiet bordered controls.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Step cards: white, bordered, 20px padding, number + insight; active step highlighted with accent edge.

## 11. Navigation

Story bar: title + progress rail + chapter menu + share. Reading-time estimate; reduced-motion toggle visible.

## 12. Imagery

Custom charts/maps/diagrams (SVG), annotated photography, timeline graphics. One visual language throughout.

## 13. Icons

Step dots, replay, share, footnote anchors — functional mini-glyphs.

## 14. Textures / Patterns

Paper flat; faint grid in graphic stage; print-like hairlines.

## 15. Motion

Scroll-scrubbed graphic states (damped, reversible); step fades 250ms; count-ups on entry. Reduced-motion = stepper buttons.

Durations: scroll-scrubbed chapter pins (no timed fades); micro 150ms progress ticks. Easings: linear scroll-scrub; timed springs forbidden.

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

- Decorative scroll-jacking without insight
- Long paragraphs per step
- Graphics that change topic mid-story
- Hiding methodology/sources
- Auto-advance that steals control

## 20. Quick-start snippet

```css
:root {
  --bg: #FAFAF8;
  --surface: #FFFFFF;
  --ink: #1A1A1A;
  --muted: #6E6A61;
  --accent: #2B4EFF;
  --accent-2: #FF5C00;
  --font-display: Inter Tight, Helvetica Neue, sans-serif;
  --font-body: Inter, Georgia, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Scrollytelling -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/scrollytelling/DESIGN.md`.*
