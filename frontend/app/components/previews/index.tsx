import type { ComponentType } from "react";
import type { StyleMeta } from "../../lib/styles";
import { STYLE_DEFINITIONS } from "../../lib/style-definitions";
import type { PreviewThemeMode } from "../../lib/preview-theme";
import { resolvePreviewTheme } from "../../lib/preview-theme";
import {
  MinimalismPreview,
  UltraMinimalismPreview,
  SwissDesignPreview,
  JapaneseMinimalismPreview,
  ScandinavianPreview,
  MonochromePreview,
  EditorialMinimalismPreview,
  LuxuryMinimalismPreview,
  ProductMinimalismPreview,
  FunctionalMinimalismPreview,
} from "./batch1-minimal";
import {
  BrutalismPreview,
  NeoBrutalismPreview,
  PlayfulBrutalismPreview,
  CorporateBrutalismPreview,
  EditorialBrutalismPreview,
  MinimalBrutalismPreview,
  ColorfulBrutalismPreview,
  AntiDesignPreview,
  PostBrutalismPreview,
  IndustrialBrutalismPreview,
} from "./batch2-brutalist";
import {
  MaximalismPreview,
  PlayfulMaximalismPreview,
  EditorialMaximalismPreview,
  PsychedelicMaximalismPreview,
  TypographyMaximalismPreview,
  ColorMaximalismPreview,
  DigitalMaximalismPreview,
  ChaosDesignPreview,
  LuxuryMaximalismPreview,
  GraphicMaximalismPreview,
} from "./batch3-maximalist";
import {
  EditorialMagazinePreview,
  NewspaperPreview,
  FashionEditorialPreview,
  PosterInspiredPreview,
  SwissPosterPreview,
  BauhausPreview,
  MemphisPreview,
  Y2KPreview,
  RetroInternetPreview,
  WebcorePreview,
  DesktopUIPreview,
  Windows95Preview,
  MacOSPreview,
  TerminalPreview,
  HackerAestheticPreview,
  CyberpunkPreview,
  FuturismPreview,
  SciFiUIPreview,
} from "./batch4-editorial-retro";
import {
  GlassmorphismPreview,
  NeumorphismPreview,
  ClaymorphismPreview,
  SkeuomorphismPreview,
  BentoGridPreview,
  CardBasedUIPreview,
  CorporateSaaSPreview,
  StripeInspiredPreview,
  LinearInspiredPreview,
  NotionInspiredPreview,
  GradientDesignPreview,
  AuroraGlowPreview,
  HolographicPreview,
  LiquidChromePreview,
  ThreeDWebDesignPreview,
  ImmersivePreview,
  ScrollytellingPreview,
  ParallaxPreview,
} from "./batch5-soft-product";
import {
  KineticTypographyPreview,
  TypographyFirstPreview,
  VariableFontsPreview,
  OversizedTypographyPreview,
  CollagePreview,
  ScrapbookPreview,
  ZinePunkPreview,
  RisographPreview,
  HalftonePreview,
  GrainNoisePreview,
  HandDrawnPreview,
  IllustrationLedPreview,
  CorporateMemphisPreview,
  OrganicBiophilicPreview,
  EcoSustainablePreview,
  JapandiPreview,
  WabiSabiPreview,
  ArtDecoPreview,
  ArtNouveauPreview,
  MidCenturyModernPreview,
} from "./batch6-type-cut";
import {
  SeventiesRetroPreview,
  EightiesRetroPreview,
  NinetiesRetroPreview,
  VaporwavePreview,
  SynthwavePreview,
  Pixel8BitPreview,
  GamingUIPreview,
  ComicPopArtPreview,
  GraffitiStreetwearPreview,
  QuietLuxuryPreview,
  SurrealismPreview,
  DreamcorePreview,
  LiminalWeirdcorePreview,
  GenerativeAlgorithmicPreview,
} from "./batch7-decades-neon";
import {
  AfrofuturismPreview,
  ConversationalAIPreview,
  AppleLiquidGlassPreview,
  CarbonEnterprisePreview,
  CottagecorePreview,
  DarkAcademiaPreview,
  DatavizTerminalPreview,
  EInkPaperPreview,
  FintechNeobankPreview,
  FlatDesignPreview,
  FluentDesignPreview,
  FrutigerAeroPreview,
  GeistMinimalPreview,
  GothicVictorianPreview,
  KawaiiPopPreview,
  MaterialExpressivePreview,
  McBlingPreview,
  PolarisCommercePreview,
  SolarpunkPreview,
  Web3CryptoPreview,
} from "./batch8-new-styles";
import {
  RaycastInspiredPreview,
  CassetteFuturismPreview,
  SpatialComputingPreview,
  DeStijlPreview,
  ConstructivismPreview,
  BlueprintPreview,
  AcidGraphicsPreview,
  SteampunkPreview,
  AnalogHifiPreview,
  GameBoyDmgPreview,
  DuotonePreview,
  PapercutPreview,
  HeritageClassicPreview,
  BioluminescencePreview,
  DeconstructivismPreview,
  GlitchArtPreview,
  PlasticineClayPreview,
  RawHtmlPreview,
  RacingTelemetryPreview,
  BotanicalHerbariumPreview,
} from "./batch9-iconic-styles";
import { StyleLandingPage } from "./StyleLandingPage";
import { StyleComponentKit } from "./StyleComponentKit";
import { Frame, Meta } from "./frame";

export { StyleLandingPage, StyleComponentKit, Frame, Meta };

export type PreviewVariant = "bespoke" | "generic";

const previews: Record<string, ComponentType<{ meta: StyleMeta; large?: boolean }>> = {
  "minimalism": MinimalismPreview,
  "ultra-minimalism": UltraMinimalismPreview,
  "swiss-design": SwissDesignPreview,
  "japanese-minimalism": JapaneseMinimalismPreview,
  "scandinavian": ScandinavianPreview,
  "monochrome": MonochromePreview,
  "editorial-minimalism": EditorialMinimalismPreview,
  "luxury-minimalism": LuxuryMinimalismPreview,
  "product-minimalism": ProductMinimalismPreview,
  "functional-minimalism": FunctionalMinimalismPreview,
  "brutalism": BrutalismPreview,
  "neo-brutalism": NeoBrutalismPreview,
  "playful-brutalism": PlayfulBrutalismPreview,
  "corporate-brutalism": CorporateBrutalismPreview,
  "editorial-brutalism": EditorialBrutalismPreview,
  "minimal-brutalism": MinimalBrutalismPreview,
  "colorful-brutalism": ColorfulBrutalismPreview,
  "anti-design": AntiDesignPreview,
  "post-brutalism": PostBrutalismPreview,
  "industrial-brutalism": IndustrialBrutalismPreview,
  "maximalism": MaximalismPreview,
  "playful-maximalism": PlayfulMaximalismPreview,
  "editorial-maximalism": EditorialMaximalismPreview,
  "psychedelic-maximalism": PsychedelicMaximalismPreview,
  "typography-maximalism": TypographyMaximalismPreview,
  "color-maximalism": ColorMaximalismPreview,
  "digital-maximalism": DigitalMaximalismPreview,
  "chaos-design": ChaosDesignPreview,
  "luxury-maximalism": LuxuryMaximalismPreview,
  "graphic-maximalism": GraphicMaximalismPreview,
  "editorial-magazine": EditorialMagazinePreview,
  "newspaper": NewspaperPreview,
  "fashion-editorial": FashionEditorialPreview,
  "poster-inspired": PosterInspiredPreview,
  "swiss-poster": SwissPosterPreview,
  "bauhaus": BauhausPreview,
  "memphis": MemphisPreview,
  "y2k": Y2KPreview,
  "retro-internet": RetroInternetPreview,
  "webcore": WebcorePreview,
  "desktop-ui": DesktopUIPreview,
  "windows-95": Windows95Preview,
  "mac-os": MacOSPreview,
  "terminal": TerminalPreview,
  "hacker-aesthetic": HackerAestheticPreview,
  "cyberpunk": CyberpunkPreview,
  "futurism": FuturismPreview,
  "sci-fi-ui": SciFiUIPreview,
  "glassmorphism": GlassmorphismPreview,
  "neumorphism": NeumorphismPreview,
  "claymorphism": ClaymorphismPreview,
  "skeuomorphism": SkeuomorphismPreview,
  "bento-grid": BentoGridPreview,
  "card-based-ui": CardBasedUIPreview,
  "corporate-saas": CorporateSaaSPreview,
  "stripe-inspired": StripeInspiredPreview,
  "linear-inspired": LinearInspiredPreview,
  "notion-inspired": NotionInspiredPreview,
  "gradient-design": GradientDesignPreview,
  "aurora-glow": AuroraGlowPreview,
  "holographic": HolographicPreview,
  "liquid-chrome": LiquidChromePreview,
  "3d-web-design": ThreeDWebDesignPreview,
  "immersive": ImmersivePreview,
  "scrollytelling": ScrollytellingPreview,
  "parallax": ParallaxPreview,
  "kinetic-typography": KineticTypographyPreview,
  "typography-first": TypographyFirstPreview,
  "variable-fonts": VariableFontsPreview,
  "oversized-typography": OversizedTypographyPreview,
  "collage": CollagePreview,
  "scrapbook": ScrapbookPreview,
  "zine-punk": ZinePunkPreview,
  "risograph": RisographPreview,
  "halftone": HalftonePreview,
  "grain-noise": GrainNoisePreview,
  "hand-drawn": HandDrawnPreview,
  "illustration-led": IllustrationLedPreview,
  "corporate-memphis": CorporateMemphisPreview,
  "organic-biophilic": OrganicBiophilicPreview,
  "eco-sustainable": EcoSustainablePreview,
  "japandi": JapandiPreview,
  "wabi-sabi": WabiSabiPreview,
  "art-deco": ArtDecoPreview,
  "art-nouveau": ArtNouveauPreview,
  "mid-century-modern": MidCenturyModernPreview,
  "70s-retro": SeventiesRetroPreview,
  "80s-retro": EightiesRetroPreview,
  "90s-retro": NinetiesRetroPreview,
  "vaporwave": VaporwavePreview,
  "synthwave": SynthwavePreview,
  "pixel-8bit": Pixel8BitPreview,
  "gaming-ui": GamingUIPreview,
  "comic-pop-art": ComicPopArtPreview,
  "graffiti-streetwear": GraffitiStreetwearPreview,
  "quiet-luxury": QuietLuxuryPreview,
  "surrealism": SurrealismPreview,
  "dreamcore": DreamcorePreview,
  "liminal-weirdcore": LiminalWeirdcorePreview,
  "generative-algorithmic": GenerativeAlgorithmicPreview,
  "afrofuturism": AfrofuturismPreview,
  "ai-conversational": ConversationalAIPreview,
  "apple-liquid-glass": AppleLiquidGlassPreview,
  "carbon-enterprise": CarbonEnterprisePreview,
  "cottagecore": CottagecorePreview,
  "dark-academia": DarkAcademiaPreview,
  "dataviz-terminal": DatavizTerminalPreview,
  "e-ink-paper": EInkPaperPreview,
  "fintech-neobank": FintechNeobankPreview,
  "flat-design": FlatDesignPreview,
  "fluent-design": FluentDesignPreview,
  "frutiger-aero": FrutigerAeroPreview,
  "geist-minimal": GeistMinimalPreview,
  "gothic-victorian": GothicVictorianPreview,
  "kawaii-pop": KawaiiPopPreview,
  "material-expressive": MaterialExpressivePreview,
  "mcbling": McBlingPreview,
  "polaris-commerce": PolarisCommercePreview,
  "solarpunk": SolarpunkPreview,
  "web3-crypto": Web3CryptoPreview,
  "raycast-inspired": RaycastInspiredPreview,
  "cassette-futurism": CassetteFuturismPreview,
  "spatial-computing": SpatialComputingPreview,
  "de-stijl": DeStijlPreview,
  "constructivism": ConstructivismPreview,
  "blueprint": BlueprintPreview,
  "acid-graphics": AcidGraphicsPreview,
  "steampunk": SteampunkPreview,
  "analog-hifi": AnalogHifiPreview,
  "game-boy-dmg": GameBoyDmgPreview,
  "duotone": DuotonePreview,
  "papercut": PapercutPreview,
  "heritage-classic": HeritageClassicPreview,
  "bioluminescence": BioluminescencePreview,
  "deconstructivism": DeconstructivismPreview,
  "glitch-art": GlitchArtPreview,
  "plasticine-clay": PlasticineClayPreview,
  "raw-html": RawHtmlPreview,
  "racing-telemetry": RacingTelemetryPreview,
  "botanical-herbarium": BotanicalHerbariumPreview,
};

export function hasBespoke(slug: string): boolean {
  // Own-key check: `slug in previews` is true for inherited keys such as
  // "__proto__", which would hand Object.prototype to React as a component.
  return Object.prototype.hasOwnProperty.call(previews, slug);
}

/** Hand-crafted specimen for one style. Falls back to name + description when missing. */
export function BespokePreview({
  meta,
  large,
  previewTheme = "default",
  viewport,
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
  viewport?: "desktop" | "tablet" | "mobile";
}) {
  const Cmp = hasBespoke(meta.slug) ? previews[meta.slug] : undefined;
  // Every bespoke specimen reads tokens straight off `meta.preview`, and none
  // of them thread the theme through. Resolve the requested preview theme here
  // once, so the whole catalogue follows the theme selector instead of only
  // repainting the outer Frame.
  const baseDef = STYLE_DEFINITIONS[meta.slug];
  const themedMeta =
    baseDef && previewTheme !== "default"
      ? { ...meta, preview: resolvePreviewTheme(baseDef, previewTheme).preview }
      : meta;
  if (!Cmp) {
    const p = themedMeta.preview;
    return (
      <Frame meta={themedMeta} large={large} previewTheme={previewTheme} viewport={viewport}>
        <div className="flex h-full flex-col justify-center px-[8%]">
          <div style={{ fontFamily: p.display, fontSize: large ? 26 : 15 }}>{meta.name}</div>
          <div style={{ color: p.muted, fontSize: large ? 11 : 7.5 }}>{meta.description}</div>
        </div>
        <Meta meta={themedMeta} large={large} previewTheme={previewTheme} />
      </Frame>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Cmp as ComponentType<any>;
  return <Component meta={themedMeta} large={large} previewTheme={previewTheme} viewport={viewport} />;
}

/** Generic data-driven landing page for one style. Falls back like bespoke when undefined. */
export function GenericPreview({
  meta,
  large,
  previewTheme = "default",
  viewport,
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
  viewport?: "desktop" | "tablet" | "mobile";
}) {
  const baseDef = STYLE_DEFINITIONS[meta.slug];
  if (!baseDef) {
    return <BespokePreview meta={meta} large={large} previewTheme={previewTheme} viewport={viewport} />;
  }
  const def = resolvePreviewTheme(baseDef, previewTheme);
  return (
    <Frame meta={meta} large={large} previewTheme={previewTheme} viewport={viewport}>
      <StyleLandingPage def={def} large={large} previewTheme={previewTheme} viewport={viewport} />
      <Meta meta={meta} large={large} previewTheme={previewTheme} />
    </Frame>
  );
}

/** Catalog + card default: bespoke first, generic on request. */
export function StylePreview({
  meta,
  large,
  previewTheme = "default",
  variant = "bespoke",
  viewport,
}: {
  meta: StyleMeta;
  large?: boolean;
  previewTheme?: PreviewThemeMode;
  variant?: PreviewVariant;
  viewport?: "desktop" | "tablet" | "mobile";
}) {
  if (variant === "generic") {
    return <GenericPreview meta={meta} large={large} previewTheme={previewTheme} viewport={viewport} />;
  }
  return <BespokePreview meta={meta} large={large} previewTheme={previewTheme} viewport={viewport} />;
}
