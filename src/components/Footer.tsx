'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export default function Footer({ isReducedMotion, onToggleReducedMotion }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '80px 24px 40px 24px',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Col 1: Emotiva Vision */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', letterSpacing: '-0.03em' }}>
                !
              </span>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
                emotiva
              </span>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
              We are a visionary technology company, bringing together a team of skilled developers
              specializing in cutting-edge IoT and ICT solutions. We harness the power of advanced
              information technologies and leverage existing communication infrastructure to drive innovation.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Links of Interest */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
              Links of Interest
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#experiencia" style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#experiencia" style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Fluvial Navigation Solutions
                </a>
              </li>
              <li>
                <a href="#contacto" style={{ color: '#64748b', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Request RiverTech Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: WhatsApp & Location */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                {/* WhatsApp Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: '#0f172a' }}>
                  Want to chat first?
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#0284c7' }}>
                  Chat with us via Whatsapp
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.88rem',
                marginBottom: '16px',
              }}
            >
              +1 (813) 555-0199
            </div>

            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Wesley Chapel, Florida, United States
            </p>
          </div>
        </div>

        {/* Payment / Enterprise Badges */}
        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
            <span>VISA</span>
            <span>PayPal</span>
            <span> Pay</span>
            <span>Stripe</span>
            <span>G Pay</span>
          </div>

          <p style={{ color: '#64748b', fontSize: '0.82rem' }}>
            Copyright {new Date().getFullYear()} © Emotiva LLC & RiverTech. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f172a',
            }}
            aria-label="Volver arriba"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
