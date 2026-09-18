---
slug: illustration-led
name: "Illustration-Led"
description: "Drawn worlds first: spot illustrations, scenes and characters carrying pages."
category: Handmade & Texture
tags: [illustration, characters, storybook]
related: [risograph, halftone, grain-noise]
preview:
  bg: "#FFF9F0"
  surface: "#FFFFFF"
  ink: "#2B2620"
  muted: "#7A726A"
  accent: "#E4572E"
  accent2: "#2E86AB"
  display: "Fraunces, Georgia, serif"
  body: "Karla, Inter, sans-serif"
---

# Illustration-Led — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more storybook, illustration-first interpretation.

## 1. Overall aesthetic

A picture book for grown-up products: hero scenes, spot illustrations per feature, recurring characters, chapter ornaments. One consistent illustration style throughout — mixed styles kill the magic. For education, fintech, health, and onboarding.

**Three principles:**

- One illustration style, one palette — consistency is the magic
- Scenes for heroes, spots for features, ornaments for rhythm
- Characters recur: mascots build attachment across pages

## 2. Typography

- **Display:** Fraunces, Georgia, serif
- **Body:** Karla, Inter, sans-serif
- **Scale:** hero 40–64px Fraunces storybook serif, H2 28–36px, H3 21–22px, body 16–17px, meta/labels 12–13px caption labels.
- **Weights:** display 600–700 storybook; body 400–500; labels 600 with gentle tracking.
- **Rules:** headlines staged among spot illustrations and character vignettes; warm asymmetry; never data-dense dashboards.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF9F0` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#2B2620` | Headlines, body text |
| Muted | `#7A726A` | Captions, meta, secondary text |
| Accent | `#E4572E` | Primary actions, highlights |
| Accent 2 | `#2E86AB` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Storybook pacing: scene chapters 96–120px, spot illustrations in margins, 28px panel padding

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Storybook scroll: illustrated hero scene, alternating scene/feature chapters, character glossary, happy-ending CTA. Max-width 1200px.

## 6. Borders

Soft ink outlines on illustrated panels (1.5–2px); chapter-rule ornaments

## 7. Shadows

Storybook lift: 0 12px 32px warm/12; illustrated drop shadows inside scenes

## 8. Radius

16–24px storybook panels; blob masks for scenes

## 9. Buttons

Storybook buttons: warm fills, rounded 12px, friendly 16px labels; hover bounces gently.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Scene panels: illustrated headers, warm borders, 20px radius; empty states are mini-illustrations.

## 11. Navigation

Friendly bar with illustrated mark, rounded links, sunny CTA.

## 12. Imagery

Custom illustration system (the whole investment): scenes, spots, characters, ornaments. No stock, ever.

## 13. Icons

Illustrated icon set matching the scenes: same stroke, same palette, same humor.

## 14. Textures / Patterns

Paper grain 4%, watercolor washes in scenes, pencil-line details.

## 15. Motion

Living pictures: gentle idle loops (blink, bob, 4–6s), scroll-triggered scene builds, character reactions on CTA hover.

Durations: micro 150–250ms, standard 400–600ms for hovers/transitions; idle loops (blink, bob) 4–6s. Easings: soft ease-in-out storybook motion; harsh snaps forbidden.

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

- Stock photography beside custom illustration
- Mixed illustration styles
- Tiny illustrations that read as icons
- Generic corporate Memphis (see corporate-memphis for that)
- Illustration without function — every scene should explain

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF9F0;
  --surface: #FFFFFF;
  --ink: #2B2620;
  --muted: #7A726A;
  --accent: #E4572E;
  --accent-2: #2E86AB;
  --font-display: Fraunces, Georgia, serif;
  --font-body: Karla, Inter, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Illustration-Led -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/illustration-led/DESIGN.md`.*
