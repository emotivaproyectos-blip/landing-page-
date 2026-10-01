'use client';

import React from 'react';

export default function ReviewsSection() {
  const reviews = [
    {
      quote:
        'Revolutionizing river transportation with its cutting-edge software, remarkably enhancing fuel efficiency, maintenance, and security for a transformative industry experience.',
      author: 'Operations Director',
      role: 'Fluvial Barge Fleet',
    },
    {
      quote:
        'RiverTech: A game changer in river logistics, expertly optimizing fuel use, maintenance, and safety, setting new standards in transportation efficiency.',
      author: 'Fleet Superintendent',
      role: 'Inland River Logistics',
    },
    {
      quote:
        'Navi-survey: A navigational masterpiece, providing essential bathymetric data to prevent ship groundings and optimize river transportation with unmatched precision and reliability.',
      author: 'Chief Hydrographic Officer',
      role: 'Channel Navigation Authority',
    },
  ];

  return (
    <section
      id="reviews"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Testimonios de clientes de RiverTech"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 60px auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.45) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '36px 32px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
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
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
            06 / TESTIMONIOS
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#0b192c',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '14px',
            }}
          >
            What our clients say
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            Experiencias de directores y superintendentes en la gestión diaria de convoyes y batimetría fluvial.
          </p>
        </div>

        {/* 3 Completely Stable, Frosted Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            textAlign: 'left',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                padding: '40px 32px',
                borderRadius: '20px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.65) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                borderTop: '4px solid #0284c7',
                boxShadow: '0 16px 36px -4px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 48px -6px rgba(2, 132, 199, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(15, 23, 42, 0.08)';
              }}
            >
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    fontSize: '2.8rem',
                    lineHeight: 1,
                    color: '#0284c7',
                    marginBottom: '12px',
                    fontFamily: 'serif',
                    opacity: 0.8,
                  }}
                >
                  “
                </div>
                <p
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.65,
                    color: '#1e293b',
                    fontWeight: 500,
                  }}
                >
                  {rev.quote}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                  paddingTop: '18px',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    color: '#0f172a',
                    fontSize: '1rem',
                    fontWeight: 800,
                    marginBottom: '4px',
                  }}
                >
                  {rev.author}
                </strong>
                <span style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: 600 }}>
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
