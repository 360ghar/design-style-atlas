import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function IllustrationLedPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.7 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          overflow: "hidden",
        }}
      >
        {/* playful nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${7 * s}px ${14 * s}px`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 5 * s }}>
            <span
              style={{
                width: 16 * s,
                height: 16 * s,
                borderRadius: "50% 46% 52% 48%",
                background: p.accent,
                border: `1.5px solid ${p.ink}`,
                position: "relative",
                display: "inline-block",
              }}
            >
              <span style={{ position: "absolute", top: "32%", left: "26%", width: "12%", height: "14%", background: p.surface, borderRadius: "50%" }} />
              <span style={{ position: "absolute", top: "32%", right: "26%", width: "12%", height: "14%", background: p.surface, borderRadius: "50%" }} />
            </span>
            <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: 8.5 * s }}>Pip & Co.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 7 * s, fontSize: 6.5 * s, color: p.muted, fontWeight: 600 }}>
            <span>Chapters</span>
            <span>Characters</span>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                borderRadius: 999,
                padding: `${3.5 * s}px ${9 * s}px`,
                border: `1.5px solid ${p.ink}`,
                fontSize: 6.5 * s,
              }}
            >
              Start the story
            </span>
          </div>
        </div>

        {/* hero scene */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 10 * s,
            alignItems: "center",
            padding: `0 ${14 * s}px`,
            minHeight: 0,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 6 * s, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: p.accent2 }}>
              Chapter one · saving
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: 19 * s,
                lineHeight: 1.04,
                marginTop: 4 * s,
              }}
            >
              Meet Pip, your money buddy.
            </div>
            <div style={{ fontSize: 7.5 * s, color: p.muted, marginTop: 4 * s, lineHeight: 1.45 }}>
              Big ideas, drawn small. One picture per lesson.
            </div>
            <div style={{ display: "flex", gap: 5 * s, marginTop: 7 * s }}>
              <span
                style={{
                  background: p.accent,
                  color: p.surface,
                  borderRadius: 12,
                  padding: `${5 * s}px ${12 * s}px`,
                  fontWeight: 700,
                  fontSize: 7 * s,
                  border: `1.5px solid ${p.ink}`,
                  boxShadow: `0 3px 0 ${p.ink}`,
                }}
              >
                Read chapter 1
              </span>
              <span
                style={{
                  background: p.surface,
                  color: p.ink,
                  borderRadius: 12,
                  padding: `${5 * s}px ${10 * s}px`,
                  fontWeight: 700,
                  fontSize: 7 * s,
                  border: `1.5px solid ${p.ink}`,
                }}
              >
                Meet the cast
              </span>
            </div>
          </div>

          {/* spot-illustration scene: CSS shapes only */}
          <div
            style={{
              position: "relative",
              background: p.surface,
              border: `1.5px solid ${p.ink}`,
              borderRadius: 18,
              height: large ? 148 : 92,
              overflow: "hidden",
              boxShadow: "0 12px 32px rgba(43,38,32,0.12)",
            }}
          >
            {/* sun */}
            <div
              className="pv-float"
              style={{
                position: "absolute",
                top: 8 * s,
                right: 10 * s,
                width: 22 * s,
                height: 22 * s,
                borderRadius: "50%",
                background: p.accent,
                border: `1.5px solid ${p.ink}`,
              }}
            />
            {/* cloud */}
            <div style={{ position: "absolute", top: 12 * s, left: 10 * s, display: "flex", alignItems: "center" }}>
              <span style={{ width: 16 * s, height: 11 * s, background: p.bg, border: `1.5px solid ${p.ink}`, borderRadius: 999, display: "inline-block" }} />
              <span style={{ width: 11 * s, height: 11 * s, background: p.bg, border: `1.5px solid ${p.ink}`, borderRadius: "50%", marginLeft: -6 * s, display: "inline-block" }} />
            </div>
            {/* hills */}
            <div style={{ position: "absolute", bottom: -14 * s, left: -10 * s, width: "70%", height: 34 * s, background: p.accent2, border: `1.5px solid ${p.ink}`, borderRadius: "50%", opacity: 0.9 }} />
            <div style={{ position: "absolute", bottom: -16 * s, right: -12 * s, width: "70%", height: 36 * s, background: p.surface, border: `1.5px solid ${p.ink}`, borderRadius: "50%" }} />
            {/* Pip character */}
            <div
              className="pv-float"
              style={{
                position: "absolute",
                bottom: 10 * s,
                left: "34%",
                width: 44 * s,
                height: 52 * s,
                background: p.surface,
                border: `2px solid ${p.ink}`,
                borderRadius: "48% 52% 50% 50% / 55% 55% 45% 45%",
              }}
            >
              <div style={{ position: "absolute", top: "28%", left: "24%", width: "13%", height: "9%", background: p.ink, borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: "28%", right: "24%", width: "13%", height: "9%", background: p.ink, borderRadius: "50%" }} />
              <span style={{ position: "absolute", top: "42%", left: "30%", width: "8%", height: "6%", background: p.accent2, borderRadius: "50%" }} />
              <span style={{ position: "absolute", top: "42%", right: "30%", width: "8%", height: "6%", background: p.accent2, borderRadius: "50%" }} />
              <div style={{ position: "absolute", bottom: "22%", left: "32%", right: "32%", height: "12%", background: p.accent, borderRadius: "0 0 40px 40px", border: `1px solid ${p.ink}` }} />
              {/* book */}
              <div style={{ position: "absolute", bottom: "8%", left: "18%", right: "18%", height: "16%", background: p.surface, border: `1.5px solid ${p.ink}`, borderRadius: 3 }} />
            </div>
            {/* spot stars */}
            <span style={{ position: "absolute", top: 30 * s, right: 14 * s, color: p.accent2, fontSize: 9 * s, fontWeight: 700 }}>✦</span>
            <span style={{ position: "absolute", top: 20 * s, left: "44%", color: p.accent, fontSize: 7 * s, fontWeight: 700 }}>●</span>
          </div>
        </div>

        {/* caption CTA footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8 * s,
            margin: `${6 * s}px ${14 * s}px ${8 * s}px`,
            background: p.surface,
            border: `1.5px solid ${p.ink}`,
            borderRadius: 12,
            padding: `${5 * s}px ${9 * s}px`,
          }}
        >
          <span style={{ fontSize: 6.5 * s, color: p.muted }}>
            <span style={{ color: p.ink, fontWeight: 700 }}>Fig. 01 — </span>
            Pip packs coins for the trip. Next: the budget forest →
          </span>
          <span style={{ fontSize: 6.5 * s, fontWeight: 700, color: p.accent, whiteSpace: "nowrap" }}>Keep reading →</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
