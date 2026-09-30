'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onSkipExperience?: () => void;
}

export default function Navbar({ onSkipExperience }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#plataforma" className="skip-to-content">
        Saltar experiencia al contenido principal
      </a>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '10px 0' : '18px 0',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(15, 23, 42, 0.06)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Emotiva Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}
            aria-label="Emotiva Inicio"
          >
            {/* Emotiva Logo Typography */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0284c7', letterSpacing: '-0.03em' }}>
                !
              </span>
              <span style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0284c7', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
                emotiva
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
            }}
            aria-label="Navegación principal"
            className="hidden md:flex"
          >
            <a
              href="#experiencia"
              style={{
                fontSize: '0.85rem',
                color: '#0f172a',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
            >
              HOME
            </a>
            <a
              href="#one-platform"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              ABOUT US
            </a>
            <a
              href="#solutions"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              SOLUTIONS
            </a>
            <a
              href="#climate"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              IMPACT
            </a>
            <a
              href="#endorsement"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              CLIENTS
            </a>
            <a
              href="#news"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              BLOG
            </a>
            <a
              href="#contacto"
              style={{
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              CONTACT US
            </a>
          </nav>


        </div>
      </header>
    </>
  );
}
