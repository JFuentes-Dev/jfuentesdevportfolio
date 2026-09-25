import Image from "next/image";
import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function ProjectCard({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  const { demo, repo } = project.links;
  const linkClass =
    "inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4";

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50">
      <div className="relative aspect-video border-b border-border bg-background">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--accent),transparent_60%)] opacity-25"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title[locale]}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description[locale]}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded bg-background px-2 py-0.5 font-mono text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
        {(demo || repo) && (
          <div className="mt-5 flex gap-5">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {dict.projects.demo}
                <ArrowUpRightIcon className="size-4" />
                <span className="sr-only">{dict.projects.opensInNewTab}</span>
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GitHubIcon className="size-4" />
                {dict.projects.code}
                <span className="sr-only">{dict.projects.opensInNewTab}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
