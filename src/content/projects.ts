import type { Locale } from "@/i18n/config";

export type Project = {
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  links: { demo?: string; repo?: string };
  // Ruta en /public, ej. "/projects/mi-proyecto.png" (16:9). Sin imagen se muestra un placeholder.
  image?: string;
};

// TODO: reemplazar por tus proyectos reales. Ojo si el repo es público: sin nombres de clientes
// ni datos internos; describe el trabajo de forma genérica.
export const projects: Project[] = [
  {
    slug: "portafolio",
    title: { es: "Portafolio personal", en: "Personal portfolio" },
    description: {
      es: "Este mismo sitio: bilingüe, estático y desplegado en Vercel con cada push a main.",
      en: "This very site: bilingual, statically rendered and deployed to Vercel on every push to main.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: { repo: "https://github.com/JFuentes-Dev/portafolio" },
  },
  {
    slug: "proyecto-2",
    title: { es: "Proyecto de ejemplo", en: "Sample project" },
    description: {
      es: "Describe aquí el problema que resolviste, cómo lo hiciste y el resultado.",
      en: "Describe the problem you solved, how you solved it and the outcome.",
    },
    tags: ["Flutter", "Firebase"],
    links: {},
  },
  {
    slug: "proyecto-3",
    title: { es: "Otro proyecto de ejemplo", en: "Another sample project" },
    description: {
      es: "Una integración, una API o una herramienta interna que te enorgullezca.",
      en: "An integration, an API or an internal tool you're proud of.",
    },
    tags: ["Python", "Google Cloud"],
    links: {},
  },
];
