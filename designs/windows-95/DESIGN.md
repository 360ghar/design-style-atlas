---
slug: windows-95
name: "Windows 95"
description: "Gray-beveled perfection: title bars, taskbars and start-menu logic."
category: OS & Terminal
tags: [windows95, retro, gray]
related: [retro-internet, desktop-ui, mac-os]
preview:
  bg: "#0A8F8F"
  surface: "#C3C7CB"
  ink: "#000000"
  muted: "#111919"
  accent: "#000080"
  accent2: "#FF0000"
  display: "Pixelated MS Sans Serif, Tahoma, sans-serif"
  body: "MS Sans Serif, Tahoma, Verdana, sans-serif"
---

# Windows 95 — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more faithfully 1995 interpretation — gray bevels everywhere.

## 1. Overall aesthetic

Chicago-era pixel truth: #C3C7CB faces, navy title gradients, dotted focus rectangles, and a Start button with presence. The most imitated UI ever — get the bevels right and everything else follows. For retro games, portfolios, and ironic-then-sincere tools.

**Three principles:**

- Bevels are physics: light top-left, shadow bottom-right, always
- Navy + gray + teal; red only for close/errors
- 11px text, dotted focus, chunky targets — period accuracy

## 2. Typography

- **Display:** Pixelated MS Sans Serif, Tahoma, sans-serif
- **Body:** MS Sans Serif, Tahoma, Verdana, sans-serif
- **Scale:** hero 28–40px pixel Tahoma/MS Sans, H2 22–28px, H3 18px, body 13–15px, meta/labels 12px beveled labels.
- **Weights:** display 700 beveled bold; body 400; labels 700 with pixel honesty (never smooth tracking).
- **Rules:** raised-bevel panels with navy title bars; left-aligned taskbar logic; never rounded modern cards, never blur.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A8F8F` | Page ground |
| Surface | `#C3C7CB` | Cards, panels, wells |
| Ink | `#000000` | Headlines, body text |
| Muted | `#111919` | Captions, meta, secondary text |
| Accent | `#000080` | Primary actions, highlights |
| Accent 2 | `#FF0000` | Close glyphs, errors, destructive confirms only |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Pixel discipline: 3px chrome padding, 18px title bars, 28px taskbar, 11px UI text

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Desktop: teal field, window stack, taskbar with Start + tasks + clock. Dialogs centered with title bars and OK/Cancel.

## 6. Borders

The bevel system: outset (white top-left, dark bottom-right), inset reversed; 1px dotted focus rects

## 7. Shadows

Bevel-implied depth; 4px offset under menus and dragged windows

## 8. Radius

0px — strictly square, always

## 9. Buttons

Raised gray buttons with 2px outset; default gets extra black outline; pressed inverts to inset + dotted label shift.

All buttons: 23px+ chrome height (11px label), dotted focus rect (offset -4px), hourglass on waits over 300ms, and a disabled state using grayed label + inset (no color-only signal). Enlarge to 44px targets only under `@media (pointer: coarse)`.

## 10. Cards

Dialog windows: navy gradient title bar with white bold text, □ ✕ glyphs, tab strips, inset wells, button rows.

## 11. Navigation

Start menu: two-column (dark sidebar + items), separators, arrows for cascades; taskbar tasks show window titles.

## 12. Imagery

16-color icons, cloudy wallpaper, maze screensaver motifs as section art. Dither proudly.

## 13. Icons

Authentic 16/32px pixel icons with 16-color palette discipline. No anti-aliased modern sets.

## 14. Textures / Patterns

Flat teal/gray; subtle cloudy wallpaper; bevel gradients strictly on chrome edges.

## 15. Motion

Instant state flips; window drag illusion on headers; hourglass cursor moments. 90s speed: no easing, just clunks.

Durations: instant–150ms bevel-pressed snaps. Easings: none (steps welcome); smooth premium motion forbidden.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset; if accent is under 3:1 on a ground, use a ring that clears 3:1 against that ground — Ink when it clears, otherwise Background — so focus stays visible).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: segmented navy block progress bar (like the preview's 42% bar) plus hourglass cursor; no skeleton shimmer, no spinner.

## 17. Responsive behavior

- Mobile (360–767px): single dialog column, 16–20px page margins, taskbar with Start + clock preserved; enlarge chrome to 44px only under `(pointer: coarse)`, never a sticky bottom CTA.
- Tablet (768–1099px): 2-column grids, condensed nav, preserved section order.
- Desktop (1100px+): full window stack per Layout section, hero capped at 28–40px per Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum on Surface `#C3C7CB` (Ink `#000000` passes; Muted `#111919` is chrome-meta only — use Ink for body/small text). Teal Background `#0A8F8F` is a desktop field, not a text ground: only white bold title/task text with shadow sits on it. Never place Muted/Accent body copy on teal.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: period chrome stays 23px+ with 8px gaps; 44px targets apply only under `(pointer: coarse)`.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Rounded anything
- Modern fonts or sizes
- Blue links inside chrome (that's webcore)
- Soft shadows or blur
- Anachronistic emojis in chrome

## 20. Quick-start snippet

```css
:root {
  --bg: #0A8F8F;
  --surface: #C3C7CB;
  --ink: #000000;
  --muted: #111919;
  --accent: #000080;
  --accent-2: #FF0000;
  --font-display: Pixelated MS Sans Serif, Tahoma, sans-serif;
  --font-body: MS Sans Serif, Tahoma, Verdana, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Windows 95 -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/windows-95/DESIGN.md`.*
