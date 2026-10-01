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
      href: '#contacto',
    },
    {
      date: '15',
      month: 'MAR',
      image: '/images/news_logistics.jpg',
      title: 'Innovative Technology in Load Weighing: Transforming Efficiency and Accuracy',
      category: 'Fleet & Cargo Telemetry',
      href: '#contacto',
    },
  ];

  return (
    <section
      id="news"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Noticias y artículos de innovación fluvial"
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
            07 / LATEST NEWS
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
            Insights from the river operations frontline
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            Análisis, innovaciones en telemetría de carga y transformación logística en el transporte fluvial y marítimo.
          </p>
        </div>

        {/* 2 News Articles Cards */}
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
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.65) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 16px 36px -4px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 48px -6px rgba(2, 132, 199, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(15, 23, 42, 0.08)';
              }}
            >
              {/* Media banner */}
              <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden', backgroundColor: '#070d18' }}>
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
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '8px 14px',
                    textAlign: 'center',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: 800, color: '#0284c7', lineHeight: 1 }}>
                    {item.date}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>
                    {item.month}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: '#0284c7',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  {item.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.35,
                    marginBottom: '20px',
                  }}
                >
                  {item.title}
                </h3>

                <a
                  href={item.href}
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.9rem',
                    color: '#0284c7',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  <span>Read article</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
