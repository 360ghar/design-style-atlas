---
slug: mac-os
name: "Mac OS"
description: "Classic Mac warmth: pinstripes, platinum and friendly Aqua geometry."
category: OS & Terminal
tags: [mac, aqua, classic]
related: [desktop-ui, windows-95, terminal]
preview:
  bg: "#E8E6DF"
  surface: "#F2F0EB"
  ink: "#2B2B2B"
  muted: "#5F5B54"
  accent: "#0B5FFF"
  accent2: "#FF9F00"
  display: "Charcoal, Chicago, Geneva, sans-serif"
  body: "Geneva, Verdana, Helvetica Neue, sans-serif"
---

# Mac OS — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more faithfully Platinum-era interpretation — pinstripes and Chicago type.

## 1. Overall aesthetic

Cupertino warmth across eras: pinstripe title bars (or brushed metal, or Aqua gel — pick one era and commit), Chicago display type for headers, Geneva body, smiling folder icons. Friendlier than Windows 95, just as square-rooted in pixels. For creative tools and nostalgic portfolios.

**Three principles:**

- Pick one era (System 7 / Platinum / Aqua) and commit fully
- Friendliness through details: icons smile, buttons gel
- Pinstripes and gels are precious — ration them

## 2. Typography

- **Display:** Charcoal, Chicago, Geneva, sans-serif
- **Body:** Geneva, Verdana, Helvetica Neue, sans-serif
- **Scale:** hero 28–42px Chicago/Charcoal, H2 22–28px, H3 18px, body 13–15px Geneva, meta/labels 12px platinum labels.
- **Weights:** display 700 Chicago bold; body 400; labels 700 with no added tracking.
- **Rules:** left-aligned UI headlines, body line-height 1.4–1.5; Chicago/Charcoal for headlines only, never body; never brutalist rawness.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E6DF` | Page ground |
| Surface | `#F2F0EB` | Cards, panels, wells |
| Ink | `#2B2B2B` | Headlines, body text |
| Muted | `#5F5B54` | Captions, meta, secondary text |
| Accent | `#0B5FFF` | Primary actions, highlights |
| Accent 2 | `#FF9F00` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Friendly density: 12px chrome padding, 22px title bars with stripes, menu bar 24px top

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Mac desktop: menu bar top (Apple + app menus + clock), window stack with striped titles, trash dock corner. Finder-style column views for content.

## 6. Borders

Platinum 1–2px frames; Aqua gel outlines; pinstripe rules in classic zones

## 7. Shadows

Soft Platinum drop (0 4px 16px rgba(0,0,0,0.18)); Aqua glow on default buttons

## 8. Radius

4px platinum windows; full pills on Aqua buttons

## 9. Buttons

Aqua gel pills (glossy highlight, blue fill) for defaults; platinum rounded rects otherwise. Pulsing default glow (gentle).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Platinum windows with pinstripe titles, close/zoom boxes left, content wells; Aqua sheets for dialogs.

## 11. Navigation

Menu bar navigation (File Edit View Special) + Finder sidebar with icon list; Sherlock-style search field.

## 12. Imagery

Happy Mac motifs, pixel landscapes, brushed-metal textures, Aqua droplets. Wholesome and glossy.

## 13. Icons

Classic Mac icon style: 32px, outlined, expressive, slightly 3D. Trash, folders with faces (tasteful).

## 14. Textures / Patterns

Pinstripes, brushed metal, Aqua gel highlights, linen (later era). One per project — no mixing eras.

## 15. Motion

Genie-adjacent scale pops, marching-ants selections, smooth Aqua pulses. Playful but smooth (ease-out 200ms).

Durations: instant–200ms with happy-mac playfulness. Easings: none or gentle ease-out; heavy springs forbidden.

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

- Mixing System 7, Platinum, and Aqua in one page
- Windows-style bevels
- Harsh black/navy chrome
- Modern flat minimalism
- Forgetting the menu bar — it's the soul

## 20. Quick-start snippet

```css
:root {
  --bg: #E8E6DF;
  --surface: #F2F0EB;
  --ink: #2B2B2B;
  --muted: #5F5B54;
  --accent: #0B5FFF;
  --accent-2: #FF9F00;
  --font-display: Charcoal, Chicago, Geneva, sans-serif;
  --font-body: Geneva, Verdana, Helvetica Neue, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Mac OS -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — 100 design styles for AI coding agents. File: `/designs/mac-os/DESIGN.md`.*
