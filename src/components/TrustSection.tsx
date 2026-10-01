'use client';

import React from 'react';

export default function TrustSection() {
  const clients = [
    { name: '3 Castillos', mark: '3 Castillos' },
    { name: 'PRODECO', mark: 'PRODECO' },
    { name: 'impala terminals', mark: 'impala' },
    { name: 'CNR', mark: 'CNR' },
    { name: 'NAVIERA CENTRAL', mark: 'NAVIERA CENTRAL' },
  ];

  return (
    <section
      id="endorsement"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#ffffff',
        textAlign: 'center',
      }}
      aria-label="Clientes y armadores que confían en RiverTech"
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        
        {/* Glass Container */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(7, 13, 24, 0.72) 0%, rgba(13, 23, 42, 0.55) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: 'clamp(40px, 6vw, 64px) clamp(24px, 4vw, 48px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
            05 / CLIENTES & CONFIANZA
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '18px',
              maxWidth: '820px',
              margin: '0 auto 18px auto',
            }}
          >
            Explore the endorsement of those who trust us
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.12rem',
              color: 'rgba(226, 232, 240, 0.9)',
              lineHeight: 1.6,
              marginBottom: '54px',
              maxWidth: '700px',
              margin: '0 auto 54px auto',
              fontWeight: 400,
            }}
          >
            Our clients are the true testament to the excellence we deliver in every solution.
            Welcome to shared success!
          </p>

          {/* Crisp, Recognizable Client Marks */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {clients.map((c, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {c.mark}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
