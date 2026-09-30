import { timeline } from "@/lib/data";
import { Serif } from "./section-heading";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            <span className="text-accent">03</span> / Sobre
          </p>
          <p className="mt-8 text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-balance sm:text-[2.6rem]">
            Sou de Aracaju, Sergipe, e gosto de transformar necessidades reais em{" "}
            <span className="text-accent">
              <Serif>produtos simples de usar</Serif>
            </span>{" "}
            — seja o fluxo de uma obra, o painel de vendas de uma empresa ou a comunidade de card
            game dos amigos.
          </p>
          <p className="mt-8 max-w-xl leading-relaxed text-pretty text-muted">
            Já desenvolvi projetos com diversas linguagens e frameworks. Hoje foco meus estudos e
            trabalhos em C#, Next.js, React e Python, explorando tanto o back-end quanto o
            front-end — sozinho ou em equipe.
          </p>
        </div>

        <div className="reveal lg:col-span-5">
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Trajetória</p>
            <ol className="relative mt-8 space-y-7 border-l border-line pl-6">
              {timeline.map((item, i) => (
                <li key={`${item.when}-${item.title}`} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-surface ${
                      i === 0 ? "bg-accent" : "bg-dim"
                    }`}
                  />
                  <p className="font-mono text-xs text-muted">{item.when}</p>
                  <p className="mt-1 font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-pretty text-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
