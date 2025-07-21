import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Shield, Clock, Users, HeartHandshake, Phone, MessageCircle, ChevronRight, Zap, TrendingUp, Award } from 'lucide-react'
import './PricingSection.css'

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
          <p>Únete a las +200 clínicas que ya confían en nosotros</p>
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
    </section>
  )
}