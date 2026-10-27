"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Kicker, Wrap } from "@/components/ui/primitives";
import { LTECH_EMAIL } from "@/lib/site";
import { btn } from "@/lib/styles";

/** Honest failure screen: no technical detail, a retry, a way home and the incident id to quote. */
export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) {
  const digest = error instanceof Error && "digest" in error ? String(error.digest) : undefined;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="conteudo" tabIndex={-1} className="min-h-svh bg-cream py-24 text-ink outline-none md:py-36">
      <Wrap>
        <Kicker>Erro</Kicker>
        <h1 className="mt-5 mb-5 text-[42px] md:text-[72px]">Algo falhou do nosso lado.</h1>
        <p className="mb-9 max-w-140 text-[16.5px] text-ink/60">
          Tente de novo em instantes. Se continuar, escreva para{" "}
          <a href={`mailto:${LTECH_EMAIL}`} className="text-lrust underline underline-offset-3">
            {LTECH_EMAIL}
          </a>
          {digest && <> e informe o código {digest}</>}.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => retry()} className={btn.grad}>
            Tentar de novo
          </button>
          <Link href="/" className={btn.glassLight}>
            Voltar ao início
          </Link>
        </div>
      </Wrap>
    </main>
  );
}
