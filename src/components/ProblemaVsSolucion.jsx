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
          padding: 20px;
        }

        .casos-exito-modal {
          background: white;
          border-radius: 24px;
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
          padding: 30px 40px 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .modal-icon {
          font-size: 32px;
          display: inline-block;
        }

        .modal-title h2 {
          font-size: 24px;
          font-weight: 600;
          color: #2C2825;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 32px;
          color: #666;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: #f5f5f5;
          color: #333;
        }

        .modal-content {
          padding: 30px 40px;
        }

        .casos-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .caso-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 100%);
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 24px;
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
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .caso-avatar {
          font-size: 32px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232, 180, 184, 0.1);
          border-radius: 50%;
        }

        .caso-info {
          flex: 1;
        }

        .caso-clinica {
          font-size: 18px;
          font-weight: 600;
          color: #2C2825;
          margin: 0 0 4px 0;
        }

        .caso-especialidad {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .caso-resultado {
          text-align: right;
        }

        .resultado-numero {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #E8B4B8;
        }

        .resultado-tiempo {
          font-size: 12px;
          color: #666;
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
          min-width: 70px;
          font-size: 14px;
        }

        .preview-text {
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }

        .caso-details {
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }

        .testimonial {
          background: rgba(232, 180, 184, 0.05);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .testimonial-text {
          font-style: italic;
          color: #2C2825;
          margin: 0 0 12px 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .testimonial-author {
          font-weight: 600;
          color: #E8B4B8;
          margin: 0;
          font-size: 14px;
        }

        .metricas-detalle h4 {
          margin: 0 0 16px 0;
          color: #2C2825;
          font-size: 16px;
        }

        .metricas-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .metric-bar {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 16px;
        }

        .metric-label {
          font-weight: 600;
          color: #2C2825;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .metric-comparison {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .metric-before,
        .metric-after {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 700;
        }

        .metric-before .metric-value {
          color: #ff6b6b;
        }

        .metric-after .metric-value {
          color: #51cf66;
        }

        .metric-text {
          font-size: 12px;
          color: #666;
        }

        .metric-arrow {
          font-size: 20px;
          color: #E8B4B8;
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
          gap: 8px;
          color: #E8B4B8;
          font-size: 14px;
          font-weight: 500;
          margin-top: 16px;
        }

        .expand-icon {
          display: inline-block;
          font-size: 12px;
        }

        .modal-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 30px;
        }

        .footer-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 700;
          color: #E8B4B8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        .demo-button {
          width: 100%;
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          border: none;
          padding: 18px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .demo-button:hover {
          box-shadow: 0 8px 25px rgba(232, 180, 184, 0.3);
        }

        .button-icon {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .casos-exito-modal {
            margin: 10px;
            max-height: 95vh;
          }

          .modal-header,
          .modal-content {
            padding: 20px;
          }

          .footer-stats {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .metric-comparison {
            flex-direction: column;
            gap: 8px;
          }

          .metric-arrow {
            transform: rotate(90deg);
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
  const backgroundX = useTransform(mouseX, [-100, 100], [-5, 5])
  const backgroundY = useTransform(mouseY, [-100, 100], [-5, 5])
  
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
      mouseX.set(x / 5)
      mouseY.set(y / 5)
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
          initial={{ opacity: 0, y: 20 }}
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
            transition={{ type: "spring", stiffness: 300 }}
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
              transition={{ duration: 0.3 }}
            >
              {problemas.map((problema, index) => (
                <motion.div
                  key={index}
                  className="card pain-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
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
                      animate={{ rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0 }}
                      transition={{ duration: 0.4 }}
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
              transition={{ duration: 0.3 }}
            >
              {soluciones.map((solucion, index) => (
                <motion.div
                  key={index}
                  className="card solution-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
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
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
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
              animate={{ x: [0, 5, 0] }}
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
          padding: 120px 0;
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
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .sphere-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 225, 235, 0.8) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          animation: float 20s ease-in-out infinite;
        }
        
        .sphere-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, transparent 70%);
          bottom: -200px;
          right: -200px;
          animation: float 25s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        
        /* Header Section */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          color: #C97575;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
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
          font-size: 1.125rem;
          color: #6B6560;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        /* Tab Switcher */
        .tab-switcher {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
          position: relative;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 60px;
          padding: 6px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .tab {
          flex: 1;
          padding: 16px 32px;
          background: transparent;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          color: #6B6560;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 2;
        }
        
        .tab.active {
          color: #2C2825;
        }
        
        .tab-icon {
          font-size: 20px;
        }
        
        .tab-indicator {
          position: absolute;
          top: 6px;
          left: 6px;
          width: calc(50% - 6px);
          height: calc(100% - 12px);
          background: white;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          z-index: 1;
        }
        
        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        /* Card Styles */
        .card {
          background: white;
          border-radius: 24px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .pain-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%);
          border: 1px solid rgba(232, 180, 184, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        
        .solution-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFFAF0 100%);
          border: 1px solid rgba(212, 175, 55, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }
        
        .card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        
        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.1) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        
        .card-sparkle {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2C2825;
          flex: 1;
        }
        
        .card-description {
          font-size: 16px;
          line-height: 1.6;
          color: #6B6560;
          margin-bottom: 24px;
        }
        
        /* Badges */
        .impact-badge,
        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .impact-badge {
          background: rgba(255, 59, 48, 0.08);
          color: #C74343;
        }
        
        .benefit-badge {
          background: rgba(52, 199, 89, 0.08);
          color: #34A853;
        }
        
        /* Transformation CTA */
        .transformation-cta {
          text-align: center;
          padding: 60px 0 0;
        }
        
        .cta-text {
          font-size: 18px;
          color: #6B6560;
          margin-bottom: 24px;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 18px 40px;
          border: none;
          border-radius: 60px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(232, 180, 184, 0.3);
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          box-shadow: 0 15px 40px rgba(232, 180, 184, 0.4);
        }
        
        .cta-arrow {
          font-size: 20px;
          display: inline-block;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .problema-solucion {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .section-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .tab-switcher {
            flex-direction: column;
            max-width: 100%;
            padding: 4px;
          }
          
          .tab {
            padding: 14px 24px;
          }
          
          .tab-text {
            display: none;
          }
          
          .tab-indicator {
            display: none;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .card {
            padding: 28px;
          }
          
          .card-icon {
            width: 48px;
            height: 48px;
            font-size: 28px;
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
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .problema-solucion {
            background: linear-gradient(180deg, #1a1a1a 0%, #2C2825 100%);
          }
          
          .card {
            background: #2C2825;
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .card-title {
            color: #FDFBF7;
          }
          
          .card-description,
          .section-description,
          .cta-text {
            color: #A8A39E;
          }
          
          .tab {
            color: #A8A39E;
          }
          
          .tab.active {
            color: #FDFBF7;
          }
        }
      `}</style>
    </section>
  )
}

export default ProblemaVsSolucion