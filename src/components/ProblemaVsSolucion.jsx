import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, memo, useMemo } from 'react'
import './ProblemaVsSolucion.css'

// ===== CONSTANTES Y DATOS =====
const CASOS_DATA = [
  {
    id: 1,
    clinica: 'Estética Salamanca Premium',
    ubicacion: 'Salamanca',
    especialidad: 'Medicina Estética Avanzada',
    problema: 'Lista de espera de 3 meses, agenda desorganizada',
    solucion: 'IA de optimización + gestión inteligente de citas',
    resultado: '+220% en eficiencia operativa',
    tiempo: '6 semanas',
    testimonial: 'Hemos reducido la lista de espera a 1 semana y aumentado los ingresos un 150%. Increíble transformación.',
    doctor: 'Dra. Elena Martín',
    avatar: '👩‍⚕️',
    metricas: {
      ocupacion: { antes: 65, despues: 98 },
      ingresos: { antes: 100, despues: 250 },
      satisfaccion: { antes: 78, despues: 96 }
    }
  },
  {
    id: 2,
    clinica: 'Centro Estético Valencia',
    ubicacion: 'Valencia',
    especialidad: 'Tratamientos Faciales y Corporales',
    problema: 'Pacientes VIP sin seguimiento diferenciado',
    solucion: 'Sistema VIP automatizado con experiencias personalizadas',
    resultado: '+300% en retención de clientas premium',
    tiempo: '4 semanas',
    testimonial: 'Nuestras clientas VIP se sienten únicas. La fidelización ha sido espectacular y los ingresos por paciente se han triplicado.',
    doctor: 'Dr. Carlos Vega',
    avatar: '👨‍⚕️',
    metricas: {
      retencion: { antes: 48, despues: 95 },
      ticketPromedio: { antes: 150, despues: 280 },
      referidos: { antes: 12, despues: 68 }
    }
  },
  {
    id: 3,
    clinica: 'Clínica Belleza Madrid',
    ubicacion: 'Madrid',
    especialidad: 'Cirugía Estética y Dermatología',
    problema: 'Decisiones basadas en intuición, sin datos',
    solucion: 'Dashboard analytics + insights predictivos',
    resultado: '+350% en decisiones acertadas',
    tiempo: '3 semanas',
    testimonial: 'Ahora sabemos exactamente qué tratamientos ofertar y cuándo. Los resultados financieros han superado todas las expectativas.',
    doctor: 'Dra. Ana Rodríguez',
    avatar: '👩‍⚕️',
    metricas: {
      margen: { antes: 28, despues: 52 },
      conversion: { antes: 35, despues: 78 },
      crecimiento: { antes: 8, despues: 42 }
    }
  }
]

const PROBLEMAS_DATA = [
  {
    icon: '⏰',
    titulo: 'Agenda desorganizada',
    descripcion: 'Citas superpuestas, tiempos muertos, pacientes esperando',
    impacto: 'Pérdida del 35% de ingresos potenciales',
    urgencia: 'alta'
  },
  {
    icon: '💸',
    titulo: 'Pacientes VIP desatendidos',
    descripcion: 'Sin seguimiento diferenciado, experiencias estándar',
    impacto: 'Retención VIP por debajo del 50%',
    urgencia: 'alta'
  },
  {
    icon: '📉',
    titulo: 'Decisiones sin análisis',
    descripcion: 'Intuición vs datos, oportunidades perdidas diariamente',
    impacto: 'Crecimiento estancado en el mercado',
    urgencia: 'media'
  },
  {
    icon: '😰',
    titulo: 'Sobrecarga operativa',
    descripcion: 'Gestión manual que consume energía y tiempo valioso',
    impacto: 'Burnout y más de 55 horas semanales',
    urgencia: 'alta'
  }
]

const SOLUCIONES_DATA = [
  {
    icon: '🎯',
    titulo: 'Agenda Inteligente Pro',
    descripcion: 'IA que optimiza automáticamente horarios y maximiza ocupación',
    beneficio: '+40% productividad operativa',
    roi: '380%'
  },
  {
    icon: '💎',
    titulo: 'Sistema VIP Premium',
    descripcion: 'Experiencias automatizadas que crean adicción a tu marca',
    beneficio: '95% retención de clientas VIP',
    roi: '520%'
  },
  {
    icon: '📊',
    titulo: 'Analytics Predictivo',
    descripcion: 'Dashboard inteligente que revela oportunidades ocultas',
    beneficio: 'Decisiones 4x más efectivas',
    roi: '290%'
  },
  {
    icon: '⚡',
    titulo: 'Automatización Elegante',
    descripcion: 'Tu clínica funciona perfectamente mientras descansas',
    beneficio: 'Recupera 25 horas semanales',
    roi: '450%'
  }
]

const METRIC_LABELS = {
  ticketPromedio: 'Ticket Promedio',
  ocupacion: 'Ocupación',
  satisfaccion: 'Satisfacción',
  retencion: 'Retención',
  referidos: 'Referidos',
  conversion: 'Conversión',
  crecimiento: 'Crecimiento',
  margen: 'Margen',
  ingresos: 'Ingresos'
}

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0
  })
}

// ===== COMPONENTES MEMOIZADOS =====
const MetricBar = memo(({ label, antes, despues, suffix = '%' }) => (
  <div className="metric-bar">
    <div className="metric-label">{label}</div>
    <div className="metric-comparison">
      <div className="metric-before">
        <span className="metric-value">{antes}{suffix}</span>
        <span className="metric-text">Antes</span>
      </div>
      <div className="metric-arrow">→</div>
      <div className="metric-after">
        <span className="metric-value">{despues}{suffix}</span>
        <span className="metric-text">Después</span>
      </div>
    </div>
    <div className="metric-progress">
      <motion.div 
        className="metric-progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(despues, 100)}%` }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  </div>
))

const CasoCard = memo(({ caso, index, isExpanded, onToggle }) => {
  const handleClick = useCallback(() => {
    onToggle(caso.id)
  }, [caso.id, onToggle])

  return (
    <motion.div
      className={`caso-card ${isExpanded ? 'expanded' : ''}`}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
    >
      <div className="caso-header">
        <div className="caso-avatar">{caso.avatar}</div>
        <div className="caso-info">
          <h3 className="caso-clinica">{caso.clinica}</h3>
          <p className="caso-ubicacion">📍 {caso.ubicacion}</p>
          <p className="caso-especialidad">{caso.especialidad}</p>
        </div>
        <div className="caso-resultado">
          <span className="resultado-numero">{caso.resultado}</span>
          <span className="resultado-tiempo">en {caso.tiempo}</span>
        </div>
      </div>

      <div className="caso-preview">
        <div className="problema-solucion-preview">
          <div className="preview-item problema">
            <span className="preview-label">🔴 Desafío:</span>
            <span className="preview-text">{caso.problema}</span>
          </div>
          <div className="preview-item solucion">
            <span className="preview-label">✅ Solución:</span>
            <span className="preview-text">{caso.solucion}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="caso-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="testimonial">
              <div className="quote-icon">💬</div>
              <p className="testimonial-text">"{caso.testimonial}"</p>
              <p className="testimonial-author">— {caso.doctor}</p>
            </div>

            <div className="metricas-detalle">
              <h4>📊 Transformación Medible</h4>
              <div className="metricas-grid">
                {Object.entries(caso.metricas).map(([key, values]) => (
                  <MetricBar
                    key={key}
                    label={METRIC_LABELS[key] || key}
                    antes={values.antes}
                    despues={values.despues}
                    suffix={key === 'ticketPromedio' ? '€' : '%'}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="caso-expand-hint"
        whileHover={{ scale: 1.02 }}
      >
        <span>{isExpanded ? '📖 Ver menos' : '📋 Ver detalles'}</span>
        <motion.span
          className="expand-icon"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.div>
    </motion.div>
  )
})

// ===== COMPONENTE CASOS DE ÉXITO =====
const CasosExito = memo(({ onClose }) => {
  const [selectedCaso, setSelectedCaso] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(onClose, 300)
  }, [onClose])

  const toggleCaso = useCallback((casoId) => {
    setSelectedCaso(prev => prev === casoId ? null : casoId)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleClose])

  return (
    <motion.div
      className="casos-exito-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}
    >
      <motion.div
        className="casos-exito-modal"
        variants={scaleIn}
        initial="initial"
        animate={isClosing ? "exit" : "animate"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <span className="modal-icon">🏆</span>
            <h2>Casos de Éxito en España</h2>
          </div>
          <motion.button 
            className="close-button" 
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Cerrar modal"
          >
            <span className="close-icon">✕</span>
          </motion.button>
        </div>

        <div className="modal-content">
          <div className="casos-grid">
            {CASOS_DATA.map((caso, index) => (
              <CasoCard
                key={caso.id}
                caso={caso}
                index={index}
                isExpanded={selectedCaso === caso.id}
                onToggle={toggleCaso}
              />
            ))}
          </div>

          <motion.div
            className="modal-footer"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">350+</span>
                <span className="stat-label">Clínicas en España</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">€4.2M+</span>
                <span className="stat-label">Ingresos adicionales</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">97%</span>
                <span className="stat-label">Recomendación</span>
              </div>
            </div>
            <motion.button
              className="demo-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">🎯 Solicitar Análisis Gratuito</span>
              <span className="button-subtext">Descubre tu potencial en 24h</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
})

// ===== COMPONENTE CARD =====
const Card = memo(({ data, index, type, isHovered, onHover }) => {
  const isProblem = type === 'problema'
  
  return (
    <motion.div
      className={`card ${isProblem ? `pain-card urgencia-${data.urgencia}` : 'solution-card'}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -8 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
    >
      {isProblem && data.urgencia === 'alta' && (
        <div className="urgencia-indicator">
          <span className="urgencia-dot" />
          <span className="urgencia-text">Urgente</span>
        </div>
      )}
      
      {!isProblem && (
        <div className="roi-badge">
          <span className="roi-text">ROI {data.roi}</span>
        </div>
      )}
      
      <div className="card-header">
        <motion.span 
          className="card-icon"
          animate={{ 
            rotate: isHovered ? [0, -5, 5, 0] : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          {data.icon}
        </motion.span>
        <h3 className="card-title">{data.titulo}</h3>
      </div>
      
      <p className="card-description">{data.descripcion}</p>
      
      <motion.div 
        className={isProblem ? "impact-badge" : "benefit-badge"}
        whileHover={{ scale: 1.05 }}
      >
        <span className={isProblem ? "impact-icon" : "benefit-icon"}>
          {isProblem ? '⚠️' : '🚀'}
        </span>
        <span className={isProblem ? "impact-text" : "benefit-text"}>
          {isProblem ? data.impacto : data.beneficio}
        </span>
      </motion.div>
    </motion.div>
  )
})

// ===== COMPONENTE PRINCIPAL =====
const ProblemaVsSolucion = () => {
  const [activeTab, setActiveTab] = useState('problema')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showCasosExito, setShowCasosExito] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [-100, 100], [-2, 2])
  const backgroundY = useTransform(mouseY, [-100, 100], [-2, 2])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x / 10)
    mouseY.set(y / 10)
  }, [mouseX, mouseY])

  const direction = activeTab === 'problema' ? -1 : 1
  const currentData = activeTab === 'problema' ? PROBLEMAS_DATA : SOLUCIONES_DATA

  const tabIndicatorX = useMemo(() => 
    activeTab === 'problema' ? 0 : '100%'
  , [activeTab])

  return (
    <section className="problema-solucion" onMouseMove={handleMouseMove}>
      {/* Background animado optimizado */}
      <motion.div 
        className="background-gradient"
        style={{ x: backgroundX, y: backgroundY }}
      >
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
      </motion.div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="section-header"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            🇪🇸 Transformación Clínicas España
          </motion.span>
          
          <h2 className="section-title">
            <span className="title-regular">Conocemos tu</span>{' '}
            <span className="title-gradient">realidad diaria</span>
          </h2>
          
          <p className="section-description">
            Cada frustración que vives en tu clínica, la convertimos en una 
            solución potente que se siente natural y profesional
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          className="tab-switcher"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <motion.button
            className={`tab ${activeTab === 'problema' ? 'active' : ''}`}
            onClick={() => setActiveTab('problema')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">🔴</span>
            <span className="tab-text">Desafíos Reales</span>
          </motion.button>
          
          <motion.button
            className={`tab ${activeTab === 'solucion' ? 'active' : ''}`}
            onClick={() => setActiveTab('solucion')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">✨</span>
            <span className="tab-text">Tu Transformación</span>
          </motion.button>
          
          <motion.div 
            className="tab-indicator"
            animate={{ x: tabIndicatorX }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            className="content-grid"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {currentData.map((item, index) => (
              <Card
                key={`${activeTab}-${index}`}
                data={item}
                index={index}
                type={activeTab}
                isHovered={hoveredIndex === index}
                onHover={setHoveredIndex}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          className="transformation-cta"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">¿Listo para la transformación?</h3>
            <p className="cta-text">
              Más de 200 clínicas en España ya han transformado su negocio. 
              Descubre cómo en casos reales.
            </p>
          </div>
          <motion.button 
            className="cta-button"
            onClick={() => setShowCasosExito(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="button-content">
              <span className="button-main">🏆 Ver Casos de Éxito</span>
              <span className="button-sub">Resultados reales en España</span>
            </span>
            <motion.span 
              className="cta-arrow"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de Casos de Éxito */}
      <AnimatePresence>
        {showCasosExito && (
          <CasosExito onClose={() => setShowCasosExito(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProblemaVsSolucion