import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        marca: {
          // BASE: blanco + negro (alta legibilidad TDAH)
          blanco: '#FFFFFF',
          negro: '#0F0F0F',
          carbon: '#1A1A1A',
          gris: '#666666',
          grisClaro: '#E5E5E5',
          fondo: '#FAFAFA',

          // ACENTO PRINCIPAL: naranja Ferrovial
          naranja: '#F57C00',
          naranjaOscuro: '#E65100',
          naranjaClaro: '#FF9800',

          // ACENTO SECUNDARIO: amarillo oscuro (contrasta con blanco)
          amarillo: '#FFB300',
          amarilloClaro: '#FFC72C',
          crema: '#FFF8E1',

          // SEMÁNTICA (uso restringido)
          exito: '#2E7D32',
          alerta: '#C8102E',
          aviso: '#EF6C00',

          // PARA GRÁFICOS (uso solo en visualizaciones)
          rojo: '#C8102E',
          azul: '#1565C0',
          verde: '#2E7D32',
          morado: '#6A1B9A',
          turquesa: '#00838F',
          rosa: '#C2185B'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['system-ui', 'Segoe UI', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 0.8s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
};

export default config;
