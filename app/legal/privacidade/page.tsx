import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle, Review } from "@/components/legal";
import { pageMetadata } from "@/lib/metadata";
import { LTECH_CNPJ, LTECH_EMAIL, LTECH_LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidade",
  description: "Como a LTECH trata os dados pessoais de quem visita o site ou entra em contato, conforme a LGPD.",
  path: "/legal/privacidade",
});

export default function PrivacyPolicy() {
  return (
    <LegalArticle href="/legal/privacidade" title="Política de privacidade">
      <p>
        Esta política explica quais dados pessoais a LTECH trata quando você visita este site ou fala com a gente, para que
        usamos esses dados e como você exerce seus direitos, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018,
        “LGPD”).
      </p>

      <h2>1. Quem é o controlador</h2>
      <p>
        O controlador dos dados é <strong>{LTECH_LEGAL_NAME}</strong>, inscrita no CNPJ sob o nº {LTECH_CNPJ}, com sede no Rio de
        Janeiro, RJ <Review by="negócio">endereço completo da sede</Review>. Contato: <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a>.
      </p>

      <h2>2. Encarregado (DPO)</h2>
      <p>
        O encarregado pelo tratamento de dados pessoais é <Review by="negócio">nome do encarregado</Review>, que atende pelo e-mail{" "}
        <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a> <Review by="negócio">e-mail próprio do encarregado, se houver</Review>.
      </p>

      <h2>3. Quais dados tratamos e para quê</h2>
      <h3>Formulário de diagnóstico</h3>
      <p>
        Quando você preenche o formulário, pedimos <strong>nome, e-mail e número de WhatsApp</strong>. O site não grava esses dados em
        servidor: ele monta uma mensagem que é aberta no seu WhatsApp, e só chega até nós se você decidir enviá-la. Usamos esses
        dados para responder ao seu contato, fazer o diagnóstico solicitado e, se for o caso, enviar uma proposta.
      </p>
      <h3>Conversas por WhatsApp e e-mail</h3>
      <p>
        Quando você fala com a gente por WhatsApp ou e-mail, tratamos os dados que você compartilhar na conversa (por exemplo, nome,
        telefone, empresa e informações sobre a sua operação) para atender ao seu pedido e conduzir a negociação.
      </p>
      <h3>Dados técnicos de acesso</h3>
      <p>
        O provedor de hospedagem do site registra dados técnicos de cada acesso, como endereço IP, data e hora, navegador e página
        visitada, para manter o site seguro e funcionando <Review by="negócio">confirmar provedor de hospedagem e o que ele registra</Review>.
      </p>
      <p>
        Este site <strong>não usa cookies de analytics, publicidade ou rastreamento</strong>. Veja a{" "}
        <Link href="/legal/cookies">Política de cookies</Link>.
      </p>

      <h2>4. Bases legais</h2>
      <ul>
        <li>
          Contato, diagnóstico e proposta: procedimentos preliminares relacionados a contrato, a pedido do titular (art. 7º, V, da
          LGPD).
        </li>
        <li>Execução do contrato, quando você se torna cliente (art. 7º, V).</li>
        <li>
          Registros de acesso: cumprimento de obrigação legal (art. 7º, II, combinado com o art. 15 do Marco Civil da Internet) e
          legítimo interesse na segurança do site (art. 7º, IX).
        </li>
      </ul>
      <p>
        <Review />
      </p>

      <h2>5. Com quem compartilhamos</h2>
      <p>Não vendemos dados pessoais. Compartilhamos apenas com fornecedores que nos ajudam a operar, e só no necessário:</p>
      <ul>
        <li>WhatsApp (Meta), por onde acontece boa parte das conversas;</li>
        <li>
          provedor de e-mail <Review by="negócio">nome do provedor</Review>;
        </li>
        <li>
          provedor de hospedagem do site <Review by="negócio">nome do provedor</Review>;
        </li>
        <li>autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
      </ul>

      <h2>6. Transferência internacional</h2>
      <p>
        Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos, a transferência segue o art. 33 da LGPD{" "}
        <Review />.
      </p>

      <h2>7. Por quanto tempo guardamos</h2>
      <p>
        Dados de contato de quem não se tornou cliente: por até <Review by="negócio">prazo, ex.: 12 meses</Review> após o último contato.
        Dados de clientes: durante o contrato e pelo prazo exigido por lei depois dele. Registros de acesso ao site: 6 meses, como
        determina o Marco Civil da Internet. Depois disso, os dados são apagados ou anonimizados.
      </p>

      <h2>8. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda ou
        alteração, como conexão criptografada (HTTPS) e acesso restrito às pessoas que precisam dos dados para trabalhar.
      </p>

      <h2>9. Seus direitos</h2>
      <p>Pelo art. 18 da LGPD, você pode pedir, a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
        <li>portabilidade dos dados a outro fornecedor;</li>
        <li>eliminação dos dados tratados com base no seu consentimento;</li>
        <li>informação sobre com quem compartilhamos seus dados;</li>
        <li>informação sobre a possibilidade de não consentir e suas consequências, e revogação do consentimento.</li>
      </ul>
      <p>
        <strong>Como exercer:</strong> envie um e-mail para <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a> com o assunto “LGPD” e
        o seu pedido. Podemos pedir uma confirmação de identidade. Respondemos em até 15 dias <Review />. Você também pode
        reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>10. Crianças e adolescentes</h2>
      <p>Este site e os nossos serviços são voltados a empresas e não se destinam a menores de 18 anos.</p>

      <h2>11. Alterações</h2>
      <p>
        Podemos atualizar esta política. A data de vigência no topo da página sempre mostra a versão em vigor. Mudanças relevantes
        serão destacadas neste site.
      </p>
    </LegalArticle>
  );
}
