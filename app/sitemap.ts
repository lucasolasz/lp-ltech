import type { MetadataRoute } from "next";
import { LEGAL_PAGES, LEGAL_UPDATED, SITE_URL } from "@/lib/site";

// TROQUE a data quando o conteúdo da home mudar de forma relevante.
const HOME_UPDATED = "2026-10-27";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: HOME_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/legal`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE_URL}${page.href}`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
