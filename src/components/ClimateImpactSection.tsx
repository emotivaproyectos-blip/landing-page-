'use client';

import React from 'react';

export default function ClimateImpactSection() {
  return (
    <section
      id="climate"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Impacto ambiental y sostenibilidad en cuencas fluviales"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Continuous Environment Showcase Card */}
        <div
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.1)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'stretch',
            minHeight: '480px',
          }}
        >
          {/* Natural Riverbank Photography Half */}
          <div
            style={{
              position: 'relative',
              minHeight: '360px',
              overflow: 'hidden',
              backgroundColor: '#06131d',
            }}
          >
            <img
              src="/images/climate_riverbank.jpg"
              alt="Ecosistema natural del río y comunidades riberas protegidas"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
            {/* Soft Ambient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.08) 0%, rgba(7, 13, 24, 0.4) 100%)',
              }}
            />
          </div>

          {/* Reading Half */}
          <div
            style={{
              padding: 'clamp(36px, 5vw, 64px) clamp(28px, 4.5vw, 52px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(2, 132, 199, 0.1)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                color: '#0284c7',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
              04 / CLIMATE IMPACT
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.6vw, 2.9rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#0b192c',
                marginBottom: '20px',
                maxWidth: '560px',
              }}
            >
              CLEANER RIVERS START WITH SMARTER NAVIGATION
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '32px',
                fontWeight: 500,
                maxWidth: '520px',
              }}
            >
              Navegar con precisión y monitoreo continuo optimiza el consumo de energía en cada tramo del río, reduce la huella de carbono operacional y protege los ecosistemas fluviales para las comunidades riberas.
            </p>

            <a
              href="#contacto"
              className="btn-primary"
              style={{
                padding: '13px 32px',
                fontSize: '0.92rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 800,
              }}
            >
              <span>EXPLORE THE IMPACT</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
