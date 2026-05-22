/**
 * Logo de la marca docente.
 * Casco de obra (amarillo) + escuadra/regla (rojo) = construcción.
 * Diseñado para alta legibilidad TDAH/dislexia: silueta clara, 3 colores fuertes, sin texto interior.
 */
export function Logo({ size = 44, fondo = false }: { size?: number; fondo?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Logo construcción · Profesor Rubén Jiménez González"
      className="shrink-0"
    >
      {/* fondo circular opcional */}
      {fondo && <circle cx="32" cy="32" r="32" fill="#FFF8E1" />}

      {/* base del casco (sombra) */}
      <ellipse cx="32" cy="46" rx="22" ry="3" fill="#1A1A1A" opacity="0.15" />

      {/* casco amarillo: forma de cúpula */}
      <path
        d="M 10 42 Q 10 16 32 16 Q 54 16 54 42 Z"
        fill="#FFC72C"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* ala frontal del casco */}
      <rect x="8" y="40" width="48" height="6" rx="3" fill="#EF6C00" stroke="#1A1A1A" strokeWidth="2" />

      {/* cresta del casco */}
      <path d="M 32 16 L 32 42" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />

      {/* escuadra cruzada (rojo) — esquina superior izquierda */}
      <g transform="translate(12, 18) rotate(-22)">
        <path d="M 0 0 L 16 0 L 16 4 L 4 4 L 4 16 L 0 16 Z" fill="#C8102E" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      {/* punto blanco · brillo casco */}
      <circle cx="22" cy="24" r="3" fill="white" opacity="0.7" />
    </svg>
  );
}
