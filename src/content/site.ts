const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "Jorge Fuentes",
  initials: "JF",
  // Dominio propio: define NEXT_PUBLIC_SITE_URL en Vercel. Si no, usa el dominio de producción de Vercel.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  email: "j98fuentes@gmail.com",
  // TODO: ruta a tu foto en /public (ej. "/foto.jpg"). Vacío = se muestran las iniciales.
  photo: "",
  links: {
    // TODO: agregar LinkedIn. Vacío = se oculta el ícono.
    github: "https://github.com/JFuentes-Dev",
    linkedin: "",
  },
  stack: [
    "Odoo 18",
    "Python",
    "OWL / JavaScript",
    "PostgreSQL",
    "REST APIs",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "Unity",
    "Git",
  ],
};
