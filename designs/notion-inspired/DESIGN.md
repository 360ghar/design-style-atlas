---
slug: notion-inspired
name: "Notion-Inspired"
description: "Warm minimal workspace: serif warmth, soft blocks and template friendliness."
category: Product & SaaS
tags: [notion, workspace, warm]
related: [scandinavian, bento-grid, card-based-ui]
preview:
  bg: "#FFFFFF"
  surface: "#F7F7F5"
  ink: "#37352F"
  muted: "#73716D"
  accent: "#2383E2"
  accent2: "#D9730D"
  display: "Georgia, Lyon Text, serif"
  body: "Inter, ui-sans-serif, sans-serif"
---

# Notion-Inspired — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the plainer, more document-like interpretation.

## 1. Overall aesthetic

A warm document that became software: serif page titles with emoji icons, toggle blocks, callouts in tints, and databases that feel like tables you already love. Friendly, unhurried, template-shaped. For docs, wikis, notes, and community knowledge.

**Three principles:**

- Pages over screens: everything is a block in a document
- Warm paper neutrals (#37352F ink on white)
- Templates teach: starter content beats empty states

## 2. Typography

- **Display:** Georgia, Lyon Text, serif
- **Body:** Inter, ui-sans-serif, sans-serif
- **Scale:** hero 28–36px Georgia/Lyon document serif, H2 22–26px, H3 17–19px, body 15–16px document measure, meta/labels 12–13px gray.
- **Weights:** display 600–700 document serif; body 400; labels 500–600 with no wide tracking.
- **Rules:** left-aligned document headlines with toggle-block logic; emoji accents allowed; never poster monuments.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F7F7F5` | Cards, panels, wells |
| Ink | `#37352F` | Headlines, body text |
| Muted | `#73716D` | Captions, meta, secondary text |
| Accent | `#2383E2` | Primary actions, highlights |
| Accent 2 | `#D9730D` | Orange callouts, warnings, secondary highlights |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Document rhythm: 708px page measure, 4px block gaps, 44px page padding, full-width option for boards

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Page canvas: cover banner, icon + serif title, block stream (text/toggle/callout/database), sidebar page tree. Max measure 708px (boards full-bleed).

## 6. Borders

Barely-there: 1px #E9E9E8 on tables/boards; hover-reveal block controls (⋮⋮ +)

## 7. Shadows

Almost none: page shadows off; menus 0 4px 20px rgba(55,53,47,0.12); drag-ghost lift

## 8. Radius

6px blocks, 3px inline (code, mentions), 8px covers

## 9. Buttons

Quiet 32px gray-hover buttons; blue text links; database Add buttons full-width dashed. Hover-grays, never loud fills.

All buttons: 32px height (40px+ hit area on touch), visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Blocks: callouts (tinted bg e.g. #FFF8E6 + #F0E2B6 border + icon), toggles, synced embeds, gallery cards with covers. Borders appear on hover/drag.

## 11. Navigation

Sidebar page tree with emoji icons, favorites, private/shared sections, + New page; top bar breadcrumb + share.

## 12. Imagery

Unsplash-style covers (muted), emoji page icons, template gallery thumbnails. Warm and human.

## 13. Icons

Emoji-first (!), then 16px gray line icons. Duplicate/turn-into affordances on hover.

## 14. Textures / Patterns

Paper-white flat; cover images carry all texture; subtle dotted background in empty boards.

## 15. Motion

Gentle 150ms block fades; drag-and-drop smoothness; toggle rotations; slash-menu pop (scale .98→1).

Durations: micro 100–200ms toggle opens, standard 250ms. Easings: plain ease-out; no springs, no ceremony.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets; sidebar becomes drawer, no sticky CTA.
- Tablet (768–1100px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): sidebar + 708px doc measure, boards full-bleed where needed; titles stay 28–36px, never oversized.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Dark dashboards or neon accents
- Heavy shadows and elevation
- Hiding block controls from newcomers
- Empty states without templates
- Blue-everything SaaS chrome

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F7F7F5;
  --ink: #37352F;
  --muted: #73716D;
  --accent: #2383E2;
  --accent-2: #D9730D;
  --font-display: Georgia, Lyon Text, serif;
  --font-body: Inter, ui-sans-serif, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Notion-Inspired -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/notion-inspired/DESIGN.md`.*
