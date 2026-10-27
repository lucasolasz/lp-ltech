import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle, Review } from "@/components/legal";
import { pageMetadata } from "@/lib/metadata";
import { LTECH_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Termos de serviço",
  description: "Condições gerais dos serviços de IA, automação e sistemas contratados com a LTECH.",
  path: "/legal/termos-de-servico",
});

export default function TermsOfService() {
  return (
    <LegalArticle href="/legal/termos-de-servico" title="Termos de serviço">
      <p>
        Estes termos trazem as condições gerais dos serviços da LTECH. Cada projeto tem uma proposta ou contrato próprio, que define
        escopo, prazos e valores. Se houver conflito, a proposta ou o contrato assinado prevalece sobre estes termos.
      </p>

      <h2>1. Partes e definições</h2>
      <p>
        “LTECH” é a prestadora dos serviços. “Cliente” é a empresa que contrata. “Proposta” é o documento aceito pelo cliente que
        descreve o projeto. <Review />
      </p>

      <h2>2. Serviços</h2>
      <p>
        A LTECH oferece diagnóstico de operação, automação de processos, agentes de IA (inclusive no WhatsApp), integrações e sistemas
        sob medida, como portais, dashboards e CRMs. O escopo de cada projeto é o descrito na proposta. O que não estiver lá exige
        um aditivo.
      </p>

      <h2>3. Etapas</h2>
      <p>
        O trabalho segue diagnóstico, estratégia, implementação e otimização contínua. Prazos dependem do escopo e do envio, pelo
        cliente, dos acessos, informações e aprovações necessários.
      </p>

      <h2>4. Preço e pagamento</h2>
      <p>
        Os projetos são cobrados com taxa de implantação e mensalidade de acompanhamento, nos valores, datas e formas da proposta.
        Atrasos podem gerar multa, juros e correção, e a suspensão dos serviços. <Review />{" "}
        <Review by="negócio">índice de reajuste e condições de atraso</Review>
      </p>

      <h2>5. Responsabilidades do cliente</h2>
      <ul>
        <li>fornecer acessos, dados e informações corretos e no prazo;</li>
        <li>garantir que tem direito de usar os dados e sistemas que compartilha com a LTECH, inclusive dados pessoais;</li>
        <li>validar entregas nos prazos combinados.</li>
      </ul>

      <h2>6. Responsabilidades da LTECH</h2>
      <ul>
        <li>executar os serviços com cuidado técnico e dentro do escopo combinado;</li>
        <li>manter em sigilo as informações confidenciais do cliente;</li>
        <li>tratar dados pessoais do cliente apenas conforme as instruções dele e a LGPD, como operadora.</li>
      </ul>

      <h2>7. Disponibilidade</h2>
      <p>
        Sistemas e automações dependem de serviços de terceiros, como provedores de nuvem, APIs de IA e o WhatsApp. Níveis de serviço
        (SLA), quando houver, são os definidos na proposta. <Review by="negócio">existe SLA padrão?</Review>
      </p>

      <h2>8. Propriedade intelectual</h2>
      <p>
        A titularidade do que for desenvolvido e as licenças de uso são as definidas na proposta. Ferramentas, componentes e
        conhecimento prévios da LTECH continuam dela. <Review />
      </p>

      <h2>9. Cancelamento</h2>
      <p>
        Qualquer parte pode encerrar a mensalidade com aviso prévio de <Review by="negócio">prazo, ex.: 30 dias</Review>. Valores já
        executados continuam devidos. <Review />
      </p>

      <h2>10. Limitação de responsabilidade</h2>
      <p>
        A responsabilidade da LTECH se limita aos danos diretos comprovados, até o valor pago pelo cliente nos últimos{" "}
        <Review by="negócio">número de meses</Review> meses, salvo dolo ou culpa grave. <Review />
      </p>

      <h2>11. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a <Link href="/legal/privacidade">Política de privacidade</Link> e, nos projetos, o acordo
        de tratamento de dados da proposta ou contrato.
      </p>

      <h2>12. Lei aplicável e foro</h2>
      <p>
        Estes termos seguem a lei brasileira. Fica eleito o foro da comarca do Rio de Janeiro, RJ. <Review />
      </p>

      <h2>13. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${LTECH_EMAIL}`}>{LTECH_EMAIL}</a>.
      </p>
    </LegalArticle>
  );
}
