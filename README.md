# Portafolio

Sitio personal de Jorge Fuentes. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4,
bilingüe (`/es`, `/en`) y 100 % estático. Hosteado en Vercel.

## Desarrollo

Requiere Node ≥ 20.9 (recomendado 22 LTS).

```bash
npm install
npm run dev      # http://localhost:3000 → redirige a /es o /en según el navegador
npm run lint
npm run build
```

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Nombre, correo, foto, redes, stack | `src/content/site.ts` |
| Proyectos | `src/content/projects.ts` (imágenes en `public/projects/`) |
| Textos de la interfaz (ES / EN) | `src/i18n/dictionaries/es.json` y `en.json` |
| Colores (claro / oscuro) | tokens en `src/app/globals.css` |

Los dos diccionarios deben tener las mismas claves: TypeScript falla el build si falta una.

## Estructura

- `src/app/[locale]/`: layout, página y metadata por idioma (hreflang, Open Graph).
- `src/proxy.ts`: redirige `/` al idioma preferido (`Accept-Language`).
- `src/app/sitemap.ts`, `robots.ts`, `icon.svg`, `[locale]/opengraph-image.tsx`: SEO.

## Deploy

Conectado a Vercel desde GitHub: cada push a `main` despliega a producción y cada PR genera
un preview. Con dominio propio, define `NEXT_PUBLIC_SITE_URL` (ej. `https://midominio.cl`) en
*Vercel → Settings → Environment Variables* para que el sitemap y las URLs canónicas lo usen.
