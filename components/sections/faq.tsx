"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Blob, h2Class, Kicker, sectionPad, Wrap } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { cx, EASE, gradFill } from "@/lib/styles";

const QUESTIONS = [
  [
    "Vocês atendem qualquer segmento?",
    "Hoje atuamos principalmente com operações comerciais e empresas em crescimento, com forte presença no setor automotivo e de peças.",
  ],
  [
    "Vocês desenvolvem sistemas personalizados?",
    "Sim. Construímos portais, dashboards, CRMs e plataformas internas no formato da sua operação.",
  ],
  ["Trabalham com IA e WhatsApp?", "Sim. Atendimento e qualificação de leads no WhatsApp são uma das frentes mais procuradas."],
  [
    "É possível integrar com os sistemas existentes?",
    "Na maioria dos casos, sim. Entramos como camada sobre o que você já usa, sem rasgar o que funciona.",
  ],
  [
    "Como funciona o projeto?",
    "Diagnóstico, estratégia, implementação e otimização contínua. A implantação acontece em semanas, com taxa de projeto e mensalidade de acompanhamento.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (!next.delete(i)) next.add(i);
      return next;
    });

  return (
    <section data-theme="light" className={cx(sectionPad, "bg-sand text-ink")}>
      <Blob color="orange" className="top-[20%] left-[10%] size-125 animate-drift opacity-35" />
      <Wrap>
        <Reveal className="mb-8.5 text-center md:mb-14">
          <Kicker>Perguntas frequentes</Kicker>
          <h2 className={cx(h2Class, "mt-5.5 mb-5")}>
            Dúvidas <b className="font-medium">comuns.</b>
          </h2>
        </Reveal>
        <Reveal className="glass-light relative z-2 mx-auto max-w-220 rounded-[30px] px-4.5 py-1 md:px-10 md:py-2.5">
          {QUESTIONS.map(([question, answer], i) => {
            const isOpen = open.has(i);
            return (
              <div key={question} className="border-b border-ink/10 last:border-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left text-[15.5px] font-light tracking-[-.01em] md:py-6.5 md:text-lg"
                >
                  {question}
                  <i
                    aria-hidden
                    className={cx(
                      "grid size-8 flex-none place-items-center rounded-full text-xl font-extralight not-italic inset-ring inset-ring-ink/8 transition-[rotate,background-color,color] duration-350",
                      isOpen ? cx(gradFill, "rotate-45 text-white") : "bg-white/70",
                    )}
                  >
                    +
                  </i>
                </button>
                {/* Answers stay in the served HTML (crawlers read them); closed ones are collapsed and inert. */}
                <motion.div
                  id={`faq-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  inert={!isOpen}
                  className="h-0 overflow-hidden"
                >
                  <p className="max-w-175 pb-6.5 text-[15.5px] text-ink/65">{answer}</p>
                </motion.div>
              </div>
            );
          })}
        </Reveal>
      </Wrap>
    </section>
  );
}
