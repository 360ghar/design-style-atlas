---
slug: webcore
name: "Webcore"
description: "Early-internet aesthetics using browser chrome, hyperlinks and deliberately primitive UI."
category: Retro & Internet
tags: [webcore, browser, primitive]
related: [y2k, retro-internet]
preview:
  bg: "#C0C0C0"
  surface: "#FFFFFF"
  ink: "#000000"
  muted: "#4F4F4F"
  accent: "#0000EE"
  accent2: "#008080"
  display: "Times New Roman, serif"
  body: "Arial, Helvetica, sans-serif"
---

# Webcore — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more decaying-browser-chrome interpretation.

## 1. Overall aesthetic

The browser AS the aesthetic: fake window chrome, tiling image layouts, blue hyperlinks, directory listings, and view-source pride. Webcore treats HTTP itself as a medium — raw, indexable, and a little feral. For net-art projects, indie tools, and archives.

**Three principles:**

- Browser chrome is decoration: windows, scrollbars, status bars
- Blue links, visited purple — the original design system
- View-source should read like poetry

## 2. Typography

- **Display:** Times New Roman, serif
- **Body:** Arial, Helvetica, sans-serif
- **Scale:** hero 36–60px default Times on tiled grounds, H2 26–34px, H3 20px, body 15–16px sans, meta/labels 12px plain.
- **Weights:** display 700 serif default; body 400; labels 400–700 plain (never designed tracking).
- **Rules:** browser-window frames and tiled desktop grounds; headlines as `Index of /` directory listings and window titles; never clean modern grids.
- **Links:** unvisited `#0000EE` underline, visited `#551A8B` underline — never restyle away.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#C0C0C0` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#000000` | Headlines, body text |
| Muted | `#4F4F4F` | Captions, meta, secondary text |
| Accent | `#0000EE` | Primary actions, highlights |
| Accent 2 | `#008080` | Desktop-teal alternate ground, status accents |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Desktop collage: overlapping windows with title bars, 8px chrome padding, taskbar footer 40px

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Window collage: draggable-feeling bordered windows over gray desktop; taskbar nav; start-menu sections. Tiled image rivers.

## 6. Borders

OS-chrome borders: 2px outset window frames, inset wells, 1px table grids

## 7. Shadows

Window-manager shadows: 4px 4px 0 rgba(0,0,0,0.35) under draggable-feeling windows

## 8. Radius

0px — windows are square

## 9. Buttons

Raised gray buttons with 2px outset borders; default-button bold outline; hover presses inset.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Windows: title bar (`linear-gradient(90deg,#000080,#1084D0)`, white text), menu row, content well, groove status bar. Each card a tiny application.

## 11. Navigation

Bookmark toolbar + in-window link row (`home · directory · view source`) as primary nav; status bar with object count and clock. Taskbar footer optional — Windows95 owns the Start/taskbar signature.

## 12. Imagery

Tiled thumbnails, dithered images, screencaps with window chrome, favicon mosaics.

## 13. Icons

16px favicon-grade pixel icons; folder/file glyphs; hourglass for loads (brief, kind).

## 14. Textures / Patterns

Desktop teal (#008080) or gray grounds; dither patterns; scanline overlays optional.

## 15. Motion

Window-open pops, marquee tickers, progress bars that actually map to loads. Solitaire-win energy on conversion (restrained).

Durations: instant–200ms window pops. Easings: none or steps(2); smooth premium motion forbidden.

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

- Hiding URLs and structure
- Custom cursor chaos that breaks usability
- Trendy gradients over chrome honesty
- Single-page smoothness — embrace the clunk
- Forgetting mobile: stack windows vertically

## 20. Quick-start snippet

```css
:root {
  --bg: #C0C0C0;
  --surface: #FFFFFF;
  --ink: #000000;
  --muted: #4F4F4F;
  --accent: #0000EE;
  --accent-2: #008080;
  --font-display: Times New Roman, serif;
  --font-body: Arial, Helvetica, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Webcore -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/webcore/DESIGN.md`.*
