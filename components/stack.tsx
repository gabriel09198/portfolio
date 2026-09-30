import { languages, stackGroups } from "@/lib/data";
import { SectionHeading, Serif } from "./section-heading";
import { Spotlight } from "./spotlight";

// Bento placement for the five groups around the languages card.
const placement = ["lg:col-span-2", "", "", "lg:col-span-2", ""];

export function Stack() {
  const total = languages.reduce((sum, lang) => sum + lang.bytes, 0);
  const share = languages.map((lang) => ({ ...lang, pct: (lang.bytes / total) * 100 }));
  const [top] = share;

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="02"
        label="Ferramentas"
        title={
          <>
            Stack & <Serif>ferramentas</Serif>
          </>
        }
      >
        O que uso no dia a dia — e que aparece de verdade nos projetos publicados.
      </SectionHeading>

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stackGroups.slice(0, 1).map((group) => (
          <StackCard key={group.title} group={group} index={0} className={placement[0]} />
        ))}

        <Spotlight className="reveal flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8 md:row-span-2">
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">No GitHub</p>
          <p className="mt-6 font-serif text-8xl leading-none text-accent italic">
            {Math.round(top.pct)}%
          </p>
          <p className="mt-2 text-lg">do código público é {top.name}</p>

          <div className="mt-auto pt-10">
            <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
              {share.map((lang) => (
                <span
                  key={lang.name}
                  className="h-full min-w-1"
                  style={{ width: `${lang.pct}%`, background: lang.color }}
                />
              ))}
            </div>
            <ul className="mt-5 space-y-2 font-mono text-xs">
              {share.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-muted">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full" style={{ background: lang.color }} />
                    {lang.name}
                  </span>
                  <span className="text-fg tabular-nums">{lang.pct.toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Spotlight>

        {stackGroups.slice(1).map((group, i) => (
          <StackCard key={group.title} group={group} index={i + 1} className={placement[i + 1]} />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  group,
  index,
  className,
}: {
  group: (typeof stackGroups)[number];
  index: number;
  className: string;
}) {
  return (
    <Spotlight className={`reveal rounded-3xl border border-line bg-surface p-6 sm:p-8 ${className}`}>
      <div className="flex items-center justify-between font-mono text-xs tracking-[0.2em] text-muted uppercase">
        <span>{group.title}</span>
        <span className="text-dim">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line bg-white/3 px-3.5 py-1.5 text-sm text-fg/85 transition-colors hover:border-accent/50 hover:text-fg"
          >
            {item}
          </li>
        ))}
      </ul>
    </Spotlight>
  );
}
