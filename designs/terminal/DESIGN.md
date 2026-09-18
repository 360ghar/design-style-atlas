---
slug: terminal
name: "Terminal"
description: "Monospace truth: prompts, carets and green-on-black developer honesty."
category: OS & Terminal
tags: [terminal, cli, developer]
related: [desktop-ui, windows-95, mac-os]
preview:
  bg: "#0C0C0C"
  surface: "#141414"
  ink: "#33FF66"
  muted: "#6A9955"
  accent: "#4DD8FF"
  accent2: "#FFB000"
  display: "JetBrains Mono, SF Mono, Menlo, monospace"
  body: "JetBrains Mono, SF Mono, Menlo, monospace"
---

# Terminal — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal, terminal-native interpretation.

## 1. Overall aesthetic

The command line as a complete aesthetic: black screen, green phosphor, ASCII borders, man-page typography, and typing animations. Power through text. For devtools, AI products, infra brands, and portfolios that ship. The prompt is the hero section.

**Three principles:**

- Everything is text: prompts, tables (ASCII), progress (bars of █)
- Green phosphor on near-black; cyan for paths/links, amber for highlights
- Typing is theater: stagger, caret, and all

## 2. Typography

- **Display:** JetBrains Mono, SF Mono, Menlo, monospace
- **Body:** JetBrains Mono, SF Mono, Menlo, monospace
- **Scale:** hero 24–40px mono at 80-col measure (no viewport-scale poster type), H2 20–24px, H3 16–18px, body 13–15px mono at 1.6 line-height, meta/labels 12–13px mono.
- **Weights:** display 400–700 mono; body 400; labels 400–700 with 0–0.05em tracking (no 900 poster blacks, no wide tracking).
- **Rules:** monospace everywhere including headlines, left-aligned with ASCII dividers; never center headlines; never use proportional fonts in terminal zones.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0C0C0C` | Page ground |
| Surface | `#141414` | Cards, panels, wells |
| Ink | `#33FF66` | Headlines, body text |
| Muted | `#6A9955` | Captions, meta, secondary text |
| Accent | `#4DD8FF` | Links, directory paths (`~`), primary actions |
| Accent 2 | `#FFB000` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Character grid: 8px/16px = 1–2 cells; 80-col measure; line-height 1.6; prompt-prefixed everything

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Terminal-first: full-viewport shell hero with typed session; docs as man pages; status as top/htop-style bars. 80–100col measure.

## 6. Borders

1px solid #2A2A2A panes; ASCII dividers (─ │ ┌ ┐); blinking block caret

## 7. Shadows

CRT glow: 0 0 24px rgba(51,255,102,0.15); scanline overlay at 6%

## 8. Radius

0–4px; sharp terminal, slightly rounded app chrome

## 9. Buttons

Prompt-style actions: [y/N] confirms, $ commands as CTAs, bordered ASCII buttons. Hover inverts green/black.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Pane windows with ASCII or thin borders, title bars like tmux tabs; log-stream panels; man-page sections.

## 11. Navigation

Prompt nav: ~/docs ~/pricing ~/blog path links; tab-completion hint; Ctrl+K command palette as primary nav.

## 12. Imagery

ASCII art headers, ANSI-color diagrams, sparkline glyphs (▁▃▅), screencast GIFs in bordered panes. No stock photos.

## 13. Icons

Nerd-font glyphs and ASCII marks (● ◆ ► ✓). No emoji, no line-icon sets.

## 14. Textures / Patterns

Scanlines, phosphor glow, subtle CRT vignette. Optional dot-matrix print texture on light variant.

## 15. Motion

Typing sequences (respect reduced-motion: show final text), caret blink 1s steps, log auto-scroll. Mechanical timing.

Durations: micro instant–100ms, standard 100–200ms, no ceremonial long fades. Easings: linear or steps() for typing and caret; no springs, no ease-out flourishes.

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

- Proportional fonts anywhere in terminal zones
- Marketing gradients or rounded SaaS cards
- Hiding the command line behind GUI-only flows
- Rainbow syntax color beyond cyan paths + amber highlights in prose areas
- Fake slowness — typing should feel fast, not theatrical-laggy

## 20. Quick-start snippet

```css
:root {
  --bg: #0C0C0C;
  --surface: #141414;
  --ink: #33FF66;
  --muted: #6A9955;
  --accent: #4DD8FF;
  --accent-2: #FFB000;
  --font-display: JetBrains Mono, SF Mono, Menlo, monospace;
  --font-body: JetBrains Mono, SF Mono, Menlo, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Terminal -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/terminal/DESIGN.md`.*
