import { LEGAL_PAGES, LTECH_EMAIL, LTECH_INSTAGRAM, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#org`;

/** Renders structured data, escaping `<` so the payload cannot close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c") }}
    />
  );
}

/** Organization + WebSite for the home page; every other page points back to the organization by `@id`. */
export const homeJsonLd = {
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "LTECH",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-ltech-black.png`,
      description: SITE_DESCRIPTION,
      sameAs: [LTECH_INSTAGRAM],
      contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: LTECH_EMAIL, areaServed: "BR", availableLanguage: ["Portuguese"] }],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LTECH",
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
  ],
};

/** BreadcrumbList for a legal page, mirroring the visible breadcrumb. */
export function legalBreadcrumb(href?: (typeof LEGAL_PAGES)[number]["href"]) {
  const page = LEGAL_PAGES.find((p) => p.href === href);
  const items = [
    { name: "Início", item: `${SITE_URL}/` },
    { name: "Legal", item: `${SITE_URL}/legal` },
    ...(page ? [{ name: page.label, item: `${SITE_URL}${page.href}` }] : []),
  ];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
  };
}
