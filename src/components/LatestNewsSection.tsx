'use client';

import React from 'react';

export default function LatestNewsSection() {
  const news = [
    {
      date: '15',
      month: 'APR',
      image: '/images/news_bridge.jpg',
      title: 'Technological Transformation in Logistics: Driving the Future of Terrestrial, Maritime, and River Transport',
      category: 'Maritime & River Innovation',
    },
    {
      date: '15',
      month: 'MAR',
      image: '/images/news_logistics.jpg',
      title: 'Innovative Technology in Load Weighing: Transforming Efficiency and Accuracy',
      category: 'Fleet & Cargo Telemetry',
    },
  ];

  return (
    <section
      id="news"
      style={{
        backgroundColor: '#f1f5f9',
        padding: '90px 24px',
        color: '#0f172a',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
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
          LATEST NEWS
        </span>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em',
            marginBottom: '48px',
          }}
        >
          Insights from the river operations frontline
        </h2>

        {/* 2 News Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {news.map((item, idx) => (
            <article
              key={idx}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 30px -4px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px -6px rgba(0, 0, 0, 0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -4px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />

                {/* Date Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 800, color: '#0284c7', lineHeight: 1 }}>
                    {item.date}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                    {item.month}
                  </span>
                </div>
              </div>

              <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: '#0284c7',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '8px',
                  }}
                >
                  {item.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.4,
                    marginBottom: '16px',
                  }}
                >
                  {item.title}
                </h3>

                <span
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.85rem',
                    color: '#0284c7',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  Read article →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
