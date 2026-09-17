---
slug: zine-punk
name: "Zine / Punk"
description: "Xeroxed rebellion: cut letters, harsh contrast and photocopied fury."
category: Cut & Paste
tags: [zine, punk, xerox]
related: [collage, scrapbook]
preview:
  bg: "#F2F0EB"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#5C5A55"
  accent: "#D92300"
  accent2: "#FFEB00"
  display: "Impact, Arial Black, sans-serif"
  body: "Courier New, monospace"
---

# Zine / Punk — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the louder, more photocopied interpretation.

## 1. Overall aesthetic

A Kinko's at midnight: cut-out headlines, ransom-note type mixing, high-contrast xerox portraits, safety-pin motifs, redaction bars. Loud, cheap, and honest. For bands, venues, activist causes, indie games, and streetwear.

**Three principles:**

- Contrast is king: black on white, red for alarm
- Mix 3+ type treatments like ransom notes — with conviction
- Photocopy texture unifies everything rebellious

## 2. Typography

- **Display:** Impact, Arial Black, sans-serif
- **Body:** Courier New, monospace
- **Scale:** hero 52–88px Impact/Arial Black cut-and-paste, H2 32–44px, H3 22–24px, body 15–17px typewritten, meta/labels 12–13px stamped labels.
- **Weights:** display 800–900 punk black; body 400; labels 700–900 stamped.
- **Rules:** ransom-note headlines with Xerox grain and safety-pin rotations; centered chaos welcome; never polished SaaS layouts.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F2F0EB` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#111111` | Headlines, body text |
| Muted | `#5C5A55` | Captions, meta, secondary text |
| Accent | `#D92300` | Primary actions, highlights |
| Accent 2 | `#FFEB00` | Highlighter swipes, tape strips, stamp fills (black text on it) |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Ransom-note rhythm: colliding sizes, 16px dense columns, full-bleed scream sections

Use an 8px base unit (4px for dense product UI). Section padding 64–96px (32–48px mobile); card padding 20–24px; gaps 16–24px; never let text touch a container edge (16px minimum inset).

## 5. Layout / Grid

Manifesto stack: scream hero, lineup index, manifesto columns, show-date tables, distro footer. Max-width 1200px.

## 6. Borders

Cut-paper edges, taped rips, marker blackouts, stamp frames. Borders: 2–3px solid #111111; tape strips 20–28px wide, rotated -8 to 8deg; stamp frames 2px dashed #111111.

## 7. Shadows

Xerox depth: hard 5px offsets + photocopy noise; redaction bars as dividers

## 8. Radius

0px + photocopy-rough clip edges

## 9. Buttons

Cut-out stickers and stamp buttons; hover slams (scale 1.05, 100ms). Ticket blocks with stub edges.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Flyer panels: xerox image + cut headline + date stamp + tape. No polish, all conviction.

## 11. Navigation

Flyer header: logo cut-out, date marquee, section stamps. Sticky with xerox edge.

## 12. Imagery

High-contrast xerox portraits, cut-and-paste collage, safety pins, barcodes, stamps.

## 13. Icons

Anarchy-adjacent glyphs: pins, bolts, skulls (one), arrows — cut-out style.

## 14. Textures / Patterns

Photocopy grain 12–18%, halftones, marker strokes, tape, staple dots.

## 15. Motion

Slam cuts: hard entrances 150ms, marquee lineups, hover slams. No easing softness.

Durations: instant–250ms Xerox slams. Easings: none or steps(2); smooth premium motion forbidden.

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

- Polished corporate anything
- Polite single-typeface restraint
- Soft shadows or gradients
- Stock photography
- Preachy without show dates (earn the anger)

## 20. Quick-start snippet

```css
:root {
  --bg: #F2F0EB;
  --surface: #FFFFFF;
  --ink: #111111;
  --muted: #5C5A55;
  --accent: #D92300;
  --accent-2: #FFEB00;
  --font-display: Impact, Arial Black, sans-serif;
  --font-body: Courier New, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Zine / Punk -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/zine-punk/DESIGN.md`.*
