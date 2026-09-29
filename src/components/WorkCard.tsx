import Image from "next/image";
import type { Work } from "@/content/work";
import { asset } from "@/lib/asset";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { WorkLogo } from "./WorkLogo";

export function WorkCard({ item, locale, dict }: { item: Work; locale: Locale; dict: Dictionary }) {
  const cta = item.linkType === "site" ? dict.work.visit : dict.work.code;

  return (
    <article className="group">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative isolate block aspect-[3/2] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-xl"
        style={{ backgroundColor: item.theme.bg }}
      >
        <span className="sr-only">
          {item.name}: {cta} {dict.work.opensInNewTab}
        </span>

        {/* Captura del sitio teñida con el color de la marca */}
        <Image
          src={asset(item.image)}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="-z-10 object-cover object-top opacity-35 blur-[2px] grayscale transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ mixBlendMode: item.theme.blend }}
        />

        {/* Estado normal: logo centrado */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center p-6 transition-all duration-300 group-hover:scale-95 group-hover:opacity-0 group-focus-visible:opacity-0"
        >
          <WorkLogo name={item.slug} />
        </div>

        {/* Hover / foco: descripción + botón */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-stone-950/90 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <p className="max-w-xs text-base leading-snug font-medium text-pretty sm:text-lg">
            {item.description[locale]}
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-teal-400 px-5 py-2 text-sm font-semibold">
            {cta}
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>

      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="shrink-0 font-mono text-xs text-muted">{item.period[locale]}</p>
        </div>
        <p className="mt-0.5 text-sm text-muted">{item.role[locale]}</p>
        {/* Sin hover (táctil) la descripción del overlay no se ve: se repite bajo la tarjeta */}
        <p className="mt-2 text-sm leading-relaxed text-muted [@media(hover:hover)]:hidden">
          {item.description[locale]}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li key={tag} className="rounded bg-card px-2 py-0.5 font-mono text-xs text-muted ring-1 ring-border">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
