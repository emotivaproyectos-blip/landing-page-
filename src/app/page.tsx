'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/Navbar';
import MasterScene from '@/components/MasterScene';
import ChapterTracker from '@/components/ChapterTracker';
import HeroSection from '@/components/HeroSection';
import OnePlatformSection from '@/components/OnePlatformSection';
import SolutionsSection from '@/components/SolutionsSection';
import ClimateImpactSection from '@/components/ClimateImpactSection';
import TrustSection from '@/components/TrustSection';
import ReviewsSection from '@/components/ReviewsSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState<string>('experiencia');
  const [activeProgress, setActiveProgress] = useState<number>(0);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect OS-level prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Master ScrollTrigger synchronization across all chapters
  useEffect(() => {
    if (reducedMotion) return;

    // Refresh ScrollTrigger after DOM has settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const sections = [
      'experiencia',
      'one-platform',
      'solutions',
      'climate',
      'endorsement',
      'reviews',
      'news',
      'contacto',
    ];

    const triggers: ScrollTrigger[] = [];

    // Individual chapter entry/exit triggers
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setCurrentChapterId(id),
        onEnterBack: () => setCurrentChapterId(id),
      });
      triggers.push(st);
    });

    // Global scroll progress listener (scrubbed with short 100ms dampening for stabilization)
    const globalSt = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1,
      onUpdate: (self) => {
        setActiveProgress(self.progress);
      },
    });
    triggers.push(globalSt);

    return () => {
      clearTimeout(timeout);
      triggers.forEach((st) => st.kill());
    };
  }, [reducedMotion]);

  const handleSkipExperience = useCallback(() => {
    const target = document.getElementById('one-platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleExploreClick = useCallback(() => {
    const target = document.getElementById('one-platform');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleRequestDemo = useCallback(() => {
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. Universal Header Navigation with Active Chapter Highlighting */}
      <Navbar
        onSkipExperience={handleSkipExperience}
        currentChapterId={currentChapterId}
      />

      {/* 2. Persistent 3D Master Visual Scene (Rendered immediately to prevent black flash) */}
      <MasterScene
        currentChapterId={currentChapterId}
        activeProgress={activeProgress}
        isMobile={isMobile}
        reducedMotion={reducedMotion}
      />
      {!reducedMotion && (
        <ChapterTracker
          currentChapterId={currentChapterId}
          isMobile={isMobile}
        />
      )}

      {/* 3. Main Continuous Editorial Flow: All Chapters Active and Accessible */}
      <main id="main-content">
        {/* Chapter 01: Apertura (Hero con perspectiva 2.5D y mensaje principal) */}
        <HeroSection
          onExploreClick={handleExploreClick}
          onRequestDemoClick={handleRequestDemo}
        />

        {/* Chapter 02: Beneficios & Capacidades (One Platform, Total Control) */}
        <OnePlatformSection />

        {/* Chapter 03: Soluciones Fluviales (Survey, Pilot, Dredge) */}
        <SolutionsSection />

        {/* Chapter 04: Impacto Ambiental & Cuencas Fluviales */}
        <ClimateImpactSection />

        {/* Chapter 05: Clientes & Confianza (Endorsement) */}
        <TrustSection />

        {/* Chapter 06: Testimonios Operacionales (Reviews) */}
        <ReviewsSection />

        {/* Chapter 07: Noticias & Frente Operacional (Latest News) */}
        <LatestNewsSection />

        {/* Chapter 08: Demostración & Cierre (Formulario Estable) */}
        <ContactSection />
      </main>

      {/* 4. Emotiva & RiverTech Comprehensive Footer */}
      <Footer
        isReducedMotion={reducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />
    </div>
  );
}
