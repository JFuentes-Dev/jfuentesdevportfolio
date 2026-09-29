// next/image no antepone basePath a `src`; los archivos de /public lo necesitan a mano.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
