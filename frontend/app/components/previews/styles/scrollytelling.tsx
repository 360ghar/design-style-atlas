import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function ScrollytellingPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const accent2 = (p as unknown as { accent2?: string }).accent2 ?? p.accent;
  const s = large
    ? { label: 8, title: 17, body: 9.5, tiny: 7.5, pad: 12, gap: 12, radius: 12 }
    : { label: 5.5, title: 10.5, body: 6, tiny: 5, pad: 8, gap: 8, radius: 10 };

  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
        }}
      >
        <style>{`@media (prefers-reduced-motion: reduce){.scrolly-anim{display:none !important}.scrolly-rm{display:inline !important}.scrolly-steps{transform:none !important}}`}</style>

        {/* Chapter progress nav: story bar */}
        <nav
          aria-label="Story chapters"
          style={{
            display: "flex",
            alignItems: "center",
            gap: s.gap,
            padding: `${large ? 8 : 5}px ${s.pad}px`,
            borderBottom: `1px solid ${p.muted}`,
          }}
        >
          <span
            style={{
              fontFamily: p.display,
              fontWeight: 800,
              fontSize: s.label,
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            THE DELTA, IN FIVE STEPS
          </span>
          <span style={{ flex: 1, height: 2, background: p.muted, opacity: 0.35, borderRadius: 2, position: "relative" }}>
            <span style={{ position: "absolute", inset: 0, width: "40%", background: p.accent, borderRadius: 2 }} />
          </span>
          <span style={{ fontSize: s.tiny, color: p.muted, fontWeight: 700, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
            CH 2/5 · 6 MIN READ
          </span>
        </nav>

        {/* Pinned hero + step stream */}
        <div
          className="grid grid-cols-1 @md:grid-cols-[1.05fr_1fr] flex-1 min-h-0 overflow-y-auto no-scrollbar"
          style={{
            gap: s.gap,
            padding: s.pad,
          }}
        >
          {/* Pinned graphic */}
          <figure
            aria-label="Pinned graphic, step 2 of 5"
            style={{
              margin: 0,
              background: p.surface,
              border: `1px solid ${p.muted}`,
              borderRadius: s.radius,
              boxShadow: `0 8px 30px color-mix(in srgb, ${p.ink} 12%, transparent)`,
              padding: s.pad,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(color-mix(in srgb, ${p.muted} 16%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, ${p.muted} 16%, transparent) 1px, transparent 1px)`,
                backgroundSize: "14px 14px",
              }}
            />
            <figcaption
              style={{
                position: "relative",
                fontSize: s.tiny,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: p.muted,
              }}
            >
              PINNED · STEP 2 <span className="scrolly-rm" style={{ display: "none", color: p.accent }}>· STATIC STEPS</span>
            </figcaption>
            <svg viewBox="0 0 120 70" role="img" aria-label="River channel filling as the story advances" style={{ position: "relative", flex: 1, width: "100%", minHeight: 0 }}>
              <path d="M6 56 Q 40 50, 58 34 T 114 16" fill="none" stroke={p.muted} strokeWidth="7" strokeLinecap="round" opacity="0.35" />
              <path className="scrolly-anim" d="M6 56 Q 40 50, 58 34 T 78 27" fill="none" stroke={p.accent} strokeWidth="7" strokeLinecap="round" />
              <path d="M6 56 Q 40 50, 58 34 T 114 16" fill="none" stroke={p.ink} strokeWidth="1.25" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="78" cy="27" r="5" fill={accent2} stroke={p.surface} strokeWidth="2" />
              <text x="86" y="29" fontSize="7" fontWeight="700" fill={p.ink} fontFamily={p.display}>
                42%
              </text>
            </svg>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: s.tiny, color: p.muted }}>Wetlands returned · count-up on entry</span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: s.tiny,
                  fontWeight: 700,
                  color: p.ink,
                  border: `1px solid ${p.muted}`,
                  borderRadius: 999,
                  padding: "2px 8px",
                }}
              >
                ↺ Replay
              </span>
            </div>
          </figure>

          {/* Step stream */}
          <ol className="scrolly-steps" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, minHeight: 0 }}>
            <li
              aria-current="step"
              style={{
                background: p.surface,
                border: `1px solid ${p.muted}`,
                borderLeft: `3px solid ${p.accent}`,
                borderRadius: 8,
                padding: large ? 10 : 6,
              }}
            >
              <div style={{ fontSize: s.tiny, fontWeight: 700, letterSpacing: "0.1em", color: p.accent }}>STEP 2 · ACTIVE</div>
              <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: s.title, lineHeight: 1.1, marginTop: 2 }}>
                The river moved first.
              </div>
              <div style={{ fontSize: s.body, color: p.muted, marginTop: 3, lineHeight: 1.45 }}>
                One insight: the channel shifted before the town did.
              </div>
            </li>
            <li
              style={{
                background: p.surface,
                border: `1px solid ${p.muted}`,
                borderRadius: 8,
                padding: large ? 10 : 6,
                opacity: 0.85,
              }}
            >
              <div style={{ fontSize: s.tiny, fontWeight: 700, letterSpacing: "0.1em", color: p.muted }}>STEP 3 · NEXT</div>
              <div style={{ fontFamily: p.display, fontWeight: 600, fontSize: s.body, marginTop: 2 }}>
                Then the fields followed the water.
              </div>
            </li>
          </ol>
        </div>

        {/* Scroll-dot footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: `${large ? 7 : 5}px ${s.pad}px`,
            borderTop: `1px solid ${p.muted}`,
          }}
        >
          <span style={{ display: "flex", gap: 4 }} aria-label="Progress: step 2 of 5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                style={{
                  width: i === 1 ? 14 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i < 2 ? p.accent : p.muted,
                  opacity: i < 2 ? 1 : 0.45,
                  outline: i === 1 ? `2px solid ${accent2}` : "none",
                  outlineOffset: 1,
                }}
              />
            ))}
          </span>
          <span className="scrolly-anim" style={{ fontSize: s.tiny, color: p.muted, letterSpacing: "0.08em" }}>SCROLL ↓</span>
          <span className="scrolly-rm" style={{ display: "none", fontSize: s.tiny, color: p.muted }}>STATIC · USE ← →</span>
          <span style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            <span style={{ fontSize: s.tiny, fontWeight: 700, border: `1px solid ${p.muted}`, borderRadius: 999, padding: "3px 9px", color: p.ink }}>← Prev</span>
            <span style={{ fontSize: s.tiny, fontWeight: 700, background: p.accent, color: p.surface, borderRadius: 999, padding: "3px 9px" }}>Next →</span>
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
