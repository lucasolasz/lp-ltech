import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/sections/footer";
import { Kicker, Wrap } from "@/components/ui/primitives";
import { btn } from "@/lib/styles";

// Next.js already answers 404 and injects `noindex` here.
export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <>
      <PageHeader />
      <main id="conteudo" tabIndex={-1} className="bg-cream py-24 text-ink outline-none md:py-36">
        <Wrap>
          <Kicker>Erro 404</Kicker>
          <h1 className="mt-5 mb-5 text-[42px] md:text-[72px]">Página não encontrada.</h1>
          <p className="mb-9 max-w-140 text-[16.5px] text-ink/60">
            Este endereço não existe mais ou mudou. Volte para o início ou fale direto com a gente.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className={btn.grad}>
              Voltar ao início
            </Link>
            <Link href="/#solucoes" className={btn.glassLight}>
              Ver soluções
            </Link>
            <Link href="/#contato" className={btn.glassLight}>
              Contato
            </Link>
          </div>
        </Wrap>
      </main>
      <Footer linkBase="/" />
    </>
  );
}
