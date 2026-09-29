# Portafolio

Sitio personal de Jorge Fuentes. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4,
bilingüe (`/es`, `/en`) y 100 % estático. Hosteado en GitHub Pages:
https://jfuentes-dev.github.io/portfolio/

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
| Trabajo reciente | `src/content/work.ts` (capturas en `public/work/`) |
| Textos de la interfaz (ES / EN) | `src/i18n/dictionaries/es.json` y `en.json` |
| Colores (claro / oscuro) | tokens en `src/app/globals.css` |

Los dos diccionarios deben tener las mismas claves: TypeScript falla el build si falta una.

## Estructura

- `src/app/[locale]/`: layout, página y metadata por idioma (hreflang, Open Graph).
- `src/app/page.tsx`: la raíz `/` redirige a `/es/` (en un sitio estático no hay servidor que
  detecte el idioma del navegador).
- `src/proxy.ts`: redirige `/` al idioma preferido (`Accept-Language`), pero solo en `npm run dev`;
  el export estático lo ignora.
- `src/app/sitemap.ts`, `robots.ts`, `icon.svg`, `[locale]/opengraph-image.tsx`: SEO.
- `src/lib/asset.ts`: antepone el `basePath` a las rutas de `/public`. Úsalo en todo `src` de
  `next/image` o `<img>`.

## Deploy

`.github/workflows/deploy.yml` compila el sitio (`output: "export"`) y lo publica en GitHub Pages
en cada push a `main`. Como el repo no se llama `<usuario>.github.io`, el sitio vive bajo
`/portfolio`: `next.config.ts` calcula ese `basePath` a partir del nombre del repo, y el workflow
le pasa la URL de Pages en `NEXT_PUBLIC_SITE_URL` para el sitemap y las URLs canónicas.

Para usar un dominio propio: configúralo en *Settings → Pages → Custom domain* y el workflow
tomará la nueva URL. Si el sitio queda en la raíz del dominio, hay que dejar `basePath` vacío.
