---
slug: editorial-minimalism
name: "Editorial Minimalism"
description: "Quiet magazine restraint: serif headlines, rules, and footnotes over empty space."
category: Minimal
tags: [minimal, editorial, serif]
related: [minimalism, ultra-minimalism, swiss-design]
preview:
  bg: "#FBFAF7"
  surface: "#FFFFFF"
  ink: "#1C1B1A"
  muted: "#76726E"
  accent: "#8C2F1B"
  accent2: "#1C1B1A"
  display: "Georgia, Playfair Display, Times New Roman, serif"
  body: "Georgia, Source Serif 4, Times New Roman, serif"
---

# Editorial Minimalism — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the quieter, more disciplined interpretation.

## 1. Overall aesthetic

A literary journal rendered as a website: serif display type, kickers, bylines, pull quotes, and footnote-style meta. Color appears once — an oxblood or ink-blue accent for links and rules. Authority comes from typography and editing, not interface.

**Three principles:**

- Typography is the interface — invest in scale, measure, and rhythm
- Print devices translate: kickers, rules, bylines, folios, pull quotes
- One accent color, used like an editor's red pen

## 2. Typography

- **Display:** Georgia, Playfair Display, Times New Roman, serif
- **Body:** Georgia, Source Serif 4, Times New Roman, serif
- **Scale:** hero 32–48px quiet serif, H2 24–30px, H3 19–21px, body 15–16px Georgia at 680px measure, meta/labels 11–12px tracked uppercase kickers.
- **Weights:** display 400–600 serif; body 400; labels 600 with +0.12–0.2em tracking (never 800–900 poster blacks).
- **Rules:** flush-left serif headlines on a calm column grid; centered only for single-statement covers; never justify body copy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FBFAF7` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1C1B1A` | Headlines, body text |
| Muted | `#76726E` | Captions, meta, secondary text |
| Accent | `#8C2F1B` | Primary actions, highlights |
| Accent 2 | `#1C1B1A` | Same as Ink — no second hue; reuse Ink for rules and emphasis |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Baseline grid 24–28px; measure 60–68ch; kickers tracked +0.18em; drop caps optional on features

Use an 8px base unit. Section padding 72–112px desktop / 48px mobile; story-row padding 20–28px vertical; never let text touch a container edge (16px minimum inset).

## 5. Layout / Grid

Article column 680px centered, max-width 1140px page; marginalia rail 200–240px with 24–32px gutter; section openers with kicker + giant serif headline + rule. Top matter 48–72px, quiet footer with colophon.

## 6. Borders

Typographic rules: 1px ink lines above/below headers, double rules for mastheads, hairline column dividers

## 7. Shadows

None — print has no shadows

## 8. Radius

0–2px; sharp like print

## 9. Buttons

Understated: small-caps tracked text links in accent, or 1px ink-bordered rectangles. No fills except a black subscribe button.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

No cards — story rows with thumbnail, kicker, headline, dek, byline, separated by hairlines. Index-like and calm.

## 11. Navigation

Masthead: centered or left serif wordmark, date/edition line, thin double rule, small-caps section links. Unchanged across pages.

## 12. Imagery

Duotone or muted editorial photography with captions and credits. Figures numbered (Fig. 1); captions in 12.5px italic gray.

## 13. Icons

Almost none; use typographic ornaments (❦, §, →) and small-caps labels instead.

## 14. Textures / Patterns

Warm paper flat (#FBFAF7); subtle letterpress impression on the masthead only, no grain overlay.

## 15. Motion

Page-like: 200ms fades, footnote-style smooth scrolling to anchors. No parallax theatrics.

Durations: micro 150–250ms, standard 300–500ms page-soft fades. Easings: ease-out only; no springs, no mechanical snaps.

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

- Sans-serif headlines or techy UI chrome
- Cards, pills, shadows, or rounded media
- Bright multi-color accents
- Infinite-scroll density — paginate like issues
- Clickbait patterns: badges, counts, sticky video

## 20. Quick-start snippet

```css
:root {
  --bg: #FBFAF7;
  --surface: #FFFFFF;
  --ink: #1C1B1A;
  --muted: #76726E;
  --accent: #8C2F1B;
  --accent-2: #1C1B1A;
  --font-display: Georgia, Playfair Display, Times New Roman, serif;
  --font-body: Georgia, Source Serif 4, Times New Roman, serif;
}
```

```html
<!-- Copy-paste starter: text link + story row in Editorial Minimalism -->
<a class="ds-btn" href="#">Subscribe</a>
<article class="ds-row">
  <p class="ds-kicker">Essay — Vol. IV</p>
  <h3>On the quiet discipline of the well-set paragraph</h3>
  <p>By E. Marlowe · 12 min read · § 4</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/editorial-minimalism/DESIGN.md`.*
