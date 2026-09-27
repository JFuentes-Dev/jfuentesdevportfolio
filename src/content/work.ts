import type { Locale } from "@/i18n/config";

export type WorkLogo = "sellside" | "juria" | "portfolio";

export type Work = {
  slug: WorkLogo;
  name: string;
  url: string;
  // "site" muestra "Visitar sitio"; "code" muestra "Ver código".
  linkType: "site" | "code";
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  // Captura en /public/work (se tiñe con el color de la marca).
  image: string;
  theme: {
    bg: string;
    // multiply para capturas claras, screen para capturas oscuras.
    blend: "multiply" | "screen";
  };
};

export const work: Work[] = [
  {
    slug: "sellside",
    name: "Sellside",
    url: "https://www.sellside.cl",
    linkType: "site",
    role: {
      es: "Software developer e implementador Odoo",
      en: "Software developer & Odoo implementer",
    },
    period: { es: "Agosto 2025 – actualidad", en: "August 2025 – present" },
    description: {
      es: "Módulos a medida en Odoo 18, integraciones REST API con ERPs externos, sincronización automatizada con tareas cron y reportes con lógica de negocio compleja.",
      en: "Custom Odoo 18 modules, REST API integrations with external ERPs, automated cron-based data sync and reports with complex business logic.",
    },
    tags: ["Odoo 18", "Python", "OWL", "PostgreSQL"],
    image: "/work/sellside.png",
    theme: { bg: "#f08c00", blend: "multiply" },
  },
  {
    slug: "juria",
    name: "Juria",
    url: "https://www.juria.cl",
    linkType: "site",
    role: { es: "Diseño y desarrollo end-to-end", en: "End-to-end design & development" },
    period: { es: "2026", en: "2026" },
    description: {
      es: "Plataforma de divorcios en línea: evaluación del caso en cinco minutos, precio cerrado y seguimiento del caso desde la cuenta del cliente.",
      en: "Online divorce platform: case assessment in five minutes, fixed pricing and case tracking from the client's account.",
    },
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/work/juria.png",
    theme: { bg: "#4f3d6e", blend: "multiply" },
  },
  {
    slug: "portfolio",
    name: "Portafolio",
    // TODO: si el repo queda privado, cambia a la URL del sitio y linkType "site".
    url: "https://github.com/JFuentes-Dev/portafolio",
    linkType: "code",
    role: { es: "Este sitio", en: "This site" },
    period: { es: "2026", en: "2026" },
    description: {
      es: "Sitio bilingüe y estático, con SEO por idioma, modo oscuro y deploy continuo en Vercel.",
      en: "Bilingual static site with per-locale SEO, dark mode and continuous deployment on Vercel.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/work/portafolio.png",
    theme: { bg: "#134e4a", blend: "screen" },
  },
];
