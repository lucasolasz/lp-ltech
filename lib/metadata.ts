import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

/** Open Graph defaults shared by every page. Child pages spread it, since metadata merges shallowly. */
export const baseOpenGraph = {
  type: "website",
  locale: "pt_BR",
  siteName: "LTECH",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
} satisfies Metadata["openGraph"];

// A page that sets its own `openGraph` drops the image inherited from `app/opengraph-image.tsx`, so it is named here.
const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE_TITLE };

/** Title, description, canonical and matching share tags for an inner page. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const shareTitle = `${title} · LTECH`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, title: shareTitle, description, url: path, images: [shareImage] },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [shareImage] },
  };
}
