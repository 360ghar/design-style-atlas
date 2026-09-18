---
slug: dreamcore
name: "Dreamcore"
description: "Liminal nostalgia: familiar places, hazy memory and VHS softness."
category: Experimental
tags: [dreamcore, liminal, nostalgic]
related: [retro-internet, vaporwave, surrealism]
preview:
  bg: "#E8E4D8"
  surface: "#F2EEE2"
  ink: "#3B3830"
  muted: "#6A655A"
  accent: "#5B8DD9"
  accent2: "#E8A0BF"
  display: "Georgia, Times New Roman, serif"
  body: "Verdana, Georgia, serif"
---

# Dreamcore — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the hazier, more liminal-nostalgia interpretation.

## 1. Overall aesthetic

A half-remembered afternoon: empty playgrounds, mall corridors, birthday-party photos with timestamps, VHS haze. Comfort and unease in equal measure. For music, art, fashion, and memory brands.

**Three principles:**

- Familiar + slightly wrong = the feeling
- Timestamps and captions anchor the haze
- Wander, don't funnel — exploration over conversion

## 2. Typography

- **Display:** Georgia, Times New Roman, serif
- **Body:** Verdana, Georgia, serif
- **Scale:** hero 36–60px Georgia/Times hazy headlines, H2 26–34px, H3 20px, body 15–17px, meta/labels 12–13px sleepy labels.
- **Weights:** display 400–600 hazy; body 400; labels 500 with soft tracking.
- **Rules:** softly doubled headlines in washed empty-room scenes; clouds and old-web artifacts; never sharp clarity.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#E8E4D8` | Page ground |
| Surface | `#F2EEE2` | Cards, panels, wells |
| Ink | `#3B3830` | Headlines, body text |
| Muted | `#6A655A` | Captions, meta, secondary text |
| Accent | `#5B8DD9` | Primary actions, highlights |
| Accent 2 | `#E8A0BF` | Secondary moments, gradients, glows |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Wandering pace: meandering image rivers, 100px+ pauses, caption fragments

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Memory walk, max-width 1100px centered, 12-column grid desktop / single column mobile:
- Hero: full-bleed hazy image 60–70vh, centered headline + timestamp caption, vignette overlay.
- Photo river: staggered 2–3 column masonry desktop, single wandering column mobile, 24px gaps, 100px+ pauses between clusters.
- Rest-stop chapters: centered 640px text wells on Surface, 64px top/bottom padding.
- Closer: full-width guestbook panel, centered form.

## 6. Borders

Memory frames: white polaroid-ish mats, soft vignettes, timestamp captions

## 7. Shadows

Hazy: 0 8px 30px warm-gray/20 + vignette darkening on imagery

## 8. Radius

Soft memory: 12px rounded photos, hazy vignettes

## 9. Buttons

Keepsake buttons: soft fills, timestamp labels; hover sharpens (memory focuses).

All buttons: 44px minimum touch target, visible focus ring (2px accent offset, or a ring that clears 3:1 on the button ground — Ink when it clears, otherwise Background), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Memory cards: hazy photo + timestamp + fragment caption. No CTAs inside memories.

## 11. Navigation

Faint bar: small mark, wander links, date readout. Barely there, like memory.

## 12. Imagery

Liminal photography: empty public spaces, party candids, VHS stills. Hazy warm grade, timestamps.

## 13. Icons

Stars, eyes, doors, sun-faded glyphs — memory-symbols, soft.

## 14. Textures / Patterns

VHS grain 10%, light leaks, dust, vignette. Haze is structural.

## 15. Motion

Drifting: slow Ken Burns, haze shifts, timestamp flickers (rare). Sleepy 800ms+ timings.

Durations: micro 250–400ms, standard 600–1000ms slow loops. Easings: sleepy ease-in-out; snappy motion forbidden.

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

- Sharp corporate clarity
- Bright saturated energy
- Funnels and urgency
- Explaining the feeling
- Fast motion (dreams don't hurry)

## 20. Quick-start snippet

```css
:root {
  --bg: #E8E4D8;
  --surface: #F2EEE2;
  --ink: #3B3830;
  --muted: #6A655A;
  --accent: #5B8DD9;
  --accent-2: #E8A0BF;
  --font-display: Georgia, Times New Roman, serif;
  --font-body: Verdana, Georgia, serif;
}
```

```html
<!-- Copy-paste starter: button + card in Dreamcore -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/dreamcore/DESIGN.md`.*
