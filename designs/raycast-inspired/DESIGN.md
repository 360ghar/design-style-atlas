---
slug: raycast-inspired
name: "Raycast Inspired"
description: "Hyper-fast obsidian command surfaces, glowing ruby hotkeys, and keyboard-first precision."
category: Product & SaaS
tags: [developer, command-bar, dark-mode, hotkeys]
related: [linear-inspired, geist-minimal, terminal]
preview:
  bg: "#0B0D0E"
  surface: "#16191B"
  ink: "#EDEDED"
  muted: "#8B949E"
  accent: "#FF6363"
  accent2: "#FF9F43"
  display: "Inter, SF Pro Display, -apple-system, sans-serif"
  body: "Inter, SF Pro Text, -apple-system, sans-serif"
---

# Raycast Inspired — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Raycast Inspired is the benchmark for modern power-user tools: an ultra-fast dark launcher interface where every action is a keystroke away. Deep obsidian backgrounds are framed by subtle metallic hairlines and electrified by coral-ruby neon glows. Compact command lists, dense hotkey badges, and zero-latency feedback make complex computing feel instant and weightless.

**Three principles:**

- Speed is the feature: instant list filtering, zero visual bloat, 0ms lag perception
- Keyboard-first clarity: hotkeys and action bars take prominence over pointer targets
- Obsidian with vivid punch: ultra-deep dark ground ignited by focused ruby/coral accents

## 2. Typography

- **Display:** Inter, SF Pro Display, -apple-system, sans-serif
- **Body:** Inter, SF Pro Text, -apple-system, sans-serif
- **Scale:** hero 36–48px semibold tight (-0.02em), command input 18–22px, list items 13–14px, hotkey badges 11px mono.
- **Weights:** display 600–700; body 400–500; hotkeys 500–600 monospace.
- **Rules:** left-aligned command lists; right-aligned accessory text and shortcut badges; strict tabular figures for numbers.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0B0D0E` | Page ground |
| Surface | `#16191B` | Cards, panels, containers |
| Ink | `#EDEDED` | Headlines, primary text |
| Muted | `#8B949E` | Secondary copy, metadata, borders |
| Accent | `#FF6363` | Primary action, key highlights |
| Accent 2 | `#FF9F43` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Accent #FF6363 is reserved for active selection glows, primary actions, and destructive indicators.

## 4. Spacing

4px base grid; compact list rows 36–42px tall; command window max-width 720px; 12–16px inner padding.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Floating centered spotlight modal or fixed launcher shell; top search bar with pill category filter; scrollable dense action list; bottom status shortcut bar.

## 6. Borders

1px #FFFFFF14 subtle metallic keylines on surfaces; 1px #FF636366 active selection border with inner glow.

## 7. Shadows

Deep launcher elevation: 0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08); focused selection 0 0 20px #FF636333.

## 8. Radius

12–16px window modal; 6–8px list item highlights; 4px keyboard shortcut badges.

## 9. Buttons

Compact 28–32px pill or rounded rects; secondary #21262D with 1px border; primary ruby filled with near-black `#0B0D0E` labels (6.7:1 — white is 2.9:1); hotkey hints embedded.

## 10. Cards

Dark matte obsidian tiles (#16191B); hairline separators; active state receives glowing border and subtle 2% brightness boost.

## 11. Navigation

Top pill filter breadcrumb inside search bar; bottom floating action bar with ↵ Open, ⌘K Actions, ⇥ Details.

## 12. Imagery

Vector monochrome icons, high-contrast product screenshots, dark-mode SVG telemetry graphs.

## 13. Icons

Crisp 14–16px vector glyphs; monochromatic muted gray; active item icons take accent color.

## 14. Textures

None printed — pure digital precision with subtle 1px grid guides and focused radial glow behind modals.

## 15. Motion

Snappy 100–150ms ease-out transitions; instant keyboard navigation with 0ms delay; smooth spring list expansion.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using a ring that clears 3:1 on the adjacent ground — Ink when it clears, otherwise Background.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–767px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1099px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Slow, floaty page transitions that impede keyboard speed
- Overly large, airy marketing margins inside product views
- Light-mode surfaces with poor contrast
- Hiding keyboard shortcuts behind nested dropdowns
- Cluttered multi-colored gradients across backgrounds

## 20. Quick-start snippet

```css
:root {
  --bg: #0B0D0E;
  --surface: #16191B;
  --ink: #EDEDED;
  --muted: #8B949E;
  --accent: #FF6363;
  --accent-2: #FF9F43;
  --font-display: Inter, SF Pro Display, -apple-system, sans-serif;
  --font-body: Inter, SF Pro Text, -apple-system, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Raycast Inspired -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Raycast Inspired headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/raycast-inspired/DESIGN.md`.*
