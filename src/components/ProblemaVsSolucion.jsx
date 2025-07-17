import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// CasosExito component
const CasosExito = ({ onClose }) => {
  const [selectedCaso, setSelectedCaso] = useState(null)
  const [animationPhase, setAnimationPhase] = useState('entering')

  const casos = [
    {
      id: 1,
      clinica: 'Clínica Bella Vista',
      especialidad: 'Estética Facial',
      problema: 'Agenda caótica con 40% de huecos vacíos',
      solucion: 'IA de optimización + sistema VIP',
      resultado: '+180% en ingresos mensuales',
      tiempo: '2 meses',
      testimonial: 'Pasé de trabajar 12 horas a 8 horas, pero facturando el triple. Es increíble.',
      doctora: 'Dra. María González',
      avatar: '👩‍⚕️',
      metricas: {
        ocupacion: { antes: 60, despues: 95 },
        ingresos: { antes: 100, despues: 280 },
        satisfaccion: { antes: 75, despues: 98 }
      }
    },
    {
      id: 2,
      clinica: 'Centro Wellness Premium',
      especialidad: 'Tratamientos Corporales',
      problema: 'Clientes VIP sin seguimiento personalizado',
      solucion: 'Automatización de experiencias VIP',
      resultado: '+250% en retención de clientes VIP',
      tiempo: '6 semanas',
      testimonial: 'Mis clientes VIP se sienten como reinas. La retención es del 98%.',
      doctora: 'Dra. Carmen Ruiz',
      avatar: '👩‍⚕️',
      metricas: {
        retencion: { antes: 45, despues: 98 },
        ticketPromedio: { antes: 100, despues: 185 },
        referidos: { antes: 15, despues: 60 }
      }
    },
    {
      id: 3,
      clinica: 'Estética Avanzada',
      especialidad: 'Medicina Estética',
      problema: 'Decisiones sin datos, crecimiento estancado',
      solucion: 'Analytics inteligente + insights predictivos',
      resultado: '+320% en decisiones efectivas',
      tiempo: '1 mes',
      testimonial: 'Ahora veo oportunidades que antes eran invisibles. El crecimiento es exponencial.',
      doctora: 'Dr. Roberto Silva',
      avatar: '👨‍⚕️',
      metricas: {
        margen: { antes: 25, despues: 45 },
        conversion: { antes: 30, despues: 75 },
        crecimiento: { antes: 5, despues: 35 }
      }
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase('stable')
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setAnimationPhase('exiting')
    setTimeout(onClose, 300)
  }

  const MetricBar = ({ label, antes, despues, suffix = '%' }) => (
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
          initial={{ width: `${antes}%` }}
          animate={{ width: `${despues}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </div>
  )

  return (
    <motion.div
      className="casos-exito-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: animationPhase === 'exiting' ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}
    >
      <motion.div
        className="casos-exito-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: animationPhase === 'exiting' ? 0.8 : 1, 
          opacity: animationPhase === 'exiting' ? 0 : 1 
        }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <motion.span 
              className="modal-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆
            </motion.span>
            <h2>Casos de Éxito Reales</h2>
          </div>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>

        <div className="modal-content">
          <div className="casos-grid">
            {casos.map((caso, index) => (
              <motion.div
                key={caso.id}
                className={`caso-card ${selectedCaso === caso.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCaso(selectedCaso === caso.id ? null : caso.id)}
              >
                <div className="caso-header">
                  <div className="caso-avatar">{caso.avatar}</div>
                  <div className="caso-info">
                    <h3 className="caso-clinica">{caso.clinica}</h3>
                    <p className="caso-especialidad">{caso.especialidad}</p>
                  </div>
                  <div className="caso-resultado">
                    <span className="resultado-numero">{caso.resultado}</span>
                    <span className="resultado-tiempo">en {caso.tiempo}</span>
                  </div>
                </div>

                <div className="caso-preview">
                  <div className="problema-solucion-preview">
                    <div className="preview-item">
                      <span className="preview-label">Desafío:</span>
                      <span className="preview-text">{caso.problema}</span>
                    </div>
                    <div className="preview-item">
                      <span className="preview-label">Solución:</span>
                      <span className="preview-text">{caso.solucion}</span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedCaso === caso.id && (
                    <motion.div
                      className="caso-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="testimonial">
                        <p className="testimonial-text">"{caso.testimonial}"</p>
                        <p className="testimonial-author">- {caso.doctora}</p>
                      </div>

                      <div className="metricas-detalle">
                        <h4>Métricas de Transformación</h4>
                        <div className="metricas-grid">
                          {Object.entries(caso.metricas).map(([key, values]) => (
                            <MetricBar
                              key={key}
                              label={key.charAt(0).toUpperCase() + key.slice(1)}
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

                <div className="caso-expand-hint">
                  <span>{selectedCaso === caso.id ? 'Ver menos' : 'Ver detalles'}</span>
                  <motion.span
                    className="expand-icon"
                    animate={{ rotate: selectedCaso === caso.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="modal-footer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Clínicas transformadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">€2.5M+</span>
                <span className="stat-label">Ingresos adicionales generados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfacción del cliente</span>
              </div>
            </div>
            <motion.button
              className="demo-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Solicitar demo personalizada</span>
              <span className="button-icon">🚀</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .casos-exito-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .casos-exito-modal {
          background: white;
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 16px;
          border-bottom: 1px solid #f0f0f0;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-icon {
          font-size: 28px;
          display: inline-block;
        }

        .modal-title h2 {
          font-size: 20px;
          font-weight: 600;
          color: #2C2825;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 28px;
          color: #666;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background: #f5f5f5;
          color: #333;
        }

        .modal-content {
          padding: 24px;
        }

        .casos-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .caso-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 100%);
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .caso-card:hover {
          border-color: #E8B4B8;
          box-shadow: 0 8px 25px rgba(232, 180, 184, 0.15);
        }

        .caso-card.expanded {
          border-color: #E8B4B8;
          box-shadow: 0 12px 30px rgba(232, 180, 184, 0.2);
        }

        .caso-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }

        .caso-avatar {
          font-size: 24px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232, 180, 184, 0.1);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .caso-info {
          flex: 1;
          min-width: 0;
        }

        .caso-clinica {
          font-size: 16px;
          font-weight: 600;
          color: #2C2825;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .caso-especialidad {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.3;
        }

        .caso-resultado {
          text-align: right;
          flex-shrink: 0;
        }

        .resultado-numero {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #E8B4B8;
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .resultado-tiempo {
          font-size: 12px;
          color: #666;
          line-height: 1.2;
        }

        .caso-preview {
          margin-bottom: 16px;
        }

        .problema-solucion-preview {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .preview-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        .preview-label {
          font-weight: 600;
          color: #2C2825;
          min-width: 68px;
          font-size: 14px;
          flex-shrink: 0;
        }

        .preview-text {
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .caso-details {
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }

        .testimonial {
          background: rgba(232, 180, 184, 0.05);
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .testimonial-text {
          font-style: italic;
          color: #2C2825;
          margin: 0 0 8px 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .testimonial-author {
          font-weight: 600;
          color: #E8B4B8;
          margin: 0;
          font-size: 13px;
        }

        .metricas-detalle h4 {
          margin: 0 0 16px 0;
          color: #2C2825;
          font-size: 16px;
        }

        .metricas-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .metric-bar {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 14px;
        }

        .metric-label {
          font-weight: 600;
          color: #2C2825;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .metric-comparison {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .metric-before,
        .metric-after {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          flex: 1;
        }

        .metric-value {
          font-size: 16px;
          font-weight: 700;
        }

        .metric-before .metric-value {
          color: #ff6b6b;
        }

        .metric-after .metric-value {
          color: #51cf66;
        }

        .metric-text {
          font-size: 11px;
          color: #666;
        }

        .metric-arrow {
          font-size: 16px;
          color: #E8B4B8;
          flex-shrink: 0;
        }

        .metric-progress {
          height: 6px;
          background: #e0e0e0;
          border-radius: 3px;
          overflow: hidden;
        }

        .metric-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #51cf66 0%, #40c057 100%);
          border-radius: 3px;
        }

        .caso-expand-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #E8B4B8;
          font-size: 13px;
          font-weight: 500;
          margin-top: 12px;
        }

        .expand-icon {
          display: inline-block;
          font-size: 10px;
        }

        .modal-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 24px;
        }

        .footer-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 20px;
          font-weight: 700;
          color: #E8B4B8;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 12px;
          color: #666;
          line-height: 1.3;
        }

        .demo-button {
          width: 100%;
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          border: none;
          padding: 16px 20px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .demo-button:hover {
          box-shadow: 0 8px 25px rgba(232, 180, 184, 0.3);
        }

        .button-icon {
          font-size: 18px;
        }

        @media (max-width: 640px) {
          .casos-exito-overlay {
            padding: 12px;
          }

          .casos-exito-modal {
            border-radius: 16px;
            max-height: 92vh;
          }

          .modal-header {
            padding: 20px 20px 12px;
          }

          .modal-title h2 {
            font-size: 18px;
          }

          .modal-icon {
            font-size: 24px;
          }

          .close-button {
            font-size: 24px;
            width: 36px;
            height: 36px;
          }

          .modal-content {
            padding: 20px;
          }

          .caso-card {
            padding: 16px;
          }

          .caso-header {
            gap: 10px;
          }

          .caso-avatar {
            font-size: 20px;
            width: 36px;
            height: 36px;
          }

          .caso-clinica {
            font-size: 15px;
          }

          .caso-especialidad {
            font-size: 13px;
          }

          .resultado-numero {
            font-size: 13px;
          }

          .preview-label {
            min-width: 60px;
            font-size: 13px;
          }

          .preview-text {
            font-size: 13px;
          }

          .testimonial {
            padding: 14px;
          }

          .testimonial-text {
            font-size: 13px;
          }

          .footer-stats {
            grid-template-columns: 1fr;
            gap: 16px;
            text-align: center;
          }

          .stat-number {
            font-size: 18px;
          }

          .metric-comparison {
            gap: 8px;
          }

          .metric-value {
            font-size: 14px;
          }

          .metric-arrow {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .modal-header {
            padding: 16px 16px 12px;
          }

          .modal-content {
            padding: 16px;
          }

          .footer-stats {
            gap: 12px;
          }

          .demo-button {
            padding: 14px 16px;
            font-size: 14px;
          }

          .modal-title {
            gap: 8px;
          }

          .modal-title h2 {
            font-size: 16px;
          }
        }
      `}</style>
    </motion.div>
  )
}

// Main ProblemaVsSolucion component
const ProblemaVsSolucion = () => {
  const [activeTab, setActiveTab] = useState('problema')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showCasosExito, setShowCasosExito] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Transform mouse position for parallax effect
  const backgroundX = useTransform(mouseX, [-100, 100], [-3, 3])
  const backgroundY = useTransform(mouseY, [-100, 100], [-3, 3])
  
  const problemas = [
    {
      icon: '📅',
      titulo: 'Agenda caótica',
      descripcion: 'Dobles reservas, huecos vacíos, clientes frustradas',
      impacto: 'Pérdida de 30% de ingresos potenciales'
    },
    {
      icon: '💔',
      titulo: 'Clientes VIP desatendidas',
      descripcion: 'Sin seguimiento personalizado ni beneficios especiales',
      impacto: 'Reducción del 40% en retención'
    },
    {
      icon: '📊',
      titulo: 'Decisiones a ciegas',
      descripcion: 'Sin métricas claras ni insights del negocio',
      impacto: 'Crecimiento estancado'
    },
    {
      icon: '⏰',
      titulo: 'Burnout constante',
      descripcion: 'Gestión manual que consume tu energía vital',
      impacto: '60+ horas semanales de trabajo'
    }
  ]
  
  const soluciones = [
    {
      icon: '✨',
      titulo: 'Agenda inteligente',
      descripcion: 'IA que optimiza horarios y maximiza ocupación',
      beneficio: '+35% de productividad'
    },
    {
      icon: '💎',
      titulo: 'Sistema VIP automático',
      descripcion: 'Experiencias personalizadas que enamoran',
      beneficio: '92% de retención VIP'
    },
    {
      icon: '📈',
      titulo: 'Analytics en tiempo real',
      descripcion: 'Dashboards que revelan oportunidades ocultas',
      beneficio: 'Decisiones 3x más efectivas'
    },
    {
      icon: '🎯',
      titulo: 'Automatización elegante',
      descripcion: 'Tu clínica funciona mientras descansás',
      beneficio: 'Recuperá 20 horas semanales'
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x / 8)
      mouseY.set(y / 8)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="problema-solucion">
      {/* Animated Background */}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            Transformación
          </motion.span>
          
          <h2 className="section-title">
            <span className="title-regular">Entendemos tu</span>
            <span className="title-gradient">realidad diaria</span>
          </h2>
          
          <p className="section-description">
            Cada frustración que vivís, la convertimos en una solución 
            que se siente natural y poderosa
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          className="tab-switcher"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            className={`tab ${activeTab === 'problema' ? 'active' : ''}`}
            onClick={() => setActiveTab('problema')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">😔</span>
            <span className="tab-text">Desafíos actuales</span>
          </motion.button>
          
          <motion.button
            className={`tab ${activeTab === 'solucion' ? 'active' : ''}`}
            onClick={() => setActiveTab('solucion')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">✨</span>
            <span className="tab-text">Tu transformación</span>
          </motion.button>
          
          <motion.div 
            className="tab-indicator"
            animate={{ x: activeTab === 'problema' ? 0 : '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'problema' ? (
            <motion.div
              key="problemas"
              className="content-grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {problemas.map((problema, index) => (
                <motion.div
                  key={index}
                  className="card pain-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="card-glow"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="card-header">
                    <motion.span 
                      className="card-icon"
                      animate={{ rotate: hoveredIndex === index ? [0, -8, 8, 0] : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {problema.icon}
                    </motion.span>
                    <h3 className="card-title">{problema.titulo}</h3>
                  </div>
                  
                  <p className="card-description">{problema.descripcion}</p>
                  
                  <motion.div 
                    className="impact-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="impact-icon">⚠️</span>
                    <span className="impact-text">{problema.impacto}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soluciones"
              className="content-grid"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {soluciones.map((solucion, index) => (
                <motion.div
                  key={index}
                  className="card solution-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="card-sparkle"
                    animate={{ 
                      opacity: hoveredIndex === index ? [0, 1, 0] : 0,
                      scale: hoveredIndex === index ? [0.8, 1.2, 0.8] : 1
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  <div className="card-header">
                    <motion.span 
                      className="card-icon"
                      animate={{ 
                        scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {solucion.icon}
                    </motion.span>
                    <h3 className="card-title">{solucion.titulo}</h3>
                  </div>
                  
                  <p className="card-description">{solucion.descripcion}</p>
                  
                  <motion.div 
                    className="benefit-badge"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="benefit-icon">📈</span>
                    <span className="benefit-text">{solucion.beneficio}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transformation CTA */}
        <motion.div 
          className="transformation-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="cta-text">
            Descubrí cómo más de 200 clínicas ya transformaron su realidad
          </p>
          <motion.button 
            className="cta-button"
            onClick={() => setShowCasosExito(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver casos de éxito</span>
            <motion.span 
              className="cta-arrow"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* CasosExito Modal */}
      {showCasosExito && (
        <CasosExito onClose={() => setShowCasosExito(false)} />
      )}
      
      <style jsx>{`
        .problema-solucion {
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        /* Background Animation */
        .background-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
        }
        
        .sphere-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 225, 235, 0.6) 0%, transparent 70%);
          top: -150px;
          left: -150px;
          animation: float 20s ease-in-out infinite;
        }
        
        .sphere-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.6) 0%, transparent 70%);
          bottom: -150px;
          right: -150px;
          animation: float 25s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }
        
        /* Header Section */
        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          color: #C97575;
          letter-spacing: 0.3px;
          margin-bottom: 20px;
        }
        
        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .title-regular {
          color: #2C2825;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }
        
        .section-description {
          font-size: 1.0625rem;
          color: #6B6560;
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        /* Tab Switcher */
        .tab-switcher {
          display: flex;
          justify-content: center;
          margin-bottom: 48px;
          position: relative;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.08);
          border-radius: 50px;
          padding: 4px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .tab {
          flex: 1;
          padding: 14px 28px;
          background: transparent;
          border: none;
          border-radius: 46px;
          font-size: 15px;
          font-weight: 500;
          color: #6B6560;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 2;
        }
        
        .tab.active {
          color: #2C2825;
        }
        
        .tab-icon {
          font-size: 18px;
        }
        
        .tab-indicator {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: white;
          border-radius: 46px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          z-index: 1;
        }
        
        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }
        
        /* Card Styles */
        .card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .pain-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%);
          border: 1px solid rgba(232, 180, 184, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }
        
        .solution-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFFAF0 100%);
          border: 1px solid rgba(212, 175, 55, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }
        
        .card:hover {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }
        
        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.08) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        
        .card-sparkle {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 24px;
          height: 24px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        
        .card-icon {
          font-size: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #2C2825;
          flex: 1;
          line-height: 1.3;
        }
        
        .card-description {
          font-size: 15px;
          line-height: 1.5;
          color: #6B6560;
          margin-bottom: 20px;
        }
        
        /* Badges */
        .impact-badge,
        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: 500;
        }
        
        .impact-badge {
          background: rgba(255, 59, 48, 0.06);
          color: #C74343;
        }
        
        .benefit-badge {
          background: rgba(52, 199, 89, 0.06);
          color: #34A853;
        }
        
        /* Transformation CTA */
        .transformation-cta {
          text-align: center;
          padding: 40px 0 0;
        }
        
        .cta-text {
          font-size: 17px;
          color: #6B6560;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(232, 180, 184, 0.25);
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          box-shadow: 0 12px 32px rgba(232, 180, 184, 0.35);
        }
        
        .cta-arrow {
          font-size: 18px;
          display: inline-block;
        }
        
        /* Mobile Responsive Design */
        @media (max-width: 768px) {
          .problema-solucion {
            padding: 60px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 36px;
          }
          
          .section-badge {
            font-size: 13px;
            padding: 6px 16px;
            margin-bottom: 16px;
          }
          
          .section-title {
            font-size: clamp(1.75rem, 8vw, 2.25rem);
          }
          
          .section-description {
            font-size: 16px;
          }
          
          .tab-switcher {
            max-width: 100%;
            margin-bottom: 36px;
          }
          
          .tab {
            padding: 12px 20px;
            font-size: 14px;
            gap: 6px;
          }
          
          .tab-text {
            font-size: 13px;
          }
          
          .tab-icon {
            font-size: 16px;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 36px;
          }
          
          .card {
            padding: 24px;
          }
          
          .card-header {
            gap: 12px;
            margin-bottom: 14px;
          }
          
          .card-icon {
            width: 48px;
            height: 48px;
            font-size: 28px;
            border-radius: 14px;
          }
          
          .card-title {
            font-size: 1.0625rem;
          }
          
          .card-description {
            font-size: 14px;
            margin-bottom: 16px;
          }
          
          .impact-badge,
          .benefit-badge {
            font-size: 12px;
            padding: 5px 12px;
          }
          
          .transformation-cta {
            padding: 32px 0 0;
          }
          
          .cta-text {
            font-size: 16px;
            margin-bottom: 18px;
          }
          
          .cta-button {
            padding: 14px 28px;
            font-size: 14px;
            gap: 8px;
          }
          
          .sphere-1 {
            width: 300px;
            height: 300px;
            top: -100px;
            left: -100px;
          }
          
          .sphere-2 {
            width: 250px;
            height: 250px;
            bottom: -100px;
            right: -100px;
          }
        }
        
        @media (max-width: 480px) {
          .problema-solucion {
            padding: 48px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .section-header {
            margin-bottom: 32px;
          }
          
          .tab-switcher {
            margin-bottom: 32px;
            padding: 3px;
          }
          
          .tab {
            padding: 10px 16px;
            gap: 4px;
          }
          
          .tab-text {
            display: none;
          }
          
          .content-grid {
            gap: 16px;
            margin-bottom: 32px;
          }
          
          .card {
            padding: 20px;
          }
          
          .card-header {
            gap: 10px;
          }
          
          .card-icon {
            width: 44px;
            height: 44px;
            font-size: 24px;
            border-radius: 12px;
          }
          
          .card-title {
            font-size: 1rem;
          }
          
          .transformation-cta {
            padding: 28px 0 0;
          }
          
          .cta-text {
            font-size: 15px;
          }
          
          .cta-button {
            padding: 12px 24px;
            border-radius: 40px;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .gradient-sphere,
          .card,
          .tab-indicator {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .card {
            border-width: 2px;
          }
          
          .section-badge {
            border-width: 2px;
          }
          
          .tab-switcher {
            border-width: 2px;
          }
        }
        
        /* Focus styles for accessibility */
        .tab:focus,
        .cta-button:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .card:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 1px;
        }
      `}</style>
    </section>
  )
}

export default ProblemaVsSolucion