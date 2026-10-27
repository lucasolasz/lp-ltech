import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle, Review } from "@/components/legal";
import { LTECH_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "O que o site da LTECH guarda no seu navegador e como você controla isso.",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiePolicy() {
  return (
    <LegalArticle href="/legal/cookies" title="Política de cookies">
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos que um site grava no seu navegador para lembrar informações entre uma visita e outra.
        Tecnologias parecidas, como o armazenamento local do navegador, seguem as mesmas regras desta política.
      </p>

      <h2>2. Cookies que este site usa</h2>
      <p>
        Hoje, <strong>este site não grava cookies</strong> nem usa tecnologias parecidas para analytics, publicidade ou rastreamento.
        As fontes e imagens são servidas pelo próprio site, sem chamar serviços de terceiros que gravem cookies.
      </p>
      <p>Para referência, estas são as categorias de cookies e a situação de cada uma aqui:</p>
      <ul>
        <li>
          <strong>Essenciais</strong> (necessários para o site funcionar): nenhum em uso.
        </li>
        <li>
          <strong>Desempenho e analytics</strong> (medem como o site é usado): nenhum em uso.
        </li>
        <li>
          <strong>Funcionais</strong> (lembram preferências): nenhum em uso.
        </li>
        <li>
          <strong>Marketing e publicidade</strong> (personalizam anúncios): nenhum em uso.
        </li>
      </ul>
      <p>
        <Review by="negócio">confirmar que nenhuma ferramenta de analytics ou pixel foi adicionada ao site</Review>
      </p>

      <h2>3. Links para outros serviços</h2>
      <p>
        Ao clicar nos botões de WhatsApp ou Instagram, você sai deste site. Esses serviços têm políticas de cookies próprias, que
        valem a partir do momento em que você acessa as páginas deles.
      </p>

      <h2>4. Consentimento</h2>
      <p>
        Se um dia passarmos a usar cookies que não sejam essenciais, eles só serão ativados depois do seu consentimento, dado em um
        aviso com as opções de aceitar e de recusar com o mesmo destaque. Você poderá mudar a sua escolha a qualquer momento, e
        esta política será atualizada com a lista de cookies, a finalidade e a duração de cada um.
      </p>

      <h2>5. Como controlar no navegador</h2>
      <p>
        Você pode apagar ou bloquear cookies nas configurações do seu navegador. Dúvidas: <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a>.
        Para saber como tratamos dados pessoais, veja a <Link href="/legal/privacidade">Política de privacidade</Link>.
      </p>
    </LegalArticle>
  );
}
