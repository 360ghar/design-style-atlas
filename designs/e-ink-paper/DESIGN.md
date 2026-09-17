---
slug: e-ink-paper
name: "E-Ink Paper"
description: "Warm paper grounds, book serif, and distraction-free reading calm."
category: Minimalist
tags: [reading, serif, calm]
related: [editorial-minimalism, newspaper, japanese-minimalism]
preview:
  bg: "#F4F1EA"
  surface: "#FBFAF7"
  ink: "#1A1A18"
  muted: "#6B675E"
  accent: "#8C3B1B"
  accent2: "#2F5D50"
  display: "Charter, Georgia, Times New Roman, serif"
  body: "Georgia, Charter, Times New Roman, serif"
---

# E-Ink Paper — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

The Kindle-and-print aesthetic: warm paper grounds, book serif set at reading sizes, hairline rules, and absolutely nothing blinking. Progress is a thin line, chapters are the navigation, and the highest luxury is focus. Designed for three-hour sessions and zero eye strain.

**Three principles:**

- Reading is the product: 65ch measure, 1.7 line-height, true book serif
- Paper, not pixels: warm grounds, ink blacks, no pure white glare
- Silence is golden: no motion, no badges, no interruptions

## 2. Typography

- **Display:** Charter, Georgia, Times New Roman, serif
- **Body:** Georgia, Charter, Times New Roman, serif
- **Scale:** body 18–20px/1.7 serif, chapter titles 32–40px, headings 24px, footnotes 14px.
- **Weights:** 400 body; 600–700 headings; italics for emphasis, never bold shouting in prose.
- **Rules:** justified or left prose at 60–70ch; drop caps for chapters; small-caps section labels.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F4F1EA` | Page ground |
| Surface | `#FBFAF7` | Cards, panels, wells |
| Ink | `#1A1A18` | Headlines, body text |
| Muted | `#6B675E` | Captions, meta, secondary text |
| Accent | `#8C3B1B` | Primary actions, highlights |
| Accent 2 | `#2F5D50` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Sepia #8C3B1B for links and progress; deep green accent2 for highlights and success.

## 4. Spacing

Margins generous: 24–32px page padding; paragraphs 1em apart; chapters start 25% down the page.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Single centered column 680px; slim progress hairline top; footnote margin notes on desktop; footer colophon.

## 6. Borders

Hairline rules (#1A1A1815) for headers, dividers, tables; double rules for chapter heads.

## 7. Shadows

None — paper has no drop shadows; e-ink flatness is the point.

## 8. Radius

2–4px minimal on buttons and highlights; reading surface square.

## 9. Buttons

Quiet text buttons and outlined 4px controls; sepia links with underline offset 3px; 44px targets.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Definition and pull-quote cards: paper surface, left sepia rule, serif italic quotes, citation small-caps.

## 11. Navigation

Table of contents as the nav: chapter list with progress dots; top shows title + 1px progress line.

## 12. Imagery

Engraving-style illustrations, maps, diagrams; photos desaturated sepia; figures with small-caps captions.

## 13. Icons

Minimal 16px book glyphs: bookmark, pen, quote marks; sepia line icons only.

## 14. Textures / Patterns

Paper grain at 3–5%; deckle-edge dividers on chapter art; no gloss anywhere.

## 15. Motion

Page-turn fades 150ms; highlight sweeps; essentially static — motion only for orientation.

Durations: 100–200ms; stillness by default. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Pure-white glare backgrounds
- Sans-serif body copy
- Popups, badges, and streak gamification
- Autoplay or ambient animation
- Low-contrast gray text in prose

## 20. Quick-start snippet

```css
:root {
  --bg: #F4F1EA;
  --surface: #FBFAF7;
  --ink: #1A1A18;
  --muted: #6B675E;
  --accent: #8C3B1B;
  --accent-2: #2F5D50;
  --font-display: Charter, Georgia, Times New Roman, serif;
  --font-body: Georgia, Charter, Times New Roman, serif;
}
```

```html
<!-- Copy-paste starter: button + card in E-Ink Paper -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/e-ink-paper/DESIGN.md`.*
