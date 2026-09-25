import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "es");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0c0a09",
          color: "#f5f5f4",
        }}
      >
        <div style={{ fontSize: 32, color: "#2dd4bf", fontFamily: "monospace" }}>
          {`${siteConfig.initials}.`}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 44, color: "#a8a29e", marginTop: 12 }}>{dict.hero.role}</div>
      </div>
    ),
    size,
  );
}
