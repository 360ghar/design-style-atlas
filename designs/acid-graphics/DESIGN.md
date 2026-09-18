---
slug: acid-graphics
name: "Acid Graphics"
description: "Distorted liquid chrome typography, high-voltage neon lime, tribal cyber sigils, and rave adrenaline."
category: Neon & Play
tags: [chrometype, rave, acid, cyber-tribal, subculture]
related: [liquid-chrome, y2k, cyberpunk]
preview:
  bg: "#08080A"
  surface: "#141419"
  ink: "#FFFFFF"
  muted: "#8E8E9F"
  accent: "#B6FF00"
  accent2: "#FF0055"
  display: "Syne, Impact, -apple-system, sans-serif"
  body: "Space Grotesk, Inter, sans-serif"
---

# Acid Graphics — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the cleaner, more authentic interpretation.

## 1. Overall aesthetic

Acid Graphics captures the subversive energy of underground rave culture, chrome tribalism, and contemporary anti-aesthetic street design. Pitch-black voids collide with electric fluorescent lime (#B6FF00) and laser magenta (#FF0055), distorted melting chrometype typography, barbed cyber sigils, and high-octane visual adrenaline.

**Three principles:**

- Subversive hyper-contrast: radioactive neon lime and hot pink against impenetrable obsidian
- Liquid chrometype and tribal warp: typography that stretches, melts, and flows like molten metal
- Raw rave energy: dense sticker-bombing, barbed wire accents, and heavy optical impact

## 2. Typography

- **Display:** Syne, Impact, -apple-system, sans-serif
- **Body:** Space Grotesk, Inter, sans-serif
- **Scale:** hero 56–96px distorted display, H2 32–48px, body 14–16px, rave badges 11–12px mono.
- **Weights:** display 800–900; body 500; extreme weight polarization.
- **Rules:** condensed, stretched, or warped display fonts; uppercase shout headings; high-contrast monospace microcopy.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#08080A` | Page ground |
| Surface | `#141419` | Cards, panels, containers |
| Ink | `#FFFFFF` | Headlines, primary text |
| Muted | `#8E8E9F` | Secondary copy, metadata, borders |
| Accent | `#B6FF00` | Primary action, key highlights |
| Accent 2 | `#FF0055` | Secondary moments, glows, tags |

Keep contrast at 4.5:1 minimum for body text against both Background and Surface. Radioactive Lime (#B6FF00) dominates as the core voltage spark; Hot Magenta (#FF0055) handles secondary accents.

## 4. Spacing

8px base; intentional claustrophobic density; overlapping elements with z-index stacking.

Use an 8px base unit (4px for dense micro-UI). Maintain generous visual breathing room and never let content touch container edges.

## 5. Layout / Grid

Multi-layered rave flyer composition: floating cyber sigils; diagonal banner strips; dense sticker badges; asymmetric content columns.

## 6. Borders

1.5px solid neon lime (#B6FF00); serrated or spiked border trims; double high-contrast rules.

## 7. Shadows

High-intensity neon edge glows: 0 0 20px #B6FF0088, 0 0 40px #B6FF0033; metallic chrome specular gleams.

## 8. Radius

0px to 4px for brutal edges; pills (9999px) for glowing neon pill badges; cyber-shield angled bevels.

## 9. Buttons

Fluorescent acid lime filled buttons with pitch-black text; metallic hover shine; cyber-barbed border frames.

## 10. Cards

Dark void tiles (#141419) framed with radioactive neon borders; chrome emblem badges; holographic gradient headers.

## 11. Navigation

Top ticker marquee bar with scrolling acid text; floating cyber-badge navigation icons.

## 12. Imagery

Liquid 3D chrome metallic blobs, distorted rave photography, iridescent chromatic aberration, 3D spiked cyber sigils.

## 13. Icons

Tribal barbwire motifs, four-point chrome stars, distorted smileys, biohazard and laser caution glyphs.

## 14. Textures

Subtle digital CRT scanlines, metallic noise, iridescent gradient sheens.

## 15. Motion

Hyper-kinetic micro-interactions: fast glow pulses, liquid distortion wave filters, glitch jitter on click. No strobing — keep flashes under 3 per second, never flash a full-screen area, and replace every pulse with a static state under `prefers-reduced-motion`.

## 16. Interactions

- Hover: predictable state changes honoring the design's physical metaphor.
- Active / Pressed: tactile feedback (recoil or depression).
- Focus: clear visible focus ring with 2px offset, using a ring that clears 3:1 on the adjacent ground — Ink when it clears, otherwise Background.
- Loading: skeletons or spinners matching the style's texture.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, preserved visual essence.
- Tablet (768–1100px): 2-column layouts, condensed navigation, proportional display type.
- Desktop (1100px+): full grid expression, max-width per layout section; type scale per §2 Typography.
- Never hide critical actions behind hover on touch devices. Test at 360px first.

## 18. Accessibility

- Contrast: body text 4.5:1 minimum, large display 3:1 minimum, verified against background and surface.
- Focus: always visible, never removed; skip-link to main content.
- Motion: honor `prefers-reduced-motion` — disable continuous loops and rapid oscillations.
- Touch: 44px targets, 8px gaps between adjacent targets.
- Screen readers: semantic landmarks, labeled nav, descriptive alt attributes.

## 19. What to avoid

- Calm corporate pastel tones (soft lavender, baby blue)
- Polite corporate-safe symmetry and wide calm margins
- Traditional academic serif typography
- Muted, low-contrast washed out grays
- Slow, polite, sleepy fade transitions

## 20. Quick-start snippet

```css
:root {
  --bg: #08080A;
  --surface: #141419;
  --ink: #FFFFFF;
  --muted: #8E8E9F;
  --accent: #B6FF00;
  --accent-2: #FF0055;
  --font-display: Syne, Impact, -apple-system, sans-serif;
  --font-body: Space Grotesk, Inter, sans-serif;
}
```

```html
<!-- Starter specimen: button + card in Acid Graphics -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Featured</p>
  <h3>Acid Graphics headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/acid-graphics/DESIGN.md`.*
