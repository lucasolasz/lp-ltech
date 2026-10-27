import { FRONTS } from "@/components/ui/icons";
import { Blob, Kicker, Wrap } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { btn, cx, gradFill, gradText } from "@/lib/styles";
import { HeroWaves } from "./hero-waves";

const LINES = ["Automatize.", "Escale.", "Cresça."];

export function Hero() {
  return (
    <section
      id="hero"
      data-theme="light"
      className="relative block overflow-hidden bg-cream pt-24 pb-11 text-ink md:flex md:flex-col md:pt-27.5 md:pb-15 lg:flex-row lg:items-center lg:pt-36.5 lg:pb-28"
    >
      <Blob color="amber" className="-top-35 right-[6%] size-160 opacity-20 blur-[50px]" />
      <Blob color="coral" className="right-[24%] -bottom-55 size-105 opacity-20 blur-[50px]" />

      <Wrap>
        <div className="relative z-3 max-w-none lg:max-w-130">
          <Reveal onMount delay={0.55} y={22} as="span" className="inline-block">
            <Kicker>Inteligência Operacional</Kicker>
          </Reveal>

          <h1 className="mt-4.5 mb-5 text-[54px] leading-[.98] font-thin tracking-[-.045em] md:mt-5.5 md:mb-6 md:text-[clamp(46px,5.6vw,86px)] md:leading-[.95]">
            {LINES.map((line, i) => (
              <Reveal
                key={line}
                as="span"
                onMount
                y={48}
                delay={0.15 + i * 0.11}
                transition={{ duration: 1.2 }}
                className={cx("block", i === 2 && cx("-mb-[.16em] pb-[.16em] font-medium", gradText))}
              >
                {line}
              </Reveal>
            ))}
          </h1>

          <Reveal
            as="p"
            onMount
            y={22}
            delay={0.65}
            className="mb-7.5 max-w-75 text-[15.5px] text-current/60 md:max-w-125 md:text-[clamp(15.5px,1.2vw,17.5px)]"
          >
            Usamos IA e automação para transformar o que a sua empresa quer melhorar em algo que funciona no dia a dia. Muita
            coisa que antes exigia mais gente, mais tempo ou mais investimento hoje pode ser resolvida de novas maneiras.
          </Reveal>

          <Reveal onMount y={22} delay={0.75} className="flex flex-col items-stretch gap-2.5 md:flex-row md:flex-wrap md:items-center md:gap-3">
            <a href="#contato" className={cx(btn.grad, "justify-center px-5.5 py-4 text-sm md:px-6 md:py-3.5")}>
              Diagnóstico gratuito →
            </a>
            <a href="#solucoes" className={cx(btn.glassLight, "justify-center px-5.5 py-4 text-sm md:px-6 md:py-3.5")}>
              Ver soluções
            </a>
          </Reveal>

          <div className="mt-7 grid grid-cols-2 gap-2.5 md:hidden">
            {FRONTS.map(({ label, Icon }, i) => (
              <Reveal
                key={label}
                onMount
                y={18}
                delay={0.8 + i * 0.08}
                transition={{ duration: 1 }}
                className="flex flex-col gap-3 rounded-[20px] bg-linear-150 from-white/92 to-white/60 p-3.5 text-[13px] leading-[1.3] text-ink shadow-[inset_0_1px_0_#fff,0_0_0_1px_rgba(11,11,13,.05),0_12px_30px_rgba(120,60,30,.08)]"
              >
                <i className={cx("grid size-7.5 place-items-center rounded-[10px] text-white shadow-icon", gradFill)}>
                  <Icon className="size-4" />
                </i>
                {label}
              </Reveal>
            ))}
          </div>
        </div>
      </Wrap>

      <HeroWaves />

      <div className="absolute inset-x-0 bottom-5.5 z-3 hidden lg:block">
        <Wrap className="grid grid-cols-[repeat(3,auto)] items-center justify-between gap-6">
          {["Problema antes da ferramenta", "Projeto sob medida", "Acompanhamento até o resultado"].map((item) => (
            <span key={item} className="font-mich text-[9.5px] tracking-[.28em] whitespace-nowrap text-ink/45 uppercase">
              {item}
            </span>
          ))}
        </Wrap>
      </div>
    </section>
  );
}
