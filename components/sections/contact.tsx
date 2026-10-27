import { Blob, Kicker, sectionPad, subClass, Wrap } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { cx } from "@/lib/styles";
import { LeadForm } from "./lead-form";

export function Contact() {
  return (
    <section id="contato" data-theme="dark" className={cx(sectionPad, "bg-ink-deep text-paper")}>
      <Blob color="orange" className="top-[10%] left-[20%] size-175 animate-drift opacity-50" />
      <Blob color="coral" className="right-[5%] -bottom-[10%] size-130 animate-drift opacity-45 [animation-delay:-7s]" />
      <Wrap>
        <Reveal className="glass grid grid-cols-1 items-center gap-6.5 rounded-[28px] px-5 py-7.5 md:gap-10 md:px-17.5 md:py-19 lg:grid-cols-2 lg:gap-15">
          <div>
            <Kicker>Diagnóstico gratuito</Kicker>
            <h2 className="mt-6.5 mb-5.5 text-[29px] md:text-[clamp(32px,3.6vw,52px)]">
              Vamos começar por uma coisa que <b className="font-medium">você gostaria de resolver.</b>
            </h2>
            <p className={cx(subClass, "max-w-140")}>
              Vamos marcar uma conversa para você contar os desafios que a sua empresa enfrenta e, juntos, desenharmos um
              projeto totalmente voltado para as suas necessidades e oportunidades de negócio.
            </p>
          </div>
          <LeadForm />
        </Reveal>
      </Wrap>
    </section>
  );
}
