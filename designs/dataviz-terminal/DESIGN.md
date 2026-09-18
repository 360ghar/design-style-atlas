---
slug: dataviz-terminal
name: "Dataviz Terminal"
description: "Bloomberg-grade dense tables, sparklines, and monospace market precision."
category: Data
tags: [data, dense, mono]
related: [terminal, functional-minimalism, corporate-saas]
preview:
  bg: "#0A0E14"
  surface: "#11161F"
  ink: "#E6E9EF"
  muted: "#8A93A6"
  accent: "#FF9F0A"
  accent2: "#30D158"
  display: "JetBrains Mono, SF Mono, Menlo, monospace"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Dataviz Terminal — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

The professional terminal: near-black blue-tinted ground, amber highlights, green/red market semantics, and data packed like a Bloomberg screen. Sparklines live inside table cells, heatmaps carry the color so text stays readable, and every millisecond has a timestamp. Ugly to outsiders; beautiful to anyone who trades on information.

**Three principles:**

- Density wins: 28–36px rows, 12px mono, maximum signal per viewport
- Color is data: amber alerts, green/red deltas, never decoration
- Mono for figures: tabular, aligned decimals, right-justified numbers

## 2. Typography

- **Display:** JetBrains Mono, SF Mono, Menlo, monospace
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** headers 11–12px uppercase mono, cells 12–13px mono, titles 16–20px, KPI numerals 24–32px.
- **Weights:** 400–500 mono; 600–700 for KPIs and alerts; no light weights at small sizes.
- **Rules:** right-align all numerals; left-align names; decimals aligned; timestamps in muted mono.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0E14` | Page ground |
| Surface | `#11161F` | Cards, panels, wells |
| Ink | `#E6E9EF` | Headlines, body text |
| Muted | `#8A93A6` | Captions, meta, secondary text |
| Accent | `#FF9F0A` | Primary actions, highlights |
| Accent 2 | `#30D158` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Amber #FF9F0A for focus/alerts/selection; green #30D158 up, red #FF453A down — always paired with ▲▼.

## 4. Spacing

4px base; cell padding 6–10px; panel gaps 8–12px; command bar 40px; status bar 28px.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Multi-pane grid: watchlist left, chart center, depth/ladder right, tape bottom; status bar with latency + clock; keyboard-first.

## 6. Borders

1px #E6E9EF12 cell dividers; selected row 1px amber inset; pane separators 1px solid.

## 7. Shadows

Almost none — separation via borders and bands; selected-row glow amber at 15%; modal floats with depth.

## 8. Radius

4px panels and tags; 2px inputs; pills only for session/status badges.

## 9. Buttons

4px mono uppercase buttons 32px; amber primary for execute; red outline for flatten/close; hotkey hints inline.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

KPI tiles: label mono uppercase 11px, value 28px tabular, delta chip, 48px sparkline; alert rows flash amber.

## 11. Navigation

Top command palette bar (⌘K) with symbol search; tabbed workspaces; bottom status bar: feed, latency, session.

## 12. Imagery

Charts are the imagery: candlesticks, depth heatmaps, sparklines, distribution curves; logos as 16px favicons.

## 13. Icons

12–14px mono glyphs and geometric marks (▲▼●◆); status dots; no illustrative icon sets.

## 14. Textures / Patterns

Faint grid lines on charts; alternating row bands at 3%; scanlines never (readability first).

## 15. Motion

Cell flash on update (150ms); streaming appends; crosshair syncs across panes; number transitions 100ms.

Durations: 80–150ms updates; alerts pulse 1s ×3 then settle. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Rounded playful cards and marketing gradients
- Left-aligned ragged numerals
- Color-only up/down signals (add ▲▼ + labels)
- Hiding latency and data timestamps
- Blocking the UI on streaming updates

## 20. Quick-start snippet

```css
:root {
  --bg: #0A0E14;
  --surface: #11161F;
  --ink: #E6E9EF;
  --muted: #8A93A6;
  --accent: #FF9F0A;
  --accent-2: #30D158;
  --font-display: JetBrains Mono, SF Mono, Menlo, monospace;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Dataviz Terminal -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/dataviz-terminal/DESIGN.md`.*
