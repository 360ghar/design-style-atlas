import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MonochromePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const font = p.display;
  const s = large === true;
  const grain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='72' height='72' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";
  const steps = [p.ink, p.accent2, p.muted, p.surface, p.bg];

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: font }}
      >
        {/* §14 film grain, 5% achromatic */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: grain, opacity: 0.05 }} />

        {/* value-study nav */}
        <div
          className="flex shrink-0 items-center justify-between"
          style={{ padding: s ? "10px 18px" : "6px 12px", borderBottom: `1px solid ${p.ink}1A` }}
        >
          <div style={{ fontSize: s ? 9 : 6, fontWeight: 600, letterSpacing: "0.14em", color: p.muted }}>
            N°001 — VALUE STUDY
          </div>
          <div className="flex items-center" style={{ gap: s ? 12 : 8 }}>
            <span style={{ fontSize: s ? 9 : 6, fontWeight: 600, letterSpacing: "0.14em" }}>INDEX</span>
            <span style={{ fontSize: s ? 9 : 6, fontWeight: 600, letterSpacing: "0.14em", color: p.muted }}>PROOF</span>
            <span
              aria-hidden
              style={{ width: s ? 8 : 6, height: s ? 8 : 6, borderRadius: 99, background: p.ink, display: "inline-block" }}
            />
          </div>
        </div>

        {/* mini-scene */}
        <div className="grid min-h-0 flex-1" style={{ gridTemplateColumns: "1.08fr 1fr" }}>
          {/* hero */}
          <div className="flex min-h-0 min-w-0 flex-col justify-center" style={{ padding: s ? "18px 20px" : "10px 12px" }}>
            <div style={{ fontSize: s ? 9 : 6, fontWeight: 600, letterSpacing: "0.14em", color: p.muted }}>
              SINGLE-HUE DISCIPLINE
            </div>
            <div
              style={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 0.98,
                fontSize: s ? 38 : 21,
                marginTop: s ? 8 : 5,
              }}
            >
              BLACK
              <br />
              WHITE
              <br />
              <span style={{ color: p.muted }}>GRAY.</span>
            </div>
            <div style={{ fontSize: s ? 10.5 : 7, lineHeight: 1.45, color: p.accent2, marginTop: s ? 8 : 5, maxWidth: s ? 230 : 150 }}>
              Value contrast does all the work. Photography carries the color.
            </div>
            {/* grayscale swatch strip */}
            <div
              className="flex overflow-hidden"
              style={{ marginTop: s ? 12 : 8, borderRadius: 6, border: `1px solid ${p.ink}26`, maxWidth: s ? 250 : 160 }}
            >
              {steps.map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  title={c}
                  style={{
                    background: c,
                    flex: 1,
                    height: s ? 16 : 10,
                    borderLeft: i === 0 ? "none" : `1px solid ${p.ink}26`,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                fontSize: s ? 8 : 5.5,
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: p.muted,
                marginTop: s ? 7 : 4,
              }}
            >
              4.5:1 MIN — GRAYSCALE ONLY
            </div>
          </div>

          {/* inverted black chapter panel */}
          <div
            className="relative flex min-h-0 min-w-0 flex-col justify-center overflow-hidden"
            style={{ background: p.ink, color: p.bg, padding: s ? "18px 20px" : "10px 12px" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(${p.accent2} 1px, transparent 1.4px)`,
                backgroundSize: s ? "9px 9px" : "7px 7px",
                opacity: 0.5,
              }}
            />
            <div className="relative flex min-h-0 flex-col justify-center">
              <div style={{ fontSize: s ? 9 : 6, fontWeight: 600, letterSpacing: "0.14em", opacity: 0.62 }}>
                02 — INVERTED CHAPTER
              </div>
              <div style={{ fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.05, fontSize: s ? 21 : 12.5, marginTop: s ? 8 : 5 }}>
                Contrast
                <br />
                does the work.
              </div>
              <div style={{ fontSize: s ? 10 : 6.5, lineHeight: 1.5, opacity: 0.68, marginTop: s ? 7 : 4 }}>
                White type on black punctuates the long white page.
              </div>
              <div className="flex items-center" style={{ gap: s ? 8 : 5, marginTop: s ? 12 : 7 }}>
                <span
                  style={{
                    background: p.bg,
                    color: p.ink,
                    fontSize: s ? 9 : 6.5,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: s ? "8px 14px" : "5px 9px",
                    borderRadius: 6,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    whiteSpace: "nowrap",
                  }}
                >
                  VIEW PROOF →
                </span>
                <span
                  style={{
                    fontSize: s ? 9 : 6.5,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    padding: s ? "7px 12px" : "4px 8px",
                    borderRadius: 6,
                    border: `1px solid ${p.bg}55`,
                    whiteSpace: "nowrap",
                  }}
                >
                  INDEX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
