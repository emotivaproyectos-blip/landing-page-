'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { EXPERIENCE_CONFIG, ExperienceConfig } from '@/config/experienceConfig';

interface VideoScrubberProps {
  progress: number; // 0.0 to 1.0
  isMobile: boolean;
  config?: ExperienceConfig;
  onReady?: () => void;
  onError?: (err: string) => void;
}

export default function VideoScrubber({
  progress,
  isMobile,
  config = EXPERIENCE_CONFIG,
  onReady,
  onError,
}: VideoScrubberProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isSeekingRef = useRef(false);
  const pendingTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const durationRef = useRef<number>(config.totalDurationSeconds);

  useEffect(() => {
    durationRef.current = config.totalDurationSeconds;
    setIsLoaded(false);
  }, [config.id, config.videoSrc, config.totalDurationSeconds]);

  // Update target time when progress changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    const maxDuration = Math.max(0.1, durationRef.current - 0.05); // Avoid clamping freeze at end
    const targetTime = Math.min(Math.max(0, progress * maxDuration), maxDuration);

    const performSeek = () => {
      if (!video) return;

      if (isSeekingRef.current) {
        pendingTimeRef.current = targetTime;
        return;
      }

      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        isSeekingRef.current = true;
        video.currentTime = targetTime;
      }
    };

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(performSeek);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [progress, isLoaded]);

  // Handle seeked event to drain pending seek requests
  const handleSeeked = useCallback(() => {
    isSeekingRef.current = false;
    const video = videoRef.current;
    if (!video) return;

    if (pendingTimeRef.current !== null) {
      const nextTime = pendingTimeRef.current;
      pendingTimeRef.current = null;
      if (Math.abs(video.currentTime - nextTime) > 0.02) {
        isSeekingRef.current = true;
        video.currentTime = nextTime;
      }
    }
  }, []);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && !isNaN(video.duration)) {
      durationRef.current = video.duration;
    }
    setIsLoaded(true);
    try {
      video.currentTime = 0.001;
    } catch {
      // ignore
    }
    onReady?.();
  };

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
      {/* Fallback image to guarantee visual presence before video decodes */}
      <img
        src={config.posterSrc}
        alt="Preview"
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

      <video
        ref={videoRef}
        key={config.id}
        src={config.videoSrc}
        poster={config.posterSrc}
        muted
        playsInline
        preload="auto"
        controls={false}
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        onError={() => onError?.('Error cargando el video')}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Subtle overlays for legibility */}
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
