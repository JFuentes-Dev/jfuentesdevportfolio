import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { locales } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}`]));

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
