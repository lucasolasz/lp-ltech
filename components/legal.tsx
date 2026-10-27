import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd, legalBreadcrumb } from "@/components/json-ld";
import { Kicker, Wrap } from "@/components/ui/primitives";
import { LEGAL_PAGES, LEGAL_UPDATED, LTECH_CNPJ, LTECH_EMAIL, LTECH_LEGAL_NAME } from "@/lib/site";
import { cx } from "@/lib/styles";

type LegalHref = (typeof LEGAL_PAGES)[number]["href"];

const updated = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${LEGAL_UPDATED}T00:00:00Z`));

const prose = cx(
  "max-w-190 text-[15.5px] text-ink/75 md:text-[16.5px]",
  "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[26px] [&_h2]:text-ink md:[&_h2]:text-[32px]",
  "[&_h3]:mt-7 [&_h3]:mb-2.5 [&_h3]:text-lg [&_h3]:font-normal [&_h3]:tracking-[-.01em] [&_h3]:text-ink",
  "[&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5.5 [&_li]:mb-1.5 [&_strong]:font-normal [&_strong]:text-ink",
  "[&_a]:text-lrust [&_a]:underline [&_a]:underline-offset-3",
);

/** Flags a point that a person must confirm before the text is final. Search the code for `<Review` to list them. */
export function Review({ by = "advogado", children }: { by?: "advogado" | "negócio"; children?: ReactNode }) {
  return (
    <mark className="rounded-md bg-lamber/25 px-1.5 py-0.5 font-mich text-[10px] tracking-[.12em] text-ink uppercase not-italic">
      [REVISAR: {by}
      {children && <>: {children}</>}]
    </mark>
  );
}

/** Visible breadcrumb plus its BreadcrumbList twin, title, effective date and the shared legal footer note. */
export function LegalArticle({ href, title, children }: { href?: LegalHref; title: string; children: ReactNode }) {
  return (
    <article>
      <JsonLd data={legalBreadcrumb(href)} />
      <nav aria-label="Trilha de navegação" className="mb-8 text-[13px] text-ink/65">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-lrust">
              Início
            </Link>
            <span aria-hidden> /</span>
          </li>
          {href ? (
            <>
              <li>
                <Link href="/legal" className="hover:text-lrust">
                  Legal
                </Link>
                <span aria-hidden> /</span>
              </li>
              <li aria-current="page" className="text-ink/75">
                {title}
              </li>
            </>
          ) : (
            <li aria-current="page" className="text-ink/75">
              Legal
            </li>
          )}
        </ol>
      </nav>
      <Kicker>Legal</Kicker>
      <h1 className="mt-5 mb-4 text-[38px] text-ink md:text-[56px]">{title}</h1>
      <p className="mb-10 text-[13px] text-ink/65">Vigente desde {updated}</p>
      <div className={prose}>{children}</div>
      {href && (
        <footer className="mt-14 max-w-190 border-t border-ink/10 pt-6 text-[13.5px] text-ink/65">
          <p>
            {LTECH_LEGAL_NAME} · CNPJ {LTECH_CNPJ} · Dúvidas sobre este documento:{" "}
            <a href={`mailto:${LTECH_EMAIL}`} className="text-lrust underline underline-offset-3">
              {LTECH_EMAIL}
            </a>
          </p>
          <p className="mt-2">
            Veja também:{" "}
            {LEGAL_PAGES.filter((p) => p.href !== href).map((p, i) => (
              <span key={p.href}>
                {i > 0 && " · "}
                <Link href={p.href} className="text-lrust underline underline-offset-3">
                  {p.label}
                </Link>
              </span>
            ))}
          </p>
        </footer>
      )}
    </article>
  );
}

export function LegalMain({ children }: { children: ReactNode }) {
  return (
    <main id="conteudo" tabIndex={-1} className="bg-cream py-14 text-ink outline-none md:py-20">
      <Wrap>{children}</Wrap>
    </main>
  );
}
