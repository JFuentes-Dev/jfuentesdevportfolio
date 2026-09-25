"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  // Reemplaza solo el primer segmento (/es/... -> /en/...) para conservar la ruta actual.
  const hrefFor = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  };

  return (
    <nav aria-label={label} className="flex rounded-md border border-border p-0.5 text-xs font-medium">
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            lang={target}
            aria-current={active ? "true" : undefined}
            className={`rounded px-2 py-1 uppercase transition-colors ${
              active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {target}
          </Link>
        );
      })}
    </nav>
  );
}
