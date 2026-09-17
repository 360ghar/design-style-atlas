---
slug: solarpunk
name: "Solarpunk"
description: "Sunlit eco-futurism, leafy greens, and optimistic post-carbon abundance."
category: Futurist
tags: [eco, optimistic, organic]
related: [eco-sustainable, organic-biophilic, futurism]
preview:
  bg: "#F2F7E9"
  surface: "#FFFFFF"
  ink: "#1E3A24"
  muted: "#5A7261"
  accent: "#3E9B4F"
  accent2: "#F2B705"
  display: "Fraunces, Georgia, serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Solarpunk — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

Solarpunk is the optimistic future: greenhouse glass, solar geometry, mural greens and sun golds, food forests where parking lots were. Art-nouveau curves meet appropriate tech; every interface feels grown as much as built. Abundance, community, and open knowledge — the opposite of cyberpunk dread.

**Three principles:**

- Grow, don't extract: leafy imagery, living greens, sun golds
- Community tech: gardens, grids, and commons — show people thriving
- Craft futurism: nouveau curves + stained-glass geometry + open hardware

## 2. Typography

- **Display:** Fraunces, Georgia, serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** hero 48–68px Fraunces soft serif, H2 30–38px, body 16–17px/1.6, labels 13px uppercase.
- **Weights:** 500–700 display with soft optical sizing; 400–500 body; warmth over precision.
- **Rules:** left-aligned organic flow; centered manifestos; italic serif accents for hope-words.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2F7E9` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1E3A24` | Headlines, body text |
| Muted | `#5A7261` | Captions, meta, secondary text |
| Accent | `#3E9B4F` | Primary actions, highlights |
| Accent 2 | `#F2B705` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Leaf green #3E9B4F primary; sun gold #F2B705 for highlights, badges, solar marks.

## 4. Spacing

8px base; cards 24–32px; sections 88–120px; vine-like divider flourishes between chapters.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Editorial-organic: arched image masks, staggered greenhouse grids, full-bleed garden photography; max 1180px.

## 6. Borders

2px deep-green on feature cards; arched (top-rounded 999px) frames for imagery; thin gold rules.

## 7. Shadows

Sun-soft: 0 16px 40px rgba(30,58,36,0.14); leaves cast dappled radial gradients, not hard shadows.

## 8. Radius

Arches (top 160–999px) for heroes and images; 16–24px cards; pills for tags.

## 9. Buttons

Leaf-green pills with cream text, gold hover ring; secondary outlined green; 48–52px.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Seed-packet cards: arched image top, serif title, green meta row, sun-gold badge for seasons.

## 11. Navigation

Cream bar with green wordmark + leaf mark; links with growing-underline hover; join CTA green pill.

## 12. Imagery

Greenhouses, food forests, solar roofs, murals, community feasts; stained-glass sun motifs; Earth-from-garden views.

## 13. Icons

Leaf, sun, sprout, hexagon-grid, hand-heart — 2px rounded green line icons, 20–24px.

## 14. Textures / Patterns

Leaf dapple, recycled paper 5%, stained-glass geometry, topographic garden lines.

## 15. Motion

Growing lines (path draw 800ms), sunrises on scroll, leaves drift 8s loops; 250ms gentle rises.

Durations: 200–400ms UI; 6–10s ambient nature loops. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Chrome-and-neon dystopia
- Concrete-gray brutalism
- Scarcity-fear copy
- Plastic gloss and chrome text
- Monoculture minimalism with no life

## 20. Quick-start snippet

```css
:root {
  --bg: #F2F7E9;
  --surface: #FFFFFF;
  --ink: #1E3A24;
  --muted: #5A7261;
  --accent: #3E9B4F;
  --accent-2: #F2B705;
  --font-display: Fraunces, Georgia, serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Solarpunk -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/solarpunk/DESIGN.md`.*
