'use client';

import React from 'react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onRequestDemoClick: () => void;
}

export default function HeroSection({
  onExploreClick,
  onRequestDemoClick,
}: HeroSectionProps) {
  return (
    <section
      id="experiencia"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px 24px',
        zIndex: 2,
      }}
      aria-label="Apertura de la experiencia de navegación fluvial RiverTech"
    >
      <div
        style={{
          maxWidth: '1360px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Editorial Split Glass Card */}
        <div
          style={{
            maxWidth: '620px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.48) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: 'clamp(28px, 5vw, 44px) clamp(24px, 4.5vw, 38px)',
            borderRadius: '24px',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(2, 132, 199, 0.12)',
              border: '1px solid rgba(2, 132, 199, 0.28)',
              color: '#0284c7',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#0284c7',
                boxShadow: '0 0 8px #0284c7',
              }}
            />
            01 / NAVEGACIÓN FLUVIAL 3D
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#0b192c',
              marginBottom: '18px',
            }}
          >
            Tu operación fluvial, en una sola visión.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#334155',
              marginBottom: '32px',
              fontWeight: 500,
              maxWidth: '520px',
            }}
          >
            Perspectiva aérea continua y monitoreo de la navegación fluvial en tiempo real.
            Conecta el mapa con la realidad de tu flota.
          </p>

          {/* Actions Cluster */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={onExploreClick}
              className="btn-primary"
              style={{
                fontSize: '0.98rem',
                padding: '14px 28px',
              }}
              aria-label="Explorar la experiencia y avanzar a los beneficios"
            >
              <span>Explorar la experiencia</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </button>

            <button
              onClick={onRequestDemoClick}
              className="btn-secondary"
              style={{
                fontSize: '0.95rem',
                padding: '13px 24px',
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                color: '#0f172a',
                fontWeight: 600,
              }}
            >
              <span>Solicitar demo</span>
            </button>
          </div>
        </div>

        {/* Floating Scroll Cue */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: '#475569',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            pointerEvents: 'none',
          }}
          className="animate-scroll-bob"
        >
          <span>Desplaza para recorrer la operación</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
