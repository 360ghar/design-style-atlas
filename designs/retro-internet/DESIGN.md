---
slug: retro-internet
name: "Retro Internet"
description: "Early-web warmth: tiled backgrounds, guestbooks and dial-up sincerity."
category: Retro & Internet
tags: [retro, web1, nostalgic]
related: [y2k, webcore, windows-95]
preview:
  bg: "#FFF8DC"
  surface: "#FFFFFF"
  ink: "#222222"
  muted: "#77705F"
  accent: "#0000EE"
  accent2: "#FF0000"
  display: "Times New Roman, Georgia, serif"
  body: "Verdana, Arial, sans-serif"
---

# Retro Internet — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more faithfully 1998 interpretation — under-construction energy.

## 1. Overall aesthetic

A loving 1997 homepage: tiled starfield or parchment, visitor counter, guestbook, MIDI-era sincerity, under-construction GIFs — rebuilt with modern performance. For personal sites, indie games, zines, and brands trading on sincerity.

**Three principles:**

- Sincerity over polish: write like a human, sign your updates
- Tables, guestbooks, and blogrolls are features
- One MIDI-era flourish per page — then stop

## 2. Typography

- **Display:** Times New Roman, Georgia, serif
- **Body:** Verdana, Arial, sans-serif
- **Scale:** hero 36–56px Times with tiled banners, H2 26–34px, H3 20px, body 15–16px Times, meta/labels 12px visitor-counter plain.
- **Weights:** display 700 Times bold; body 400; labels 400–700 with web-safe honesty (never refined tracking).
- **Rules:** left-aligned or centered guestbook headlines with dividers and badges; tiled backgrounds welcome; never modern SaaS minimalism.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFF8DC` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#222222` | Headlines, body text |
| Muted | `#77705F` | Captions, meta, secondary text |
| Accent | `#0000EE` | Primary actions, highlights |
| Accent 2 | `#FF0000` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Cozy density: centered 800px content well, sidebar blogrolls, 16px tiled rhythm, webring footers

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Classic three-zone: banner header, left nav sidebar (180–200px), fluid content well, guestbook + webring footer. Centered 800px shell, 16px gutters.

## 6. Borders

Beveled panels (outset/inset), 1px gray table grids, horizontal rules with character (❦ ★)

## 7. Shadows

Bevel highlights, not shadows: inset white + outset gray classic-raised effect

## 8. Radius

0–4px; beveled wells and outset buttons

## 9. Buttons

Raised beveled buttons (classic gray outset); hover presses inset. Big shiny download buttons welcome.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Inset wells and outset panels; award badges (88×31 style) rows; polaroid guest photos.

## 11. Navigation

Sidebar nav with star bullets and visited-purple links; top banner with tagline and last-updated stamp.

## 12. Imagery

Pixel art, clip art, scanned photos with white borders, starfield tiles, divider GIFs (CSS recreations).

## 13. Icons

Pixel icons and emoji: ✉ ★ ☎ ♪. Favicon-grade 16px craft.

## 14. Textures / Patterns

Tiled backgrounds (subtle!), parchment, starfields, construction stripes in the footer.

## 15. Motion

Marquee welcome, blinking NEW! tags, waving flags (CSS), cursor sparkles optional. Nostalgia, not annoyance.

Durations: instant–200ms; marquees and blinking GIFs encouraged. Easings: none or steps(); smooth choreography forbidden.

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

- Sleek SaaS minimalism
- Hiding personality behind systems
- Autoplay audio (the one unforgivable sin)
- Fake retro without real content
- Breaking keyboard/reader access for jokes

## 20. Quick-start snippet

```css
:root {
  --bg: #FFF8DC;
  --surface: #FFFFFF;
  --ink: #222222;
  --muted: #77705F;
  --accent: #0000EE;
  --accent-2: #FF0000;
  --font-display: Times New Roman, Georgia, serif;
  --font-body: Verdana, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Retro Internet -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/retro-internet/DESIGN.md`.*
