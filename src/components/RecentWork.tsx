import { work } from "@/content/work";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "./Section";
import { WorkCard } from "./WorkCard";

export function RecentWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="work" title={dict.work.title} subtitle={dict.work.subtitle}>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item) => (
          <WorkCard key={item.slug} item={item} locale={locale} dict={dict} />
        ))}
      </div>
    </Section>
  );
}
