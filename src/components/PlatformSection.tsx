'use client';

import React from 'react';
import { BRAND_CONFIG } from '@/config/experienceConfig';

export default function PlatformSection() {
  return (
    <section
      id="plataforma"
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
      }}
      aria-label="Capacidades de la plataforma RiverTech"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(37, 99, 235, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: 'var(--color-rivertech-cyan)',
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Plataforma Fluvial
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '18px',
            }}
          >
            Tecnología diseñada para la complejidad de la navegación interior
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--color-text-muted)',
            }}
          >
            Consolidamos los datos de posición, cartas de navegación e historial de navegación para dar certidumbre a la toma de decisiones en el río.
          </p>
        </div>

        {/* 3 Verified Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {BRAND_CONFIG.verifiedCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '36px 32px',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Capability Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(37, 99, 235, 0.16)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-rivertech-cyan)',
                  marginBottom: '24px',
                }}
              >
                {cap.icon === 'map' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                    <line x1="8" y1="2" x2="8" y2="18"/>
                    <line x1="16" y1="6" x2="16" y2="22"/>
                  </svg>
                )}
                {cap.icon === 'route' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="19" r="3"/>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                    <circle cx="18" cy="5" r="3"/>
                  </svg>
                )}
                {cap.icon === 'ship' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1"/>
                    <path d="M4 18L3 12h18l-1 6"/>
                    <path d="M12 4v8"/>
                    <path d="M8 8h8"/>
                  </svg>
                )}
              </div>

              <span style={{ fontSize: '0.8rem', color: 'var(--color-rivertech-cyan)', fontWeight: 600, marginBottom: '8px' }}>
                0{idx + 1}
              </span>

              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {cap.title}
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                  marginTop: 'auto',
                }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
