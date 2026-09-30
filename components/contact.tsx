import type { ReactNode } from "react";
import { profile } from "@/lib/data";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { LocalTime } from "./local-time";
import { Serif } from "./section-heading";

export function Contact() {
  const links = [
    {
      href: profile.linkedin,
      label: "LinkedIn",
      handle: "/in/gabriel-lima-de-carvalho",
      icon: <LinkedInIcon className="size-6 sm:size-8" />,
    },
    {
      href: profile.github,
      label: "GitHub",
      handle: "@gabriel09198",
      icon: <GitHubIcon className="size-6 sm:size-8" />,
    },
    ...(profile.email
      ? [
          {
            href: `mailto:${profile.email}`,
            label: "E-mail",
            handle: profile.email,
            icon: <MailIcon className="size-6 sm:size-8" />,
          },
        ]
      : []),
  ];

  return (
    <section id="contato" className="relative isolate overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="absolute -bottom-72 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/12 blur-[160px]"
      />
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40">
        <p className="reveal font-mono text-xs tracking-[0.2em] text-muted uppercase">
          <span className="text-accent">04</span> / Contato
        </p>
        <h2 className="reveal mt-6 text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.055em]">
          Vamos construir
          <br />
          algo{" "}
          <span className="text-accent">
            <Serif>juntos?</Serif>
          </span>
        </h2>
        <p className="reveal mt-8 max-w-lg text-lg text-pretty text-muted">
          Estou aberto a conversar sobre oportunidades, freelas e projetos. Me chama no LinkedIn ou
          dá uma olhada no meu código no GitHub.
        </p>

        <div className="reveal mt-16 border-t border-line">
          {links.map((link) => (
            <ContactRow key={link.label} {...link} />
          ))}
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {profile.fullName}</span>
          <span>
            {profile.location} · <LocalTime timeZone={profile.timeZone} />
          </span>
          <a href="#topo" className="transition-colors hover:text-fg">
            Voltar ao topo ↑
          </a>
        </div>
        <p
          aria-hidden="true"
          className="pointer-events-none -mb-[3.5vw] text-center text-[15.5vw] leading-none font-semibold tracking-[-0.07em] whitespace-nowrap text-white/4 select-none"
        >
          gabriel carvalho
        </p>
      </footer>
    </section>
  );
}

function ContactRow({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors hover:text-accent sm:py-8"
    >
      <span className="flex items-center gap-4 text-3xl font-medium tracking-tight sm:gap-6 sm:text-5xl">
        {icon}
        {label}
      </span>
      <span className="flex items-center gap-6">
        <span className="hidden font-mono text-sm text-muted md:block">{handle}</span>
        <span className="grid size-12 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink sm:size-14">
          <ArrowUpRight className="size-5" />
        </span>
      </span>
    </a>
  );
}
