import Link from "next/link";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { href: "#about", label: dict.nav.about },
    { href: "#work", label: dict.nav.work },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${locale}`} className="font-mono text-sm font-semibold tracking-tight">
          {siteConfig.initials}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav aria-label="Main">
            <ul className="flex gap-3 text-sm text-muted sm:gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
        </div>
      </div>
    </header>
  );
}
