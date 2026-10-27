// TROQUE pelo número da LTECH (DDI + DDD + número, só dígitos).
export const LTECH_WHATSAPP = "5521900000000";
// TROQUE pelo perfil da LTECH.
export const LTECH_INSTAGRAM = "https://instagram.com/";
export const LTECH_EMAIL = "contato@ltech.com.br";

export const whatsappLink = (text?: string) =>
  `https://wa.me/${LTECH_WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const WHATSAPP_GREETING = "Olá, LTECH! Vim pelo site e quero conversar.";

export const NAV_LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Método" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
