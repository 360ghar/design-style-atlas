import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const DISPLAY = "Helvetica Neue, Georgia, serif";
const BODY = "Helvetica Neue, Verdana, sans-serif";

export function SkeuomorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const navFs = large ? 8 : 5.5;
  const headFs = large ? 15 : 10;
  const bodyFs = large ? 9 : 6.5;
  const pad = large ? 10 : 6;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: "linear-gradient(180deg, rgba(255,255,255,.12), rgba(0,0,0,.55)), #2B2B2B", fontFamily: BODY }}>
        {/* Brushed-metal toolbar nav */}
        <div
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(0,0,0,.06) 0 1px, transparent 1px 3px), linear-gradient(180deg, rgba(255,255,255,.9) 0%, #F5F1E8 30%, #7A766E 50%, #F5F1E8 56%, #F5F1E8 100%)",
            borderBottom: "1px solid rgba(0,0,0,.55)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.6), 0 2px 6px rgba(0,0,0,.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "7px 10px" : "4px 7px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: large ? 7 : 4 }}>
            <span style={{ width: large ? 9 : 6, height: large ? 9 : 6, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #fff, #7A766E 65%, #2B2B2B)", boxShadow: "inset 0 -1px 2px rgba(0,0,0,.5), 0 1px 0 rgba(255,255,255,.6)" }} />
            <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: navFs, letterSpacing: "0.18em", color: "#2B2B2B", textShadow: "0 1px 0 rgba(255,255,255,.6)" }}>
              AURA&middot;88
            </span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: large ? 8 : 5, fontSize: navFs, fontWeight: 600, letterSpacing: "0.14em", color: "#2B2B2B", textShadow: "0 1px 0 rgba(255,255,255,.6)" }}>
            <span>TUNER</span>
            <span style={{ opacity: 0.55 }}>TAPE</span>
            <span style={{ width: large ? 7 : 5, height: large ? 7 : 5, borderRadius: "50%", background: "#0B5FFF", boxShadow: "0 0 8px #0B5FFF, inset 0 1px 1px rgba(255,255,255,.7)", border: "1px solid rgba(0,0,0,.4)" }} />
          </span>
        </div>

        {/* Leather hero panel with stitching + realistic switch */}
        <div style={{ padding: large ? 10 : 6, paddingBottom: large ? 6 : 4 }}>
          <div
            style={{
              background:
                "radial-gradient(circle at 30% 15%, rgba(255,255,255,.1), transparent 55%), repeating-linear-gradient(45deg, rgba(255,255,255,.025) 0 2px, transparent 2px 4px), linear-gradient(180deg, rgba(255,255,255,.07), rgba(0,0,0,.45)), #2B2B2B",
              borderRadius: 8,
              padding: 4,
              boxShadow: "0 8px 24px rgba(0,0,0,.45), 0 2px 6px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.15)",
            }}
          >
            <div style={{ border: "2px dashed #C8A951", borderRadius: 6, padding: pad, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <div>
                <div style={{ fontSize: navFs, fontWeight: 600, letterSpacing: "0.22em", color: "#C8A951" }}>STEREO &middot; FM 88.1</div>
                <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: headFs, lineHeight: 1.1, color: "#F5F1E8", textShadow: "0 2px 4px rgba(0,0,0,.6)" }}>
                  Warm analog sound.
                </div>
                <div style={{ fontSize: bodyFs, color: "rgba(245,241,232,.72)", marginTop: 2 }}>Machined dials, felt wells, real travel.</div>
              </div>
              {/* Realistic toggle switch, ON */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: navFs, fontWeight: 600, letterSpacing: "0.18em", color: "#C8A951" }}>ON</span>
                <div
                  style={{
                    width: large ? 58 : 42,
                    height: large ? 28 : 20,
                    borderRadius: 999,
                    background: "linear-gradient(180deg, rgba(0,0,0,.75), rgba(0,0,0,.35)), #2B2B2B",
                    border: "1px solid #7A766E",
                    boxShadow: "inset 0 2px 6px rgba(0,0,0,.8), inset 0 -1px 0 rgba(255,255,255,.25), 0 1px 0 rgba(255,255,255,.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: 2,
                  }}
                >
                  <div
                    style={{
                      width: large ? 22 : 15,
                      height: large ? 22 : 15,
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 30%, #ffffff, #F5F1E8 42%, #7A766E 78%, #2B2B2B)",
                      boxShadow: "0 2px 5px rgba(0,0,0,.55), inset 0 -2px 4px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.7)",
                      border: "1px solid rgba(0,0,0,.5)",
                    }}
                  />
                </div>
                <span style={{ width: large ? 26 : 18, height: 3, borderRadius: 2, background: "#0B5FFF", boxShadow: "0 0 8px #0B5FFF" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stitched CTA footer with glossy candy button */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: large ? 10 : 6, padding: large ? "8px 10px" : "5px 7px", borderTop: "1px solid rgba(0,0,0,.6)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.12)", background: "linear-gradient(180deg, rgba(0,0,0,.35), transparent), #2B2B2B" }}>
          <span
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,.55) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,.35) 100%), #0B5FFF",
              color: "#fff",
              fontWeight: 700,
              fontSize: bodyFs,
              borderRadius: 999,
              padding: large ? "7px 16px" : "4px 11px",
              border: "1px solid rgba(0,0,0,.55)",
              boxShadow: "0 1px 0 rgba(255,255,255,.7), 0 4px 10px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.5), inset 0 -2px 6px rgba(0,0,0,.25)",
              textShadow: "0 1px 2px rgba(0,0,0,.5)",
              whiteSpace: "nowrap",
            }}
          >
            Power on
          </span>
          <span style={{ fontSize: navFs, fontWeight: 600, letterSpacing: "0.16em", color: "#C8A951" }}>44.1 kHz &middot; VU READY</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
