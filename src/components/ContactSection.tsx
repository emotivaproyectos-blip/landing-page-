'use client';

import React, { useState } from 'react';
import { BRAND_CONFIG } from '@/config/experienceConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    embarcaciones: '1-5',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '120px 24px 100px 24px',
        color: '#0f172a',
      }}
      aria-label="Contacto y solicitud de demostración técnica"
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Editorial column */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.52) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: 'clamp(36px, 5vw, 52px) clamp(28px, 4vw, 44px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 20px 48px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(2, 132, 199, 0.1)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                color: '#0284c7',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7' }} />
              08 / DEMOSTRACIÓN RIVERTECH
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 800,
                color: '#0b192c',
                letterSpacing: '-0.025em',
                marginBottom: '18px',
              }}
            >
              Conoce el alcance de RiverTech para tu operación fluvial
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: '#475569',
                marginBottom: '32px',
                fontWeight: 500,
              }}
            >
              Coordinamos sesiones de demostración técnica orientadas a armadores, operadores de remolcadores y equipos de despacho logístico.
            </p>

            {/* Verification Note according to specification */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                backgroundColor: 'rgba(2, 132, 199, 0.06)',
                border: '1px solid rgba(2, 132, 199, 0.22)',
                borderLeft: '4px solid #0284c7',
                fontSize: '0.88rem',
                color: '#334155',
                lineHeight: 1.55,
              }}
            >
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                Canal de demostración técnica:
              </strong>
              {BRAND_CONFIG.contactStatusNote}
            </div>
          </div>

          {/* Right Form Card: Completely stationary, comfortable, zero jitter */}
          <div
            style={{
              padding: 'clamp(32px, 5vw, 48px)',
              borderRadius: '24px',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
              position: 'relative',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(2, 132, 199, 0.12)',
                    border: '2px solid #0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    color: '#0284c7',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Solicitud registrada
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.98rem', maxWidth: '380px', margin: '0 auto' }}>
                  Gracias por tu interés en RiverTech. La configuración del canal de atención directa se encuentra en proceso de enlace con el equipo operacional.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="nombre" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Empresa u organización fluvial
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Ej. Naviera Fluvial S.A."
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="cargo" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Cargo / Área
                    </label>
                    <input
                      id="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      placeholder="Ej. Operaciones"
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="embarcaciones" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Nº Embarcaciones
                    </label>
                    <select
                      id="embarcaciones"
                      value={formData.embarcaciones}
                      onChange={(e) => setFormData({ ...formData, embarcaciones: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    >
                      <option value="1-5">1 a 5 convoyes</option>
                      <option value="6-15">6 a 15 convoyes</option>
                      <option value="16+">Más de 15 convoyes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Consulta u objetivo operacional
                  </label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Detalles sobre las rutas, canales o flota..."
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      resize: 'none',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '15px', marginTop: '6px' }}
                >
                  <span>Enviar solicitud de demostración</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
