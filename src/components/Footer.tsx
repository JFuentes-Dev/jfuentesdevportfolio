import { siteConfig } from "@/content/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import { MailIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-muted">{dict.contact.text}</p>
        {siteConfig.email && (
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MailIcon className="size-4" />
            {dict.contact.cta}
          </a>
        )}
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
