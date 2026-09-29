import Image from "next/image";
import { siteConfig } from "@/content/site";
import { asset } from "@/lib/asset";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "./Section";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about" title={dict.about.title}>
      <div className="grid gap-10 md:grid-cols-[1fr_14rem] md:items-start">
        <div className="space-y-5 text-lg leading-relaxed text-pretty text-muted">
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="order-first md:order-none">
          {siteConfig.photo ? (
            <Image
              src={asset(siteConfig.photo)}
              alt={dict.about.photoAlt}
              width={224}
              height={224}
              className="size-40 rounded-2xl border border-border object-cover md:size-56"
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid size-40 place-items-center rounded-2xl border border-border bg-card font-mono text-5xl font-bold text-accent md:size-56"
            >
              {siteConfig.initials}
            </div>
          )}
        </div>
      </div>

      <h3 className="mt-14 text-sm font-semibold tracking-wide text-foreground uppercase">
        {dict.about.stackTitle}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {siteConfig.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-card px-3 py-1 font-mono text-sm text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Section>
  );
}
