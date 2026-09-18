// Fixture: the hard-offset Tailwind syntax the report itself recommends must
// not be flagged as blurred, and a compliant border width must pass.
export function HardShadow() {
  return <div className="shadow-[4px_4px_0_#111111] border-2">Hard offset shadow</div>;
}
