---
slug: raw-html
name: "Raw HTML"
description: "Radical web honesty: Times New Roman, default blue hyperlinks, beveled gray buttons, and raw HTML tables."
category: Brutalist
tags: [html, indieweb, minimal-web, hyperlink, purist]
related: [brutalism, minimalism, newspaper]
preview:
  bg: "#FFFFFF"
  surface: "#F0F0F0"
  ink: "#000000"
  muted: "#555555"
  accent: "#0000EE"
  accent2: "#551A8B"
  display: "Times New Roman, Times, serif"
  body: "Times New Roman, Times, serif"
---

# Raw HTML — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Raw HTML is the purist manifesto of web honesty and the indie-web movement (championed by 'motherfuckingwebsite.com' and Berkshire Hathaway). Default serif browser typography (Times New Roman), raw unstyled royal blue hyperlinks (#0000EE), classic visited purple (#551A8B), beveled gray submit buttons (#C0C0C0), and explicit 1px HTML table borders provide unbeatable speed and radical authenticity.

**Three principles:**

- Radical default honesty: embrace the browser's native defaults rather than masking them with framework bloat
- Hyperlink sanctity: links are royal blue, underlined, and visited links turn purple — standard since 1993
- Speed & accessibility perfection: zero render-blocking bloat, 100% semantic HTML, readable everywhere

## 2. Typography

- **Display:** Times New Roman, Times, serif
- **Body:** Times New Roman, Times, serif
- **Scale:** H1 32px standard bold serif, H2 24px, H3 18.7px, body 16px/1.4, microcopy 13px.
- **Weights:** headings 700 bold; body 400 regular; pure browser defaults.
- **Rules:** left-aligned default reading flow; underlined text is strictly for hyperlinks; standard browser heading scale.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page ground |
| Surface | `#F0F0F0` | Cards, panels, containers |
| Ink | `#000000` | Headlines, primary text |
| Muted | `#555555` | Secondary copy, metadata, borders |
| Accent | `#0000EE` | Primary action, key highlights |
| Accent 2 | `#551A8B` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Standard Browser Link Blue (#0000EE) for interactive links; Visited Link Purple (#551A8B) for history.

## 4. Spacing

Standard 8px browser margin; 16px paragraph margins; compact tables with cellpadding='6' cellspacing='0'.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Standard document flow: max-width 780px centered or left-aligned; sequential headings, paragraphs, lists, and tables; no grid gimmickry.

## 6. Borders

1px solid #808080 or inset/outset 2px system borders; default HTML table borders (border='1').

## 7. Shadows

None — flat 2D document space; classic 2px outset/inset button bevels.

## 8. Radius

0px absolute — standard system square buttons and inputs.

## 9. Buttons

Classic OS/browser beveled buttons: background #E0E0E0, border 2px outset #FFFFFF; active state border 2px inset #FFFFFF.

## 10. Cards

Classic HTML <fieldset> with <legend> label; or table-based data cells with 1px gray borders.

## 11. Navigation

Horizontal bulleted list of blue hyperlinks separated by vertical bars (|) or simple bracketed links ([Home] [About] [Docs]).

## 12. Imagery

Unmodified inline images with 1px black border and visible alt text; classic technical diagram screenshots.

## 13. Icons

Unicode text glyphs: [?], [!], [x], [->], bullets (&bull;).

## 14. Textures

None — pure clean white background (#FFFFFF) with zero noise or gradients.

## 15. Motion

Instantaneous state changes; 0ms transitions; browser-native focus rings.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 40px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section, oversized hero type.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Heavy CSS frameworks, Tailwind bloat, or complex animated canvas libraries
- Custom cursor trackers, parallax scrolls, or page loaders
- Removing default link underlines or hiding focus outlines
- Floating glass panels or blurred gradient orbs
- Low-contrast gray text on dark backgrounds

## 20. Quick-start snippet

```css
:root {
  --bg: #FFFFFF;
  --surface: #F0F0F0;
  --ink: #000000;
  --muted: #555555;
  --accent: #0000EE;
  --accent-2: #551A8B;
  --font-display: Times New Roman, Times, serif;
  --font-body: Times New Roman, Times, serif;
}
```

```html
<!-- Starter specimen: button + card in Raw HTML -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Raw HTML headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/raw-html/DESIGN.md`.*
