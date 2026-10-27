import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ChatIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" />
  </svg>
);

export const FlowIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M4 7h10M4 12h16M4 17h7" />
  </svg>
);

export const LinkIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M10 13.5a4 4 0 0 0 5.7.4l3-3a4 4 0 1 0-5.7-5.7l-1.4 1.4" />
    <path d="M14 10.5a4 4 0 0 0-5.7-.4l-3 3a4 4 0 1 0 5.7 5.7l1.4-1.4" />
  </svg>
);

export const BarsIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M5 20V10M12 20V4M19 20v-7" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...stroke} strokeWidth={3.5} {...p}>
    <path d="M5 12l5 5 9-10" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
    <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2a13.2 13.2 0 0 0 6.6 1.8c7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.5 10.5 0 0 1-1.7-5.8C5.1 9.9 10 5.2 16 5.2s10.9 4.7 10.9 10.6S22 26.4 16 26.4zm6-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

/** The four service fronts, shared by the hero tags and the mobile chips. */
export const FRONTS = [
  { label: "Atendimento inteligente", Icon: ChatIcon },
  { label: "Processos automatizados", Icon: FlowIcon },
  { label: "Integração de sistemas", Icon: LinkIcon },
  { label: "Dashboards sob medida", Icon: BarsIcon },
] as const;
