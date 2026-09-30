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
              gap: '24px',
            }}
            aria-label="Navegación principal"
            className="navbar-links"
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

          {/* Right Action Area: Ocean Blue Rivertech Login Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://rivertech.emotiva.co/login"
              target="_blank"
              rel="noopener noreferrer"
              className="rivertech-login-btn"
              title="Acceder a Rivertech Login"
              aria-label="Acceder a Rivertech Login"
            >
              <span className="rivertech-login-pulse" aria-hidden="true" />
              <span>Rivertech Login</span>
              <svg
                className="rivertech-login-icon"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '61px' : '77px',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(15, 23, 42, 0.1)',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
            padding: '24px 20px',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {[
            { href: '#experiencia', label: 'HOME' },
            { href: '#one-platform', label: 'ABOUT US' },
            { href: '#solutions', label: 'SOLUTIONS' },
            { href: '#climate', label: 'IMPACT' },
            { href: '#endorsement', label: 'CLIENTS' },
            { href: '#news', label: 'BLOG' },
            { href: '#contacto', label: 'CONTACT US' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.9rem',
                color: '#0f172a',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                padding: '8px 0',
                borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://rivertech.emotiva.co/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="rivertech-login-btn"
            style={{
              marginTop: '10px',
              width: '100%',
              justifyContent: 'center',
              padding: '12px 20px',
            }}
          >
            <span className="rivertech-login-pulse" aria-hidden="true" />
            <span>Rivertech Login</span>
            <svg
              className="rivertech-login-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
