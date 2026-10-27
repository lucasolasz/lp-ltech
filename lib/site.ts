// TROQUE pelo número da LTECH (DDI + DDD + número, só dígitos).
export const LTECH_WHATSAPP = "5521900000000";
// TROQUE pelo perfil da LTECH.
export const LTECH_INSTAGRAM = "https://instagram.com/";
export const LTECH_EMAIL = "contato@ltech.com.br";
// TROQUE pelo domínio final (sem barra no fim). Base de canonical, sitemap, robots e JSON-LD.
export const SITE_URL = "https://ltech.com.br";
// TROQUE pelos dados do CNPJ. Aparecem no rodapé e nas páginas legais.
export const LTECH_LEGAL_NAME = "[Razão social da LTECH]";
export const LTECH_CNPJ = "00.000.000/0000-00";

export const SITE_TITLE = "LTECH — Inteligência Operacional";
export const SITE_DESCRIPTION =
  "IA, automação e sistemas sob medida para reduzir custos, eliminar gargalos e acelerar o crescimento da sua operação.";

// Data de vigência das políticas. Atualize a cada revisão do texto legal.
export const LEGAL_UPDATED = "2026-10-27";

export const LEGAL_PAGES = [
  { href: "/legal/privacidade", label: "Política de privacidade", summary: "Quais dados pessoais tratamos, por quê e como exercer seus direitos (LGPD)." },
  { href: "/legal/cookies", label: "Política de cookies", summary: "O que o site guarda no seu navegador e como controlar." },
  { href: "/legal/termos-de-uso", label: "Termos de uso", summary: "Regras para usar este site e seu conteúdo." },
  { href: "/legal/termos-de-servico", label: "Termos de serviço", summary: "Condições gerais dos serviços contratados com a LTECH." },
] as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${LTECH_WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const WHATSAPP_GREETING = "Olá, LTECH! Vim pelo site e quero conversar.";

export const NAV_LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Método" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
