'use client';

import React from 'react';
import Image from 'next/image';
import { EXPERIENCE_CONFIG } from '@/config/experienceConfig';

interface ReducedMotionViewProps {
  onRequestDemoClick?: () => void;
}

export default function ReducedMotionView({ onRequestDemoClick }: ReducedMotionViewProps) {
  const cards = [
    {
      badge: '01 / Ecosistema RiverTech',
      title: 'Tu operación fluvial, en una sola visión.',
      subtitle: 'Explora RiverTech desde el mapa hasta el recorrido de una embarcación.',
      image: '/posters/poster_hero.webp',
      alt: 'Interfaz RiverTech con mapa fluvial y panel de mando',
    },
    {
      badge: '02 / Navegación Cartográfica',
      title: 'Del panorama al detalle.',
      subtitle: 'Una mirada más cercana a la operación fluvial sobre cartas náuticas.',
      image: '/posters/poster_map.webp',
      alt: 'Mapa fluvial detallado con posiciones de embarcaciones',
    },
    {
      badge: '03 / Seguimiento en Ruta',
      title: 'Cada recorrido cuenta una historia.',
      subtitle: 'Acércate a los movimientos y trayectorias de tu flota en tiempo operacional.',
      image: '/posters/poster_boat.webp',
      alt: 'Embarcación en navegación con trazado de derrota y telemetría',
    },
    {
      badge: '04 / Operación Fluvial en Marcha',
      title: 'Conecta el mapa con tu operación.',
      subtitle: 'Descubre RiverTech para optimizar el despacho y la seguridad de tu flota.',
      image: '/posters/poster_convoy.webp',
      alt: 'Vista aérea de remolcador navegando con barcazas en el río',
      hasCta: true,
    },
  ];

  return (
    <section
      id="experiencia-estatica"
      style={{
        padding: '100px 24px 60px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
      aria-label="Presentación estática de la experiencia RiverTech"
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-rivertech-cyan)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Vista Accesible / Movimiento Reducido
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#0f172a',
            marginTop: '12px',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          El recorrido RiverTech, fotograma a fotograma
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Presentación editorial con imágenes representativas del recorrido fluvial, sin animaciones vinculadas al scroll.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}
      >
        {cards.map((card, idx) => (
          <article
            key={idx}
            className="glass-panel"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <img
                src={card.image}
                alt={card.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#0284c7',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                {card.badge}
              </span>
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '10px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5,
                  marginBottom: card.hasCta ? '20px' : '0',
                  flex: 1,
                }}
              >
                {card.subtitle}
              </p>
              {card.hasCta && (
                <button
                  onClick={onRequestDemoClick}
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                >
                  <span>Solicitar demostración</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
