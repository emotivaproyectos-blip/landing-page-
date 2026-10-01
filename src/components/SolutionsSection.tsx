'use client';

import React, { useState } from 'react';

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      id: 'survey',
      number: '01',
      title: 'SURVEY',
      tagline: 'Simplify Bathymetry. Maximize Accuracy.',
      focus: 'Lectura del río y sondaje de profundidad',
      description:
        'Lectura continua del canal fluvial y levantamiento batimétrico en tiempo real. Permite identificar pasos críticos, monitorear variaciones del lecho y determinar el calado seguro para convoyes antes de ingresar al paso.',
      highlights: [
        'Sondajes acústicos georreferenciados sobre cartas náuticas',
        'Verificación de profundidad para prevenir varaduras',
        'Planificación de calado de convoyes con anticipación',
      ],
      image: '/images/solution_survey.jpg',
      imageAlt: 'Sistemas de batimetría y sondaje fluvial en embarcación',
      cta: 'Discover Survey',
      href: '#contacto',
      hudLabel: 'BATIMETRÍA FLUVIAL // SONDAJE ACÚSTICO',
    },
    {
      id: 'pilot',
      number: '02',
      title: 'PILOT',
      tagline: 'Navigate with confidence. Stay on track.',
      focus: 'Navegación asistida y telemetría de convoy',
      description:
        'Consola de navegación en tiempo real para patrones y prácticos de remolcador. Proporciona visualización precisa de rumbo, velocidad de giro, cartas superpuestas y alertas de derrota en tramos estrechos o con corriente.',
      highlights: [
        'Monitoreo geoespacial de convoyes y remolcadores en ruta',
        'Supervisión de velocidad, rumbo y calado en tiempo real',
        'Integración con estaciones hidrológicas y cartas fluviales',
      ],
      image: '/images/solution_pilot.jpg',
      imageAlt: 'Consola de navegación fluvial en puente de mando',
      cta: 'Discover Pilot',
      href: '#contacto',
      hudLabel: 'NAVEGACIÓN EN TIEMPO REAL // DERROTA ASISTIDA',
    },
    {
      id: 'dredge',
      number: '03',
      title: 'DREDGE',
      tagline: 'Measure, monitor, dredge. With Precision.',
      focus: 'Supervisión y control de dragado en canal',
      description:
        'Herramienta de control para dragas y operadores de mantenimiento de la hidrovía. Facilita la medición volumétrica de corte, el seguimiento de la posición de la draga y la certificación de la cota navegable requerida.',
      highlights: [
        'Monitoreo posicional y operativo de dragas en canal',
        'Control y cubicación precisa del material extraído',
        'Trazabilidad para mantener el calado de diseño de la vía',
      ],
      image: '/images/solution_dredge.jpg',
      imageAlt: 'Draga en faena de mantenimiento de canal fluvial',
      cta: 'Explore Dredge',
      href: '#contacto',
      hudLabel: 'CONTROL DE DRAGADO // MANTENIMIENTO DEL CANAL',
    },
  ];

  const currentSol = solutions[activeTab];

  return (
    <section
      id="solutions"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Soluciones fluviales RiverTech: Survey, Pilot y Dredge"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Editorial Section Header */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto 48px auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.45) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '38px 32px',
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
            03 / NUESTRAS SOLUCIONES
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#0b192c',
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
            }}
          >
            Technology built for river operations
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto',
              fontWeight: 500,
            }}
          >
            Tres capítulos de control técnico para responder a los desafíos náuticos:
            entender el río, navegarlo con precisión y mantener el canal navegable.
          </p>
        </div>

        {/* Interactive Solution Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
          role="tablist"
          aria-label="Selector de soluciones fluviales"
        >
          {solutions.map((sol, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={sol.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  background: isActive
                    ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                    : 'rgba(255, 255, 255, 0.75)',
                  color: isActive ? '#ffffff' : '#0f172a',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.92rem',
                  border: isActive
                    ? '1px solid #0284c7'
                    : '1px solid rgba(15, 23, 42, 0.1)',
                  boxShadow: isActive
                    ? '0 8px 24px rgba(2, 132, 199, 0.35)'
                    : '0 4px 16px rgba(15, 23, 42, 0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontFamily: 'monospace',
                    opacity: isActive ? 0.85 : 0.6,
                  }}
                >
                  {sol.number}
                </span>
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Master Connected Showcase Card */}
        <div
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0.65) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.1)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'stretch',
            minHeight: '520px',
            transition: 'all 0.35s ease',
          }}
        >
          {/* Visual Showcase Half */}
          <div
            style={{
              position: 'relative',
              minHeight: '360px',
              overflow: 'hidden',
              backgroundColor: '#0a1526',
            }}
          >
            <img
              src={currentSol.image}
              alt={currentSol.imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Visual HUD Telemetry Tag over image */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(7, 13, 24, 0.75)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                fontFamily: 'monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />
              {currentSol.hudLabel}
            </div>

            {/* Gradient Overlay for seamless edge */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 65%, rgba(255, 255, 255, 0.2) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Reading & Action Half */}
          <div
            style={{
              padding: 'clamp(32px, 5vw, 56px) clamp(28px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#0284c7',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {currentSol.focus}
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#0f172a',
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              {currentSol.title}
            </h3>

            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#0284c7',
                marginBottom: '18px',
                lineHeight: 1.35,
              }}
            >
              {currentSol.tagline}
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '28px',
                fontWeight: 500,
              }}
            >
              {currentSol.description}
            </p>

            {/* Key Feature Bullets */}
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              {currentSol.highlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: '#334155',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Action CTA */}
            <div>
              <a
                href={currentSol.href}
                className="btn-primary"
                style={{
                  padding: '13px 30px',
                  fontSize: '0.95rem',
                }}
              >
                <span>{currentSol.cta}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
