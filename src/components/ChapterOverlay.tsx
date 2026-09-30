'use client';

import React from 'react';
import { ExperienceConfig, EXPERIENCE_CONFIG } from '@/config/experienceConfig';

interface ChapterOverlayProps {
  progress: number; // 0.0 to 1.0
  config?: ExperienceConfig;
  onExploreClick?: () => void;
  onRequestDemoClick?: () => void;
}

export default function ChapterOverlay({
  progress,
  config = EXPERIENCE_CONFIG,
  onExploreClick,
  onRequestDemoClick,
}: ChapterOverlayProps) {
  // Helper to calculate smooth chapter opacity with fade-in and fade-out
  const getChapterStyle = (start: number, end: number, isFirst: boolean, isLast: boolean, fadeInDur = 0.035, fadeOutDur = 0.035) => {
    let opacity = 0;
    let translateY = 20;

    if (progress >= start && progress <= end) {
      // For Chapter 1 (start === 0), it should be fully visible when progress is 0
      if (start > 0 && progress < start + fadeInDur) {
        // Fade in
        const t = (progress - start) / fadeInDur;
        opacity = t;
        translateY = 20 * (1 - t);
      } else if (!isLast && progress > end - fadeOutDur) {
        // Fade out
        const t = (end - progress) / fadeOutDur;
        opacity = t;
        translateY = -15 * (1 - t);
      } else {
        // Fully visible
        opacity = 1;
        translateY = 0;
      }
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: (opacity > 0.3 ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
      visibility: (opacity > 0.01 ? 'visible' : 'hidden') as React.CSSProperties['visibility'],
      transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
    };
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    >
      {config.chapters.map((ch) => {
        if (ch.position === 'hidden' || (!ch.title && !ch.subtitle)) {
          return null;
        }

        const isFirst = ch.index === 1 || ch.position === 'editorial-split';
        const isLast = ch.index === config.chapters.length;
        const fadeIn = isFirst ? 0.01 : 0.035;
        const fadeOut = isLast ? 0.01 : 0.035;
        const style = getChapterStyle(ch.scrollStart, ch.scrollEnd, isFirst, isLast, fadeIn, fadeOut);

        if (ch.position === 'editorial-split') {
          return (
            <div
              key={ch.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8%',
                maxWidth: '1360px',
                margin: '0 auto',
                ...style,
              }}
            >
              <div
                style={{
                  maxWidth: '580px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.28) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '36px 32px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.65)',
                }}
              >
                {ch.badge && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.55)',
                      border: '1px solid rgba(2, 132, 199, 0.3)',
                      color: '#0284c7',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '20px',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
                    {ch.badge}
                  </div>
                )}

                <h1
                  style={{
                    fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
                    lineHeight: 1.15,
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                    color: '#0f172a',
                    marginBottom: '18px',
                  }}
                >
                  {ch.title}
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                    lineHeight: 1.6,
                    color: '#1e293b',
                    marginBottom: '28px',
                    maxWidth: '480px',
                    fontWeight: 500,
                  }}
                >
                  {ch.subtitle}
                </p>

                {ch.ctaText && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                      onClick={onExploreClick}
                      className="btn-primary"
                      style={{
                        fontSize: '0.95rem',
                        padding: '12px 26px',
                      }}
                      aria-label={ch.ctaText}
                    >
                      <span>{ch.ctaText}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        }

        if (ch.position === 'top-right') {
          return (
            <div
              key={ch.id}
              style={{
                position: 'absolute',
                top: '16%',
                right: '7%',
                maxWidth: '480px',
                ...style,
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.28) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.65)',
                  padding: '28px 32px',
                  borderRadius: '16px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.7)',
                }}
              >
                {ch.badge && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.55)',
                      border: '1px solid rgba(2, 132, 199, 0.3)',
                      fontSize: '0.75rem',
                      color: '#0284c7',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {ch.badge}
                  </div>
                )}
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                    lineHeight: 1.2,
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                  }}
                >
                  {ch.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.55,
                    color: '#1e293b',
                    fontWeight: 500,
                  }}
                >
                  {ch.subtitle}
                </p>
              </div>
            </div>
          );
        }

        // Default or 'bottom-left'
        return (
          <div
            key={ch.id}
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '7%',
              maxWidth: '540px',
              ...style,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.28) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.65)',
                padding: '30px 34px',
                borderRadius: '18px',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.7)',
              }}
            >
              {ch.badge && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.55)',
                    border: '1px solid rgba(2, 132, 199, 0.3)',
                    fontSize: '0.75rem',
                    color: '#0284c7',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {ch.badge}
                </div>
              )}
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.3vw, 2.5rem)',
                  lineHeight: 1.2,
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                }}
              >
                {ch.title}
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.55,
                  color: '#1e293b',
                  marginBottom: ch.ctaText ? '22px' : '0',
                  fontWeight: 500,
                }}
              >
                {ch.subtitle}
              </p>
              {ch.ctaText && (
                <div>
                  <button
                    onClick={onRequestDemoClick}
                    className="btn-primary"
                    style={{
                      fontSize: '0.95rem',
                      padding: '12px 26px',
                    }}
                  >
                    <span>{ch.ctaText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
