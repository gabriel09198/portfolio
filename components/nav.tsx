import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-line bg-bg/70 py-2 pr-2 pl-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <a href="#topo" className="font-serif text-2xl leading-none italic" aria-label="Início">
          gc<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href="#contato"
            className="ml-1 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}
