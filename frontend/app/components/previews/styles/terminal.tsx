import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function TerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Terminal Window Header Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `1px solid ${p.muted}33`,
            paddingBottom: 4 * s,
            fontSize: 6 * s,
            color: p.muted,
          }}
        >
          <div className="flex items-center" style={{ gap: 4 * s }}>
            <span style={{ color: p.accent2 }}>●</span>
            <span style={{ color: p.accent }}>●</span>
            <span style={{ color: p.ink }}>●</span>
            <span style={{ marginLeft: 4 * s, color: p.muted }}>zsh — 80x24 (ttys002)</span>
          </div>
          <span>UTF-8</span>
        </div>

        {/* CRT Phosphor Terminal Buffer */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.muted}44`,
            borderRadius: 4 * s,
            padding: `${10 * s}px ${12 * s}px`,
            boxShadow: `0 0 ${16 * s}px ${p.ink}15`,
            position: "relative",
          }}
        >
          {/* Active Command Line Session */}
          <div style={{ fontSize: 6.5 * s, lineHeight: 1.6 }}>
            <div>
              <span style={{ color: p.accent }}>dev@cluster</span>
              <span style={{ color: p.muted }}>:</span>
              <span style={{ color: p.accent2 }}>~/atlas/engine</span>
              <span style={{ color: p.ink }}>$</span> git status -s
            </div>
            <div style={{ color: p.muted }}>
              M frontend/app/components/previews/styles/terminal.tsx
            </div>
            <div style={{ marginTop: 2 * s }}>
              <span style={{ color: p.accent }}>dev@cluster</span>
              <span style={{ color: p.muted }}>:</span>
              <span style={{ color: p.accent2 }}>~/atlas/engine</span>
              <span style={{ color: p.ink }}>$</span> npm run test:perf
            </div>
            <div style={{ color: p.ink, fontWeight: 700 }}>
              ✓ 120/120 bespoke specs verified (42ms)
            </div>
            <div style={{ color: p.muted }}>
              [SYSTEM] All metrics nominal. Latency: 1.2ms.
            </div>

            {/* Next Prompt with Blinking Block Caret */}
            <div className="flex items-center" style={{ marginTop: 2 * s }}>
              <span style={{ color: p.accent }}>dev@cluster</span>
              <span style={{ color: p.muted }}>:</span>
              <span style={{ color: p.accent2 }}>~/atlas/engine</span>
              <span style={{ color: p.ink }}>$</span>&nbsp;
              <span
                className="pv-blink"
                style={{
                  display: "inline-block",
                  width: 5 * s,
                  height: 9 * s,
                  background: p.ink,
                }}
              />
            </div>
          </div>
        </div>

        {/* Monospace Status Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.muted}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>NORMAL</span>
          <span>utf-8[unix]</span>
          <span style={{ color: p.ink }}>100% · 24:80</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
