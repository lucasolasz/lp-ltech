import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle } from "@/components/legal";
import { pageMetadata } from "@/lib/metadata";
import { LEGAL_PAGES } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Legal",
  description: "Políticas e termos da LTECH: privacidade, cookies, termos de uso e termos de serviço.",
  path: "/legal",
});

export default function LegalIndex() {
  return (
    <LegalArticle title="Políticas e termos">
      <p>Aqui ficam todos os documentos que regem o uso deste site e os serviços da LTECH.</p>
      <ul className="mt-8 list-none! pl-0!">
        {LEGAL_PAGES.map((page) => (
          <li key={page.href} className="mb-0! border-b border-ink/10 py-5 first:border-t">
            <Link href={page.href} className="text-xl font-light text-ink! no-underline! hover:text-lrust!">
              {page.label}
            </Link>
            <p className="mt-1 mb-0!">{page.summary}</p>
          </li>
        ))}
      </ul>
    </LegalArticle>
  );
}
