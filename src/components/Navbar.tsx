'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onSkipExperience?: () => void;
  currentChapterId?: string;
}

export default function Navbar({ onSkipExperience, currentChapterId = 'experiencia' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experiencia', id: 'experiencia', label: 'HOME' },
    { href: '#one-platform', id: 'one-platform', label: 'ABOUT US' },
    { href: '#solutions', id: 'solutions', label: 'SOLUTIONS' },
    { href: '#climate', id: 'climate', label: 'IMPACT' },
    { href: '#endorsement', id: 'endorsement', label: 'CLIENTS' },
    { href: '#news', id: 'news', label: 'BLOG' },
    { href: '#contacto', id: 'contacto', label: 'CONTACT US' },
  ];

  return (
    <>
      <a href="#one-platform" className="skip-to-content">
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0284c7', letterSpacing: '-0.03em' }}>
                !
              </span>
              <span style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0284c7', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
                emotiva
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Chapter Highlighting */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
            aria-label="Navegación principal"
            className="navbar-links"
          >
            {navLinks.map((link) => {
              const isActive = link.id === currentChapterId;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  style={{
                    fontSize: '0.84rem',
                    color: isActive ? '#0284c7' : '#475569',
                    fontWeight: isActive ? 800 : 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s',
                    position: 'relative',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#0284c7';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#475569';
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        borderRadius: '2px',
                        background: '#0284c7',
                      }}
                    />
                  )}
                </a>
              );
            })}
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
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.9rem',
                color: item.id === currentChapterId ? '#0284c7' : '#0f172a',
                fontWeight: item.id === currentChapterId ? 800 : 600,
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
