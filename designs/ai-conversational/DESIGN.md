---
slug: ai-conversational
name: "Conversational AI"
description: "Chat-first bubbles, streaming answers, and calm Claude-grade intelligence."
category: Product
tags: [minimal, calm, conversational]
related: [notion-inspired, product-minimalism, minimalism]
preview:
  bg: "#FAF9F5"
  surface: "#FFFFFF"
  ink: "#1F1E1D"
  muted: "#6F6E69"
  accent: "#D97757"
  accent2: "#5D8AA8"
  display: "Georgia, Times New Roman, serif"
  body: "Inter, Helvetica Neue, Arial, sans-serif"
---

# Conversational AI — DESIGN.md

> Give this file to an AI coding agent (Codex, Claude Code, Cursor, Windsurf) as the visual direction for a website. Follow every section. When in doubt, choose the bolder, more characteristic interpretation — never dilute it into generic clean UI.

## 1. Overall aesthetic

The AI-chat aesthetic is a quiet study: warm paper background, serif model voice, generous line length, and a composer bar that feels like good stationery. Streaming text with a soft blinking caret, artifact cards that slide in beside the thread, and zero chrome competing with the words. Intelligence you can read for hours.

**Three principles:**

- Words are the interface: typography quality beats decoration
- Streaming is alive: caret, fade-in lines, graceful artifact reveals
- Calm capability: suggest, never shout — starter prompts as gentle chips

## 2. Typography

- **Display:** Georgia, Times New Roman, serif
- **Body:** Inter, Helvetica Neue, Arial, sans-serif
- **Scale:** model prose 16–18px/1.7 serif, user 15px sans, headings 24–32px serif, composer 16px.
- **Weights:** 400–500 prose; 600 for headings; serif voice, sans UI — never swap them.
- **Rules:** thread max 720px centered-left; generous paragraph rhythm; code in mono blocks with copy buttons.

## 3. Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAF9F5` | Page ground |
| Surface | `#FFFFFF` | Cards, panels, wells |
| Ink | `#1F1E1D` | Headlines, body text |
| Muted | `#6F6E69` | Captions, meta, secondary text |
| Accent | `#D97757` | Primary actions, highlights |
| Accent 2 | `#5D8AA8` | Secondary emphasis, badges, special states |

Keep contrast at 4.5:1 minimum for body text. Terracotta #D97757 for send, active, and key highlights; slate-blue accent2 for artifacts and citations.

## 4. Spacing

Thread padding 24px; message gaps 20–28px; composer floating with 16px margins, 56px tall.

Use an 8px base unit (4px for dense product UI). Section padding generous; card padding comfortable; never let text touch a container edge.

## 5. Layout / Grid

Left sidebar (history, 260px collapsible) + centered thread + optional artifact panel right; mobile is thread + composer only.

## 6. Borders

Hairline #1F1E1D12 dividers; composer 1px border + soft shadow; artifact cards 1px + 12px radius.

## 7. Shadows

Composer float 0 8px 24px rgba(0,0,0,0.08); artifacts 0 4px 16px; messages flat (no bubbles war).

## 8. Radius

16–24px composer; 12px artifact cards and code blocks; pills for suggestion chips.

## 9. Buttons

Round terracotta send button (40px circle, arrow-up glyph); ghost icon buttons; suggestion chips outlined pill.

All buttons: 44px minimum touch target, visible focus ring (2px solid accent, 2px offset), pointer cursor, and a disabled state that is visibly disabled.

## 10. Cards

Artifact cards: title bar + rendered content + version/footer actions; code blocks dark with language tag + copy.

## 11. Navigation

Slim sidebar with search, new-chat CTA, grouped history, model picker top-center as quiet dropdown.

## 12. Imagery

Almost none — typographic product; empty states get a sun/asterisk mark and three starter prompts.

## 13. Icons

18px 1.5px line icons: plus, mic, arrow-up, copy, check, sliders; asterisk/sun motif for the brand.

## 14. Textures / Patterns

Warm paper flat; faint radial warmth behind composer; no grain, no gradients shouting.

## 15. Motion

Token fade-in per line (staggered 20ms); caret blink 1s; artifact slides 250ms; stop button morphs from send.

Durations: 150–250ms UI; streaming lines stagger; reduced-motion shows full text instantly. Easings: ease-out for UI, springs for playful emphasis; no harsh linear slides.

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

- Chat bubbles war (both sides boxed and colored)
- Dark terminal hacker clichés
- Auto-playing marketing carousels
- Tiny 13px body copy for long answers
- Hiding the stop/disclaimer controls

## 20. Quick-start snippet

```css
:root {
  --bg: #FAF9F5;
  --surface: #FFFFFF;
  --ink: #1F1E1D;
  --muted: #6F6E69;
  --accent: #D97757;
  --accent-2: #5D8AA8;
  --font-display: Georgia, Times New Roman, serif;
  --font-body: Inter, Helvetica Neue, Arial, sans-serif;
}
```

```html
<!-- Copy-paste starter: button + card in Conversational AI -->
<a class="ds-btn" href="#">Get started</a>
<article class="ds-card">
  <p class="ds-kicker">Kicker label</p>
  <h3>Card headline</h3>
  <p>One supporting sentence in body type.</p>
</article>
```

---

*Source: Design Styles — design styles for AI coding agents. File: `/designs/ai-conversational/DESIGN.md`.*
