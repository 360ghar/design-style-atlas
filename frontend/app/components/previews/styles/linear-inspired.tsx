import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const CYCLES = [
  { tag: "CYCLE 14", title: "Velocity rising", stat: "+32% closed", kbd: "C" },
  { tag: "TRIAGE", title: "Inbox zero", stat: "12 open", kbd: "⌘K" },
  { tag: "SHIPPED", title: "Aura release", stat: "v4.2 live", kbd: "?" },
];

export function LinearInspiredPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  const fs = large ? 1.6 : 1;
  const BG = p.bg;
  const SURFACE = p.surface;
  const INK = p.ink;
  const MUTED = p.muted;
  const ACCENT = p.accent;
  const ACCENT2 = p.accent2;
  const HAIR = `${p.ink}14`;
  const FONT = p.display;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: BG, color: INK, fontFamily: FONT, overflow: "hidden" }}
      >
        {/* command nav */}
        <div
          className="flex items-center"
          style={{
            gap: 8 * fs,
            padding: `${7 * fs}px ${12 * fs}px`,
            borderBottom: `1px solid ${HAIR}`,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 5 * fs }}>
            <span
              style={{
                width: 9 * fs,
                height: 9 * fs,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
                boxShadow: `0 0 12px rgba(94,106,210,0.55)`,
              }}
            />
            <span style={{ fontSize: 8 * fs, fontWeight: 600, letterSpacing: "-0.01em" }}>Linear</span>
          </span>
          <span style={{ fontSize: 6.5 * fs, color: MUTED, display: "flex", gap: 7 * fs }}>
            <span>Product</span>
            <span>Changelog</span>
            <span>Customers</span>
          </span>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 * fs }}>
            <span
              style={{
                fontSize: 6.5 * fs,
                color: MUTED,
                border: `1px solid ${HAIR}`,
                background: SURFACE,
                borderRadius: 6,
                padding: `${3 * fs}px ${8 * fs}px`,
                display: "flex",
                alignItems: "center",
                gap: 4 * fs,
              }}
            >
              ⌘K
            </span>
            <span
              style={{
                fontSize: 6.5 * fs,
                fontWeight: 600,
                background: ACCENT,
                color: INK,
                borderRadius: 6,
                padding: `${4 * fs}px ${10 * fs}px`,
              }}
            >
              Sign up
            </span>
          </span>
        </div>

        {/* glow hero */}
        <div
          className="flex flex-col items-center text-center"
          style={{
            padding: `${(large ? 18 : 10) * 1}px ${(large ? 28 : 16) * 1}px ${8 * fs}px`,
            background: `radial-gradient(ellipse 60% 90% at 50% -10%, rgba(94,106,210,0.35), transparent 70%), radial-gradient(ellipse 40% 60% at 50% 0%, rgba(142,138,255,0.18), transparent 70%)`,
          }}
        >
          <div
            style={{
              fontSize: 6.5 * fs,
              fontWeight: 500,
              color: MUTED,
              border: `1px solid ${HAIR}`,
              background: SURFACE,
              borderRadius: 999,
              padding: `${3 * fs}px ${10 * fs}px`,
            }}
          >
            ✦&nbsp; Linear method — now in beta
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: (large ? 26 : 15) * 1,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginTop: 7 * fs,
            }}
          >
            Issue tracking,
            <br />
            minus the drag.
          </div>
          <div style={{ fontSize: 7.5 * fs, color: MUTED, marginTop: 5 * fs, maxWidth: large ? 420 : 260 }}>
            Cycles, triage and ⌘K command bar. Built for teams that ship.
          </div>
          <div style={{ display: "flex", gap: 6 * fs, marginTop: 8 * fs }}>
            <span
              style={{
                background: ACCENT,
                boxShadow: "0 0 80px rgba(94,106,210,0.25), 0 8px 30px rgba(0,0,0,0.5)",
                borderRadius: 6,
                fontSize: 7 * fs,
                fontWeight: 600,
                padding: `${5 * fs}px ${13 * fs}px`,
              }}
            >
              Start building
            </span>
            <span
              style={{
                border: `1px solid ${HAIR}`,
                background: SURFACE,
                borderRadius: 6,
                fontSize: 7 * fs,
                fontWeight: 500,
                color: INK,
                padding: `${5 * fs}px ${13 * fs}px`,
              }}
            >
              ⌘K&nbsp; Live demo
            </span>
          </div>
        </div>

        {/* cycle cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 7 * fs,
            padding: `${8 * fs}px ${12 * fs}px 0`,
          }}
        >
          {CYCLES.map((c) => (
            <div
              key={c.tag}
              style={{
                background: SURFACE,
                border: `1px solid ${HAIR}`,
                borderTop: `1px solid rgba(142,138,255,0.28)`,
                borderRadius: 8,
                padding: `${7 * fs}px ${8 * fs}px`,
                textAlign: "left",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 5.5 * fs, fontWeight: 600, letterSpacing: "0.08em", color: ACCENT2 }}>
                  {c.tag}
                </span>
                <span
                  style={{
                    fontSize: 5.5 * fs,
                    color: MUTED,
                    border: `1px solid ${HAIR}`,
                    borderRadius: 4,
                    padding: `1px ${4 * fs}px`,
                  }}
                >
                  {c.kbd}
                </span>
              </div>
              <div style={{ fontSize: 7.5 * fs, fontWeight: 600, marginTop: 4 * fs }}>{c.title}</div>
              <div style={{ fontSize: 6.5 * fs, color: MUTED, marginTop: 2 * fs }}>{c.stat}</div>
            </div>
          ))}
        </div>

        {/* shortcut footer */}
        <div
          className="flex items-center"
          style={{
            marginTop: "auto",
            gap: 8 * fs,
            padding: `${6 * fs}px ${12 * fs}px`,
            borderTop: `1px solid ${HAIR}`,
            background: SURFACE,
            fontSize: 6 * fs,
            color: MUTED,
          }}
        >
          <span><b style={{ color: INK, fontWeight: 600 }}>C</b>&nbsp; new issue</span>
          <span><b style={{ color: INK, fontWeight: 600 }}>⌘K</b>&nbsp; command</span>
          <span><b style={{ color: INK, fontWeight: 600 }}>?</b>&nbsp; shortcuts</span>
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 * fs }}>
            <span style={{ width: 5 * fs, height: 5 * fs, borderRadius: 999, background: ACCENT2, boxShadow: "0 0 8px rgba(142,138,255,0.8)" }} />
            All systems operational
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
