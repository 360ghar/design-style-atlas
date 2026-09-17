---
slug: desktop-ui
name: "Desktop UI"
description: "Windowed nostalgia: draggable-feeling panels, menus and desktop metaphors."
category: OS & Terminal
tags: [desktop, windows, skeuomorph]
related: [windows-95, mac-os, terminal]
preview:
  bg: "#008080"
  surface: "#C0C0C0"
  ink: "#111111"
  muted: "#555555"
  accent: "#000080"
  accent2: "#1084D0"
  display: "Tahoma, Verdana, sans-serif"
  body: "Tahoma, Verdana, sans-serif"
---

# Desktop UI — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more literal operating-system interpretation.

## 1. Overall aesthetic

A beloved 1998 desktop, lovingly functional: teal wallpaper, bordered windows with blue gradient title bars, desktop icons with white-outline labels, and a taskbar clock. Every panel feels grabbable. For retro tools, games, portfolios, and playful SaaS easter eggs.

**Three principles:**

- Every panel is a window: title bar, controls, menu, status
- Teal + gray + navy is home — deviate sparingly
- Clicks clunk: outset → inset press states everywhere

## 2. Typography

- **Display:** Tahoma, Verdana, sans-serif
- **Body:** Tahoma, Verdana, sans-serif
- **Scale:** hero 28–40px Tahoma/Verdana title-bar type, H2 22–28px, H3 18px, body 13–15px UI text, meta/labels 12px title-bar labels.
- **Weights:** display 700 title-bar bold; body 400; labels 700 with no added tracking (OS honesty).
- **Rules:** window-chrome frames with title bars and menu strips; left-aligned UI headlines; never editorial poster typography.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#008080` | Page ground |
| Surface | `#C0C0C0` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#555555` | Captions, meta, secondary text |
| Accent | `#000080` | Primary actions, highlights |
| Accent 2 | `#1084D0` | Title-bar gradient end-stop, secondary highlights |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Desktop logic: 8px chrome padding, 28px title bars, 40px taskbar, icon grid 88px pitch

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Desktop field: wallpaper ground, icon column left, 1–3 overlapping windows center, taskbar pinned bottom. Mobile stacks windows.

## 6. Borders

Classic chrome: 2–3px outset frames, inset wells, 1px menu separators

## 7. Shadows

OS shadows: 5px 5px 0 rgba(0,0,0,0.3) under windows (4–6px range); bevel highlights as light source

## 8. Radius

0px windows; 4px icon labels

## 9. Buttons

Raised outset buttons; bold-outlined default; disabled = gray etched text. Press insets with 100ms clunk.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Windows with title bars, menu rows (File Edit View), toolbar strips, content wells, status bars with grip corners.

## 11. Navigation

Taskbar: Start button (beveled, bold), task buttons (inset when active), tray with clock. Start menu as dropdown panel.

## 12. Imagery

Pixel icons (32px classic style), wallpaper gradients, dithered photo viewers inside windows.

## 13. Icons

Classic 32/16px pixel icons: folders, documents, trash, computer. White-outline label text.

## 14. Textures / Patterns

Teal flat or cloudy-sky wallpaper; dithered fills; bevel gradients only on chrome.

## 15. Motion

Window open/close pops (120ms), minimize-to-taskbar illusion, hourglass on fake loads. Snappy and mechanical.

Durations: instant–150ms window snaps. Easings: none or linear; springs and flourishes forbidden — windows snap.

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

- Web-page layouts without windows
- Modern minimal chrome
- Hiding the taskbar metaphor
- Gradients beyond title bars
- Breaking the metaphor with SaaS modals

## 20. Quick-start snippet

```css
:root {
  --bg: #008080;
  --surface: #C0C0C0;
  --ink: #111111;
  --muted: #555555;
  --accent: #000080;
  --accent-2: #1084D0;
  --font-display: Tahoma, Verdana, sans-serif;
  --font-body: Tahoma, Verdana, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Desktop UI -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/desktop-ui/DESIGN.md`.*
