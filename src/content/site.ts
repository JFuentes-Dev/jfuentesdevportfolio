export const siteConfig = {
  name: "Jorge Fuentes",
  initials: "JF",
  // En GitHub Actions lo define el workflow de deploy con la URL de Pages (o el dominio propio).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "fuentesvargas.js@gmail.com",
  // Ruta en /public. Vacío = se muestran las iniciales.
  photo: "/foto.jpg",
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
