import type { NextConfig } from "next";

// En GitHub Actions, GITHUB_REPOSITORY = "usuario/repo". Si el repo no es
// el de páginas de usuario (usuario.github.io), el sitio se sirve bajo
// /repo y hay que anteponer ese basePath a rutas y assets.
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPage = repository ? repository.endsWith(".github.io") : true;
const basePath = repository && !isUserPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
