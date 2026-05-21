import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Documentación del Profesor Rubén Jiménez González',
  description: 'Formaciones interactivas Arquitecto Técnico — Edificación, BIM, planificación, energía, seguridad y tasación.',
  authors: [{ name: 'Profesor Rubén Jiménez González' }],
  robots: { index: false, follow: false }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C8102E'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
