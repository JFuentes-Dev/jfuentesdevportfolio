export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const ogLocales: Record<Locale, string> = {
  es: "es_CL",
  en: "en_US",
};
