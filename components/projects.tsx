import { profile, projects, type Project } from "@/lib/data";
import { ArrowUpRight, GitHubIcon } from "./icons";
import { ProjectVisual } from "./project-visual";
import { SectionHeading, Serif } from "./section-heading";
import { Spotlight } from "./spotlight";

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        index="01"
        label="Trabalho"
        title={
          <>
            Projetos <Serif>selecionados</Serif>
          </>
        }
      >
        Aplicações publicadas, feitas solo e em equipe — de uma comunidade de card game a sistemas
        de engenharia e vendas.
      </SectionHeading>

      <div className="mt-16 flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="reveal group mt-6 flex items-center justify-between gap-4 rounded-4xl border border-dashed border-line-strong px-6 py-6 text-muted transition-colors hover:border-accent/60 hover:text-fg sm:px-10"
      >
        <span className="flex items-center gap-3">
          <GitHubIcon className="size-5" />
          Mais repositórios e estudos no GitHub
        </span>
        <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <Spotlight
      color={project.tint}
      className="reveal overflow-hidden rounded-4xl border border-line bg-surface"
    >
      <article className="grid lg:grid-cols-2">
        <div
          className={`relative min-h-[320px] overflow-hidden border-line sm:min-h-[400px] ${
            flipped ? "border-b lg:order-2 lg:border-b-0 lg:border-l" : "border-b lg:border-r lg:border-b-0"
          }`}
        >
          <ProjectVisual slug={project.slug} tint={project.tint} />
        </div>

        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted">
            <span>
              {String(index + 1).padStart(2, "0")} — {project.year}
            </span>
            <span className="rounded-full border border-line px-2.5 py-1">{project.role}</span>
          </div>

          <h3 className="mt-8 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-1 font-serif text-xl italic" style={{ color: project.tint }}>
            {project.tagline}
          </p>
          <p className="mt-5 leading-relaxed text-pretty text-muted">{project.description}</p>

          <ul className="mt-6 space-y-2.5 text-sm text-fg/90">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-[7px] size-1.5 shrink-0 rounded-full"
                  style={{ background: project.tint }}
                />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-white/3 px-3 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
              >
                Ver ao vivo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              <GitHubIcon className="size-4" /> Código
            </a>
          </div>
        </div>
      </article>
    </Spotlight>
  );
}
