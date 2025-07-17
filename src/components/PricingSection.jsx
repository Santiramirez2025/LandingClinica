import React, { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Esencial',
    type: 'Clínicas independientes',
    setup: '599€',
    monthly: '79€',
    setupTime: '3-5 días',
    description: 'Ideal para clínicas que inician su transformación digital en fidelización de pacientes',
    features: [
      'Configuración personalizada completa',
      'Formación inicial intensiva (2 sesiones)',
      'Seguimiento automático post-tratamiento',
      'Recordatorios inteligentes por WhatsApp/SMS',
      'Sistema básico de fidelización',
      'Soporte técnico por email',
      'Reportes mensuales de rendimiento'
    ],
    highlight: false,
    icon: '🏥',
    bestFor: 'Clínicas con 1-2 especialistas'
  },
  {
    name: 'Profesional',
    type: 'Clínicas en expansión',
    setup: '899€',
    monthly: '119€',
    setupTime: '3-5 días',
    description: 'Perfecto para clínicas con múltiples tratamientos que buscan maximizar la retención',
    features: [
      'Todo lo del plan Esencial',
      'Mensajes personalizados por tipo de tratamiento',
      'Segmentación automática de pacientes',
      'Análisis detallado de ROI y retención',
      'Soporte prioritario (email + chat en vivo)',
      'Formación trimestral especializada',
      'Integraciones con tu software actual'
    ],
    highlight: true,
    icon: '⭐',
    bestFor: 'Clínicas con 3-10 especialistas'
  },
  {
    name: 'Premium',
    type: 'Clínicas consolidadas',
    setup: '1.199€',
    monthly: '149€',
    setupTime: '3-5 días',
    description: 'Máximo rendimiento con acompañamiento estratégico personalizado continuo',
    features: [
      'Todo lo del plan Profesional',
      'Consultoría mensual estratégica 1:1',
      'Análisis predictivo y optimización IA',
      'Integraciones personalizadas completas',
      'Soporte VIP con respuesta en 2 horas',
      'Formación continua para todo el equipo',
      'Acceso prioritario a nuevas funcionalidades'
    ],
    highlight: false,
    icon: '👑',
    bestFor: 'Clínicas con +10 especialistas'
  }
]

export default function ClinicPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <section className="pricing-section">
      {/* Gradient Background */}
      <div className="gradient-background">
        <motion.div 
          className="gradient-orb gradient-orb-1"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="gradient-orb gradient-orb-2"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        {/* Header */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="trust-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-icon">💰</span>
            <span className="badge-text">Precios transparentes, sin sorpresas</span>
          </motion.div>
          
          <h2 className="main-title">
            Planes diseñados para el
            <span className="title-highlight"> crecimiento de tu clínica</span>
          </h2>
          
          <p className="subtitle">
            Inversión inicial única + suscripción mensual. Sin comisiones por paciente, sin letra pequeña.
          </p>
          
          {/* Pricing Model Explanation */}
          <motion.div 
            className="pricing-model"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="model-title">Modelo de inversión simple y claro</h3>
            <div className="model-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Inversión inicial</h4>
                  <p>Configuración, personalización y formación completa</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Suscripción mensual</h4>
                  <p>Uso ilimitado, soporte continuo y actualizaciones</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="plans-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`plan-card ${plan.highlight ? 'plan-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {plan.highlight && (
                <div className="featured-badge">
                  <span>⭐ Más elegido</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-type">{plan.type}</p>
                <p className="plan-best-for">{plan.bestFor}</p>
              </div>

              <div className="plan-description">
                <p>{plan.description}</p>
              </div>

              {/* Pricing Display */}
              <div className="pricing-display">
                <div className="price-row">
                  <span className="price-label">Configuración inicial</span>
                  <div className="price-info">
                    <span className="price-amount">{plan.setup}</span>
                    <span className="price-note">({plan.setupTime})</span>
                  </div>
                </div>
                <div className="price-row price-main">
                  <span className="price-label">Suscripción mensual</span>
                  <div className="price-info">
                    <span className="price-amount-main">{plan.monthly}</span>
                    <span className="price-period">/mes</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="features-section">
                <h4 className="features-title">Incluye:</h4>
                <div className="features-list">
                  {plan.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className={`cta-button ${plan.highlight ? 'cta-primary' : 'cta-secondary'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan(plan.name)}
              >
                <span className="cta-text">
                  {selectedPlan === plan.name ? '✓ Plan seleccionado' : 'Solicitar demo gratuita'}
                </span>
                <motion.span 
                  className="cta-arrow"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div 
          className="trust-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="trust-title">Tu inversión está protegida</h3>
          <div className="trust-items">
            <div className="trust-item">
              <div className="trust-icon">🛡️</div>
              <div className="trust-content">
                <h4>Sin permanencia</h4>
                <p>Cancela cuando necesites, sin penalizaciones</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✅</div>
              <div className="trust-content">
                <h4>Garantía de implementación</h4>
                <p>O reembolso completo del setup</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🤝</div>
              <div className="trust-content">
                <h4>Soporte especializado</h4>
                <p>Equipo dedicado al sector estético</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🎯</div>
              <div className="trust-content">
                <h4>Demo personalizada</h4>
                <p>30 días de prueba con tu clínica</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .pricing-section {
          padding: 100px 0 80px;
          background: linear-gradient(135deg, #FDFCFA 0%, #F8F6F3 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .gradient-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.3;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          mix-blend-mode: multiply;
        }
        
        .gradient-orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%);
          top: 10%;
          left: -50px;
        }
        
        .gradient-orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.4) 0%, transparent 70%);
          bottom: 20%;
          right: -100px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 12px 20px;
          border-radius: 25px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .badge-icon {
          font-size: 16px;
        }
        
        .badge-text {
          font-size: 14px;
          font-weight: 600;
          color: #8B6B6B;
          letter-spacing: 0.3px;
        }
        
        .main-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #2D2D2D;
          letter-spacing: -0.5px;
        }
        
        .title-highlight {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }
        
        .subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          line-height: 1.6;
          color: #5A5A5A;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .pricing-model {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: 16px;
          padding: 32px;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .model-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #E8B4B8;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .model-steps {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .step {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 250px;
        }
        
        .step-number {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .step-content h4 {
          font-size: 15px;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 4px;
        }
        
        .step-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.4;
        }
        
        .plans-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 20px;
          padding: 32px 24px;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        
        .plan-card:hover {
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
          border-color: rgba(232, 180, 184, 0.2);
        }
        
        .plan-featured {
          border-color: rgba(232, 180, 184, 0.3);
          box-shadow: 0 16px 48px rgba(232, 180, 184, 0.12);
          transform: scale(1.02);
        }
        
        .featured-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.4);
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .plan-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        
        .plan-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #2D2D2D;
          margin-bottom: 8px;
        }
        
        .plan-type {
          font-size: 1rem;
          color: #E8B4B8;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .plan-best-for {
          font-size: 13px;
          color: #888;
          font-style: italic;
        }
        
        .plan-description {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .plan-description p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }
        
        .pricing-display {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.06) 0%, rgba(255, 237, 213, 0.06) 100%);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
        }
        
        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .price-row.price-main {
          margin-bottom: 0;
          padding-top: 12px;
          border-top: 1px solid rgba(232, 180, 184, 0.1);
        }
        
        .price-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        .price-info {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        
        .price-amount {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2D2D2D;
        }
        
        .price-amount-main {
          font-size: 1.6rem;
          font-weight: 700;
          color: #E8B4B8;
        }
        
        .price-note {
          font-size: 12px;
          color: #888;
        }
        
        .price-period {
          font-size: 13px;
          color: #666;
          font-weight: 400;
        }
        
        .features-section {
          margin-bottom: 28px;
        }
        
        .features-title {
          font-size: 14px;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 16px;
        }
        
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #555;
          line-height: 1.4;
        }
        
        .feature-check {
          color: #E8B4B8;
          font-weight: 600;
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        
        .cta-button {
          width: 100%;
          padding: 16px 20px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          letter-spacing: 0.2px;
        }
        
        .cta-primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(232, 180, 184, 0.3);
        }
        
        .cta-primary:hover {
          box-shadow: 0 12px 32px rgba(232, 180, 184, 0.4);
        }
        
        .cta-secondary {
          background: rgba(232, 180, 184, 0.08);
          color: #E8B4B8;
          border: 1px solid rgba(232, 180, 184, 0.2);
        }
        
        .cta-secondary:hover {
          background: rgba(232, 180, 184, 0.12);
          border-color: rgba(232, 180, 184, 0.3);
        }
        
        .trust-section {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 16px;
          padding: 40px 32px;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .trust-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 28px;
        }
        
        .trust-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }
        
        .trust-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }
        
        .trust-content h4 {
          font-size: 15px;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 4px;
        }
        
        .trust-content p {
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 0 50px;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .pricing-header {
            margin-bottom: 40px;
          }
          
          .main-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            line-height: 1.2;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .pricing-model {
            padding: 24px 20px;
          }
          
          .model-steps {
            flex-direction: column;
            gap: 20px;
          }
          
          .step {
            min-width: 100%;
            justify-content: flex-start;
          }
          
          .plans-container {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }
          
          .plan-card {
            padding: 24px 20px;
          }
          
          .plan-featured {
            transform: scale(1);
          }
          
          .plan-name {
            font-size: 1.5rem;
          }
          
          .pricing-display {
            padding: 16px;
          }
          
          .trust-section {
            padding: 32px 24px;
          }
          
          .trust-items {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .pricing-section {
            padding: 50px 0 40px;
          }
          
          .container {
            padding: 0 12px;
          }
          
          .trust-badge {
            padding: 10px 16px;
          }
          
          .badge-text {
            font-size: 13px;
          }
          
          .main-title {
            font-size: 1.8rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .pricing-model {
            padding: 20px 16px;
          }
          
          .plan-card {
            padding: 20px 16px;
          }
          
          .plan-name {
            font-size: 1.4rem;
          }
          
          .pricing-display {
            padding: 14px;
          }
          
          .price-amount-main {
            font-size: 1.4rem;
          }
          
          .cta-button {
            padding: 14px 16px;
            font-size: 14px;
          }
          
          .trust-section {
            padding: 24px 16px;
          }
          
          .trust-title {
            font-size: 1.2rem;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .plan-card {
            border: 2px solid #000;
          }
          
          .trust-badge {
            border: 2px solid #000;
          }
        }
      `}</style>
    </section>
  )
}