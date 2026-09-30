'use client';

import React from 'react';

export default function SolutionsSection() {
  const solutions = [
    {
      title: 'SURVEY',
      sub1: 'Simplify Bathymetry.',
      sub2: 'Maximize Accuracy.',
      image: '/images/solution_survey.jpg',
      cta: 'Discover Survey',
      href: '#contacto',
    },
    {
      title: 'PILOT',
      sub1: 'Navigate with confidence.',
      sub2: 'Stay on track.',
      image: '/images/solution_pilot.jpg',
      cta: 'Discover Pilot',
      href: '#contacto',
    },
    {
      title: 'DREDGE',
      sub1: 'Measure, monitor, dredge.',
      sub2: 'With Precision.',
      image: '/images/solution_dredge.jpg',
      cta: 'Explore Dredge',
      href: '#contacto',
    },
  ];

  return (
    <section
      id="solutions"
      style={{
        backgroundColor: '#ffffff',
        padding: '60px 24px 100px 24px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Eyebrow */}
        <span
          style={{
            fontSize: '0.82rem',
            color: '#0284c7',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          OUR SOLUTIONS
        </span>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.6vw, 2.8rem)',
            fontWeight: 800,
            color: '#0284c7',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '60px',
          }}
        >
          Technology built for river operations
        </h2>

        {/* 3 Solution Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                boxShadow: '0 12px 32px -4px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -8px rgba(2, 132, 199, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px -4px rgba(15, 23, 42, 0.08)';
              }}
            >
              {/* Image banner */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <img
                  src={sol.image}
                  alt={sol.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Light Content Body */}
              <div
                style={{
                  padding: '36px 28px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#0f172a',
                    marginBottom: '16px',
                  }}
                >
                  {sol.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.4 }}>
                  {sol.sub1}
                </p>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.4, marginBottom: '28px' }}>
                  {sol.sub2}
                </p>

                <a
                  href={sol.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0ea5e9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0284c7';
                  }}
                >
                  {sol.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
