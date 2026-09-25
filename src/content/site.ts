const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "Jorge Fuentes",
  initials: "JF",
  // Dominio propio: define NEXT_PUBLIC_SITE_URL en Vercel. Si no, usa el dominio de producción de Vercel.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"),
  // TODO: correo personal de contacto (no usar el corporativo). Vacío = se oculta el botón.
  email: "",
  // TODO: ruta a tu foto en /public (ej. "/foto.jpg"). Vacío = se muestran las iniciales.
  photo: "",
  links: {
    // TODO: confirmar usuario de GitHub y agregar LinkedIn. Vacío = se oculta el ícono.
    github: "https://github.com/JFuentes-Dev",
    linkedin: "",
  },
  // TODO: ajustar a tu stack real.
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Odoo",
    "Flutter",
    "Google Cloud",
    "PostgreSQL",
    "Git",
  ],
};
