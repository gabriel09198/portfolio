import type { CSSProperties } from "react";

/* Illustrated previews for each project — pure markup, no screenshots. */

export function ProjectVisual({ slug, tint }: { slug: string; tint: string }) {
  const style = { "--tint": tint } as CSSProperties;
  if (slug === "opcg") return <OpcgVisual style={style} />;
  if (slug === "jota-nunes") return <JotaVisual style={style} />;
  return <AtosVisual style={style} />;
}

type VisualProps = { style: CSSProperties };

function wavePath(y: number, amp: number) {
  const crests = Array.from({ length: 14 }, (_, i) => ` T${120 + i * 60} ${y}`).join("");
  return `M0 ${y} Q30 ${y - amp} 60 ${y}${crests} V120 H0Z`;
}

const cards = [
  { rotate: -14, x: -78, from: "#1f3b8a", to: "#0d1a45", type: "Líder", power: "5000" },
  { rotate: 14, x: 78, from: "#b8871d", to: "#5a3d06", type: "Evento", power: "—" },
  { rotate: 0, x: 0, from: "#d23a24", to: "#6d140a", type: "Personagem", power: "7000" },
];

function OpcgVisual({ style }: VisualProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        ...style,
        background:
          "radial-gradient(120% 80% at 50% 115%, color-mix(in oklab, var(--tint) 45%, transparent), transparent 65%), linear-gradient(180deg, #0c0f1f, #09090d)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.25)_1px,transparent_1px)] bg-size-[36px_36px] opacity-30 mask-[linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="absolute top-[46%] left-1/2 h-[190px] w-[136px] -translate-x-1/2 -translate-y-1/2 sm:h-[212px] sm:w-[152px]">
        {cards.map((card) => (
          <div
            key={card.type}
            className="absolute inset-0 origin-bottom rounded-xl border border-white/25 p-1.5 shadow-[0_24px_60px_-12px_rgb(0_0_0/0.8)] transition-transform duration-700 ease-out [transform:rotate(var(--r))_translateX(var(--x))] group-hover/spot:[transform:rotate(calc(var(--r)*1.35))_translateX(calc(var(--x)*1.25))_translateY(-6px)]"
            style={
              {
                "--r": `${card.rotate}deg`,
                "--x": `${card.x}px`,
                background: `linear-gradient(160deg, ${card.from}, ${card.to})`,
              } as CSSProperties
            }
          >
            <div className="flex h-full flex-col justify-between rounded-lg border border-white/25 p-2.5">
              <div className="flex items-center justify-between">
                <span className="grid size-6 place-items-center rounded-full bg-black/45 font-mono text-[10px] text-white">
                  {card.type === "Líder" ? "L" : 4}
                </span>
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/75 uppercase">
                  {card.type}
                </span>
              </div>
              <div className="mx-auto grid size-16 place-items-center rounded-full border border-white/30 bg-white/10">
                <svg viewBox="0 0 24 24" className="size-8 text-white/85" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                  <path d="m12 4 1.8 5.6H19l-4.6 3.3 1.8 5.5L12 15l-4.2 3.4 1.8-5.5L5 9.6h5.2z" />
                </svg>
              </div>
              <div>
                <div className="h-1.5 w-4/5 rounded bg-white/55" />
                <div className="mt-1.5 h-1 w-1/2 rounded bg-white/30" />
                <p className="mt-2 text-right font-mono text-[9px] text-white/70">{card.power}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <svg
        className="absolute bottom-0 left-0 h-20 w-[calc(100%+60px)] animate-wave"
        viewBox="0 0 900 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={wavePath(58, 18)} fill="var(--tint)" opacity="0.22" />
        <path d={wavePath(82, 12)} fill="#0b1a3a" opacity="0.9" />
      </svg>

      <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-[11px] text-white/85 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-(--tint)" />
        ⇄ Nova solicitação de troca
      </div>
      <div className="absolute right-5 bottom-24 max-w-[180px] animate-float rounded-2xl rounded-br-sm border border-white/10 bg-white/10 px-3.5 py-2.5 text-xs text-white/90 backdrop-blur-md">
        Alguém tem o líder vermelho pra trocar?
      </div>
    </div>
  );
}

const memorialSections = ["Serviços preliminares", "Fundações", "Estrutura", "Alvenaria"];

function JotaVisual({ style }: VisualProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        ...style,
        background:
          "radial-gradient(90% 70% at 50% 100%, color-mix(in oklab, var(--tint) 30%, transparent), transparent 70%), linear-gradient(180deg, #0a1128, #090b14)",
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--tint) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--tint) 18%, transparent) 1px, transparent 1px), linear-gradient(color-mix(in oklab, var(--tint) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--tint) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 h-[250px] w-[196px] -translate-x-1/2 -translate-y-1/2 sm:h-[290px] sm:w-[226px]">
        <div className="absolute inset-0 translate-x-5 rotate-6 rounded-md bg-[#dcd8ce] opacity-40" />
        <div className="absolute inset-0 -rotate-3 rounded-md bg-[#f4f1ea] p-4 text-[#1c1c1c] shadow-[0_30px_70px_-15px_rgb(0_0_0/0.8)] transition-transform duration-700 ease-out group-hover/spot:rotate-0 sm:p-5">
          <p className="font-mono text-[7px] tracking-[0.2em] text-black/45 uppercase">Cadastro de obra</p>
          <p className="mt-1.5 text-[10px] leading-tight font-bold tracking-wide sm:text-[11px]">
            MEMORIAL DESCRITIVO
            <br />
            DO IMÓVEL
          </p>
          <div className="mt-3 h-px bg-black/15" />
          {memorialSections.map((section, i) => (
            <div key={section} className="mt-2.5">
              <p className="text-[7.5px] font-semibold tracking-wide uppercase">
                {i + 1}. {section}
              </p>
              <div className="mt-1 h-[3px] w-full rounded bg-black/12" />
              <div className="mt-[3px] h-[3px] w-4/5 rounded bg-black/12" />
            </div>
          ))}
          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between">
            <div className="h-px w-16 bg-black/40" />
            <p className="font-mono text-[6.5px] text-black/40">ENG. RESPONSÁVEL</p>
          </div>
        </div>
      </div>

      <div className="absolute top-5 left-5 hidden w-44 rounded-xl border border-white/10 bg-black/55 p-3 backdrop-blur-md sm:block">
        <div className="flex items-center justify-between font-mono text-[10px] text-white/70">
          <span>Etapa 2 de 3</span>
          <span className="text-(--tint)">66%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-(--tint)" />
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {["Obra", "Áreas", "Revisão"].map((step, i) => (
            <span
              key={step}
              className={`rounded px-1.5 py-0.5 text-[9px] ${i < 2 ? "bg-white/15 text-white" : "text-white/40"}`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-5 bottom-5 flex animate-float items-center gap-2.5 rounded-xl border border-white/10 bg-black/55 py-2 pr-3.5 pl-2 text-xs text-white/90 backdrop-blur-md">
        <span className="grid size-6 place-items-center rounded-lg bg-(--tint) text-[#08080a]">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
        Memorial.docx gerado
      </div>
    </div>
  );
}

const sales = [38, 52, 44, 61, 58, 72, 66, 80, 76, 92, 88, 104];
const goal = [45, 50, 55, 60, 64, 68, 72, 76, 80, 84, 88, 92];

function AtosVisual({ style }: VisualProps) {
  const chartH = 120;
  const max = 110;
  const goalLine = goal
    .map((v, i) => `${i === 0 ? "M" : "L"}${12 + i * 24} ${chartH - (v / max) * chartH}`)
    .join(" ");

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        ...style,
        background:
          "radial-gradient(90% 70% at 85% 0%, color-mix(in oklab, var(--tint) 28%, transparent), transparent 65%), linear-gradient(180deg, #08110d, #09090b)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.2)_1px,transparent_1px)] bg-size-[22px_22px] opacity-25" />

      <div className="absolute top-1/2 left-1/2 w-[86%] max-w-[430px] -translate-x-1/2 -translate-y-[42%] rounded-2xl border border-white/10 bg-[#0d1311]/90 p-4 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)] backdrop-blur sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase">Vendas</p>
            <p className="mt-1 text-sm font-medium text-white sm:text-base">Crescimento × Meta</p>
          </div>
          <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/60">
            2025
          </span>
        </div>

        <svg viewBox={`0 0 288 ${chartH + 16}`} className="mt-4 w-full" aria-hidden="true">
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2="288" y1={chartH * f} y2={chartH * f} stroke="rgb(255 255 255 / 0.06)" />
          ))}
          {sales.map((v, i) => {
            const h = (v / max) * chartH;
            return (
              <rect
                key={i}
                x={4 + i * 24}
                y={chartH - h}
                width="16"
                height={h}
                rx="4"
                fill="var(--tint)"
                opacity={i === sales.length - 1 ? 1 : 0.3 + i * 0.04}
              />
            );
          })}
          <path d={goalLine} fill="none" stroke="rgb(255 255 255 / 0.7)" strokeWidth="1.5" strokeDasharray="4 4" />
          {"JFMAMJJASOND".split("").map((m, i) => (
            <text key={i} x={12 + i * 24} y={chartH + 13} textAnchor="middle" className="fill-white/35 font-mono text-[8px]">
              {m}
            </text>
          ))}
        </svg>

        <div className="mt-3 flex gap-4 font-mono text-[10px] text-white/55">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-(--tint)" /> Realizado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-px w-3 border-t border-dashed border-white/70" /> Meta
          </span>
        </div>
      </div>

      <div className="absolute top-5 left-5 hidden animate-float rounded-xl border border-white/10 bg-black/55 px-3.5 py-2.5 backdrop-blur-md sm:block">
        <p className="font-mono text-[9px] tracking-[0.16em] text-white/45 uppercase">Última venda</p>
        <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-white">
          Hoje, 14:32
          <span className="rounded-full bg-(--tint)/20 px-1.5 py-0.5 font-mono text-[9px] text-(--tint)">↑ meta</span>
        </p>
      </div>
    </div>
  );
}
