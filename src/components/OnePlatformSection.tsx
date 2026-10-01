'use client';

import React from 'react';

export default function OnePlatformSection() {
  const pillars = [
    {
      code: '01 // TELEMETRÍA EN RUTA',
      title: 'Fuel Efficiency',
      desc: 'Optimized speed and RPM curves tailored to river current and vessel displacement.',
      metricHint: 'Curvas de RPM optimizadas según corriente fluvial',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
          <path d="M15 11h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L20.5 6.5" />
          <path d="M7 11h4" />
          <path d="M7 7h4" />
        </svg>
      ),
    },
    {
      code: '02 // SOSTENIBILIDAD FLUVIAL',
      title: 'Carbon Emission Reductions',
      desc: 'Accurate CO2 emission monitoring and environmental compliance on every river leg.',
      metricHint: 'Monitoreo de CO2 y trazabilidad ambiental por milla',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
        </svg>
      ),
    },
    {
      code: '03 // ADQUISICIÓN DE DATOS',
      title: 'Data Collection',
      desc: 'High-frequency telemetry, depth soundings and route logs recorded in real time.',
      metricHint: 'Telemetría de alta frecuencia y sellos de tiempo precisos',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M6 8l4 4 3-3 5 5" />
        </svg>
      ),
    },
    {
      code: '04 // MANTENIMIENTO PREDICTIVO',
      title: 'Maintenance Costs Reduction',
      desc: 'Preventive health indicators and engine duty cycle analytics for your fleet.',
      metricHint: 'Indicadores de salud y ciclos de trabajo de motores',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="one-platform"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Beneficios y capacidades operacionales de RiverTech"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Editorial Section Header with Glass Backing */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto 64px auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.45) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '40px 32px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
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
              background: 'rgba(2, 132, 199, 0.1)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              color: '#0284c7',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
            02 / ONE PLATFORM, TOTAL CONTROL
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#0b192c',
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              marginBottom: '18px',
            }}
          >
            Integrated solutions for every stage of your operation
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: '740px',
              margin: '0 auto',
              fontWeight: 500,
            }}
          >
            Emotiva integrates telemetry, navigation, bathymetry and analytics into a single platform
            to help you reduce costs, increase safety and make smarter decisions on the water.
          </p>
        </div>

        {/* 4 Connected Floating Telemetry Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.58) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                padding: '34px 28px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 16px 36px -4px rgba(15, 23, 42, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.4)';
                e.currentTarget.style.boxShadow = '0 24px 48px -6px rgba(2, 132, 199, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(15, 23, 42, 0.08)';
              }}
            >
              {/* Header Row: Telemetry Code & Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#0284c7',
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.code}
                </span>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(2, 132, 199, 0.1)',
                    border: '1px solid rgba(2, 132, 199, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                  }}
                >
                  {p.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '12px',
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.55,
                  color: '#475569',
                  marginBottom: '22px',
                  fontWeight: 500,
                }}
              >
                {p.desc}
              </p>

              {/* Micro-metric Pill linking to operation */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(2, 132, 199, 0.06)',
                  border: '1px solid rgba(2, 132, 199, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0284c7' }} />
                <span style={{ fontSize: '0.78rem', color: '#0369a1', fontWeight: 600 }}>
                  {p.metricHint}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
