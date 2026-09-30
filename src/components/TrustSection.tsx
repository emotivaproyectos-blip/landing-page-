'use client';

import React from 'react';

export default function TrustSection() {
  const clients = [
    { name: '3 Castillos', mark: '3 Castillos' },
    { name: 'PRODECO', mark: 'PRODECO' },
    { name: 'impala terminals', mark: 'impala' },
    { name: 'CNR', mark: 'CNR' },
    { name: 'NAVIERA CENTRAL', mark: 'NAVIERA' },
  ];

  return (
    <section
      id="endorsement"
      style={{
        position: 'relative',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        overflow: 'hidden',
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      {/* Background Image with Aerial Winding River */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <img
          src="/images/river_trust_aerial.jpg"
          alt="Aerial river winding through lush rainforest"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />
        {/* Dark Vignette Overlay for maximum contrast and elegance */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, rgba(6, 12, 24, 0.72) 0%, rgba(6, 10, 18, 0.92) 100%)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '980px', margin: '0 auto' }}>
        
        <h2
          style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '18px',
          }}
        >
          Explore the endorsement of those who trust us
        </h2>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#e2e8f0',
            lineHeight: 1.6,
            marginBottom: '60px',
            maxWidth: '740px',
            margin: '0 auto 60px auto',
          }}
        >
          Our clients are the true testament to the excellence we deliver in every solution.
          Welcome to shared success!
        </p>

        {/* Client Logos Row with Navigation Arrows */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}
        >
          <button
            aria-label="Anterior"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              padding: '8px',
              fontSize: '1.4rem',
            }}
          >
            ‹
          </button>

          {clients.map((c, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px 28px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                opacity: 0.85,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              {c.mark}
            </div>
          ))}

          <button
            aria-label="Siguiente"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              padding: '8px',
              fontSize: '1.4rem',
            }}
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
