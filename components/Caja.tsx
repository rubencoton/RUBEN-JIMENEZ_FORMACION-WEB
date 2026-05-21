type TipoCaja = 'truco' | 'aviso' | 'obra' | 'ejemplo' | 'norma' | 'atajo' | 'cliente' | 'dato' | 'info';

const CONFIG: Record<TipoCaja, { icono: string; color: string; fondo: string; etiqueta: string }> = {
  truco: { icono: '💡', color: '#EF6C00', fondo: '#FFF3E0', etiqueta: 'TRUCO' },
  aviso: { icono: '⚠️', color: '#C8102E', fondo: '#FFEBEE', etiqueta: 'AVISO' },
  obra: { icono: '🏗️', color: '#1565C0', fondo: '#E3F2FD', etiqueta: 'EN OBRA' },
  ejemplo: { icono: '🧪', color: '#2E7D32', fondo: '#E8F5E9', etiqueta: 'EJEMPLO' },
  norma: { icono: '📜', color: '#6A1B9A', fondo: '#F3E5F5', etiqueta: 'NORMATIVA' },
  atajo: { icono: '⚡', color: '#6A1B9A', fondo: '#F3E5F5', etiqueta: 'ATAJO' },
  cliente: { icono: '🤝', color: '#00838F', fondo: '#E0F7FA', etiqueta: 'AL CLIENTE' },
  dato: { icono: '📊', color: '#1565C0', fondo: '#E3F2FD', etiqueta: 'DATO' },
  info: { icono: 'ℹ️', color: '#37474F', fondo: '#ECEFF1', etiqueta: 'INFO' }
};

export function Caja({
  tipo = 'info',
  titulo,
  children
}: {
  tipo?: TipoCaja;
  titulo?: string;
  children: React.ReactNode;
}) {
  const cfg = CONFIG[tipo];
  return (
    <div
      className="my-5 rounded-xl overflow-hidden border-l-8 shadow-sm"
      style={{ borderLeftColor: cfg.color, background: cfg.fondo }}
    >
      <div className="px-5 py-2 font-extrabold text-xs uppercase tracking-wider" style={{ color: cfg.color }}>
        {cfg.icono} {cfg.etiqueta}
        {titulo && <span className="text-marca-carbon ml-2 normal-case">· {titulo}</span>}
      </div>
      <div className="px-5 pb-4 text-marca-carbon leading-relaxed">{children}</div>
    </div>
  );
}
