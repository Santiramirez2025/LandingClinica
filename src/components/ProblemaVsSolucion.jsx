import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// CasosExito component mejorado para España
const CasosExito = ({ onClose }) => {
  const [selectedCaso, setSelectedCaso] = useState(null)
  const [animationPhase, setAnimationPhase] = useState('entering')

  const casos = [
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
          initial={{ width: `${Math.min(antes, 100)}%` }}
          animate={{ width: `${Math.min(despues, 100)}%` }}
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
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: animationPhase === 'exiting' ? 0.9 : 1, 
          opacity: animationPhase === 'exiting' ? 0 : 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <motion.span 
              className="modal-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🏆
            </motion.span>
            <h2>Casos de Éxito en España</h2>
          </div>
          <motion.button 
            className="close-button" 
            onClick={handleClose}
            whileHover={{ scale: 1.1, backgroundColor: '#f5f5f5' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="close-icon">✕</span>
          </motion.button>
        </div>

        <div className="modal-content">
          <div className="casos-grid">
            {casos.map((caso, index) => (
              <motion.div
                key={caso.id}
                className={`caso-card ${selectedCaso === caso.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCaso(selectedCaso === caso.id ? null : caso.id)}
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
                  {selectedCaso === caso.id && (
                    <motion.div
                      className="caso-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
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
                              label={key === 'ticketPromedio' ? 'Ticket Promedio' : 
                                     key === 'ocupacion' ? 'Ocupación' :
                                     key === 'satisfaccion' ? 'Satisfacción' :
                                     key === 'retencion' ? 'Retención' :
                                     key === 'referidos' ? 'Referidos' :
                                     key === 'conversion' ? 'Conversión' :
                                     key === 'crecimiento' ? 'Crecimiento' :
                                     key.charAt(0).toUpperCase() + key.slice(1)}
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
                  <span>{selectedCaso === caso.id ? '📖 Ver menos detalles' : '📋 Ver análisis completo'}</span>
                  <motion.span
                    className="expand-icon"
                    animate={{ rotate: selectedCaso === caso.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="modal-footer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(232, 180, 184, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="button-text">🎯 Solicitar Análisis Gratuito</span>
              <span className="button-subtext">Descubre tu potencial en 24h</span>
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
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .casos-exito-modal {
          background: linear-gradient(145deg, #ffffff 0%, #fefefe 100%);
          border-radius: 24px;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(232, 180, 184, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 32px 20px;
          border-bottom: 2px solid #f8f9fa;
          background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 100%);
          border-radius: 24px 24px 0 0;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-icon {
          font-size: 32px;
          display: inline-block;
        }

        .modal-title h2 {
          font-size: 24px;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .close-button {
          background: #ffffff;
          border: 2px solid #e9ecef;
          font-size: 18px;
          color: #6c757d;
          cursor: pointer;
          padding: 8px;
          border-radius: 12px;
          transition: all 0.3s ease;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .close-icon {
          font-weight: 600;
        }

        .modal-content {
          padding: 32px;
        }

        .casos-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .caso-card {
          background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
          border: 2px solid #e8e9ea;
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          position: relative;
        }

        .caso-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #E8B4B8 0%, #D4AF37 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .caso-card:hover {
          border-color: #E8B4B8;
          box-shadow: 0 16px 40px rgba(232, 180, 184, 0.15);
          transform: translateY(-2px);
        }

        .caso-card:hover::before {
          transform: scaleX(1);
        }

        .caso-card.expanded {
          border-color: #E8B4B8;
          box-shadow: 0 20px 50px rgba(232, 180, 184, 0.2);
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }

        .caso-card.expanded::before {
          transform: scaleX(1);
        }

        .caso-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .caso-avatar {
          font-size: 28px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
          border-radius: 16px;
          flex-shrink: 0;
          border: 2px solid rgba(232, 180, 184, 0.2);
        }

        .caso-info {
          flex: 1;
          min-width: 0;
        }

        .caso-clinica {
          font-size: 18px;
          font-weight: 700;
          color: #2c2c2c;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .caso-ubicacion {
          font-size: 14px;
          color: #E8B4B8;
          margin: 0 0 4px 0;
          font-weight: 600;
        }

        .caso-especialidad {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
          line-height: 1.4;
        }

        .caso-resultado {
          text-align: right;
          flex-shrink: 0;
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          padding: 12px 16px;
          border-radius: 12px;
          color: white;
        }

        .resultado-numero {
          display: block;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .resultado-tiempo {
          font-size: 12px;
          opacity: 0.9;
          line-height: 1.2;
        }

        .caso-preview {
          margin-bottom: 20px;
        }

        .problema-solucion-preview {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .preview-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px;
          border-radius: 12px;
        }

        .preview-item.problema {
          background: rgba(255, 99, 99, 0.05);
          border-left: 4px solid #ff6b6b;
        }

        .preview-item.solucion {
          background: rgba(81, 207, 102, 0.05);
          border-left: 4px solid #51cf66;
        }

        .preview-label {
          font-weight: 700;
          color: #2c2c2c;
          min-width: 80px;
          font-size: 14px;
          flex-shrink: 0;
        }

        .preview-text {
          color: #495057;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }

        .caso-details {
          border-top: 2px solid #f1f3f4;
          padding-top: 24px;
        }

        .testimonial {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.08) 0%, rgba(212, 175, 55, 0.08) 100%);
          padding: 24px;
          border-radius: 16px;
          margin-bottom: 24px;
          border: 1px solid rgba(232, 180, 184, 0.1);
          position: relative;
        }

        .quote-icon {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .testimonial-text {
          font-style: italic;
          color: #2c2c2c;
          margin: 0 0 12px 0;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
        }

        .testimonial-author {
          font-weight: 700;
          color: #E8B4B8;
          margin: 0;
          font-size: 14px;
        }

        .metricas-detalle h4 {
          margin: 0 0 20px 0;
          color: #2c2c2c;
          font-size: 18px;
          font-weight: 700;
        }

        .metricas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .metric-bar {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 18px;
          border: 1px solid #e9ecef;
        }

        .metric-label {
          font-weight: 700;
          color: #2c2c2c;
          margin-bottom: 12px;
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
          flex: 1;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 800;
        }

        .metric-before .metric-value {
          color: #dc3545;
        }

        .metric-after .metric-value {
          color: #28a745;
        }

        .metric-text {
          font-size: 12px;
          color: #6c757d;
          font-weight: 600;
        }

        .metric-arrow {
          font-size: 18px;
          color: #E8B4B8;
          flex-shrink: 0;
          font-weight: 800;
        }

        .metric-progress {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .metric-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
          border-radius: 4px;
        }

        .caso-expand-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #E8B4B8;
          font-size: 14px;
          font-weight: 600;
          margin-top: 16px;
          padding: 12px;
          background: rgba(232, 180, 184, 0.05);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .caso-expand-hint:hover {
          background: rgba(232, 180, 184, 0.1);
        }

        .expand-icon {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
        }

        .modal-footer {
          border-top: 2px solid #f1f3f4;
          padding-top: 32px;
          background: linear-gradient(135deg, #fdfcfb 0%, #f7f5f3 100%);
          margin: 0 -32px -32px;
          padding: 32px;
          border-radius: 0 0 24px 24px;
        }

        .footer-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 800;
          color: #E8B4B8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          color: #6c757d;
          line-height: 1.3;
          font-weight: 600;
        }

        .demo-button {
          width: 100%;
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          color: white;
          border: none;
          padding: 20px;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 30px rgba(232, 180, 184, 0.3);
        }

        .button-text {
          font-size: 16px;
          font-weight: 700;
        }

        .button-subtext {
          font-size: 13px;
          opacity: 0.9;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .casos-exito-overlay {
            padding: 16px;
          }

          .casos-exito-modal {
            border-radius: 20px;
            max-height: 93vh;
          }

          .modal-header {
            padding: 24px 24px 16px;
            border-radius: 20px 20px 0 0;
          }

          .modal-title h2 {
            font-size: 20px;
          }

          .modal-icon {
            font-size: 28px;
          }

          .close-button {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .modal-content {
            padding: 24px;
          }

          .caso-card {
            padding: 20px;
          }

          .caso-header {
            gap: 12px;
          }

          .caso-avatar {
            font-size: 24px;
            width: 48px;
            height: 48px;
          }

          .caso-clinica {
            font-size: 16px;
          }

          .resultado-numero {
            font-size: 14px;
          }

          .footer-stats {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .metricas-grid {
            grid-template-columns: 1fr;
          }

          .metric-comparison {
            gap: 12px;
          }

          .modal-footer {
            margin: 0 -24px -24px;
            padding: 24px;
            border-radius: 0 0 20px 20px;
          }
        }

        @media (max-width: 480px) {
          .modal-header {
            padding: 20px 20px 12px;
          }

          .modal-content {
            padding: 20px;
          }

          .caso-card {
            padding: 16px;
          }

          .modal-title {
            gap: 12px;
          }

          .modal-title h2 {
            font-size: 18px;
          }

          .modal-icon {
            font-size: 24px;
          }

          .caso-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }

          .caso-resultado {
            text-align: center;
            align-self: stretch;
          }

          .footer-stats {
            gap: 12px;
          }

          .stat-item {
            padding: 16px;
          }

          .stat-number {
            font-size: 20px;
          }

          .demo-button {
            padding: 16px;
          }

          .button-text {
            font-size: 15px;
          }

          .modal-footer {
            margin: 0 -20px -20px;
            padding: 20px;
          }
        }
      `}</style>
    </motion.div>
  )
}

// Main ProblemaVsSolucion component mejorado
const ProblemaVsSolucion = () => {
  const [activeTab, setActiveTab] = useState('problema')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showCasosExito, setShowCasosExito] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [-100, 100], [-2, 2])
  const backgroundY = useTransform(mouseY, [-100, 100], [-2, 2])
  
  const problemas = [
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
  
  const soluciones = [
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect()
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        mouseX.set(x / 10)
        mouseY.set(y / 10)
      }
    }
    
    const element = document.querySelector('.problema-solucion')
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      return () => element.removeEventListener('mousemove', handleMouseMove)
    }
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
        <div className="gradient-sphere sphere-3" />
      </motion.div>

      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="section-badge"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            🇪🇸 Transformación Clínicas España
          </motion.span>
          
          <h2 className="section-title">
            <span className="title-regular">Conocemos tu</span>
            <span className="title-gradient">realidad diaria</span>
          </h2>
          
          <p className="section-description">
            Cada frustración que vives en tu clínica, la convertimos en una 
            solución potente que se siente natural y profesional
          </p>
        </motion.div>

        {/* Tab Switcher Mejorado */}
        <motion.div 
          className="tab-switcher"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <motion.button
            className={`tab ${activeTab === 'problema' ? 'active' : ''}`}
            onClick={() => setActiveTab('problema')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">🔴</span>
            <span className="tab-text">Desafíos Reales</span>
            <span className="tab-subtitle">Lo que vives hoy</span>
          </motion.button>
          
          <motion.button
            className={`tab ${activeTab === 'solucion' ? 'active' : ''}`}
            onClick={() => setActiveTab('solucion')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="tab-icon">✨</span>
            <span className="tab-text">Tu Transformación</span>
            <span className="tab-subtitle">Lo que puedes lograr</span>
          </motion.button>
          
          <motion.div 
            className="tab-indicator"
            animate={{ x: activeTab === 'problema' ? 0 : '100%' }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'problema' ? (
            <motion.div
              key="problemas"
              className="content-grid"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {problemas.map((problema, index) => (
                <motion.div
                  key={index}
                  className={`card pain-card urgencia-${problema.urgencia}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="card-glow"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="urgencia-indicator">
                    <span className="urgencia-dot"></span>
                    <span className="urgencia-text">
                      {problema.urgencia === 'alta' ? 'Urgente' : 'Importante'}
                    </span>
                  </div>
                  
                  <div className="card-header">
                    <motion.span 
                      className="card-icon"
                      animate={{ 
                        rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {problema.icon}
                    </motion.span>
                    <h3 className="card-title">{problema.titulo}</h3>
                  </div>
                  
                  <p className="card-description">{problema.descripcion}</p>
                  
                  <motion.div 
                    className="impact-badge"
                    whileHover={{ scale: 1.05 }}
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
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {soluciones.map((solucion, index) => (
                <motion.div
                  key={index}
                  className="card solution-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className="card-sparkle"
                    animate={{ 
                      opacity: hoveredIndex === index ? [0, 1, 0] : 0,
                      scale: hoveredIndex === index ? [0.8, 1.2, 0.8] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div className="roi-badge">
                    <span className="roi-text">ROI {solucion.roi}</span>
                  </div>
                  
                  <div className="card-header">
                    <motion.span 
                      className="card-icon"
                      animate={{ 
                        scale: hoveredIndex === index ? [1, 1.15, 1] : 1,
                        rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 0.8 }}
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
                    <span className="benefit-icon">🚀</span>
                    <span className="benefit-text">{solucion.beneficio}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transformation CTA Mejorado */}
        <motion.div 
          className="transformation-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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
            whileHover={{ scale: 1.02, boxShadow: '0 16px 40px rgba(232, 180, 184, 0.3)' }}
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

      {/* CasosExito Modal */}
      {showCasosExito && (
        <CasosExito onClose={() => setShowCasosExito(false)} />
      )}
      
      <style jsx>{`
        .problema-solucion {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #fdfbf7 0%, #fff8f3 50%, #faf7f2 100%);
          min-height: 100vh;
        }
        
        /* Background Animation Mejorado */
        .background-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .gradient-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        
        .sphere-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.6) 0%, transparent 70%);
          top: -200px;
          left: -200px;
          animation: float1 25s ease-in-out infinite;
        }
        
        .sphere-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, transparent 70%);
          bottom: -150px;
          right: -150px;
          animation: float2 30s ease-in-out infinite reverse;
        }
        
        .sphere-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.4) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 35s ease-in-out infinite;
        }
        
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, -25px) scale(1.05); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-45%, -55%) scale(1.08); }
          75% { transform: translate(-55%, -45%) scale(0.95); }
        }
        
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        
        /* Header Section Mejorado */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.12) 0%, rgba(212, 175, 55, 0.12) 100%);
          border: 2px solid rgba(232, 180, 184, 0.3);
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 700;
          color: #C97575;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(232, 180, 184, 0.15);
        }
        
        .section-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 300;
          line-height: 1.15;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .title-regular {
          color: #2c2825;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 60%, #E8B4B8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .section-description {
          font-size: 1.125rem;
          color: #5d5a55;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 500;
        }
        
        /* Tab Switcher Profesional */
        .tab-switcher {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
          position: relative;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(232, 180, 184, 0.1);
          border-radius: 60px;
          padding: 6px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }
        
        .tab {
          flex: 1;
          padding: 20px 32px;
          background: transparent;
          border: none;
          border-radius: 54px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          position: relative;
          z-index: 2;
        }
        
        .tab.active {
          color: #2c2825;
        }
        
        .tab:not(.active) {
          color: #6b6560;
        }
        
        .tab-icon {
          font-size: 24px;
          margin-bottom: 4px;
        }
        
        .tab-text {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 2px;
        }
        
        .tab-subtitle {
          font-size: 12px;
          opacity: 0.7;
          font-weight: 500;
        }
        
        .tab-indicator {
          position: absolute;
          top: 6px;
          left: 6px;
          width: calc(50% - 6px);
          height: calc(100% - 12px);
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 54px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          z-index: 1;
          border: 1px solid rgba(232, 180, 184, 0.2);
        }
        
        /* Content Grid Mejorado */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }
        
        /* Card Styles Profesionales */
        .card {
          background: linear-gradient(145deg, #ffffff 0%, #fdfdfd 100%);
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }
        
        .pain-card {
          background: linear-gradient(145deg, #ffffff 0%, #fff5f5 100%);
          border: 2px solid rgba(255, 99, 99, 0.1);
          box-shadow: 0 12px 30px rgba(255, 99, 99, 0.08);
        }
        
        .solution-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8fffe 100%);
          border: 2px solid rgba(81, 207, 102, 0.1);
          box-shadow: 0 12px 30px rgba(81, 207, 102, 0.08);
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }
        
        .pain-card:hover {
          border-color: rgba(255, 99, 99, 0.3);
          box-shadow: 0 20px 50px rgba(255, 99, 99, 0.15);
        }
        
        .solution-card:hover {
          border-color: rgba(81, 207, 102, 0.3);
          box-shadow: 0 20px 50px rgba(81, 207, 102, 0.15);
        }
        
        .urgencia-alta {
          position: relative;
        }
        
        .urgencia-alta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff6b6b 0%, #ff8e8e 100%);
          border-radius: 24px 24px 0 0;
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
          width: 32px;
          height: 32px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
        }
        
        .urgencia-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding: 8px 12px;
          background: rgba(255, 99, 99, 0.08);
          border-radius: 20px;
          width: fit-content;
        }
        
        .urgencia-dot {
          width: 8px;
          height: 8px;
          background: #ff6b6b;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .urgencia-text {
          font-size: 12px;
          font-weight: 700;
          color: #ff6b6b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .roi-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
        }
        
        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2c2825;
          flex: 1;
          line-height: 1.3;
        }
        
        .card-description {
          font-size: 15px;
          line-height: 1.6;
          color: #5d5a55;
          margin-bottom: 24px;
          font-weight: 500;
        }
        
        /* Badges Mejorados */
        .impact-badge,
        .benefit-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .impact-badge {
          background: linear-gradient(135deg, rgba(255, 59, 48, 0.1) 0%, rgba(255, 99, 99, 0.1) 100%);
          color: #dc3545;
          border: 1px solid rgba(255, 59, 48, 0.2);
        }
        
        .benefit-badge {
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(81, 207, 102, 0.1) 100%);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.2);
        }
        
        /* Transformation CTA Profesional */
        .transformation-cta {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%);
          border-radius: 30px;
          border: 2px solid rgba(232, 180, 184, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }
        
        .cta-content {
          margin-bottom: 32px;
        }
        
        .cta-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2825;
          margin-bottom: 12px;
        }
        
        .cta-text {
          font-size: 17px;
          color: #5d5a55;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 50%, #E8B4B8 100%);
          color: white;
          padding: 20px 40px;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 12px 35px rgba(232, 180, 184, 0.35);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .button-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        
        .button-main {
          font-size: 16px;
          font-weight: 700;
        }
        
        .button-sub {
          font-size: 13px;
          opacity: 0.9;
        }
        
        .cta-arrow {
          font-size: 20px;
          font-weight: 800;
          display: inline-block;
        }
        
        /* Mobile Responsive Profesional */
        @media (max-width: 768px) {
          .problema-solucion {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .section-header {
            margin-bottom: 48px;
          }
          
          .section-badge {
            font-size: 14px;
            padding: 10px 20px;
            margin-bottom: 20px;
          }
          
          .section-title {
            font-size: clamp(2rem, 8vw, 2.75rem);
          }
          
          .section-description {
            font-size: 16px;
          }
          
          .tab-switcher {
            max-width: 100%;
            margin-bottom: 48px;
            padding: 4px;
          }
          
          .tab {
            padding: 16px 20px;
            gap: 2px;
          }
          
          .tab-text {
            font-size: 14px;
          }
          
          .tab-subtitle {
            font-size: 11px;
          }
          
          .tab-icon {
            font-size: 20px;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 48px;
          }
          
          .card {
            padding: 24px;
          }
          
          .card-header {
            gap: 12px;
            margin-bottom: 16px;
          }
          
          .card-icon {
            width: 56px;
            height: 56px;
            font-size: 32px;
            border-radius: 16px;
          }
          
          .card-title {
            font-size: 1.125rem;
          }
          
          .card-description {
            font-size: 14px;
            margin-bottom: 20px;
          }
          
          .urgencia-indicator {
            margin-bottom: 12px;
            padding: 6px 10px;
          }
          
          .urgencia-text {
            font-size: 11px;
          }
          
          .roi-badge {
            top: 16px;
            right: 16px;
            padding: 4px 8px;
            font-size: 11px;
          }
          
          .transformation-cta {
            padding: 40px 24px;
            border-radius: 24px;
          }
          
          .cta-title {
            font-size: 1.25rem;
          }
          
          .cta-text {
            font-size: 16px;
          }
          
          .cta-button {
            padding: 16px 32px;
            border-radius: 50px;
            gap: 12px;
          }
          
          .button-main {
            font-size: 15px;
          }
          
          .button-sub {
            font-size: 12px;
          }
          
          .sphere-1 {
            width: 350px;
            height: 350px;
            top: -150px;
            left: -150px;
          }
          
          .sphere-2 {
            width: 300px;
            height: 300px;
            bottom: -100px;
            right: -100px;
          }
          
          .sphere-3 {
            width: 250px;
            height: 250px;
          }
        }
        
        @media (max-width: 480px) {
          .problema-solucion {
            padding: 60px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 40px;
          }
          
          .section-badge {
            font-size: 13px;
            padding: 8px 16px;
          }
          
          .tab-switcher {
            margin-bottom: 40px;
            padding: 3px;
          }
          
          .tab {
            padding: 12px 16px;
          }
          
          .tab-text {
            font-size: 13px;
          }
          
          .tab-subtitle {
            display: none;
          }
          
          .tab-icon {
            font-size: 18px;
          }
          
          .content-grid {
            gap: 20px;
            margin-bottom: 40px;
          }
          
          .card {
            padding: 20px;
          }
          
          .card-header {
            gap: 10px;
          }
          
          .card-icon {
            width: 48px;
            height: 48px;
            font-size: 28px;
            border-radius: 14px;
          }
          
          .card-title {
            font-size: 1rem;
          }
          
          .card-description {
            font-size: 13px;
          }
          
          .impact-badge,
          .benefit-badge {
            font-size: 13px;
            padding: 8px 12px;
          }
          
          .urgencia-indicator {
            padding: 5px 8px;
          }
          
          .transformation-cta {
            padding: 32px 20px;
            border-radius: 20px;
          }
          
          .cta-content {
            margin-bottom: 24px;
          }
          
          .cta-title {
            font-size: 1.125rem;
          }
          
          .cta-text {
            font-size: 15px;
          }
          
          .cta-button {
            padding: 14px 24px;
            border-radius: 40px;
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
          
          .button-content {
            align-items: center;
          }
          
          .button-main {
            font-size: 14px;
          }
          
          .cta-arrow {
            font-size: 18px;
          }
        }
        
        /* Accessibility Mejorada */
        @media (prefers-reduced-motion: reduce) {
          .gradient-sphere,
          .card,
          .tab-indicator,
          .urgencia-dot {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .card {
            border-width: 3px;
          }
          
          .section-badge {
            border-width: 3px;
          }
          
          .tab-switcher {
            border-width: 3px;
          }
          
          .impact-badge,
          .benefit-badge {
            border-width: 2px;
          }
        }
        
        /* Focus styles profesionales */
        .tab:focus-visible,
        .cta-button:focus-visible,
        .card:focus-visible {
          outline: 3px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .card:focus-visible {
          transform: translateY(-4px);
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .problema-solucion {
            background: linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          }
          
          .card {
            background: linear-gradient(145deg, #2d2d2d 0%, #3a3a3a 100%);
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .card-title,
          .section-title .title-regular,
          .cta-title {
            color: #ffffff;
          }
          
          .card-description,
          .section-description,
          .cta-text {
            color: #cccccc;
          }
          
          .section-badge {
            background: rgba(232, 180, 184, 0.2);
            border-color: rgba(232, 180, 184, 0.4);
            color: #E8B4B8;
          }
          
          .tab-switcher {
            background: rgba(45, 45, 45, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .tab-indicator {
            background: linear-gradient(135deg, #3a3a3a 0%, #4a4a4a 100%);
          }
          
          .transformation-cta {
            background: linear-gradient(145deg, rgba(45, 45, 45, 0.9) 0%, rgba(58, 58, 58, 0.9) 100%);
            border-color: rgba(255, 255, 255, 0.1);
          }
        }
        
        /* Print styles */
        @media print {
          .gradient-sphere,
          .card-glow,
          .card-sparkle {
            display: none;
          }
          
          .problema-solucion {
            background: white;
            padding: 20px 0;
          }
          
          .card {
            break-inside: avoid;
            box-shadow: none;
            border: 2px solid #ccc;
          }
        }
        
        /* Hover effects solo en dispositivos que los soportan */
        @media (hover: hover) and (pointer: fine) {
          .card:hover {
            transform: translateY(-8px);
          }
          
          .cta-button:hover {
            transform: translateY(-2px);
          }
          
          .tab:hover {
            background: rgba(232, 180, 184, 0.05);
          }
        }
        
        /* Para dispositivos táctiles */
        @media (hover: none) and (pointer: coarse) {
          .card:active {
            transform: translateY(-4px);
          }
          
          .cta-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  )
}

export default ProblemaVsSolucion