---
slug: anti-design
name: "Anti-Design"
description: "Deliberate wrongness: clashing type, broken grids and hostile charm."
category: Brutalist
tags: [experimental, raw, provocative]
related: [brutalism, neo-brutalism, playful-brutalism]
preview:
  bg: "#E8E8E8"
  surface: "#F2F2F2"
  ink: "#000000"
  muted: "#555555"
  accent: "#0000EE"
  accent2: "#FF0000"
  display: "Times New Roman, serif"
  body: "Arial, Helvetica, sans-serif"
---

# Anti-Design — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the uglier, more hostile interpretation — tastefulness is failure.

## 1. Overall aesthetic

Anti-design weaponizes ugliness: Arial body copy, misaligned blocks, clashing link blue on gray, autoplay-era chaos — deployed with total control. It signals insider credibility to designers and developers by refusing every trend. The wrongness must look intentional, never accidental.

**Three principles:**

- Break rules visibly and confidently — timid weirdness reads as a bug
- Default browser styling is a legitimate material
- Friction is branding: make visitors feel something

## 2. Typography

- **Display:** Times New Roman, serif
- **Body:** Arial, Helvetica, sans-serif
- **Scale:** hero deliberately clashing sizes, H2 oversized default Times, H3 20–24px, body 16px Arial default, meta/labels unstyled browser defaults.
- **Weights:** whatever the browser gives; display unstyled Times bold; body 400; never refined tracking.
- **Rules:** no alignment system — clash left, center, and justified on purpose; symmetry is the enemy; Comic Sans moments allowed.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E8E8` | Page ground |
| Surface | `#F2F2F2` | Cards, panels, wells |
| Ink | `#000000` | Headlines, body text |
| Muted | `#555555` | Captions, meta, secondary text |
| Accent | `#0000EE` | Primary actions, highlights |
| Accent 2 | `#FF0000` | Hit counters, warnings, alarming hovers |

Intentional clash colors outside tokens: highlight yellow `#FFFF00` (updated-stamps), marquee green `#008000` (tickers). Sparing, jarring, never themed.

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Broken rhythm on purpose: random-feeling margins (3px here, 47px there), overlapping blocks via negative margins, text slamming container edges then suddenly indented 60px. No base unit — consistency is surrender.

## 5. Layout / Grid

Colliding columns, overlapping absolutely-positioned blocks, horizontal scroll traps, footers in the middle. Tables for layout are period-correct.

## 6. Borders

Inconsistent on purpose: some beveled, some doubled, some missing; default fieldset looks welcome

## 7. Shadows

Browser-default or none; deliberate flatness except accidental bevels

## 8. Radius

0px — decoration is the enemy, even pretty corners

## 9. Buttons

Default gray beveled buttons, or blue underlined text links. Hover states may do nothing — or something alarming (invert, jump 2px, swap to red).

All buttons: keep browser-default visual size (44px minimum hit area via padding or a transparent overlay — friction is branding, not an accessibility defect); keyboard focus stays visible (2px outline); disabled is grayed + `not-allowed`.

## 10. Cards

Fieldsets with legends, beveled wells, bordered divs with clashing background tints. No system, on purpose.

## 11. Navigation

A list of blue underlined links, possibly with visited purple, possibly in a sidebar table cell. Hit counters welcome.

## 12. Imagery

Low-res GIFs, clip art, dithered photos, broken-image icons as decor. Compression artifacts are patina.

## 13. Icons

Unicode and emoji as icons (☞ ✖ ☠). No crafted icon set — that would be selling out.

## 14. Textures / Patterns

Tiled starfield backgrounds, gray bevel gradients, visible dither. Nostalgia through hostility.

## 15. Motion

Marquees, blinking text, cursor trails, alert() energy — but keep it performant and escapable. Parody, not malware.

Durations: none or jarring instant swaps; marquees and blinks encouraged. Easings: none; smoothness is surrender.

## 16. Interactions

- Hover may do nothing — or something alarming (invert, blink, jump). No 100ms polish rule; instant swaps only.
- Focus-visible stays: 2px outline so keyboard users survive the hostility.
- Active/pressed: invert, jump 1–2px, or collapse the bevel — physical and cheap.
- Loading: no skeletons or spinners — use "UNDER CONSTRUCTION" GIFs, hit counters, and blunt "wait..." text.

## 17. Responsive behavior

- Mobile (360–768px): single column that still misbehaves — edge-to-edge text, overlapping blocks, abrupt type shifts. Keep primary content and controls reachable at 360px: allow horizontal overflow only where the content intrinsically needs it, and never on nav or actions.
- Tablet (768–1100px): colliding columns persist; nav stays a raw link list, never condensed into a tidy hamburger.
- Desktop (1100px+): full collision — footers mid-page, absolutely-positioned overlaps, marquee traps. No max-width container.
- Touch: visual styling stays defiant, but every control keeps a 44px hit area (padding or a transparent overlay) so targets remain tappable; never hide the guestbook or hit counter — they are the conversion.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against both Background and Surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — replace loops, parallax, and scrubs with static final states plus manual steppers.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, alt text describing content (not decoration), status announcements for dynamic changes.

## 19. What to avoid

- Looking accidentally broken — commit fully or not at all
- Whitespace, alignment, or visual hierarchy (the forbidden trio)
- Modern SaaS patterns sneaking in
- Accessibility as an afterthought — even hostile design needs alt text and keyboard paths
- Hurting readability so much the message dies

## 20. Quick-start snippet

```css
:root {
  --bg: #E8E8E8;
  --surface: #F2F2F2;
  --ink: #000000;
  --muted: #555555;
  --accent: #0000EE;
  --accent-2: #FF0000;
  --font-display: Times New Roman, serif;
  --font-body: Arial, Helvetica, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Anti-Design -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/anti-design/DESIGN.md`.*
