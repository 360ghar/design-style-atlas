---
slug: hacker-aesthetic
name: "Hacker Aesthetic"
description: "Matrix-green paranoia: data rain, glitch type and security-theater chrome."
category: OS & Terminal
tags: [hacker, matrix, glitch]
related: [desktop-ui, windows-95, mac-os]
preview:
  bg: "#050505"
  surface: "#0D0F0D"
  ink: "#00FF41"
  muted: "#3D6B4F"
  accent: "#00FF41"
  accent2: "#FF003C"
  display: "Share Tech Mono, JetBrains Mono, monospace"
  body: "JetBrains Mono, IBM Plex Mono, monospace"
---

# Hacker Aesthetic — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the more paranoid-terminal interpretation.

## 1. Overall aesthetic

Hollywood terminal meets real opsec: cascading data rain (canvas, subtle), glitch headlines, hex dumps as texture, ACCESS GRANTED stamps. Green-on-black with red reserved for alarms. For security brands, CTFs, and developer tools with fangs.

**Three principles:**

- Green is calm, red is alarm — never mix their jobs
- Data as texture: logs, hex, packets at low opacity
- Glitch is punctuation, not prose — ration it

## 2. Typography

- **Display:** Share Tech Mono, JetBrains Mono, monospace
- **Body:** JetBrains Mono, IBM Plex Mono, monospace
- **Scale:** hero 28–44px terminal mono (Share Tech Mono), H2 22–28px, H3 18px, body 13–15px mono at 1.6 leading, meta/labels 12–13px mono.
- **Weights:** display 400–700 mono; body 400; labels 400–700 with 0–0.05em tracking (never poster blacks).
- **Rules:** monospace everywhere with matrix rain and log streams; left-aligned; never proportional marketing typography.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050505` | Page ground |
| Surface | `#0D0F0D` | Cards, panels, wells |
| Ink | `#00FF41` | Headlines, body text |
| Muted | `#3D6B4F` | Captions, meta, secondary text |
| Accent | `#00FF41` | Primary actions, highlights |
| Accent 2 | `#FF003C` | Alarms, destructive actions, threat pills only — never body text |

Keep contrast at 4.5:1 minimum for body text. Accent is for action and emphasis, never for long paragraphs.

## 4. Spacing

Ops density: log-stream rhythm, 12–13px mono, 16px panel padding, fullscreen dashboards

Use an 8px base unit (4px for dense product UI). Section padding 64–96px desktop / 40px mobile; card padding 16–24px; never let text touch a container edge.

## 5. Layout / Grid

Ops deck: status header (threat level, uptime), log-stream main + 320px side intel panels, alert ticker. 12-col grid, max-width 1440px, fullscreen density.

## 6. Borders

1px phosphor-green hairlines; dashed security perimeters; red alert frames

## 7. Shadows

Phosphor bloom: 0 0 12px rgba(0,255,65,0.25); red alert glow 0 0 12px rgba(255,0,60,0.35) on warnings

## 8. Radius

0–3px sharp; hex-clip badges for clearance vibes

## 9. Buttons

Terminal confirms: [ INITIATE ] bordered, hover floods green with black text; destructive floods red.

All buttons: 44px minimum touch target, visible focus ring (2px accent offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Intel panels: thin green borders, corner brackets ([ ] corners), header with classification stamp, mono data rows.

## 11. Navigation

Clearance bar: logo + threat-level pill + clock + encrypted-link icon; section links as path segments.

## 12. Imagery

Data-rain canvas, circuit traces, satellite night maps, glitch portraits. Green-graded everything.

## 13. Icons

Lock, shield, key, skull (once), signal glyphs — thin mono-line style with glow.

## 14. Textures / Patterns

Data rain, hex dumps, grid maps, CRT scanlines, digital rain vignettes.

## 15. Motion

Glitch bursts on load (300ms), typing logs, blinking cursors, scan sweeps. Kill all motion under reduced-motion.

Durations: micro instant–150ms, standard 200ms log-stream ticks. Easings: linear or steps() for rain and typing; no springs, no flourishes.

## 16. Interactions

- Hover states must be visible within 100ms on every clickable element.
- Focus-visible rings on all interactive elements (2px accent, 2px offset).
- Active/pressed states compress or invert (translate 1–2px, shadow collapse, or fill swap).
- Loading: skeletons matching the surface style; spinners only for indeterminate waits under 3s.

## 17. Responsive behavior

- Mobile (360–768px): single column, 16–20px page margins, 44px+ tap targets, sticky bottom CTA where conversion matters.
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

- Purple/blue hacker clichés without green discipline
- Unreadable micro-logs as sole content
- Glitch on every headline
- Fake progress that lies about security
- Light mode (this one lives in the dark)

## 20. Quick-start snippet

```css
:root {
  --bg: #050505;
  --surface: #0D0F0D;
  --ink: #00FF41;
  --muted: #3D6B4F;
  --accent: #00FF41;
  --accent-2: #FF003C;
  --font-display: Share Tech Mono, JetBrains Mono, monospace;
  --font-body: JetBrains Mono, IBM Plex Mono, monospace;
}
```

```html
<!-- Copy-paste starter: button + card in Hacker Aesthetic -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/hacker-aesthetic/DESIGN.md`.*
