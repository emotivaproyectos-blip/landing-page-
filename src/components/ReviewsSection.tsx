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
        backgroundColor: '#ffffff',
        padding: '90px 24px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        <span
          style={{
            fontSize: '0.82rem',
            color: '#0284c7',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            display: 'block',
            marginBottom: '10px',
          }}
        >
          REVIEWS
        </span>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 800,
            color: '#0284c7',
            letterSpacing: '-0.02em',
            marginBottom: '60px',
          }}
        >
          What our clients say
        </h2>

        {/* 3 Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            textAlign: 'left',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                padding: '36px 32px',
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderTop: '4px solid #0284c7',
                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                {/* Quotation mark */}
                <div style={{ fontSize: '2.5rem', lineHeight: 1, color: '#38bdf8', marginBottom: '8px', fontFamily: 'serif' }}>
                  “
                </div>
                <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: '#334155', fontStyle: 'normal' }}>
                  {rev.quote}
                </p>
              </div>

              <div>
                <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>
                  {rev.author}
                </strong>
                <span style={{ color: '#64748b', fontSize: '0.84rem' }}>
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
