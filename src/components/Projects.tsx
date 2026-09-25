import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="projects" title={dict.projects.title} subtitle={dict.projects.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
        ))}
      </div>
    </Section>
  );
}
