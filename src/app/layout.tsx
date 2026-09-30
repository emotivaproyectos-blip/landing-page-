import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RiverTech | Tu operación fluvial, en una sola visión',
  description:
    'Experiencia visual cinematográfica interactiva de RiverTech: monitoreo fluvial, seguimiento de embarcaciones y telemetría sobre cartas náuticas.',
  keywords: [
    'RiverTech',
    'operación fluvial',
    'monitoreo marítimo',
    'telemetría fluvial',
    'remolcadores',
    'barcazas',
    'cartografía náutica',
  ],
  authors: [{ name: 'RiverTech' }],
  openGraph: {
    title: 'RiverTech | Tu operación fluvial, en una sola visión',
    description:
      'Explora RiverTech desde el mapa cartográfico hasta la operación aérea real de remolcadores y convoyes fluviales.',
    type: 'website',
    locale: 'es_LA',
    images: [
      {
        url: '/posters/poster_hero.webp',
        width: 1920,
        height: 1080,
        alt: 'RiverTech Operación Fluvial',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/brand/logo_region.png" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
