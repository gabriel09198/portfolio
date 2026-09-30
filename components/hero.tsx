import Image from "next/image";
import type { CSSProperties } from "react";
import { profile, stats } from "@/lib/data";
import { ArrowDown, GitHubIcon, LinkedInIcon } from "./icons";
import { LocalTime } from "./local-time";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.045)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_80%_70%_at_50%_0%,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-48 -right-40 -z-10 size-[620px] rounded-full bg-accent/15 blur-[150px]"
      />

      <div className="mx-auto max-w-6xl px-4 pt-36 pb-16 sm:px-6 lg:pt-44">
        <div className="grid items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="intro inline-flex items-center gap-2.5 rounded-full border border-line bg-white/3 px-3.5 py-1.5 font-mono text-xs text-muted"
              style={delay(0)}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {profile.role} — {profile.location}
            </p>

            <h1 className="mt-8 text-[clamp(3.6rem,13vw,10rem)] leading-[0.86] font-semibold tracking-[-0.055em]">
              <span className="intro block" style={delay(100)}>
                Gabriel
              </span>
              <span
                className="intro block pb-2 font-serif text-[1.08em] font-normal tracking-[-0.03em] text-accent italic"
                style={delay(200)}
              >
                Carvalho
              </span>
            </h1>

            <p
              className="intro mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl"
              style={delay(320)}
            >
              Crio aplicações web completas com{" "}
              <span className="text-fg">Next.js, React e TypeScript</span> — do banco de dados à
              interface — e sigo me aprofundando em <span className="text-fg">C# e Python</span> no
              back-end.
            </p>

            <div className="intro mt-10 flex flex-wrap items-center gap-3" style={delay(440)}>
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-shadow hover:shadow-[0_0_48px_-6px] hover:shadow-accent/60"
              >
                Ver projetos
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
              >
                <GitHubIcon className="size-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="intro relative mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none" style={delay(260)}>
            <div className="group relative aspect-4/5 overflow-hidden rounded-4xl border border-line bg-surface">
              <Image
                src={profile.avatar}
                alt={`Foto de ${profile.name}`}
                fill
                preload
                sizes="(min-width: 1024px) 360px, 320px"
                className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/10 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-line bg-bg/60 px-4 py-3 font-mono text-[11px] text-muted backdrop-blur-md">
                <span className="text-fg">{profile.location}, BR</span>
                <span>
                  <LocalTime timeZone={profile.timeZone} /> · GMT-3
                </span>
              </div>
            </div>

            <div className="absolute -top-12 -left-12 hidden size-32 rounded-full border border-line bg-bg/80 p-1.5 backdrop-blur-md sm:block" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="size-full animate-spin-slow">
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-fg font-mono text-[8.5px] uppercase">
                  <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">
                    Full stack • Next.js • React • C# •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto grid size-11 place-items-center rounded-full bg-accent font-serif text-2xl text-accent-ink italic">
                g
              </span>
            </div>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="intro pr-4" style={delay(560 + i * 80)}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight sm:text-5xl">{stat.value}</dd>
              <dd className="mt-2 max-w-[18ch] text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
