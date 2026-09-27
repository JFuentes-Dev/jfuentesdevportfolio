import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { RecentWork } from "@/components/RecentWork";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <RecentWork locale={locale} dict={dict} />
    </>
  );
}
