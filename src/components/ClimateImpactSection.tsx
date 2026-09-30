'use client';

import React from 'react';

export default function ClimateImpactSection() {
  return (
    <section
      id="climate"
      style={{
        backgroundColor: '#f0f9ff',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          alignItems: 'stretch',
          minHeight: '440px',
        }}
      >
        {/* Left Image half */}
        <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }}>
          <img
            src="/images/climate_riverbank.jpg"
            alt="Comunidad y riberas del río protegidas"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>

        {/* Right Content half */}
        <div
          style={{
            backgroundColor: '#e0f2fe',
            padding: '80px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              fontSize: '0.82rem',
              color: '#0284c7',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '16px',
            }}
          >
            CLIMATE IMPACT
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '0.01em',
              color: '#0b192c',
              marginBottom: '32px',
              maxWidth: '520px',
            }}
          >
            CLEANER RIVERS START WITH SMARTER NAVIGATION
          </h2>

          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              borderRadius: '6px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(2, 132, 199, 0.35)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0ea5e9';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0284c7';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            EXPLORE THE IMPACT
          </a>
        </div>
      </div>
    </section>
  );
}
