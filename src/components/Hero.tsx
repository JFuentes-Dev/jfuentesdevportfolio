import { siteConfig } from "@/content/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SocialLinks } from "./SocialLinks";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="font-mono text-sm text-accent">{dict.hero.greeting}</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-2xl font-medium text-muted sm:text-3xl">{dict.hero.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
          {dict.hero.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {dict.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-card"
          >
            {dict.hero.ctaContact}
          </a>
          <div className="ml-1">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
