import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Star, Zap, Crown, Sparkles, TrendingUp, Shield, Clock, Users } from 'lucide-react'
import styles from './PricingSection.module.css'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Clínicas Independientes',
      description: 'Para centros que inician su transformación digital (1-3 profesionales)',
      icon: <Sparkles className={styles.planIcon} />,
      monthlyPrice: 89,
      annualPrice: 890,
      setupFee: 199,
      originalSetupFee: 299,
      popular: false,
      valueProps: [
        'ROI promedio 200% en 6 meses',
        'Reduce 8h admin/semana',
        'Aumenta retención 35%'
      ],
      limits: {
        professionals: '3 profesionales',
        clients: '500 clientes activos',
        appointments: '500 citas/mes',
        transactions: '100 transacciones Stripe/mes',
        notifications: '1.000 notificaciones/mes',
        storage: '5GB almacenamiento'
      },
      features: [
        'Agenda inteligente con IA predictiva',
        'CRM avanzado con historial completo',
        'Sistema de tratamientos y precios dinámicos',
        'Stripe integrado + pasarela propia',
        'Notificaciones push + SMS automáticas',
        'Sistema de fidelización gamificado',
        'Reportes financieros con analytics',
        'Soporte prioritario por email',
        'App móvil cliente (iOS/Android)'
      ],
      cta: 'Probar Demo Gratis'
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Más Elegido',
      description: 'Para clínicas en expansión que buscan maximizar ingresos (4-15 profesionales)',
      icon: <Star className={styles.planIcon} />,
      monthlyPrice: 149,
      annualPrice: 1490,
      setupFee: 399,
      originalSetupFee: 599,
      popular: true,
      valueProps: [
        'ROI promedio 350% en 6 meses',
        'Reduce 15h admin/semana',
        'Aumenta ingresos 45%'
      ],
      limits: {
        professionals: '15 profesionales',
        clients: '5.000 clientes activos',
        appointments: 'Citas ilimitadas',
        transactions: '1.000 transacciones Stripe/mes',
        notifications: '10.000 notificaciones/mes',
        storage: '50GB almacenamiento'
      },
      features: [
        'Todo del plan Starter',
        'Sistema VIP con suscripciones automáticas',
        'Motor de ofertas con IA personalizada',
        'Analytics predictivo de abandono',
        'Segmentación automática avanzada',
        'Programa VIP multi-tier personalizable',
        'Marketing automation con workflows',
        'Sistema de referidos con recompensas',
        'Soporte prioritario (chat + teléfono)',
        'API completa para integraciones',
        'Reportes ejecutivos automatizados'
      ],
      cta: 'Probar Demo Gratis'
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Máximo Potencial',
      description: 'Para clínicas líderes y cadenas multi-sucursal (+15 profesionales)',
      icon: <Crown className={styles.planIcon} />,
      monthlyPrice: 249,
      annualPrice: 2490,
      setupFee: 799,
      originalSetupFee: 1299,
      popular: false,
      valueProps: [
        'ROI promedio 500% en 6 meses',
        'Reduce 25h admin/semana',
        'Aumenta ingresos 70%'
      ],
      limits: {
        professionals: 'Profesionales ilimitados',
        clients: 'Clientes ilimitados',
        appointments: 'Todo ilimitado',
        transactions: 'Transacciones ilimitadas',
        notifications: 'Notificaciones ilimitadas',
        storage: 'Almacenamiento ilimitado'
      },
      features: [
        'Todo del plan Professional',
        'IA predictiva para retención y upselling',
        'Account Manager dedicado',
        'Multi-sucursal con dashboard centralizado',
        'Análisis predictivo con machine learning',
        'App móvil white-label personalizada',
        'Desarrollo de features exclusivas',
        'Sistema avanzado de loyalty scoring',
        'Soporte 24/7 con SLA garantizado',
        'Integración ERP/contabilidad',
        'Consultoría estratégica mensual'
      ],
      cta: 'Agendar Consultoría'
    }
  ]

  const socialProof = [
    { metric: '2.3x', label: 'Aumento promedio de ingresos' },
    { metric: '87%', label: 'Reducción tiempo administrativo' },
    { metric: '94%', label: 'Satisfacción de clientes' },
    { metric: '180', label: 'Clínicas ya transformadas' }
  ]

  const riskReducers = [
    {
      icon: <Shield size={20} />,
      title: 'Garantía 60 días',
      description: 'Si no ves resultados, te devolvemos el dinero'
    },
    {
      icon: <Users size={20} />,
      title: 'Migración incluida',
      description: 'Transferimos todos tus datos sin pérdidas'
    },
    {
      icon: <Clock size={20} />,
      title: 'Setup en 48h',
      description: 'Operativo en menos de 2 días laborables'
    }
  ]

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getSavings = (plan) => {
    if (!isAnnual) return 0
    const monthlyTotal = plan.monthlyPrice * 12
    return monthlyTotal - plan.annualPrice
  }

  const getROICalculation = (plan) => {
    const monthlyInvestment = isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice
    const estimatedIncrease = plan.id === 'starter' ? 1500 : plan.id === 'professional' ? 3500 : 6000
    const roi = ((estimatedIncrease - monthlyInvestment) / monthlyInvestment * 100).toFixed(0)
    return { monthlyInvestment, estimatedIncrease, roi }
  }

  return (
    <section className={`${styles.pricing} pricing-section`} id="pricing">
      {/* Background orbs */}
      <div className={styles.orbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className={styles.container}>
        {/* Header con Social Proof */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Social Proof Metrics */}
          <div className={styles.socialProof}>
            {socialProof.map((item, index) => (
              <div key={index} className={styles.socialProofItem}>
                <span className={styles.metric}>{item.metric}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.badge}>
            🚀 Únete a las 180+ clínicas que ya transformaron su negocio
          </div>
          
          <h2 className={styles.title}>
            Invierte en el crecimiento de tu 
            <span className={styles.accent}> clínica estética</span>
          </h2>
          
          <p className={styles.subtitle}>
            Cada plan está diseñado para generar un ROI comprobado. 
            No es un gasto, es la inversión más rentable que harás este año.
          </p>

          {/* Toggle anual/mensual con mejor copy */}
          <div className={styles.toggle}>
            <span className={!isAnnual ? styles.active : ''}>Pago Mensual</span>
            <button 
              className={styles.toggleBtn}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={`Cambiar a facturación ${isAnnual ? 'mensual' : 'anual'}`}
            >
              <div className={`${styles.toggleSlider} ${isAnnual ? styles.annual : ''}`} />
            </button>
            <span className={isAnnual ? styles.active : ''}>
              Pago Anual 
              <span className={styles.discount}>Ahorra hasta 25%</span>
            </span>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Zap size={16} />
                  {plan.subtitle}
                </div>
              )}

              <div className={styles.planHeader}>
                {plan.icon}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              {/* Value Props destacadas */}
              <div className={styles.valueProps}>
                {plan.valueProps.map((prop, idx) => (
                  <div key={idx} className={styles.valueProp}>
                    <TrendingUp size={16} />
                    <span>{prop}</span>
                  </div>
                ))}
              </div>

              <div className={styles.pricing}>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>€</span>
                  <span className={styles.price}>{getPrice(plan)}</span>
                  <span className={styles.period}>/{isAnnual ? 'año' : 'mes'}</span>
                </div>
                
                {isAnnual && getSavings(plan) > 0 && (
                  <div className={styles.savings}>
                    Ahorras €{getSavings(plan)} al año
                  </div>
                )}

                <div className={styles.setupFee}>
                  Setup profesional: €{plan.setupFee}
                  {plan.originalSetupFee && (
                    <span className={styles.originalPrice}>
                      €{plan.originalSetupFee}
                    </span>
                  )}
                </div>

                {/* ROI Calculator */}
                <div className={styles.roiCalculator}>
                  <div className={styles.roiTitle}>Resultado económico esperado:</div>
                  <div className={styles.roiValue}>
                    +€{getROICalculation(plan).estimatedIncrease.toLocaleString()}/mes
                  </div>
                  <div className={styles.roiPercentage}>
                    {getROICalculation(plan).roi}% ROI mensual
                  </div>
                </div>
              </div>

              {/* Límites */}
              <div className={styles.limits}>
                <h4>Incluye:</h4>
                <ul>
                  {Object.entries(plan.limits).map(([key, value]) => (
                    <li key={key}>
                      <Check size={16} />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className={styles.features}>
                <h4>Funcionalidades principales:</h4>
                <ul>
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                  {plan.features.length > 6 && (
                    <li className={styles.moreFeatures}>
                      +{plan.features.length - 6} funcionalidades avanzadas más
                    </li>
                  )}
                </ul>
              </div>

              <motion.a
                href="https://expo.dev/accounts/tuapp/projects/demo-clinica" // Tu link de Expo aquí
                className={`${styles.ctaBtn} ${plan.popular ? styles.ctaPrimary : styles.ctaSecondary}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Risk Reducers */}
        <motion.div 
          className={styles.riskReducers}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Inversión sin riesgo</h3>
          <div className={styles.riskReducersGrid}>
            {riskReducers.map((item, index) => (
              <div key={index} className={styles.riskReducerItem}>
                {item.icon}
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div 
          className={styles.successStories}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.successStoriesContent}>
            <h3>💰 Casos de éxito reales</h3>
            <p>Ve cómo otras clínicas han transformado su negocio</p>
            
            <div className={styles.stories}>
              <div className={styles.story}>
                <div className={styles.storyMetric}>+€25.000</div>
                <div className={styles.storyDescription}>
                  "Aumentamos ingresos mensuales en 6 meses"
                  <span className={styles.storyAuthor}>- Clínica Bella Vista</span>
                </div>
              </div>
              <div className={styles.story}>
                <div className={styles.storyMetric}>-20h</div>
                <div className={styles.storyDescription}>
                  "Menos trabajo administrativo por semana"
                  <span className={styles.storyAuthor}>- Centro Estético Luna</span>
                </div>
              </div>
              <div className={styles.story}>
                <div className={styles.storyMetric}>400%</div>
                <div className={styles.storyDescription}>
                  "ROI en el primer año de implementación"
                  <span className={styles.storyAuthor}>- Clínica Premium Med</span>
                </div>
              </div>
            </div>

            <motion.a
              href="https://expo.dev/accounts/tuapp/projects/demo-clinica" // Tu link de Expo aquí
              className={styles.demoButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Demo Interactivo
              <Zap size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Urgency Section */}
        <motion.div 
          className={styles.urgency}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>⏰ ¿Cuánto dinero estás perdiendo cada día sin automatizar?</h3>
          <div className={styles.urgencyCalculator}>
            <div className={styles.urgencyItem}>
              <span className={styles.urgencyNumber}>€150</span>
              <span>pérdida diaria promedio por gestión manual</span>
            </div>
            <div className={styles.urgencyItem}>
              <span className={styles.urgencyNumber}>€4.500</span>
              <span>pérdida mensual por no tener sistema VIP</span>
            </div>
            <div className={styles.urgencyItem}>
              <span className={styles.urgencyNumber}>€54.000</span>
              <span>pérdida anual de ingresos potenciales</span>
            </div>
          </div>
          <p className={styles.urgencyText}>
            Cada día que esperas es dinero que no entra. 
            <strong> La inversión se paga sola en el primer mes.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection