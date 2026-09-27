import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import type { WorkLogo as WorkLogoName } from "@/content/work";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });

// Réplica del logo de juria.cl (JUR + columna de balanza + A), en blanco.
function JuriaLogo({ size = 56 }: { size?: number }) {
  const letter = { fontSize: size, lineHeight: 1, letterSpacing: "-0.02em", transform: "scaleX(0.9)" };
  return (
    <div className={`${archivo.className} flex items-end text-white`}>
      <span style={{ ...letter, transformOrigin: "left", marginRight: -size * 0.12 - 2 }}>JUR</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 26 36"
        width={size * 0.55}
        height={size * 0.692}
        style={{ marginBottom: size * 0.1192 }}
      >
        <rect x="2" y="0" width="22" height="5" fill="#fff" />
        <rect x="10" y="5" width="6" height="26" fill="#fff" />
        <rect x="2" y="31" width="22" height="5" fill="#fff" />
        <path d="M4.5 5v5M22 5v5" stroke="oklch(88% 0.05 300)" strokeWidth="1" />
        <path
          d="M1 10v1.5a3.5 3.5 0 0 0 7 0V10M18 10v1.5a3.5 3.5 0 0 0 7 0V10"
          fill="none"
          stroke="oklch(88% 0.05 300)"
          strokeWidth="1"
        />
      </svg>
      <span style={{ ...letter, transformOrigin: "left", marginLeft: size * -0.02 + 0.75 }}>A</span>
    </div>
  );
}

function SellsideLogo() {
  return (
    <div className="flex items-center gap-3 text-white">
      <span className="grid size-16 place-items-center rounded-2xl bg-white p-2 shadow-lg">
        <Image src="/work/sellside-mark.png" alt="" width={48} height={48} />
      </span>
      <span className="text-4xl font-bold tracking-tight">Sellside</span>
    </div>
  );
}

function PortfolioLogo() {
  return (
    <div className="flex flex-col items-center font-mono text-white">
      <span className="text-6xl font-bold tracking-tight">
        JF<span className="text-teal-300">.</span>
      </span>
      <span className="mt-2 text-xs tracking-[0.4em] text-teal-100/80 uppercase">portafolio</span>
    </div>
  );
}

export function WorkLogo({ name }: { name: WorkLogoName }) {
  switch (name) {
    case "sellside":
      return <SellsideLogo />;
    case "juria":
      return <JuriaLogo />;
    case "portfolio":
      return <PortfolioLogo />;
  }
}
