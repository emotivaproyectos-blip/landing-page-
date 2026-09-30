'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { EXPERIENCE_CONFIG, EXPERIENCES, ExperienceConfig } from '@/config/experienceConfig';
import CanvasSequenceScrubber from './CanvasSequenceScrubber';
import VideoScrubber from './VideoScrubber';
import ChapterOverlay from './ChapterOverlay';
import ProgressIndicator from './ProgressIndicator';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollExperienceProps {
  onSkipExperience: () => void;
  onRequestDemo: () => void;
}

export default function ScrollExperience({
  onSkipExperience,
  onRequestDemo,
}: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinViewportRef = useRef<HTMLDivElement | null>(null);
  const visualWrapperRef = useRef<HTMLDivElement | null>(null);

  const [experienceId, setExperienceId] = useState<'3d_boat' | 'dashboard'>('3d_boat');
  const activeConfig: ExperienceConfig = EXPERIENCES[experienceId];

  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [engine, setEngine] = useState<'canvas' | 'video'>('canvas');
  const [isReady, setIsReady] = useState(false);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Setup GSAP ScrollTrigger for pinned continuous trajectory
  useEffect(() => {
    const container = containerRef.current;
    const pinViewport = pinViewportRef.current;
    if (!container || !pinViewport) return;

    // Refresh ScrollTrigger to ensure correct measurements
    ScrollTrigger.refresh();

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinViewport,
      pinSpacing: false, // Container already has explicit height
      scrub: 0.1,        // Short, smooth 100ms dampening for buttery scroll stabilization
      onUpdate: (self) => {
        const p = self.progress;
        setProgress(p);

        // Chapter A: subtle 2.5D perspective tilt that expands into full immersion
        // Active from 0.0 to 0.15
        if (visualWrapperRef.current) {
          if (p < 0.15) {
            const factor = 1 - p / 0.15;
            const scale = 0.94 + 0.06 * (1 - factor);
            const rotateX = 3 * factor;
            const rotateY = -3 * factor;
            const borderRadius = 20 * factor;
            visualWrapperRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            visualWrapperRef.current.style.borderRadius = `${borderRadius}px`;
            visualWrapperRef.current.style.boxShadow = factor > 0.1 ? '0 25px 50px -12px rgba(0, 0, 0, 0.7)' : 'none';
          } else {
            visualWrapperRef.current.style.transform = 'none';
            visualWrapperRef.current.style.borderRadius = '0px';
            visualWrapperRef.current.style.boxShadow = 'none';
          }
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [isMobile]);

  // Handler for "Explorar la experiencia" CTA in Chapter 1: smoothly scrolls forward to chapter 2
  const handleExploreClick = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.offsetTop;
    const targetScroll = containerTop + container.offsetHeight * 0.22;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, []);

  const scrollMultiplier = isMobile
    ? activeConfig.mobileScrollMultiplier
    : activeConfig.desktopScrollMultiplier;

  return (
    <section
      id="experiencia"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: `${scrollMultiplier * 100}vh`,
        backgroundColor: 'var(--color-bg)',
      }}
      aria-label="Experiencia interactiva con video controlado por scroll"
    >
      {/* Sticky full-screen viewport */}
      <div
        ref={pinViewportRef}
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Visual Media Wrapper with 2.5D perspective during Chapter A */}
        <div
          ref={visualWrapperRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            transition: 'transform 0.05s ease-out, border-radius 0.1s ease-out',
            willChange: 'transform',
          }}
        >
          {engine === 'canvas' ? (
            <CanvasSequenceScrubber
              key={`canvas-${activeConfig.id}`}
              progress={progress}
              isMobile={isMobile}
              config={activeConfig}
              onReady={() => setIsReady(true)}
            />
          ) : (
            <VideoScrubber
              key={`video-${activeConfig.id}`}
              progress={progress}
              isMobile={isMobile}
              config={activeConfig}
              onReady={() => setIsReady(true)}
            />
          )}
        </div>

        {/* Narrative Chapter Overlays */}
        <ChapterOverlay
          progress={progress}
          config={activeConfig}
          onExploreClick={handleExploreClick}
          onRequestDemoClick={onRequestDemo}
        />

        {/* Discrete Progress & Skip Indicator */}
        <ProgressIndicator
          progress={progress}
          config={activeConfig}
          onSkip={onSkipExperience}
        />

        {/* Experience & Engine Control Cluster */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '28px',
            zIndex: 30,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Video Experience Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              padding: '3px 6px',
              borderRadius: '9999px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
              fontSize: '0.72rem',
            }}
          >
            <span style={{ padding: '0 4px', color: '#64748b', fontWeight: 600 }}>
              Video:
            </span>
            <button
              onClick={() => setExperienceId('3d_boat')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '9999px',
                background: experienceId === '3d_boat' ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                color: experienceId === '3d_boat' ? '#0284c7' : '#64748b',
                fontWeight: experienceId === '3d_boat' ? 700 : 500,
                border: experienceId === '3d_boat' ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: experienceId === '3d_boat' ? '#0284c7' : '#94a3b8',
                }}
              />
              Transición 3D
            </button>
            <button
              onClick={() => setExperienceId('dashboard')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '9999px',
                background: experienceId === 'dashboard' ? 'rgba(2, 132, 199, 0.12)' : 'transparent',
                color: experienceId === 'dashboard' ? '#0284c7' : '#64748b',
                fontWeight: experienceId === 'dashboard' ? 700 : 500,
                border: experienceId === 'dashboard' ? '1px solid rgba(2, 132, 199, 0.3)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: experienceId === 'dashboard' ? '#0284c7' : '#94a3b8',
                }}
              />
              Dashboard & Mapa
            </button>
          </div>

          {/* Engine Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: '9999px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
              fontSize: '0.72rem',
              color: '#64748b',
            }}
          >
            <span>Motor:</span>
            <button
              onClick={() => setEngine('canvas')}
              style={{
                color: engine === 'canvas' ? '#0284c7' : '#64748b',
                fontWeight: engine === 'canvas' ? 700 : 400,
                fontSize: '0.72rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              Canvas 60fps
            </button>
            <span>|</span>
            <button
              onClick={() => setEngine('video')}
              style={{
                color: engine === 'video' ? '#0284c7' : '#64748b',
                fontWeight: engine === 'video' ? 700 : 400,
                fontSize: '0.72rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
            >
              Video MP4
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
