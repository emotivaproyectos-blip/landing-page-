'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { LANDING_MASTER_MAP, MasterChapter } from '@/config/experienceConfig';

interface MasterSceneProps {
  currentChapterId: string;
  activeProgress: number; // 0.0 to 1.0 across total page
  isMobile: boolean;
  reducedMotion?: boolean;
}

export default function MasterScene({
  currentChapterId,
  activeProgress,
  isMobile,
  reducedMotion = false,
}: MasterSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const totalFrames = 192;
  const framesFolder = isMobile ? '/frames_3d_mobile' : '/frames_3d';

  // Cache for frames
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
  const [initialFrameLoaded, setInitialFrameLoaded] = useState(false);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameRef = useRef<number | null>(null);
  const perspectiveWrapperRef = useRef<HTMLDivElement | null>(null);

  // Helper to draw image cover on canvas with smart focal centering
  const renderFrame = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement,
    mobile: boolean
  ) => {
    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    if (canvasW === 0 || canvasH === 0 || imgW === 0 || imgH === 0) return;

    ctx.clearRect(0, 0, canvasW, canvasH);

    const scale = Math.max(canvasW / imgW, canvasH / imgH);
    const scaledW = imgW * scale;
    const scaledH = imgH * scale;

    const focalX = mobile ? 0.52 : 0.5;
    const posX = (canvasW - scaledW) * focalX;
    const posY = (canvasH - scaledH) * 0.5;

    ctx.drawImage(img, posX, posY, scaledW, scaledH);
  };

  // Canvas resize helper
  const updateCanvasDimensions = (canvas: HTMLCanvasElement) => {
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const targetW = Math.max(1, Math.round(w * dpr));
    const targetH = Math.max(1, Math.round(h * dpr));
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  };

  const drawFrame = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      updateCanvasDimensions(canvas);

      const img = imagesRef.current[frameIdx];
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Fallback to nearest loaded frame
        let nearest: HTMLImageElement | null = null;
        let minDiff = 999;
        for (let i = 0; i < totalFrames; i++) {
          const candidate = imagesRef.current[i];
          if (candidate && candidate.complete && candidate.naturalWidth > 0) {
            const diff = Math.abs(i - frameIdx);
            if (diff < minDiff) {
              minDiff = diff;
              nearest = candidate;
            }
          }
        }
        if (nearest) {
          renderFrame(ctx, canvas, nearest, isMobile);
          lastDrawnFrameRef.current = frameIdx;
        }
        return;
      }

      renderFrame(ctx, canvas, img, isMobile);
      lastDrawnFrameRef.current = frameIdx;
    },
    [isMobile, totalFrames]
  );

  // Progressive frame preloading: landmarks first, then small batches
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames).fill(null);

    const step = Math.max(1, Math.floor((totalFrames - 1) / 10));
    const landmarks = Array.from(
      new Set([0, step, step * 2, step * 3, step * 4, step * 5, step * 6, step * 7, step * 8, step * 9, totalFrames - 1])
    ).filter((f) => f < totalFrames);

    const loadSingleFrame = (idx: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[idx]) {
          resolve(imagesRef.current[idx]!);
          return;
        }
        const img = new Image();
        const paddedIdx = String(idx).padStart(3, '0');
        img.src = `${framesFolder}/frame_${paddedIdx}.webp`;

        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[idx] = img;
            if (idx === 0) {
              setInitialFrameLoaded(true);
              drawFrame(0);
            }
          }
          resolve(img);
        };

        img.onerror = () => {
          resolve(img);
        };
      });
    };

    // If reduced motion is requested, load only landmark frames to save data & memory
    if (reducedMotion) {
      loadSingleFrame(0);
      return () => {
        isCancelled = true;
      };
    }

    // Load key landmark frames first
    Promise.all(landmarks.map(loadSingleFrame)).then(() => {
      if (isCancelled) return;
      const remaining: number[] = [];
      for (let i = 0; i < totalFrames; i++) {
        if (!landmarks.includes(i)) remaining.push(i);
      }

      const batchSize = 16;
      let currentIdx = 0;

      const loadNextBatch = () => {
        if (isCancelled || currentIdx >= remaining.length) return;
        const batch = remaining.slice(currentIdx, currentIdx + batchSize);
        currentIdx += batchSize;
        Promise.all(batch.map(loadSingleFrame)).then(() => {
          if (!isCancelled) {
            loadNextBatch();
          }
        });
      };

      loadNextBatch();
    });

    return () => {
      isCancelled = true;
    };
  }, [framesFolder, totalFrames, drawFrame, reducedMotion]);

  // Window resize observer
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      updateCanvasDimensions(canvas);
      if (lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Frame calculation based on active chapter & progress
  useEffect(() => {
    if (reducedMotion) {
      drawFrame(0);
      if (perspectiveWrapperRef.current) {
        perspectiveWrapperRef.current.style.transform = 'none';
        perspectiveWrapperRef.current.style.borderRadius = '0px';
      }
      return;
    }

    let targetFrame = 0;

    if (currentChapterId === 'experiencia') {
      const chapterProgress = Math.min(Math.max(activeProgress / 0.16, 0), 1);
      targetFrame = Math.round(chapterProgress * 52);

      // Chapter 1 subtle 2.5D perspective tilt that expands into full immersion
      if (perspectiveWrapperRef.current) {
        const factor = 1 - chapterProgress;
        const scale = 0.96 + 0.04 * (1 - factor);
        const rotateX = 2.5 * factor;
        const rotateY = -2.5 * factor;
        const borderRadius = 18 * factor;
        perspectiveWrapperRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        perspectiveWrapperRef.current.style.borderRadius = `${borderRadius}px`;
      }
    } else if (currentChapterId === 'one-platform') {
      const chapterProgress = Math.min(Math.max((activeProgress - 0.16) / 0.18, 0), 1);
      targetFrame = Math.round(52 + chapterProgress * 58); // 52 to 110
      if (perspectiveWrapperRef.current) {
        perspectiveWrapperRef.current.style.transform = 'none';
        perspectiveWrapperRef.current.style.borderRadius = '0px';
      }
    } else if (currentChapterId === 'solutions') {
      const chapterProgress = Math.min(Math.max((activeProgress - 0.34) / 0.20, 0), 1);
      targetFrame = Math.round(110 + chapterProgress * 70); // 110 to 180
      if (perspectiveWrapperRef.current) {
        perspectiveWrapperRef.current.style.transform = 'none';
        perspectiveWrapperRef.current.style.borderRadius = '0px';
      }
    } else {
      // Settled river operation
      targetFrame = Math.min(185 + Math.round((activeProgress - 0.54) * 6), totalFrames - 1);
      if (perspectiveWrapperRef.current) {
        perspectiveWrapperRef.current.style.transform = 'none';
        perspectiveWrapperRef.current.style.borderRadius = '0px';
      }
    }

    targetFrame = Math.min(Math.max(0, targetFrame), totalFrames - 1);

    if (targetFrame !== lastDrawnFrameRef.current) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        drawFrame(targetFrame);
      });
    }

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentChapterId, activeProgress, totalFrames, drawFrame, reducedMotion]);

  // Determine opacities and visibility of specialized layers
  const isSolutions = currentChapterId === 'solutions';
  const isClimate = currentChapterId === 'climate';
  const isTrustOrLater = ['endorsement', 'reviews', 'news', 'contacto'].includes(currentChapterId);
  const isContactOrFooter = currentChapterId === 'contacto';

  // HUD display is active during high-tech operational chapters
  const showHUD = !reducedMotion && ['experiencia', 'one-platform', 'solutions'].includes(currentChapterId);

  return (
    <div
      id="master-scene-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#070d18',
      }}
    >
      {/* 2.5D Perspective and Transition Wrapper */}
      <div
        ref={perspectiveWrapperRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          transition: reducedMotion ? 'none' : 'transform 0.15s ease-out, border-radius 0.2s ease-out',
          willChange: reducedMotion ? 'auto' : 'transform',
        }}
      >
        {/* Instant Fallback Frame (Never black screen) */}
        <img
          src={`${framesFolder}/frame_000.webp`}
          alt="RiverTech Escena 3D"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            zIndex: 1,
            opacity: initialFrameLoaded ? 0 : 1,
            transition: 'opacity 0.4s ease-out',
          }}
        />

        {/* 1. Base 3D River Operation Canvas (Apertura -> Beneficios -> Soluciones) */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 2,
            opacity: isClimate || isTrustOrLater ? 0.35 : 1,
            transition: reducedMotion ? 'none' : 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* 2. Layer: Climate / Natural Riverbank Environment */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            opacity: isClimate ? 0.88 : 0,
            transform: !reducedMotion && !isClimate ? 'scale(1.04)' : 'scale(1)',
            transition: reducedMotion
              ? 'none'
              : 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src="/images/climate_riverbank.jpg"
            alt="Riberas y ecosistema natural del río"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(14, 116, 144, 0.15) 0%, rgba(7, 13, 24, 0.65) 100%)',
            }}
          />
        </div>

        {/* 3. Layer: Winding Aerial River Landscape (Trust, Reviews, News, Contact) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 4,
            opacity: isTrustOrLater ? 0.85 : 0,
            transform: !reducedMotion && !isTrustOrLater ? 'scale(1.05)' : 'scale(1)',
            transition: reducedMotion
              ? 'none'
              : 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src="/images/river_trust_aerial.jpg"
            alt="Vista aérea del meandro fluvial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isContactOrFooter
                ? 'radial-gradient(ellipse at center, rgba(7, 13, 24, 0.6) 0%, rgba(7, 13, 24, 0.88) 100%)'
                : 'radial-gradient(ellipse at center, rgba(7, 13, 24, 0.45) 0%, rgba(7, 13, 24, 0.78) 100%)',
              transition: 'background 0.5s ease',
            }}
          />
        </div>
      </div>

      {/* Fluvial Telemetry HUD: Coordinates & Navigation Axis (Visible in operational chapters) */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          right: '32px',
          zIndex: 10,
          opacity: showHUD ? 0.7 : 0,
          transform: showHUD ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          display: isMobile ? 'none' : 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
          fontFamily: 'monospace',
          fontSize: '0.72rem',
          color: '#38bdf8',
          letterSpacing: '0.08em',
          textShadow: '0 0 10px rgba(56, 189, 248, 0.4)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
          <span>CANAL NAVEGABLE · PK 482.5</span>
        </div>
        <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>LAT 08°24&apos;12&quot; N · LON 73°45&apos;30&quot; W</span>
        <span style={{ color: 'rgba(56, 189, 248, 0.8)' }}>HDG 042° · CALADO RECOMENDADO 2.8M</span>
      </div>

      {/* Atmospheric Top Vignette (Guarantees Header / Navbar legibility) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 60%, transparent 100%)',
          zIndex: 12,
        }}
      />

      {/* Atmospheric Bottom Vignette (Grounds content and typography) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background: 'linear-gradient(to top, rgba(7, 13, 24, 0.4) 0%, transparent 100%)',
          zIndex: 12,
        }}
      />
    </div>
  );
}
