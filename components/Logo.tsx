/**
 * Logo construcción · paleta Ferrovial (blanco · negro · naranja).
 * Casco de obra naranja + escuadra negra. Limpio, alto contraste, TDAH-friendly.
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
      {fondo && <circle cx="32" cy="32" r="32" fill="#FFFFFF" />}

      {/* sombra suave */}
      <ellipse cx="32" cy="48" rx="20" ry="2.5" fill="#0F0F0F" opacity="0.15" />

      {/* casco naranja Ferrovial */}
      <path
        d="M 10 42 Q 10 16 32 16 Q 54 16 54 42 Z"
        fill="#F57C00"
        stroke="#0F0F0F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* ala frontal · naranja oscuro */}
      <rect x="8" y="40" width="48" height="6" rx="3" fill="#E65100" stroke="#0F0F0F" strokeWidth="2.5" />

      {/* cresta central · negro */}
      <path d="M 32 16 L 32 42" stroke="#0F0F0F" strokeWidth="3" strokeLinecap="round" />

      {/* escuadra · esquina superior izquierda */}
      <g transform="translate(13, 19) rotate(-22)">
        <path
          d="M 0 0 L 16 0 L 16 4 L 4 4 L 4 16 L 0 16 Z"
          fill="#0F0F0F"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* punto brillo */}
      <circle cx="22" cy="24" r="2.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}
