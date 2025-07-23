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
      subtitle: 'Elimina el caos',
      description: 'Para clínicas que quieren orden y más tiempo (1-3 profesionales)',
      icon: <Sparkles className={styles.planIcon} />,
      monthlyPrice: 89,
      annualPrice: 890,
      setupFee: 199,
      originalSetupFee: 299,
      popular: false,
      painPoints: [
        'No más citas perdidas por desorganización',
        'Adiós al papeleo y las hojas de cálculo',
        'Nunca más "¿cuándo fue su última visita?"'
      ],
      results: [
        '+€1.500/mes extra en promedio',
        'Sistema funcionando en 48h'
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
      cta: 'Probar 30 Días Gratis'
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Más ingresos',
      description: 'Para clínicas que quieren crecer sin límites (4-15 profesionales)',
      icon: <Star className={styles.planIcon} />,
      monthlyPrice: 149,
      annualPrice: 1490,
      setupFee: 399,
      originalSetupFee: 599,
      popular: true,
      painPoints: [
        'Se acabó competir solo por precio',
        'No más pacientes que vienen una vez y desaparecen',
        'Nunca más "no sé si el negocio va bien o mal"'
      ],
      results: [
        '+€3.500/mes extra comprobado',
        'Pacientes VIP automáticos'
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
      cta: 'Probar 30 Días Gratis'
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Dominio total',
      description: 'Para cadenas y clínicas líderes (+15 profesionales)',
      icon: <Crown className={styles.planIcon} />,
      monthlyPrice: 249,
      annualPrice: 2490,
      setupFee: 799,
      originalSetupFee: 1299,
      popular: false,
      painPoints: [
        'Se acabó la gestión manual de múltiples centros',
        'No más dudas sobre qué está funcionando',
        'Nunca más "ojalá tuviera tiempo para estrategia"'
      ],
      results: [
        '+€6.000/mes extra verificado',
        'Account Manager dedicado'
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
      cta: 'Agendar Llamada Estratégica'
    }
  ]

  const socialProof = [
    { metric: '€2.3M+', label: 'Facturado por nuestros clientes' },
    { metric: '23h', label: 'Menos trabajo manual/semana' },
    { metric: '4.8★', label: 'Valoración real promedio' },
    { metric: '147', label: 'Clínicas que ya no pueden vivir sin esto' }
  ]

  const riskReducers = [
    {
      icon: <Shield size={20} />,
      title: '30 días gratis',
      description: 'Pruébalo sin riesgo. Si no te convence, cancela sin explicaciones'
    },
    {
      icon: <Users size={20} />,
      title: 'Setup incluido',
      description: 'Nosotros migramos tus datos y configuramos todo'
    },
    {
      icon: <Clock size={20} />,
      title: 'Listo en 48h',
      description: 'En 2 días ya estás facturando más'
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
            ⏰ Tu competencia ya está automatizando
          </div>
          
          <h2 className={styles.title}>
            Deja de perder dinero
            <span className={styles.accent}> por desorganización</span>
          </h2>
          
          <p className={styles.subtitle}>
            Cada hora en administración es una hora menos vendiendo. 
            <strong>Automatiza y multiplica tus ingresos.</strong>
          </p>

          {/* Toggle anual/mensual con mejor copy */}
          <div className={styles.toggle}>
            <span className={!isAnnual ? styles.active : ''}>Mensual</span>
            <button 
              className={styles.toggleBtn}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={`Cambiar a facturación ${isAnnual ? 'mensual' : 'anual'}`}
            >
              <div className={`${styles.toggleSlider} ${isAnnual ? styles.annual : ''}`} />
            </button>
            <span className={isAnnual ? styles.active : ''}>
              Anual 
              <span className={styles.discount}>-25% descuento</span>
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

              {/* Value Props simplificadas */}
              <div className={styles.valueProps}>
                {plan.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className={styles.valueProp}>
                    <TrendingUp size={16} />
                    <span>{result}</span>
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
                    Te ahorras €{getSavings(plan)} al año
                  </div>
                )}

                <div className={styles.setupFee}>
                  Setup completo: €{plan.setupFee}
                  {plan.originalSetupFee && (
                    <span className={styles.originalPrice}>
                      €{plan.originalSetupFee}
                    </span>
                  )}
                </div>

                {/* ROI Calculator más directo */}
                <div className={styles.roiCalculator}>
                  <div className={styles.roiTitle}>Se paga solo con:</div>
                  <div className={styles.roiValue}>
                    +€{getROICalculation(plan).estimatedIncrease.toLocaleString()}/mes extra
                  </div>
                  <div className={styles.roiPercentage}>
                    Recuperas la inversión en {Math.ceil(getPrice(plan) / getROICalculation(plan).estimatedIncrease * (isAnnual ? 12 : 1))} días
                  </div>
                </div>
              </div>

              {/* Límites más simples */}
              <div className={styles.limits}>
                <h4>Incluye:</h4>
                <ul>
                  <li><Check size={16} />{plan.limits.professionals}</li>
                  <li><Check size={16} />{plan.limits.clients}</li>
                  <li><Check size={16} />{plan.limits.appointments}</li>
                </ul>
              </div>

              {/* Features principales solamente */}
              <div className={styles.features}>
                <h4>Principales herramientas:</h4>
                <ul>
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                  <li className={styles.moreFeatures}>
                    +{plan.features.length - 4} herramientas más
                  </li>
                </ul>
              </div>

              <motion.a
                href="https://expo.dev/accounts/tuapp/projects/demo-clinica"
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

        {/* Risk Reducers más persuasivos */}
        <motion.div 
          className={styles.riskReducers}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Sin riesgo para ti</h3>
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

        {/* Success Stories más simples */}
        <motion.div 
          className={styles.successStories}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.successStoriesContent}>
            <h3>🎯 Resultados reales</h3>
            
            <div className={styles.stories}>
              <div className={styles.story}>
                <div className={styles.storyMetric}>+€18.500</div>
                <div className={styles.storyAuthor}>Dra. Carmen, Barcelona</div>
              </div>
              <div className={styles.story}>
                <div className={styles.storyMetric}>-18h/sem</div>
                <div className={styles.storyAuthor}>Centro Luna, Madrid</div>
              </div>
              <div className={styles.story}>
                <div className={styles.storyMetric}>320% ROI</div>
                <div className={styles.storyAuthor}>Clínica Premium, Valencia</div>
              </div>
            </div>

            <motion.a
              href="https://expo.dev/accounts/tuapp/projects/demo-clinica"
              className={styles.demoButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Demo
              <Zap size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Urgency más simple */}
        <motion.div 
          className={styles.urgency}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>💸 Cada día que esperas pierdes €127</h3>
          <p className={styles.urgencyText}>
            Tu competencia ya está automatizando. 
            <strong>Empieza tu prueba gratuita ahora.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection