import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle, Review } from "@/components/legal";
import { pageMetadata } from "@/lib/metadata";
import { LTECH_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Termos de uso",
  description: "Regras para usar o site da LTECH e o seu conteúdo.",
  path: "/legal/termos-de-uso",
});

export default function TermsOfUse() {
  return (
    <LegalArticle href="/legal/termos-de-uso" title="Termos de uso">
      <h2>1. Aceitação</h2>
      <p>
        Ao navegar neste site, você concorda com estes termos. Se não concordar, não use o site. Os serviços contratados com a LTECH
        seguem os <Link href="/legal/termos-de-servico">Termos de serviço</Link> e a proposta ou contrato de cada projeto.
      </p>

      <h2>2. O que o site oferece</h2>
      <p>
        Este site apresenta a LTECH, as soluções que oferecemos e os canais para pedir um diagnóstico. As informações aqui têm caráter
        geral e não constituem proposta comercial.
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        A marca LTECH, os logotipos, os textos, as imagens e o código deste site pertencem à LTECH ou são usados com autorização. Você
        pode consultar e compartilhar links para o conteúdo, mas não pode copiá-lo, reproduzi-lo ou usá-lo comercialmente sem
        autorização por escrito.
      </p>

      <h2>4. Uso proibido</h2>
      <p>Ao usar o site, você não pode:</p>
      <ul>
        <li>tentar acessar áreas ou sistemas sem autorização, nem testar vulnerabilidades sem permissão;</li>
        <li>sobrecarregar o site com acessos automatizados abusivos;</li>
        <li>enviar dados de terceiros sem autorização ou informações falsas pelo formulário.</li>
      </ul>

      <h2>5. Links externos</h2>
      <p>
        O site tem links para serviços de terceiros, como WhatsApp e Instagram. Não controlamos esses serviços e não respondemos pelo
        conteúdo ou pelas práticas deles.
      </p>

      <h2>6. Garantias e responsabilidade</h2>
      <p>
        Mantemos o site com cuidado, mas não garantimos que ele estará sempre disponível ou livre de erros. Na medida permitida pela
        lei, a LTECH não responde por danos decorrentes do uso do site ou da impossibilidade de usá-lo. <Review />
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a <Link href="/legal/privacidade">Política de privacidade</Link>.
      </p>

      <h2>8. Alterações</h2>
      <p>Podemos atualizar estes termos. A versão em vigor é sempre a publicada nesta página, com a data de vigência no topo.</p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Estes termos seguem a lei brasileira. Fica eleito o foro da comarca do Rio de Janeiro, RJ, ressalvados os direitos do
        consumidor previstos em lei. <Review />
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a>.
      </p>
    </LegalArticle>
  );
}
