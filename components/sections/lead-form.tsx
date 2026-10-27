"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";
import { btn, cx, EASE } from "@/lib/styles";

const FIELDS = [
  { id: "nome", label: "Nome", type: "text", placeholder: "Seu nome", autoComplete: "name", error: "Informe seu nome." },
  { id: "email", label: "E-mail", type: "email", placeholder: "voce@empresa.com.br", autoComplete: "email", error: "Informe um e-mail válido." },
  { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(00) 0 0000-0000", autoComplete: "tel", error: "Informe seu WhatsApp com DDD." },
] as const;

type FieldId = (typeof FIELDS)[number]["id"];

/** Collects the lead and turns it into a pre-filled WhatsApp message. */
export function LeadForm() {
  const [missing, setMissing] = useState<FieldId[]>([]);
  const [link, setLink] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(FIELDS.map((f) => [f.id, String(data.get(f.id) ?? "").trim()])) as Record<FieldId, string>;
    // Empty fields, plus whatever the browser rejects (a malformed e-mail).
    const invalid = FIELDS.filter((f) => !values[f.id] || !form.querySelector<HTMLInputElement>(`#${f.id}`)?.checkValidity()).map((f) => f.id);
    setMissing(invalid);
    if (invalid.length) {
      form.querySelector<HTMLInputElement>(`#${invalid[0]}`)?.focus();
      return setLink(null);
    }
    setLink(
      whatsappLink(
        `Olá, LTECH! Quero solicitar um Diagnóstico Gratuito.\n\n*Nome:* ${values.nome}\n*E-mail:* ${values.email}\n*WhatsApp:* ${values.whatsapp}`,
      ),
    );
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      {FIELDS.map((f) => (
        <div key={f.id} className="mb-3.5">
          <label htmlFor={f.id} className="mb-2.25 block font-mich text-[9px] tracking-[.28em] text-white/50 uppercase">
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            required
            spellCheck={f.type === "email" ? false : undefined}
            aria-invalid={missing.includes(f.id) || undefined}
            aria-describedby={missing.includes(f.id) ? `${f.id}-erro` : undefined}
            onInput={() => missing.includes(f.id) && setMissing((m) => m.filter((id) => id !== f.id))}
            className={cx(
              "w-full rounded-2xl border-0 bg-black/28 px-4.5 py-4 text-base font-light text-white transition-shadow duration-250 placeholder:text-white/35",
              "focus:shadow-[inset_0_0_0_1px_rgba(255,160,90,.8),0_0_0_4px_rgba(255,107,0,.15)] focus:outline-none",
              missing.includes(f.id) ? "shadow-[inset_0_0_0_1px_#FF3366]" : "shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)]",
            )}
          />
          {missing.includes(f.id) && (
            <p id={`${f.id}-erro`} className="mt-1.5 text-[13px] text-[#FF9DB4]">
              {f.error}
            </p>
          )}
        </div>
      ))}
      <button type="submit" className={cx(btn.grad, "mt-2 w-full justify-center")}>
        Fale com a gente →
      </button>
      <p className="mt-3.5 text-center text-xs text-white/60">
        Resposta rápida, sem compromisso. Usamos seus dados só para responder ao seu contato, conforme a{" "}
        <Link href="/legal/privacidade" className="underline underline-offset-2 hover:text-white/70">
          Política de privacidade
        </Link>
        .
      </p>
      <AnimatePresence>
        {link && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-3.5 rounded-[14px] bg-ok/12 p-3.25 text-center text-sm text-[#9BF0C8] inset-ring inset-ring-ok/35"
          >
            Tudo pronto.{" "}
            <a href={link} target="_blank" rel="noopener" className="underline">
              Toque aqui para enviar pelo WhatsApp
            </a>
            .
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
