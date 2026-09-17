import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function GrainNoisePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 14 : 9;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: "#131311", color: "#EDEAE2", fontFamily: "Inter, Helvetica Neue, sans-serif" }}
      >
        <style>{`@keyframes grain-drift{0%{background-position:0 0}50%{background-position:24px -18px}100%{background-position:0 0}}@media (prefers-reduced-motion:reduce){.grain-anim{animation:none!important}}`}</style>

        {/* grain overlay per §14 — fractalNoise 0.8 at 8% */}
        <div
          aria-hidden
          className="grain-anim pointer-events-none absolute inset-0"
          style={{ backgroundImage: GRAIN_URL, opacity: 0.08, animation: "grain-drift 6s steps(8) infinite" }}
        />
        {/* warm vignette + halation */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 0%, transparent 55%, rgba(0,0,0,0.45) 100%)" }} />

        {/* grain nav */}
        <div
          className="relative flex items-center justify-between"
          style={{ padding: `${large ? 10 : 7}px ${pad}px`, borderBottom: "1px solid rgba(237,234,226,0.12)" }}
        >
          <div className="flex items-center" style={{ gap: 7 }}>
            <span aria-hidden style={{ width: large ? 10 : 8, height: large ? 10 : 8, borderRadius: "50%", background: "#E8FF47", boxShadow: "0 0 12px rgba(232,255,71,0.55)" }} />
            <span style={{ fontFamily: "Inter Tight, Helvetica Neue, sans-serif", fontWeight: 700, fontSize: large ? 11 : 8, letterSpacing: "0.08em" }}>
              GRAIN/STOCK
            </span>
          </div>
          <div style={{ fontFamily: "monospace", fontSize: large ? 8.5 : 6, letterSpacing: "0.1em", color: "#8A867C" }}>
            ISO 400 · f/2.8
          </div>
        </div>

        {/* noisy hero texture panel */}
        <div className="relative flex-1" style={{ padding: `${large ? 12 : 8}px ${pad}px` }}>
          <div
            className="relative flex h-full flex-col justify-end overflow-hidden"
            style={{
              background: "#1C1C1A",
              border: "1px solid rgba(237,234,226,0.12)",
              borderRadius: 12,
              boxShadow: "0 1px 0 rgba(0,0,0,0.4), 0 12px 32px rgba(0,0,0,0.45)",
              padding: large ? 12 : 8,
            }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRAIN_URL, opacity: 0.1 }} />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(255,107,74,0.14), transparent 45%, rgba(0,0,0,0.5) 100%)" }}
            />
            <div className="relative">
              <div style={{ fontFamily: "monospace", fontSize: large ? 8 : 5.5, letterSpacing: "0.12em", color: "#E8FF47", fontWeight: 600 }}>
                35MM · FRAME 12A
              </div>
              <div
                style={{
                  fontFamily: "Inter Tight, Helvetica Neue, sans-serif",
                  fontWeight: 650,
                  fontSize: large ? 26 : 15,
                  lineHeight: 1.02,
                  marginTop: 4,
                }}
              >
                Shot on feeling.
              </div>
              <div style={{ fontSize: large ? 9.5 : 6.5, color: "#8A867C", marginTop: 4 }}>Warm blacks · soft highlights · always grain</div>
              <div className="flex items-center" style={{ gap: 6, marginTop: large ? 10 : 7 }}>
                <span
                  style={{
                    background: "#E8FF47",
                    color: "#131311",
                    fontWeight: 700,
                    fontSize: large ? 9 : 6,
                    padding: `${large ? 6 : 4}px ${large ? 11 : 8}px`,
                    borderRadius: 999,
                  }}
                >
                  Book a shoot
                </span>
                <span style={{ fontSize: large ? 9 : 6, color: "#EDEAE2", border: "1px solid rgba(237,234,226,0.12)", padding: `${large ? 6 : 4}px ${large ? 11 : 8}px`, borderRadius: 999 }}>
                  View journal →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* spec footer */}
        <div
          className="relative flex items-center justify-between"
          style={{
            padding: `${large ? 8 : 6}px ${pad}px`,
            borderTop: "1px solid rgba(237,234,226,0.12)",
            fontFamily: "monospace",
            fontSize: large ? 8 : 5.5,
            letterSpacing: "0.1em",
            color: "#8A867C",
          }}
        >
          <span>GRAIN 08% · WARM BLK</span>
          <span style={{ color: "#FF6B4A" }}>● REC</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
