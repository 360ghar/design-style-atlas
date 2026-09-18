import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CollagePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = large ? 1.5 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        {/* cut-paper nav tabs */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            borderBottom: `2px solid ${p.ink}`,
            transform: "rotate(-0.5deg)",
            padding: `${6 * fs}px ${10 * fs}px`,
            margin: `0 -4px`,
          }}
        >
          <span
            style={{
              background: p.ink,
              color: p.surface,
              fontFamily: p.display,
              fontSize: 10 * fs,
              padding: `${2 * fs}px ${7 * fs}px`,
              transform: "rotate(-2deg)",
              boxShadow: `2px 2px 0 ${p.accent}`,
            }}
          >
            CUT/PASTE
          </span>
          <span className="flex items-center" style={{ gap: 5 * fs }}>
            {["Work", "Notes"].map((t, i) => (
              <span
                key={t}
                style={{
                  fontSize: 8.5 * fs,
                  fontWeight: 700,
                  border: `1.5px solid ${p.ink}`,
                  background: i === 0 ? p.bg : p.surface,
                  padding: `${1 * fs}px ${6 * fs}px`,
                  transform: `rotate(${i === 0 ? -3 : 2}deg)`,
                  boxShadow: `2px 2px 0 ${p.ink}`,
                }}
              >
                {t}
              </span>
            ))}
            <span
              style={{
                fontSize: 8.5 * fs,
                fontWeight: 800,
                background: p.accent,
                color: p.surface,
                borderRadius: 999,
                padding: `${2 * fs}px ${8 * fs}px`,
                transform: "rotate(2deg)",
                boxShadow: `2px 2px 0 ${p.ink}`,
              }}
            >
              Ship it ★
            </span>
          </span>
        </div>

        {/* layered torn hero cluster */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden" style={{ padding: `${10 * fs}px` }}>
          <div
            style={{
              position: "absolute",
              left: "7%",
              top: "10%",
              width: "36%",
              height: "62%",
              background: p.accent2,
              transform: "rotate(-5deg)",
              border: `2.5px solid ${p.surface}`,
              boxShadow: `4px 6px 0 ${p.ink}`,
              clipPath: "polygon(3% 8%, 95% 0, 100% 90%, 4% 100%, 0 45%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "8%",
              top: "24%",
              width: "32%",
              height: "56%",
              background: p.accent,
              transform: "rotate(4deg)",
              border: `2.5px solid ${p.surface}`,
              boxShadow: `4px 6px 0 ${p.ink}`,
              clipPath: "polygon(2% 6%, 97% 0, 100% 94%, 0 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "30%",
              bottom: "12%",
              fontFamily: p.display,
              fontSize: 13 * fs,
              color: p.surface,
              background: p.ink,
              borderRadius: "50%",
              width: 34 * fs,
              height: 34 * fs,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(10deg)",
              boxShadow: `2px 3px 0 ${p.accent}`,
            }}
          >
            ★
          </div>
          <div
            style={{
              position: "relative",
              background: p.surface,
              border: `2px solid ${p.ink}`,
              padding: `${8 * fs}px ${16 * fs}px`,
              transform: "rotate(-2deg)",
              boxShadow: `4px 6px 0 ${p.ink}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -8 * fs,
                left: "30%",
                width: "40%",
                height: 13 * fs,
                background: p.muted,
                opacity: 0.55,
                transform: "rotate(-4deg)",
                borderLeft: `1px dashed ${p.surface}`,
                borderRight: `1px dashed ${p.surface}`,
              }}
            />
            <div style={{ fontFamily: p.display, fontSize: 16 * fs, lineHeight: 1.05 }}>
              cut · paste · <i style={{ color: p.accent }}>ship</i>
            </div>
            <div style={{ fontSize: 9 * fs, color: p.muted, marginTop: 4 * fs }}>
              torn hero № 04 — taped, circled, sent
            </div>
          </div>
        </div>

        {/* tape footer */}
        <div
          className="flex items-center justify-between"
          style={{
            background: p.surface,
            borderTop: `2px solid ${p.ink}`,
            padding: `${5 * fs}px ${10 * fs}px`,
            fontSize: 8.5 * fs,
            fontWeight: 700,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 6 * fs }}>
            <span style={{ width: 44 * fs, height: 10 * fs, background: p.muted, opacity: 0.5, transform: "rotate(-6deg)", display: "inline-block" }} />
            <span style={{ color: p.muted }}>ISSUE 04 — WALL SHEET</span>
          </span>
          <span style={{ border: `2px solid ${p.accent}`, color: p.accent, borderRadius: 999, padding: `0 ${7 * fs}px`, transform: "rotate(-2deg)" }}>
            see wall →
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
