'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { EXPERIENCE_CONFIG, ExperienceConfig } from '@/config/experienceConfig';

interface CanvasSequenceScrubberProps {
  progress: number; // 0.0 to 1.0
  isMobile: boolean;
  config?: ExperienceConfig;
  onReady?: () => void;
  onError?: (err: string) => void;
}

export default function CanvasSequenceScrubber({
  progress,
  isMobile,
  config = EXPERIENCE_CONFIG,
  onReady,
  onError,
}: CanvasSequenceScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const totalFrames = config.totalFrames;

  // In-memory cache for loaded HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [initialFrameLoaded, setInitialFrameLoaded] = useState(false);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameRef = useRef<number | null>(null);

  // Determine frame folder based on viewport and config
  const framesFolder = isMobile ? config.framesMobileFolder : config.framesFolder;

  // Reset cache whenever config id or folder changes
  useEffect(() => {
    imagesRef.current = new Array(config.totalFrames).fill(null);
    lastDrawnFrameRef.current = -1;
    setInitialFrameLoaded(false);
    setLoadPercentage(0);
  }, [config.id, config.totalFrames, framesFolder]);

  // Helper to draw image cover with chapter-smart mobile focal centering
  const renderImageToCanvas = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement,
    frameIdx: number,
    mobile: boolean,
    expId: string
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

    let focalX = 0.5;
    if (mobile) {
      if (frameIdx < 48) {
        focalX = 0.5;
      } else if (frameIdx < 108) {
        focalX = 0.55;
      } else if (frameIdx < 187) {
        focalX = 0.52;
      } else {
        focalX = 0.48;
      }
    }

    const posX = (canvasW - scaledW) * focalX;
    const posY = (canvasH - scaledH) * 0.5;

    ctx.drawImage(img, posX, posY, scaledW, scaledH);
  };

  // Ensure canvas has correct pixel dimensions before drawing
  const ensureCanvasSize = (canvas: HTMLCanvasElement) => {
    const parent = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const w = (parent && parent.offsetWidth > 0) ? parent.offsetWidth : window.innerWidth;
    const h = (parent && parent.offsetHeight > 0) ? parent.offsetHeight : window.innerHeight;
    const targetW = Math.max(1, Math.round(w * dpr));
    const targetH = Math.max(1, Math.round(h * dpr));
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  };

  // Draw specific frame index onto canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Always ensure canvas has correct dimensions before drawing
    ensureCanvasSize(canvas);

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame as fallback
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
        renderImageToCanvas(ctx, canvas, nearest, frameIdx, isMobile, config.id);
        lastDrawnFrameRef.current = frameIdx;
      }
      return;
    }

    renderImageToCanvas(ctx, canvas, img, frameIdx, isMobile, config.id);
    lastDrawnFrameRef.current = frameIdx;
  }, [isMobile, totalFrames, config.id]);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    const step = Math.max(1, Math.floor((totalFrames - 1) / 8));
    const landmarks = Array.from(
      new Set([0, step, step * 2, step * 3, step * 4, step * 5, step * 6, step * 7, totalFrames - 1])
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
            loadedCount++;
            setLoadPercentage(Math.round((loadedCount / totalFrames) * 100));

            if (idx === 0) {
              setInitialFrameLoaded(true);
              drawFrame(0);
              onReady?.();
            }
          }
          resolve(img);
        };

        img.onerror = () => {
          console.warn(`Failed loading frame ${idx} from ${img.src}`);
          resolve(img);
        };
      });
    };

    Promise.all(landmarks.map(loadSingleFrame)).then(() => {
      if (isCancelled) return;
      const remaining: number[] = [];
      for (let i = 0; i < totalFrames; i++) {
        if (!landmarks.includes(i)) remaining.push(i);
      }

      const batchSize = 12;
      let currentIdx = 0;

      const loadNextBatch = () => {
        if (isCancelled || currentIdx >= remaining.length) return;
        const batch = remaining.slice(currentIdx, currentIdx + batchSize);
        currentIdx += batchSize;
        Promise.all(batch.map(loadSingleFrame)).then(() => {
          if (!isCancelled) {
            const target = Math.min(Math.round(progress * (totalFrames - 1)), totalFrames - 1);
            if (imagesRef.current[target]) {
              drawFrame(target);
            }
            loadNextBatch();
          }
        });
      };

      loadNextBatch();
    });

    return () => {
      isCancelled = true;
    };
  }, [framesFolder, totalFrames, onReady, drawFrame]);

  // Handle canvas sizing via ResizeObserver — reliable vs getBoundingClientRect at mount time
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const applySize = (w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      const newW = Math.max(1, Math.round(w * dpr));
      const newH = Math.max(1, Math.round(h * dpr));
      if (canvas.width !== newW || canvas.height !== newH) {
        canvas.width = newW;
        canvas.height = newH;
        const target = Math.min(Math.max(0, Math.round(progress * (totalFrames - 1))), totalFrames - 1);
        drawFrame(target);
      }
    };

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) applySize(width, height);
      }
    });

    ro.observe(parent);

    // Apply immediately if parent already has dimensions
    if (parent.offsetWidth > 0 && parent.offsetHeight > 0) {
      applySize(parent.offsetWidth, parent.offsetHeight);
    } else {
      applySize(window.innerWidth, window.innerHeight);
    }

    return () => ro.disconnect();
  }, [progress, totalFrames, drawFrame]);

  // Update frame on progress change
  useEffect(() => {
    const targetFrame = Math.min(Math.max(0, Math.round(progress * (totalFrames - 1))), totalFrames - 1);

    if (targetFrame !== lastDrawnFrameRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        drawFrame(targetFrame);
      });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [progress, totalFrames, drawFrame]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Instant fallback image so screen is NEVER black even on first millisecond */}
      <img
        src={`${framesFolder}/frame_000.webp`}
        alt="Transición 3D Embarcación"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          zIndex: 0,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      {/* Loading progress bar — only visible until first frame is ready */}
      {!initialFrameLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: '#050912',
          }}
        >
          <div style={{ width: '180px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${loadPercentage}%`,
                background: 'linear-gradient(90deg, #38bdf8, #2563eb)',
                borderRadius: '9999px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            Cargando experiencia 3D… {loadPercentage}%
          </span>
        </div>
      )}

      {/* Subtle bottom vignette for typography legibility */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(to top, rgba(6, 10, 18, 0.75) 0%, rgba(6, 10, 18, 0.2) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle top vignette for header legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '25%',
          background: 'linear-gradient(to bottom, rgba(6, 10, 18, 0.7) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
