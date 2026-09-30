'use client';

import React from 'react';

export default function OnePlatformSection() {
  const pillars = [
    {
      title: 'Fuel Efficiency',
      desc: 'Optimized speed and RPM curves tailored to river current',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17" />
          <path d="M15 11h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L20.5 6.5" />
          <path d="M7 11h4" />
          <path d="M7 7h4" />
        </svg>
      ),
    },
    {
      title: 'Carbon Emission Reductions',
      desc: 'Accurate CO2 emission monitoring and environmental compliance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
        </svg>
      ),
    },
    {
      title: 'Data Collection',
      desc: 'High-frequency telemetry, depth soundings and route logs',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M6 8l4 4 3-3 5 5" />
        </svg>
      ),
    },
    {
      title: 'Maintenance Costs Reduction',
      desc: 'Preventive health indicators and engine duty cycle analytics',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '100px 24px 80px 24px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Eyebrow */}
        <span
          style={{
            fontSize: '0.85rem',
            color: '#0284c7',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          ONE PLATFORM, TOTAL CONTROL.
        </span>

        {/* Main Title */}
        <h2
          style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: '#0b192c',
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
            marginBottom: '20px',
            maxWidth: '900px',
            margin: '0 auto 20px auto',
          }}
        >
          Integrated solutions for every stage of your operation
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.12rem',
            color: '#475569',
            lineHeight: 1.65,
            maxWidth: '780px',
            margin: '0 auto 60px auto',
          }}
        >
          Emotiva integrates telemetry, navigation, bathymetry and analytics into a single platform
          to help you reduce costs, increase safety and make smarter decisions.
        </p>

        {/* 4 Cyan Banners Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 35px -8px rgba(14, 165, 233, 0.25)',
          }}
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#38bdf8',
                padding: '36px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                color: '#ffffff',
                borderRight: idx < 3 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                transition: 'background-color 0.25s ease, transform 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0ea5e9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#38bdf8';
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                {p.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1.3,
                  color: '#ffffff',
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.5,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
