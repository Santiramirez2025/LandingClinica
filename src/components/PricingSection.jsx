import React, { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Esencial',
    type: 'Clínicas pequeñas',
    setup: '599€ (3-5 días para puesta en marcha)',
    monthly: '79€',
    description: 'Perfecto para clínicas independientes que empiezan con fidelización',
    features: [
      'Configuración personalizada de tu clínica',
      'Capacitación inicial completa (2 sesiones)',
      'Seguimiento automático post-tratamiento',
      'Recordatorios inteligentes personalizados',
      'Programa básico de fidelización',
      'Soporte técnico vía email',
      'Reportes mensuales básicos'
    ],
    highlight: false,
    icon: '💎'
  },
  {
    name: 'Profesional',
    type: 'Clínicas en crecimiento',
    setup: '899€ (3-5 días para puesta en marcha)',
    monthly: '119€',
    description: 'Para clínicas con varios tratamientos que buscan maximizar la retención',
    features: [
      'Todo lo del plan Esencial',
      'Personalización avanzada de mensajes por tratamiento',
      'Segmentación automática de pacientes',
      'Reportes detallados de fidelización y ROI',
      'Soporte prioritario (email + chat)',
      'Capacitación trimestral incluida',
      'Integraciones básicas con tu software'
    ],
    highlight: true,
    icon: '✨'
  },
  {
    name: 'Premium',
    type: 'Clínicas establecidas',
    setup: '1.199€ (3-5 días para puesta en marcha)',
    monthly: '149€',
    description: 'Máximo potencial con acompañamiento personalizado continuo',
    features: [
      'Todo lo del plan Profesional',
      'Consultoría mensual estratégica personalizada',
      'Análisis avanzado y optimización continua',
      'Integraciones personalizadas completas',
      'Soporte VIP con respuesta en 2h',
      'Sesiones de coaching para tu equipo',
      'Acceso anticipado a nuevas funcionalidades'
    ],
    highlight: false,
    icon: '👑'
  }
]

export default function ClinicPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <section id="pricing-section" className="pricing-section">
      {/* Gradient Background */}
      <div className="gradient-orbs">
        <motion.div 
          className="orb orb-1"
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="orb orb-2"
          animate={{ 
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="premium-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-text">💰 Precios transparentes</span>
          </motion.div>
          
          <h2 className="pricing-title">
            Planes que se adaptan a<br/>
            <span className="title-accent">tu clínica perfectamente</span>
          </h2>
          
          <p className="pricing-subtitle">
            Implementación única + suscripción mensual. Sin sorpresas, sin comisiones por paciente.
          </p>
          
          {/* Pricing explanation */}
          <motion.div 
            className="pricing-explanation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="explanation-content">
              <h3 className="explanation-title">
                ¿Cómo funciona nuestro modelo de precios?
              </h3>
              <div className="explanation-grid">
                <div className="explanation-item">
                  <span className="explanation-number">1</span>
                  <div>
                    <strong>Pago único de setup:</strong> Configuración personalizada, capacitación y puesta en marcha
                  </div>
                </div>
                <div className="explanation-item">
                  <span className="explanation-number">2</span>
                  <div>
                    <strong>Suscripción mensual:</strong> Uso continuo, soporte técnico y todas las actualizaciones
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="plans-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`plan-card ${plan.highlight ? 'highlighted' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {plan.highlight && (
                <div className="popular-badge">
                  <span>✨ Más Popular</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-type">{plan.type}</p>
                <p className="plan-description">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="plan-pricing">
                <div className="price-item">
                  <span className="price-label">Setup inicial:</span>
                  <span className="price-value setup">{plan.setup}</span>
                </div>
                <div className="price-item main">
                  <span className="price-label">Mensual:</span>
                  <span className="price-value monthly">
                    {plan.monthly}
                    <span className="price-period">/mes</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="plan-features">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="feature-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="feature-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`plan-cta ${plan.highlight ? 'primary' : 'secondary'}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan(plan.name)}
              >
                <span className="cta-text">
                  {selectedPlan === plan.name ? '¡Seleccionado!' : 'Solicitar demo gratuita'}
                </span>
                <motion.span 
                  className="cta-arrow"
                  animate={{ x: selectedPlan === plan.name ? 0 : 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {selectedPlan === plan.name ? '✓' : '→'}
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="trust-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="trust-title">Sin riesgos, con garantías</h3>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-content">
                <strong>Sin permanencia</strong>
                <span>Cancela cuando quieras</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-content">
                <strong>Setup garantizado</strong>
                <span>O te devolvemos el dinero</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-content">
                <strong>Soporte incluido</strong>
                <span>Siempre disponible para ti</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-content">
                <strong>Prueba gratuita</strong>
                <span>Demo de 30 días sin compromiso</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .pricing-section {
          padding: 120px 0 80px;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
          position: relative;
          overflow: hidden;
          font-family: "'Inter', -apple-system, sans-serif";
        }
        
        .gradient-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 218, 225, 0.6) 0%, transparent 70%);
          top: 20%;
          left: -100px;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.6) 0%, transparent 70%);
          bottom: 10%;
          right: -150px;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .premium-badge {
          display: inline-flex;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .badge-text {
          background: linear-gradient(135deg, #FFE5E5 0%, #FFF0E5 100%);
          border: 1px solid rgba(255, 200, 200, 0.4);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #B86B6B;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
        }
        
        .pricing-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
          color: #1a1a1a;
        }
        
        .title-accent {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        
        .pricing-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 40px;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .pricing-explanation {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%);
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .explanation-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #E8B4B8;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .explanation-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
        
        .explanation-number {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        
        .plan-card.highlighted {
          border-color: rgba(232, 180, 184, 0.4);
          box-shadow: 0 20px 60px rgba(232, 180, 184, 0.15);
          transform: scale(1.02);
        }
        
        .plan-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border-color: rgba(232, 180, 184, 0.3);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.4);
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .plan-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }
        
        .plan-name {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        
        .plan-type {
          font-size: 1rem;
          color: #E8B4B8;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .plan-description {
          font-size: 15px;
          color: #666;
          line-height: 1.5;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .plan-pricing {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.08) 0%, rgba(255, 237, 213, 0.08) 100%);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
        }
        
        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .price-item.main {
          margin-bottom: 0;
          padding-top: 12px;
          border-top: 1px solid rgba(232, 180, 184, 0.15);
        }
        
        .price-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        .price-value {
          font-weight: 700;
          color: #1a1a1a;
        }
        
        .price-value.setup {
          font-size: 1.2rem;
        }
        
        .price-value.monthly {
          font-size: 1.8rem;
          color: #E8B4B8;
        }
        
        .price-period {
          font-size: 14px;
          font-weight: 400;
          color: #666;
        }
        
        .plan-features {
          margin-bottom: 32px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 14px;
          color: #555;
          line-height: 1.5;
        }
        
        .feature-check {
          color: #E8B4B8;
          margin-right: 12px;
          font-weight: 600;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        
        .feature-text {
          flex: 1;
        }
        
        .plan-cta {
          width: 100%;
          padding: 16px 24px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.3px;
          position: relative;
          overflow: hidden;
        }
        
        .plan-cta.primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(232, 180, 184, 0.3);
        }
        
        .plan-cta.primary:hover {
          box-shadow: 0 12px 32px rgba(232, 180, 184, 0.4);
        }
        
        .plan-cta.secondary {
          background: rgba(232, 180, 184, 0.1);
          color: #E8B4B8;
          border: 2px solid rgba(232, 180, 184, 0.3);
        }
        
        .plan-cta.secondary:hover {
          background: rgba(232, 180, 184, 0.15);
          border-color: rgba(232, 180, 184, 0.5);
        }
        
        .cta-text {
          font-weight: 600;
        }
        
        .cta-arrow {
          font-size: 16px;
          font-weight: 600;
        }
        
        .trust-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .trust-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 32px;
        }
        
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
        }
        
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }
        
        .trust-icon {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.3);
        }
        
        .trust-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .trust-content strong {
          color: #1a1a1a;
          font-weight: 600;
          font-size: 14px;
        }
        
        .trust-content span {
          color: #666;
          font-size: 13px;
        }
        
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 24px;
          }
          
          .plan-card.highlighted {
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .pricing-section {
            padding: 80px 0 60px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .pricing-header {
            margin-bottom: 60px;
          }
          
          .pricing-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .pricing-explanation {
            padding: 24px;
          }
          
          .explanation-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 60px;
          }
          
          .plan-card {
            padding: 32px 24px;
          }
          
          .trust-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 24px;
          }
          
          .trust-section {
            padding: 32px 24px;
          }
        }
        
        @media (max-width: 480px) {
          .explanation-item {
            font-size: 13px;
          }
          
          .plan-name {
            font-size: 1.5rem;
          }
          
          .plan-pricing {
            padding: 20px;
          }
          
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}