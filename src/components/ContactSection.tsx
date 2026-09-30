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
    // Record submission state locally without inventing external production APIs
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
      aria-label="Contacto y solicitud de demostración"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Editorial column */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(2, 132, 199, 0.08)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                color: '#0284c7',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Demostración RiverTech
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3rem)',
                lineHeight: 1.18,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.025em',
                marginBottom: '20px',
              }}
            >
              Conoce el alcance de RiverTech para tu operación fluvial
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#475569',
                marginBottom: '32px',
              }}
            >
              Coordinamos sesiones de demostración técnica orientadas a armadores, operadores de remolcadores y equipos de despacho logístico.
            </p>

            {/* Verification Note according to specification */}
            <div
              style={{
                padding: '18px 22px',
                borderRadius: '12px',
                backgroundColor: 'rgba(2, 132, 199, 0.05)',
                border: '1px solid rgba(2, 132, 199, 0.18)',
                borderLeft: '4px solid #0284c7',
                fontSize: '0.86rem',
                color: '#475569',
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>
                Canal de demostración técnica:
              </strong>
              {BRAND_CONFIG.contactStatusNote}
            </div>
          </div>

          {/* Right Form Card */}
          <div
            style={{
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(2, 132, 199, 0.12)',
                    border: '1px solid #0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    color: '#0284c7',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                  Solicitud registrada
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Gracias por tu interés en RiverTech. La configuración del canal de atención directa se encuentra en proceso de enlace con el equipo operacional.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="nombre" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
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
                      padding: '12px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="empresa" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
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
                      padding: '12px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="cargo" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
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
                        padding: '12px 16px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="embarcaciones" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
                      Nº Embarcaciones
                    </label>
                    <select
                      id="embarcaciones"
                      value={formData.embarcaciones}
                      onChange={(e) => setFormData({ ...formData, embarcaciones: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        fontSize: '0.95rem',
                      }}
                    >
                      <option value="1-5">1 a 5 convoyes</option>
                      <option value="6-15">6 a 15 convoyes</option>
                      <option value="16+">Más de 15 convoyes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
                    Consulta u objetivo operacional
                  </label>
                  <textarea
                    id="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Detalles sobre las rutas o flota..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', marginTop: '8px' }}
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
