'use client';

import React from 'react';
import { ChapterConfig, ExperienceConfig, EXPERIENCE_CONFIG } from '@/config/experienceConfig';

interface ProgressIndicatorProps {
  progress: number; // 0.0 to 1.0
  config?: ExperienceConfig;
  onSkip: () => void;
}

export default function ProgressIndicator({
  progress,
  config = EXPERIENCE_CONFIG,
  onSkip,
}: ProgressIndicatorProps) {
  // Determine current chapter dynamically from config
  const currentChapter =
    config.chapters.find((ch: ChapterConfig) => progress >= ch.scrollStart && progress <= ch.scrollEnd) ||
    config.chapters[config.chapters.length - 1];

  const currentChapterNumber =
    currentChapter.position === 'hidden'
      ? '·'
      : String(currentChapter.index).padStart(2, '0');
  const currentChapterLabel = currentChapter.label;
  const visibleChaptersCount = config.chapters.filter((ch: ChapterConfig) => ch.position !== 'hidden').length;
  const totalChaptersLabel = String(visibleChaptersCount).padStart(2, '0');

  // Hide scroll prompt once user has started exploring
  const showScrollPrompt = progress < 0.10;

  return (
    <>
      {/* Top right discrete progress bar and chapter index */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          right: '28px',
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            padding: '6px 14px',
            borderRadius: '9999px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700 }}>
            {currentChapterNumber} / {totalChaptersLabel}
          </span>
          <span style={{ width: '1px', height: '10px', background: 'rgba(15, 23, 42, 0.12)' }} />
          <span style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 600 }}>
            {currentChapterLabel}
          </span>
        </div>

        {/* Linear progress track */}
        <div
          style={{
            width: '140px',
            height: '3px',
            background: 'rgba(15, 23, 42, 0.1)',
            borderRadius: '9999px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.min(100, Math.max(0, progress * 100))}%`,
              background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>

      {/* Bottom Center: Scroll prompt (Desliza para explorar) */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: showScrollPrompt ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: showScrollPrompt ? 'auto' : 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.78rem',
            color: '#475569',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Desliza para explorar
        </span>
        <div
          className="animate-scroll-bob"
          style={{
            width: '20px',
            height: '32px',
            borderRadius: '12px',
            border: '1.5px solid rgba(15, 23, 42, 0.25)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '6px',
              borderRadius: '2px',
              background: '#0284c7',
            }}
          />
        </div>
      </div>

      {/* Bottom Right: Saltar experiencia button */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '28px',
          zIndex: 30,
        }}
      >
        <button
          onClick={onSkip}
          className="btn-secondary"
          style={{
            padding: '7px 16px',
            fontSize: '0.8rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(15, 23, 42, 0.1)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
            color: '#0f172a',
          }}
          aria-label="Saltar experiencia interactiva"
        >
          <span>Saltar experiencia</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </button>
      </div>
    </>
  );
}
