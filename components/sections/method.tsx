import { Blob, h2Class, Kicker, sectionPad, subClass, Wrap } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { cx, gradText } from "@/lib/styles";
import { MethodTrack } from "./method-track";

export function Method() {
  return (
    <section id="metodo" data-theme="dark" className={cx(sectionPad, "bg-ink-deep text-paper")}>
      <Blob color="orange" className="top-0 -left-30 size-140 animate-drift opacity-28" />
      <Blob color="coral" className="-right-25 -bottom-15 size-115 animate-drift opacity-25 [animation-delay:-7s]" />
      <Wrap>
        <Reveal className="mb-8.5 md:mb-14">
          <Kicker>Como trabalhamos</Kicker>
          <h2 className={cx(h2Class, "mt-5.5 mb-5")}>
            Do diagnóstico <b className={cx("font-medium", gradText)}>ao resultado.</b>
          </h2>
          <p className={cx(subClass, "max-w-180")}>
            Todo projeto começa com um diagnóstico. A maioria das empresas já tentou alguma ferramenta de automação, mas poucas
            chegaram ao ponto em que a tecnologia realmente traz resultado para a operação. A LTECH não vende tecnologia, vende
            resultado operacional: em vez de partir de uma ferramenta e procurar onde aplicá-la, partimos do que precisa
            melhorar na sua empresa e construímos a solução em torno disso.
          </p>
        </Reveal>
        <MethodTrack />
      </Wrap>
    </section>
  );
}
