import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getStyle, getStyleSlugs } from "../../../lib/styles";
import { getStyleDefinition } from "../../../lib/style-definitions";
import { SITE_URL } from "../../../lib/site";
import { FullscreenPreviewViewer } from "./FullscreenPreviewViewer";

export function generateStaticParams() {
  return getStyleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const style = await getStyle(slug);
  if (!style) return {};
  const pageUrl = `${SITE_URL}/styles/${slug}/preview`;
  return {
    title: `${style.name} — Live Landing Page Preview`,
    description: `Full live landing page preview for ${style.name}. Explore interactive UI components, typography, colors, and layout in action.`,
    alternates: { canonical: pageUrl },
    robots: { index: false, follow: true },
  };
}

export default async function StylePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = await getStyle(slug);
  if (!style) notFound();

  const def = getStyleDefinition(slug);

  return (
    <Suspense fallback={null}>
      <FullscreenPreviewViewer style={style} baseDef={def} />
    </Suspense>
  );
}
