import type { ReactNode } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { Blob, h2Class, Kicker, sectionPad, subClass, Wrap } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SnapCarousel } from "@/components/ui/snap-carousel";
import { cx, gradFill, gradText } from "@/lib/styles";

const illBase =
  "relative overflow-hidden rounded-[22px] bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,.07),rgba(255,255,255,.015))] shadow-panel h-70 md:h-82.5";

const michLabel = "font-mich tracking-[.22em]";

/* ---------- 01 · atendimento ---------- */

const bubbleIn =
  "self-start max-w-[82%] rounded-2xl rounded-bl-[5px] bg-white/10 px-2.75 py-2 text-xs leading-[1.45] shadow-[inset_0_1px_0_rgba(255,255,255,.14)] md:px-3.5 md:py-2.5 md:text-[13.5px]";

function ChatIllustration() {
  return (
    <div className={cx(illBase, "flex flex-col justify-end gap-2 px-3.5 pt-15 pb-3.5 max-md:h-85 md:px-6.5 md:pt-18 md:pb-5.5")}>
      <div className="absolute inset-x-0 top-0 z-2 flex items-center gap-2.5 bg-linear-to-b from-[rgba(18,18,22,.95)] to-[rgba(18,18,22,.75)] px-5 py-3.5 text-[12.5px] shadow-[inset_0_-1px_0_rgba(255,255,255,.07)] backdrop-blur-sm">
        <span className={cx("grid size-7 place-items-center rounded-full text-[11px] font-semibold", gradFill)}>L.</span>
        <div>
          Assistente virtual
          <small className="block text-[10.5px] text-mint">● online · respondendo agora</small>
        </div>
      </div>
      {/* Mobile shows the first question, desktop the second: each layout keeps the card from overflowing. */}
      <div className={cx(bubbleIn, "md:hidden")}>oi, boa noite! tem o kwid zen 23 aí?</div>
      <div className={cx(bubbleIn, "max-md:hidden")}>qnto fica à vista? tenho um carro p troca</div>
      <div className="max-w-[82%] self-end rounded-2xl rounded-br-[5px] bg-linear-135 from-[rgba(255,138,61,.75)] to-[rgba(255,51,102,.65)] px-2.75 py-2 text-xs leading-[1.45] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)] md:px-3.5 md:py-2.5 md:text-[13.5px]">
        Boa noite! Temos sim. Já te passo a condição à vista e agendo a avaliação do seu carro.
      </div>
      <div className="w-[84%] self-center rounded-2xl bg-linear-150 from-white/18 to-white/5 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,.4),inset_0_0_0_1px_rgba(255,160,100,.5),0_10px_30px_rgba(255,90,50,.25)]">
        <small className="mb-2 block font-mich text-[7.5px] tracking-[.24em] text-lamber">LEAD QUALIFICADO · 23:47</small>
        {[
          ["Interesse", "Kwid Zen 2023"],
          ["Pagamento", "À vista + troca"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-0.75 text-[11.5px] text-white/65 md:text-[12.5px]">
            <span>{k}</span>
            <b className="font-normal text-white">{v}</b>
          </div>
        ))}
        <div className="flex justify-between py-0.75 text-[11.5px] text-white/65 md:text-[12.5px]">
          <span>Temperatura</span>
          <b className={cx("font-normal", gradText)}>Quente</b>
        </div>
      </div>
    </div>
  );
}

/* ---------- 02 · processos ---------- */

const TASKS = [
  ["Novo pedido recebido", "GATILHO"],
  ["Aprovação do gestor", "AUTOMÁTICO"],
  ["Cadastro no sistema", "AUTOMÁTICO"],
  ["Time avisado no WhatsApp", "AUTOMÁTICO"],
];

function ProcessIllustration() {
  return (
    <div className={cx(illBase, "flex flex-col gap-2 px-5.5 py-5")}>
      {TASKS.map(([label, tag]) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-[14px] bg-lorange/10 px-3 py-2.5 text-[12.5px] shadow-tile md:px-3.5 md:py-3 md:text-[13.5px]"
        >
          <span className={cx("grid size-5.5 flex-none place-items-center rounded-[7px] text-white shadow-[0_4px_12px_rgba(255,80,60,.4)]", gradFill)}>
            <CheckIcon className="size-3.25" />
          </span>
          {label}
          <span className={cx("ml-auto hidden text-[7.5px] tracking-[.2em] text-mint md:inline", "font-mich")}>{tag}</span>
        </div>
      ))}
      <div className="h-1.25 overflow-hidden rounded-[5px] bg-white/8">
        <i className="block h-full w-full rounded-[5px] bg-linear-90 from-lamber via-lorange to-lcoral shadow-[0_0_12px_rgba(255,107,0,.7)]" />
      </div>
      <div className={cx("mt-auto flex items-center justify-between text-[7.5px] text-white/45", michLabel)}>
        <span>ETAPAS CONCLUÍDAS</span>
        <b className="font-normal text-lamber">4 DE 4 · 0 MANUAIS</b>
      </div>
    </div>
  );
}

/* ---------- 03 · conexão ---------- */

type Pt = { x: number; y: number };
const cubic = (p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt => {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return { x: a * p0.x + b * p1.x + c * p2.x + d * p3.x, y: a * p0.y + b * p1.y + c * p2.y + d * p3.y };
};

/** Point at `fraction` of a cubic bezier's arc length, sampled numerically. */
function pointAlong(p: [Pt, Pt, Pt, Pt], fraction: number): Pt {
  const samples = Array.from({ length: 201 }, (_, i) => cubic(...p, i / 200));
  const lengths = [0];
  for (let i = 1; i < samples.length; i++) {
    lengths.push(lengths[i - 1] + Math.hypot(samples[i].x - samples[i - 1].x, samples[i].y - samples[i - 1].y));
  }
  const target = lengths[lengths.length - 1] * fraction;
  const i = lengths.findIndex((l) => l >= target);
  return samples[i];
}

const HUB_NODES = (
  [
    ["WhatsApp", 62, 50],
    ["Site", 62, 150],
    ["Instagram", 62, 250],
    ["CRM", 398, 50],
    ["ERP", 398, 150],
    ["Planilhas", 398, 250],
  ] as const
).map(([label, x, y], i) => {
  const left = i < 3;
  const x1 = left ? x + 46 : 264, x2 = left ? 196 : x - 46;
  const y1 = left ? y : 150, y2 = left ? 150 : y;
  const mx = (x1 + x2) / 2;
  const active = i === 0 || i === 3;
  const packet = active ? pointAlong([{ x: x1, y: y1 }, { x: mx, y: y1 }, { x: mx, y: y2 }, { x: x2, y: y2 }], 0.55) : null;
  return { label, x, y, active, packet, packetColor: i ? "#FF3366" : "#FF8A3D", d: `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}` };
});

function HubIllustration() {
  return (
    <div className={cx(illBase, "p-2.5")}>
      <svg viewBox="0 0 460 300" className="size-full overflow-visible">
        <defs>
          <radialGradient id="hg">
            <stop offset="0" stopColor="#FF6B00" stopOpacity=".55" />
            <stop offset="1" stopColor="#FF3366" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hubg" x1="0" x2="1">
            <stop offset="0" stopColor="#FFB36B" />
            <stop offset=".5" stopColor="#FF6B00" />
            <stop offset="1" stopColor="#FF3366" />
          </linearGradient>
        </defs>
        {HUB_NODES.map((n) => (
          <path key={n.label} d={n.d} className={cx("fill-none", n.active ? "stroke-[url(#hubg)] stroke-[1.6]" : "stroke-white/14 stroke-1")} />
        ))}
        {HUB_NODES.map((n) => n.packet && <circle key={n.label} cx={n.packet.x} cy={n.packet.y} r="3.5" fill={n.packetColor} />)}
        <circle cx="230" cy="150" r="80" fill="url(#hg)" />
        <circle cx="230" cy="150" r="46" className="fill-none stroke-[rgba(255,160,100,.5)]" />
        <rect x="196" y="116" width="68" height="68" rx="20" className="fill-white/10 stroke-white/40" />
        <image href="/images/octopus.png" x="208" y="128" width="44" height="44" />
        {HUB_NODES.map((n) => (
          <g key={n.label}>
            <rect x={n.x - 46} y={n.y - 16} width="92" height="32" rx="16" className="fill-white/7 stroke-white/18" />
            <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" className="fill-white/82 font-sans text-[11px] font-light">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- 04 · sob medida ---------- */

const BARS = ["h-[38%]", "h-[52%]", "h-[46%]", "h-[60%]", "h-[57%]", "h-[72%]", "h-[80%]"];

function DashboardIllustration() {
  return (
    <div className={cx(illBase, "flex flex-col gap-3.5 px-6 py-5.5")}>
      <div className="flex gap-2.5">
        {[
          ["LEADS NO MÊS", "312", <em key="e" className="ml-1.5 text-xs font-normal text-mint not-italic">▲</em>],
          ["TEMPO DE RESPOSTA", "40", "s"],
          ["CONVERSÃO", "18", "%"],
        ].map(([label, value, suffix]) => (
          <div key={label as string} className="flex-1 rounded-[14px] bg-white/6 px-3.5 py-3 shadow-tile">
            <small className={cx("block text-[7px] text-white/45", michLabel)}>{label}</small>
            <b className="mt-1 block text-2xl font-extralight tracking-[-.02em]">
              {value}
              {suffix as ReactNode}
            </b>
          </div>
        ))}
      </div>
      <div className="relative flex-1">
        <div className="flex h-full items-end gap-1.75">
          {BARS.map((h, i) => (
            <i key={i} className={cx("flex-1 rounded-t-md rounded-b-xs bg-white/10", h)} />
          ))}
          <i className="h-[96%] flex-1 rounded-t-md rounded-b-xs bg-linear-to-b from-lflame to-lcoral/40" />
        </div>
        <svg viewBox="0 0 400 140" preserveAspectRatio="none" fill="none" className="absolute inset-0 size-full">
          <path d="M10 118 C60 108 80 96 120 98 S190 70 230 68 S320 38 390 14" stroke="#FFD2A8" strokeWidth="2" />
        </svg>
      </div>
      <span className={cx("text-[7px] text-white/30", michLabel)}>PAINEL DE EXEMPLO · DADOS FICTÍCIOS</span>
    </div>
  );
}

/* ---------- seção ---------- */

const CARDS = [
  {
    n: "01",
    title: ["Atendimento", "inteligente"],
    text: "IA aplicada ao WhatsApp e aos outros canais para atender mais rápido, qualificar o lead na hora e não deixar nenhum cliente esfriar na fila.",
    Ill: ChatIllustration,
  },
  {
    n: "02",
    title: ["Processos", "automatizados"],
    text: "Tarefas repetitivas, cadastros, consultas, movimentação de informações, documentos, relatórios, follow-ups e outros processos.",
    Ill: ProcessIllustration,
  },
  {
    n: "03",
    title: ["Conexão de", "informações"],
    text: "Integração entre sistemas, dados e equipes. A informação circula sozinha em vez de depender de planilha e e-mail.",
    Ill: HubIllustration,
  },
  {
    n: "04",
    title: ["Soluções", "sob medida"],
    text: "Portais, dashboards e CRMs construídos para a realidade de cada negócio, com foco em resultado prático e mensurável.",
    Ill: DashboardIllustration,
  },
];

export function Solutions() {
  return (
    <section id="solucoes" data-theme="dark" className={cx(sectionPad, "bg-ink-deep text-paper")}>
      <Blob color="orange" className="top-20 -left-40 size-155 animate-drift opacity-35" />
      <Blob color="coral" className="-right-30 bottom-0 size-130 animate-drift opacity-30 [animation-delay:-6s]" />
      <Wrap>
        <Reveal className="mb-8.5 md:mb-14">
          <Kicker>Soluções</Kicker>
          <h2 className={cx(h2Class, "mt-5.5 mb-5")}>
            O que a gente faz,
            <br />
            <b className={cx("font-medium", gradText)}>na prática.</b>
          </h2>
          <p className={cx(subClass, "max-w-140")}>
            A solução pode envolver IA, automação, integração, software ou tudo isso junto. A tecnologia vem depois: primeiro,
            a gente entende o que precisa funcionar.
          </p>
        </Reveal>

        <SnapCarousel className="grid grid-cols-1 gap-4.5 lg:grid-cols-2">
          {CARDS.map(({ n, title, text, Ill }, i) => (
            <Reveal as="article" key={n} delay={i * 0.09} className="glass flex flex-col rounded-[30px] p-3 pb-5.5 md:p-4 md:pb-7.5">
              <Ill />
              <div className="px-2 pt-5 md:px-3.5 md:pt-6.5">
                <span className="font-mich text-[9.5px] tracking-[.3em] text-paper/60">{n}</span>
                <h3 className="mt-3 mb-2.5 text-[23px] md:text-[clamp(26px,2.3vw,34px)]">
                  {title[0]} <b className="font-medium">{title[1]}</b>
                </h3>
                <p className="max-w-130 text-[14.5px] text-paper/62 md:text-[15.5px]">{text}</p>
              </div>
            </Reveal>
          ))}
        </SnapCarousel>
      </Wrap>
    </section>
  );
}
