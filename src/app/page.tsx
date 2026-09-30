'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import ScrollExperience from '@/components/ScrollExperience';
import ReducedMotionView from '@/components/ReducedMotionView';
import OnePlatformSection from '@/components/OnePlatformSection';
import SolutionsSection from '@/components/SolutionsSection';
import ClimateImpactSection from '@/components/ClimateImpactSection';
import TrustSection from '@/components/TrustSection';
import ReviewsSection from '@/components/ReviewsSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Respect OS level prefers-reduced-motion
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

  const handleSkipExperience = useCallback(() => {
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
      {/* 1. Header Navigation */}
      <Navbar onSkipExperience={handleSkipExperience} />

      <main id="main-content">
        {/* 2. Protagonist 3D Continuous Scroll-Linked Experience */}
        {mounted && reducedMotion ? (
          <ReducedMotionView onRequestDemoClick={handleRequestDemo} />
        ) : (
          <ScrollExperience
            onSkipExperience={handleSkipExperience}
            onRequestDemo={handleRequestDemo}
          />
        )}

        {/* 3. ONE PLATFORM, TOTAL CONTROL (4 Cyan Pillars) */}
        <OnePlatformSection />

        {/* 4. OUR SOLUTIONS (SURVEY, PILOT, DREDGE) */}
        <SolutionsSection />

        {/* 5. CLIMATE IMPACT (Split Banner) */}
        <ClimateImpactSection />

        {/* 6. TRUST & ENDORSEMENTS (Aerial River & Client Logos) */}
        <TrustSection />

        {/* 7. REVIEWS (What our clients say) */}
        <ReviewsSection />

        {/* 8. LATEST NEWS */}
        <LatestNewsSection />

        {/* 9. CONTACT US & DEMO REQUEST */}
        <ContactSection />
      </main>

      {/* 10. Emotiva & RiverTech Comprehensive Footer */}
      <Footer
        isReducedMotion={reducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />
    </div>
  );
}
