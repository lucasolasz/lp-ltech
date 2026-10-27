"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { WHATSAPP_GREETING, whatsappLink } from "@/lib/site";
import { btn, cx, EASE } from "@/lib/styles";

const waBall =
  "relative grid place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#5FF59A,#25D366_45%,#128C4A)] text-white";

/** Desktop: floating WhatsApp button. Mobile: bottom dock shown between the hero and the contact form. */
export function WhatsAppCta() {
  const href = whatsappLink(WHATSAPP_GREETING);
  const [dockVisible, setDockVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contato");
    if (!hero || !contact) return;
    setDockVisible(hero.getBoundingClientRect().bottom < 0 && contact.getBoundingClientRect().top > innerHeight * 0.4);
  });

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        aria-label="Falar com a LTECH no WhatsApp"
        className="group fixed right-6 bottom-[calc(24px+env(safe-area-inset-bottom))] z-120 hidden items-center gap-3 md:flex"
      >
        <span className="pointer-events-none translate-x-2 rounded-full bg-linear-150 from-white/92 to-white/60 px-4 py-2.5 text-[13px] whitespace-nowrap text-ink opacity-0 shadow-[inset_0_1px_0_#fff,0_0_0_1px_rgba(11,11,13,.06),0_10px_30px_rgba(11,11,13,.15)] backdrop-blur-md transition-[opacity,translate] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Fale com a gente
        </span>
        <span
          className={cx(
            waBall,
            "size-15 shadow-wa transition-transform duration-250 group-hover:scale-107",
            "after:absolute after:top-[8%] after:left-[14%] after:h-[30%] after:w-[52%] after:-rotate-20 after:rounded-full after:bg-linear-to-b after:from-white/55 after:to-white/0",
          )}
        >
          <WhatsAppIcon className="relative z-1 size-7.5" />
        </span>
      </a>

      <motion.div
        aria-label="Atalhos"
        initial={false}
        animate={dockVisible ? { opacity: 1, y: "0%" } : { opacity: 0, y: "120%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className={cx(
          "fixed inset-x-3 bottom-[calc(12px+env(safe-area-inset-bottom))] z-105 flex items-center gap-2 rounded-full bg-[rgba(14,14,18,.82)] p-2 shadow-dock backdrop-blur-[18px] backdrop-saturate-140 md:hidden",
          !dockVisible && "pointer-events-none",
        )}
      >
        <a href="#contato" className={cx(btn.grad, "flex-1 justify-center px-4.5 py-3.5 text-sm")}>
          Diagnóstico gratuito
        </a>
        <a href={href} target="_blank" rel="noopener" aria-label="WhatsApp" className={cx(waBall, "size-12 flex-none shadow-[inset_0_2px_0_rgba(255,255,255,.4)]")}>
          <WhatsAppIcon className="size-6" />
        </a>
      </motion.div>
    </>
  );
}
