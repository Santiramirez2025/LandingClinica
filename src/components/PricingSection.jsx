import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Shield, Clock, Users, HeartHandshake, Phone, MessageCircle, ChevronRight, Zap, TrendingUp, Award } from 'lucide-react'

const plans = [
  {
    id: 'esencial',
    name: 'Esencial',
    tagline: 'Inicia tu transformación digital',
    type: 'Clínicas independientes',
    setup: 599,
    monthly: 79,
    setupTime: '3-7 días',
    description: 'Ideal para clínicas que buscan digitalizar su gestión de pacientes y aumentar la fidelización',
    features: [
      { text: 'Configuración personalizada completa', highlight: false },
      { text: 'Formación inicial intensiva (2 sesiones)', highlight: false },
      { text: 'Seguimiento automático post-tratamiento', highlight: true },
      { text: 'WhatsApp Business API integrado', highlight: true },
      { text: 'Sistema básico de fidelización', highlight: false },
      { text: 'Soporte técnico por email', highlight: false },
      { text: 'Reportes mensuales de rendimiento', highlight: false },
      { text: 'Hasta 500 pacientes activos', highlight: false }
    ],
    metrics: {
      retention: '+15%',
      revenue: '+20%',
      time: '-3h/semana'
    },
    highlight: false,
    icon: '🏥',
    bestFor: '1-2 especialistas',
    color: '#94A3B8',
    popular: false
  },
  {
    id: 'profesional',
    name: 'Profesional',
    tagline: 'Maximiza tu retención',
    type: 'Clínicas en crecimiento',
    setup: 899,
    monthly: 119,
    setupTime: '3-7 días',
    description: 'Para clínicas que quieren automatizar completamente su comunicación y maximizar el lifetime value',
    features: [
      { text: 'Todo lo del plan Esencial', highlight: false },
      { text: 'IA para mensajes personalizados', highlight: true },
      { text: 'Segmentación avanzada de pacientes', highlight: true },
      { text: 'ROI tracking en tiempo real', highlight: true },
      { text: 'Soporte prioritario multicanal', highlight: false },
      { text: 'Formación trimestral especializada', highlight: false },
      { text: 'API e integraciones ilimitadas', highlight: true },
      { text: 'Hasta 2.000 pacientes activos', highlight: false }
    ],
    metrics: {
      retention: '+35%',
      revenue: '+45%',
      time: '-8h/semana'
    },
    highlight: true,
    icon: '⭐',
    bestFor: '3-10 especialistas',
    color: '#E8B4B8',
    popular: true,
    savings: 'Ahorra 180€/año'
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Crecimiento exponencial',
    type: 'Clínicas líderes',
    setup: 1199,
    monthly: 149,
    setupTime: '3-7 días',
    description: 'Solución completa con consultoría estratégica para dominar tu mercado local',
    features: [
      { text: 'Todo lo del plan Profesional', highlight: false },
      { text: 'Account Manager dedicado', highlight: true },
      { text: 'Análisis predictivo con IA', highlight: true },
      { text: 'Campañas multicanal automatizadas', highlight: true },
      { text: 'Soporte VIP 24/7', highlight: true },
      { text: 'Formación continua ilimitada', highlight: false },
      { text: 'Desarrollo de features a medida', highlight: true },
      { text: 'Pacientes ilimitados', highlight: true }
    ],
    metrics: {
      retention: '+50%',
      revenue: '+75%',
      time: '-15h/semana'
    },
    highlight: false,
    icon: '👑',
    bestFor: '+10 especialistas',
    color: '#D4A574',
    popular: false
  }
]

const testimonials = [
  {
    name: "Dra. María García",
    clinic: "Clínica Belleza Madrid",
    text: "En 3 meses aumentamos un 40% la recurrencia de tratamientos",
    rating: 5,
    plan: "Profesional"
  },
  {
    name: "Dr. Carlos Ruiz",
    clinic: "Centro Estético Barcelona",
    text: "El ROI es increíble. Recuperamos la inversión en 2 meses",
    rating: 5,
    plan: "Premium"
  }
]

export default function ClinicPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState('profesional')
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [showComparison, setShowComparison] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  // Calcular descuentos para pago anual
  const getAnnualPrice = (monthlyPrice) => {
    const annual = monthlyPrice * 12
    const discount = annual * 0.15 // 15% descuento
    return Math.round(annual - discount)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="pricing-section">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-sphere gradient-1" />
        <div className="gradient-sphere gradient-2" />
        <div className="gradient-sphere gradient-3" />
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="header-badge">
            <Zap className="badge-icon" />
            <span>Planes adaptados al sector estético español</span>
          </motion.div>
          
          <h1 className="main-title">
            Precios transparentes que
            <span className="title-gradient"> impulsan tu clínica</span>
          </h1>
          
          <p className="subtitle">
            Sin comisiones ocultas, sin sorpresas. Inversión clara con ROI garantizado
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Mensual
            </button>
            <button
              className={`toggle-option ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              <span>Anual</span>
              <span className="discount-badge">-15%</span>
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="trust-indicators"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="indicator">
            <Users className="indicator-icon" />
            <div className="indicator-content">
              <strong>+500</strong>
              <span>Clínicas activas</span>
            </div>
          </div>
          <div className="indicator">
            <TrendingUp className="indicator-icon" />
            <div className="indicator-content">
              <strong>+40%</strong>
              <span>Aumento medio ingresos</span>
            </div>
          </div>
          <div className="indicator">
            <Award className="indicator-icon" />
            <div className="indicator-content">
              <strong>4.9/5</strong>
              <span>Satisfacción clientes</span>
            </div>
          </div>
          <div className="indicator">
            <Shield className="indicator-icon" />
            <div className="indicator-content">
              <strong>RGPD</strong>
              <span>100% Compliance</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`plan-card ${plan.highlight ? 'featured' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan.id)}
              style={{
                '--plan-color': plan.color
              }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={14} />
                  <span>Más elegido</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
                <p className="plan-target">{plan.bestFor}</p>
              </div>

              <div className="plan-pricing">
                <div className="setup-fee">
                  <span className="fee-label">Configuración inicial</span>
                  <div className="fee-amount">
                    <span className="amount">{formatPrice(plan.setup)}</span>
                    <span className="time">({plan.setupTime})</span>
                  </div>
                </div>
                
                <div className="monthly-fee">
                  <span className="fee-label">
                    {billingCycle === 'monthly' ? 'Mensualidad' : 'Precio anual'}
                  </span>
                  <div className="fee-amount-main">
                    <span className="currency">€</span>
                    <span className="amount">
                      {billingCycle === 'monthly' 
                        ? plan.monthly 
                        : Math.round(getAnnualPrice(plan.monthly) / 12)
                      }
                    </span>
                    <span className="period">/mes</span>
                  </div>
                  {billingCycle === 'annual' && plan.savings && (
                    <span className="savings">{plan.savings}</span>
                  )}
                </div>
              </div>

              <div className="plan-metrics">
                <div className="metric">
                  <span className="metric-value">{plan.metrics.retention}</span>
                  <span className="metric-label">Retención</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{plan.metrics.revenue}</span>
                  <span className="metric-label">Ingresos</span>
                </div>
                <div className="metric">
                  <span className="metric-value">{plan.metrics.time}</span>
                  <span className="metric-label">Tiempo</span>
                </div>
              </div>

              <div className="plan-features">
                <h4 className="features-title">Incluye:</h4>
                <ul className="features-list">
                  {plan.features.slice(0, hoveredPlan === plan.id ? plan.features.length : 5).map((feature, i) => (
                    <motion.li 
                      key={i}
                      className={`feature ${feature.highlight ? 'highlight' : ''}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Check className="feature-icon" />
                      <span>{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
                {plan.features.length > 5 && hoveredPlan !== plan.id && (
                  <button className="show-more">
                    Ver más características
                  </button>
                )}
              </div>

              <div className="plan-actions">
                <motion.button
                  className={`cta-button ${plan.highlight ? 'primary' : 'secondary'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Solicitar demo gratuita</span>
                  <ChevronRight className="button-icon" />
                </motion.button>
                
                <button className="contact-button">
                  <Phone size={16} />
                  <span>Hablar con ventas</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Button */}
        <motion.div 
          className="comparison-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button 
            className="comparison-button"
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? 'Ocultar' : 'Ver'} comparación detallada
          </button>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="testimonials-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="testimonials-title">Lo que dicen nuestras clínicas</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.clinic}</p>
                  </div>
                  <span className="testimonial-plan">{testimonial.plan}</span>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div 
          className="guarantees-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="guarantee-card">
            <Shield className="guarantee-icon" />
            <h4>Sin permanencia</h4>
            <p>Cancela cuando quieras</p>
          </div>
          <div className="guarantee-card">
            <Clock className="guarantee-icon" />
            <h4>30 días de prueba</h4>
            <p>Garantía de devolución</p>
          </div>
          <div className="guarantee-card">
            <HeartHandshake className="guarantee-icon" />
            <h4>Soporte dedicado</h4>
            <p>Equipo especializado</p>
          </div>
          <div className="guarantee-card">
            <MessageCircle className="guarantee-icon" />
            <h4>Onboarding premium</h4>
            <p>Te acompañamos siempre</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="final-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <h3>¿Listo para transformar tu clínica?</h3>
          <p>Únete a las +500 clínicas que ya confían en nosotros</p>
          <div className="cta-buttons">
            <button className="cta-primary">
              Empezar demo gratuita
              <ChevronRight />
            </button>
            <button className="cta-secondary">
              <Phone size={18} />
              Llamar ahora: 900 123 456
            </button>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .pricing-section {
          min-height: 100vh;
          padding: 80px 0;
          background: #FAFAFA;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .animated-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }
        
        .gradient-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #E8B4B8 0%, transparent 70%);
          top: -200px;
          left: -200px;
        }
        
        .gradient-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #D4A574 0%, transparent 70%);
          bottom: -100px;
          right: -100px;
          animation-delay: -5s;
        }
        
        .gradient-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #94A3B8 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(-30px, -10px) scale(1.02); }
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
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .badge-icon {
          width: 16px;
          height: 16px;
          color: #E8B4B8;
        }
        
        .main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1E293B;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: 1.25rem;
          color: #64748B;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        
        .billing-toggle {
          display: inline-flex;
          background: white;
          padding: 4px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          gap: 4px;
        }
        
        .toggle-option {
          padding: 10px 24px;
          border: none;
          background: transparent;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .toggle-option.active {
          background: #E8B4B8;
          color: white;
        }
        
        .discount-badge {
          background: #10B981;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .trust-indicators {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .indicator-icon {
          width: 40px;
          height: 40px;
          color: #E8B4B8;
          flex-shrink: 0;
        }
        
        .indicator-content {
          display: flex;
          flex-direction: column;
        }
        
        .indicator-content strong {
          font-size: 1.25rem;
          color: #1E293B;
          font-weight: 700;
        }
        
        .indicator-content span {
          font-size: 14px;
          color: #64748B;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        
        .plan-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        
        .plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          border-color: var(--plan-color, #E5E7EB);
        }
        
        .plan-card.featured {
          border-color: #E8B4B8;
          box-shadow: 0 8px 32px rgba(232, 180, 184, 0.2);
        }
        
        .plan-card.selected {
          border-color: var(--plan-color);
          background: linear-gradient(to bottom, white 0%, rgba(232, 180, 184, 0.02) 100%);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.4);
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .plan-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .plan-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 4px;
        }
        
        .plan-tagline {
          font-size: 15px;
          color: var(--plan-color);
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .plan-target {
          font-size: 13px;
          color: #94A3B8;
        }
        
        .plan-pricing {
          margin-bottom: 24px;
          padding: 20px;
          background: #F8FAFC;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
        }
        
        .setup-fee {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .fee-label {
          font-size: 14px;
          color: #64748B;
        }
        
        .fee-amount {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        
        .fee-amount .amount {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1E293B;
        }
        
        .fee-amount .time {
          font-size: 13px;
          color: #94A3B8;
        }
        
        .monthly-fee {
          text-align: center;
        }
        
        .fee-amount-main {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
          margin-top: 8px;
        }
        
        .currency {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--plan-color);
          margin-top: 6px;
        }
        
        .fee-amount-main .amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--plan-color);
          line-height: 1;
        }
        
        .period {
          font-size: 15px;
          color: #64748B;
          margin-left: 4px;
        }
        
        .savings {
          display: inline-block;
          margin-top: 8px;
          font-size: 13px;
          color: #10B981;
          font-weight: 600;
        }
        
        .plan-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.05) 0%, rgba(212, 165, 116, 0.05) 100%);
          border-radius: 12px;
        }
        
        .metric {
          text-align: center;
        }
        
        .metric-value {
          display: block;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--plan-color);
          margin-bottom: 4px;
        }
        
        .metric-label {
          font-size: 12px;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .plan-features {
          margin-bottom: 24px;
        }
        
        .features-title {
          font-size: 14px;
          font-weight: 600;
          color: #64748B;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
        }
        
        .feature.highlight {
          color: #1E293B;
          font-weight: 500;
        }
        
        .feature-icon {
          width: 16px;
          height: 16px;
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .show-more {
          margin-top: 12px;
          font-size: 13px;
          color: var(--plan-color);
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 0;
          transition: all 0.2s;
        }
        
        .show-more:hover {
          text-decoration: underline;
        }
        
        .plan-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .cta-button {
          width: 100%;
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
        }
        
        .cta-button.primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(232, 180, 184, 0.3);
        }
        
        .cta-button.primary:hover {
          box-shadow: 0 6px 20px rgba(232, 180, 184, 0.4);
          transform: translateY(-1px);
        }
        
        .cta-button.secondary {
          background: white;
          color: var(--plan-color);
          border: 2px solid var(--plan-color);
        }
        
        .cta-button.secondary:hover {
          background: var(--plan-color);
          color: white;
        }
        
        .button-icon {
          width: 18px;
          height: 18px;
        }
        
        .contact-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: transparent;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 14px;
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .contact-button:hover {
          border-color: var(--plan-color);
          color: var(--plan-color);
        }
        
        .comparison-toggle {
          text-align: center;
          margin: 40px 0;
        }
        
        .comparison-button {
          padding: 12px 24px;
          background: white;
          border: 2px solid #E8B4B8;
          border-radius: 10px;
          color: #E8B4B8;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .comparison-button:hover {
          background: #E8B4B8;
          color: white;
        }
        
        .testimonials-section {
          margin: 80px 0;
          text-align: center;
        }
        
        .testimonials-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 40px;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .testimonial-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          text-align: left;
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .testimonial-info h4 {
          font-size: 16px;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 4px;
        }
        
        .testimonial-info p {
          font-size: 14px;
          color: #64748B;
        }
        
        .testimonial-plan {
          font-size: 12px;
          background: #F1F5F9;
          color: #64748B;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 500;
        }
        
        .testimonial-text {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 16px;
          font-style: italic;
        }
        
        .testimonial-rating {
          display: flex;
          gap: 4px;
          color: #FCD34D;
        }
        
        .guarantees-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        
        .guarantee-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #E5E7EB;
          transition: all 0.3s;
        }
        
        .guarantee-card:hover {
          border-color: #E8B4B8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        
        .guarantee-icon {
          width: 40px;
          height: 40px;
          color: #E8B4B8;
          margin: 0 auto 16px;
        }
        
        .guarantee-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1E293B;
          margin-bottom: 8px;
        }
        
        .guarantee-card p {
          font-size: 14px;
          color: #64748B;
          line-height: 1.4;
        }
        
        .final-cta {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 165, 116, 0.1) 100%);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          border: 1px solid rgba(232, 180, 184, 0.2);
        }
        
        .final-cta h3 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 16px;
        }
        
        .final-cta p {
          font-size: 1.125rem;
          color: #64748B;
          margin-bottom: 32px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-primary,
        .cta-secondary {
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
        }
        
        .cta-primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(232, 180, 184, 0.3);
        }
        
        .cta-primary:hover {
          box-shadow: 0 8px 28px rgba(232, 180, 184, 0.4);
          transform: translateY(-2px);
        }
        
        .cta-secondary {
          background: white;
          color: #E8B4B8;
          border: 2px solid #E8B4B8;
        }
        
        .cta-secondary:hover {
          background: #FFF5F7;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto 40px;
          }
          
          .trust-indicators {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 0;
          }
          
          .main-title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .plans-grid {
            gap: 20px;
          }
          
          .plan-card {
            padding: 24px;
          }
          
          .plan-metrics {
            padding: 12px;
          }
          
          .metric-value {
            font-size: 1.1rem;
          }
          
          .fee-amount-main .amount {
            font-size: 2rem;
          }
          
          .final-cta {
            padding: 40px 24px;
          }
          
          .final-cta h3 {
            font-size: 1.75rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .guarantees-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          
          .pricing-section {
            padding: 40px 0;
          }
          
          .main-title {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .billing-toggle {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
          }
          
          .toggle-option {
            width: 100%;
            justify-content: center;
          }
          
          .trust-indicators {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .indicator {
            padding: 16px;
          }
          
          .plan-card {
            padding: 20px;
          }
          
          .plan-icon {
            font-size: 36px;
          }
          
          .plan-name {
            font-size: 1.5rem;
          }
          
          .plan-pricing {
            padding: 16px;
          }
          
          .fee-amount-main .amount {
            font-size: 1.75rem;
          }
          
          .plan-metrics {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .metric-label {
            font-size: 11px;
          }
          
          .guarantees-section {
            grid-template-columns: 1fr;
          }
          
          .guarantee-card {
            padding: 20px;
          }
          
          .final-cta {
            padding: 32px 20px;
            border-radius: 16px;
          }
          
          .final-cta h3 {
            font-size: 1.5rem;
          }
          
          .final-cta p {
            font-size: 1rem;
          }
          
          .cta-primary,
          .cta-secondary {
            padding: 14px 24px;
            font-size: 15px;
          }
        }
        
        /* Animations for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
        
        /* Print styles */
        @media print {
          .animated-bg,
          .comparison-toggle,
          .contact-button {
            display: none;
          }
          
          .plan-card {
            page-break-inside: avoid;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .pricing-section {
            background: #0F172A;
          }
          
          .plan-card,
          .indicator,
          .testimonial-card,
          .guarantee-card {
            background: #1E293B;
            border-color: #334155;
          }
          
          .main-title,
          .plan-name,
          .testimonial-info h4,
          .guarantee-card h4,
          .final-cta h3 {
            color: #F1F5F9;
          }
          
          .subtitle,
          .badge-text,
          .fee-label,
          .plan-target,
          .indicator-content span,
          .testimonial-info p,
          .testimonial-text,
          .guarantee-card p,
          .final-cta p {
            color: #94A3B8;
          }
          
          .plan-pricing {
            background: #0F172A;
            border-color: #334155;
          }
          
          .header-badge {
            background: #1E293B;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }
          
          .final-cta {
            background: linear-gradient(135deg, rgba(232, 180, 184, 0.05) 0%, rgba(212, 165, 116, 0.05) 100%);
            border-color: #334155;
          }
        }
      `}</style>
    </section>
  )
}