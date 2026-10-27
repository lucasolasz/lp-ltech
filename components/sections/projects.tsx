import Image from "next/image";
import {
  Blob,
  h2Class,
  Kicker,
  sectionPad,
  subClass,
  Wrap,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SnapCarousel } from "@/components/ui/snap-carousel";
import { TiltCard } from "@/components/ui/tilt-card";
import { cx, gradText } from "@/lib/styles";
import logoCenterOnibus from "@/public/images/logo-center-onibus.png";
import logoLeauto from "@/public/images/logo-leauto.png";

const CASES = [
  {
    logo: (
      <Image
        src={logoLeauto}
        alt="Grupo Leauto"
        className="h-8.5 w-auto max-w-47.5 object-contain"
      />
    ),
    sector: "Varejo automotivo",
    title: "IA comercial para operação de venda direta",
    text: "Atendimento automatizado, qualificação de leads, integração com o CRM e distribuição inteligente dos contatos entre os vendedores.",
  },
  {
    logo: (
      <Image
        src={logoCenterOnibus}
        alt="Center Ônibus"
        className="h-11 w-auto max-w-47.5 object-contain"
      />
    ),
    sector: "Autopeças",
    title: "Modernização operacional para distribuidor de autopeças",
    text: "Plataforma integrada com busca inteligente de peças e gestão operacional unificada para o time comercial.",
  },
  {
    // Logo oficial do Rio Ride Rental não encontrada: trocar o texto por <Image> quando houver.
    logo: (
      <span className="font-mich text-[13px] font-normal tracking-[.22em] uppercase">
        Rio Ride Rental
      </span>
    ),
    sector: "Locação de motos",
    title: "Plataforma para locação de motocicletas",
    text: "Sistema de reservas, controle de frota e gestão operacional em uma única plataforma integrada.",
  },
];

export function Projects() {
  return (
    <section
      id="projetos"
      data-theme="light"
      className={cx(sectionPad, "bg-sand text-ink")}
    >
      <Blob
        color="amber"
        className="-top-20 -right-25 size-140 animate-drift opacity-55"
      />
      <Blob
        color="coral"
        className="bottom-[10%] -left-25 size-105 animate-drift opacity-30 [animation-delay:-8s]"
      />
      <Wrap>
        <Reveal className="mb-8.5 md:mb-14">
          <Kicker>Projetos em desenvolvimento</Kicker>
          <h2 className={cx(h2Class, "mt-5.5 mb-5")}>
            O que estamos <b className="font-medium">construindo.</b>
          </h2>
          <p className={cx(subClass, "max-w-140")}>
            Projetos reais, em operações reais: atendimento, distribuição e
            locação.
          </p>
        </Reveal>

        <SnapCarousel className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 0.09}>
              <TiltCard className="glass-light flex h-full flex-col rounded-[28px] px-5.5 py-6.5 md:min-h-72.5 md:px-7.5 md:pt-8 md:pb-8.5">
                <div className="mb-auto flex flex-col items-start gap-3.5 pb-9">
                  <div className="flex h-12 items-center">{item.logo}</div>
                  <span className="rounded-full bg-linear-135 from-lorange/10 to-lcoral/10 px-2.75 py-1.75 font-mich text-[8.5px] tracking-[.22em] text-lrust uppercase inset-ring inset-ring-lorange/20">
                    <i className="mr-2 inline-block size-1.5 rounded-full bg-linear-135 from-lorange to-lcoral" />
                    {item.sector}
                  </span>
                </div>
                <h3 className="mb-2.5 text-[19px] leading-[1.3] font-normal tracking-[-.015em]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-ink/60">{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </SnapCarousel>

        <div
          id="sobre"
          className="relative z-2 mt-17.5 grid grid-cols-1 items-end gap-7 md:gap-10 lg:mt-37.5 lg:grid-cols-[1.15fr_.85fr] lg:gap-20"
        >
          <Reveal
            as="p"
            className="text-[30px] leading-[1.08] font-extralight tracking-[-.04em] md:text-[clamp(34px,4.4vw,62px)]"
          >
            Tecnologia só faz sentido quando gera eficiência, velocidade e{" "}
            <b className={cx("font-medium", gradText)}>crescimento real.</b>
          </Reveal>
          <Reveal
            delay={0.09}
            className="text-base [&_p]:mb-4.5 [&_p]:text-ink/60"
          >
            <Kicker className="mb-6">O diferencial da LTECH</Kicker>
            <p>
              A LTECH não é uma empresa de chatbot, uma software house
              tradicional ou uma empresa que vende uma única ferramenta.
              Problemas diferentes pedem soluções diferentes, e cada solução é
              construída em torno da operação real de cada cliente, podendo
              combinar IA, automação, integração e software e evoluir junto com
              a empresa.
            </p>
            <p>
              Você fala direto com os sócios, do diagnóstico à entrega. Quem
              entende o seu negócio e quem constrói a solução estão na mesma
              conversa, e é isso que encurta o caminho entre a ideia e a
              operação funcionando.
            </p>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
