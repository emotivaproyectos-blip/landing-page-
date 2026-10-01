'use client';

import React from 'react';
import { LANDING_MASTER_MAP } from '@/config/experienceConfig';

interface ChapterTrackerProps {
  currentChapterId: string;
  isMobile: boolean;
}

export default function ChapterTracker({
  currentChapterId,
  isMobile,
}: ChapterTrackerProps) {
  const currentChapter =
    LANDING_MASTER_MAP.find((c) => c.id === currentChapterId) || LANDING_MASTER_MAP[0];

  const handleScrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isMobile) {
    // Discreet mobile pill at bottom-right
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '18px',
          right: '18px',
          zIndex: 40,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(15, 23, 42, 0.1)',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: '#0284c7',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
        <span>{currentChapter.badge.split(' / ')[0]} · {currentChapter.navLabel}</span>
      </div>
    );
  }

  // Desktop floating chapter navigation rail
  return (
    <aside
      aria-label="Indicador y navegación de capítulos fluviales"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '16px 12px',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
      }}
    >
      {LANDING_MASTER_MAP.map((ch) => {
        const isActive = ch.id === currentChapterId;
        return (
          <button
            key={ch.id}
            onClick={() => handleScrollToChapter(ch.id)}
            title={`${ch.badge} - ${ch.title}`}
            aria-label={`Ir a ${ch.badge}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '4px 6px',
              borderRadius: '9999px',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <span
              style={{
                width: isActive ? '10px' : '6px',
                height: isActive ? '10px' : '6px',
                borderRadius: '50%',
                background: isActive ? '#0284c7' : 'rgba(15, 23, 42, 0.25)',
                boxShadow: isActive ? '0 0 10px #0284c7' : 'none',
                transition: 'all 0.25s ease',
              }}
            />
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: isActive ? 800 : 500,
                color: isActive ? '#0284c7' : '#64748b',
                whiteSpace: 'nowrap',
                opacity: isActive ? 1 : 0.75,
                transition: 'all 0.2s ease',
              }}
            >
              {ch.navLabel}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
