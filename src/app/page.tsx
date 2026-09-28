import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  const target = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${defaultLocale}/`;

  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </head>
      <body>
        <p>
          Redirecting to <a href={target}>{target}</a>...
        </p>
      </body>
    </html>
  );
}
