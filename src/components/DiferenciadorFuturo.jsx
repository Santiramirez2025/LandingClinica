import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const DiferenciadorFuturo = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  
  const features = [
    {
      id: 'ai',
      icon: '🤖',
      titulo: 'IA Predictiva',
      subtitulo: 'Inteligencia que anticipa',
      descripcion: 'Algoritmos que aprenden de cada interacción para predecir necesidades y optimizar resultados',
      beneficios: [
        'Recomendaciones personalizadas',
        'Detección de patrones ocultos',
        'Alertas proactivas inteligentes'
      ],
      gradient: 'linear-gradient(135deg, #FFE5EC 0%, #FFD4E1 100%)',
      accentColor: '#E8B4B8',
      preview: {
        type: 'ai-visualization',
        data: [85, 92, 78, 95, 88, 93]
      }
    },
    {
      id: 'automation',
      icon: '🔄',
      titulo: 'Automatización Elegante',
      subtitulo: 'Tu clínica en piloto automático',
      descripcion: 'Workflows inteligentes que se adaptan a tu forma de trabajar y evolucionan contigo',
      beneficios: [
        'Ahorro de 20+ horas semanales',
        'Cero tareas repetitivas',
        'Escalabilidad sin límites'
      ],
      gradient: 'linear-gradient(135deg, #FFF5E5 0%, #FFE8D4 100%)',
      accentColor: '#D4AF37',
      preview: {
        type: 'workflow',
        steps: ['Reserva', 'Confirmación', 'Recordatorio', 'Follow-up']
      }
    },
    {
      id: 'analytics',
      icon: '📊',
      titulo: 'Analytics Visionario',
      subtitulo: 'Decisiones basadas en data real',
      descripcion: 'Dashboards que revelan oportunidades y te ayudan a crecer con confianza',
      beneficios: [
        'ROI en tiempo real',
        'Predicciones de crecimiento',
        'Insights accionables'
      ],
      gradient: 'linear-gradient(135deg, #E5F0FF 0%, #D4E5FF 100%)',
      accentColor: '#7BA7E7',
      preview: {
        type: 'chart',
        trend: '+34%'
      }
    }
  ]

  // Mouse parallax for cards
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const renderPreview = (feature) => {
    switch (feature.preview.type) {
      case 'ai-visualization':
        return (
          <div className="ai-preview">
            {feature.preview.data.map((value, i) => (
              <motion.div
                key={i}
                className="ai-bar"
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                style={{ background: feature.accentColor }}
              />
            ))}
          </div>
        )
      case 'workflow':
        return (
          <div className="workflow-preview">
            {feature.preview.steps.map((step, i) => (
              <motion.div
                key={i}
                className="workflow-step"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, type: "spring" }}
              >
                <motion.div 
                  className="step-dot"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ background: feature.accentColor }}
                />
                <span className="step-label">{step}</span>
              </motion.div>
            ))}
          </div>
        )
      case 'chart':
        return (
          <div className="chart-preview">
            <motion.div
              className="trend-line"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 100">
                <motion.path
                  d="M 0 80 Q 50 60, 100 40 T 200 20"
                  fill="none"
                  stroke={feature.accentColor}
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
            </motion.div>
            <motion.span 
              className="trend-value"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {feature.preview.trend}
            </motion.span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="diferenciador-futuro" ref={containerRef}>
      {/* Animated Background */}
      <motion.div 
        className="future-bg"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="grid-pattern" />
        <motion.div 
          className="glow-orb orb-1"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="glow-orb orb-2"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </motion.div>

      <div className="container">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <motion.div 
            className="future-badge"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <span className="badge-icon">✨</span>
            <span className="badge-text">Innovación Continua</span>
          </motion.div>
          
          <h2 className="section-title">
            <span className="title-line">El futuro de la</span>
            <span className="title-gradient">estética digital</span>
          </h2>
          
          <p className="section-description">
            Tu app no es estática. Evoluciona, aprende y crece junto a tu clínica,
            manteniéndote siempre a la vanguardia
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="features-container">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{ 
                background: feature.gradient,
                rotateX: activeFeature === index ? rotateX : 0,
                rotateY: activeFeature === index ? rotateY : 0
              }}
              onHoverStart={() => setActiveFeature(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Glow Effect */}
              <motion.div 
                className="card-glow"
                animate={{ 
                  opacity: activeFeature === index ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Icon */}
              <motion.div 
                className="feature-icon"
                animate={{ 
                  rotate: activeFeature === index ? [0, 10, -10, 0] : 0,
                  scale: activeFeature === index ? 1.1 : 1
                }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.titulo}</h3>
                <p className="feature-subtitle">{feature.subtitulo}</p>
                <p className="feature-description">{feature.descripcion}</p>
                
                {/* Benefits List */}
                <motion.ul 
                  className="benefits-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeFeature === index ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.beneficios.map((beneficio, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="benefit-dot" style={{ background: feature.accentColor }} />
                      {beneficio}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Interactive Preview */}
              <div className="feature-preview">
                {renderPreview(feature)}
              </div>

              {/* Coming Soon Tag */}
              <motion.div 
                className="coming-soon"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeFeature === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="pulse-dot" />
                <span>Próximamente</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Preview */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="timeline-title">Roadmap 2025</h3>
          <div className="timeline">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, i) => (
              <motion.div 
                key={quarter}
                className="timeline-item"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <div className="timeline-dot" />
                <span className="timeline-label">{quarter}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="future-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">
            Sé parte de la revolución digital en estética
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Acceso anticipado</span>
            <motion.span 
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
      
      <style jsx>{`
        .diferenciador-futuro {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        /* Background Effects */
        .future-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .grid-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(232, 180, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 180, 184, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }
        
        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%);
          top: -200px;
          right: -200px;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          bottom: -200px;
          left: -100px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        
        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .future-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 10px 24px;
          border-radius: 30px;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .badge-icon {
          font-size: 18px;
        }
        
        .badge-text {
          font-size: 14px;
          font-weight: 600;
          color: #C97575;
          letter-spacing: 0.5px;
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
        
        .title-line {
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
        
        /* Feature Cards */
        .features-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
          perspective: 1000px;
        }
        
        .feature-card {
          position: relative;
          border-radius: 32px;
          padding: 48px 40px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }
        
        .feature-card.active {
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        
        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0;
        }
        
        .feature-icon {
          font-size: 64px;
          margin-bottom: 24px;
          display: inline-block;
          transform-origin: center;
        }
        
        .feature-content {
          flex: 1;
        }
        
        .feature-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #2C2825;
          margin-bottom: 8px;
        }
        
        .feature-subtitle {
          font-size: 1rem;
          color: #8B8680;
          margin-bottom: 20px;
          font-weight: 500;
        }
        
        .feature-description {
          font-size: 16px;
          line-height: 1.6;
          color: #6B6560;
          margin-bottom: 32px;
        }
        
        .benefits-list {
          list-style: none;
          margin-bottom: 40px;
        }
        
        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #6B6560;
        }
        
        .benefit-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        /* Feature Previews */
        .feature-preview {
          height: 120px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ai-preview {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          height: 100%;
        }
        
        .ai-bar {
          width: 12px;
          background: #E8B4B8;
          border-radius: 6px 6px 0 0;
          transition: height 0.8s ease-out;
        }
        
        .workflow-preview {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .workflow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .step-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
        
        .step-label {
          font-size: 12px;
          color: #8B8680;
          white-space: nowrap;
        }
        
        .chart-preview {
          position: relative;
          width: 200px;
          height: 100px;
        }
        
        .trend-line svg {
          width: 100%;
          height: 100%;
        }
        
        .trend-value {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 24px;
          font-weight: 600;
          color: #34A853;
        }
        
        /* Coming Soon Tag */
        .coming-soon {
          position: absolute;
          bottom: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          color: #8B8680;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #34A853;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        /* Timeline */
        .timeline-section {
          margin-bottom: 80px;
          text-align: center;
        }
        
        .timeline-title {
          font-size: 1.25rem;
          color: #8B8680;
          margin-bottom: 32px;
          font-weight: 500;
        }
        
        .timeline {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 25%;
          right: 25%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #E8B4B8, #D4AF37, transparent);
          transform: translateY(-50%);
          z-index: 0;
        }
        
        .timeline-item {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .timeline-dot {
          width: 16px;
          height: 16px;
          background: white;
          border: 3px solid #E8B4B8;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.3);
        }
        
        .timeline-label {
          font-size: 14px;
          font-weight: 600;
          color: #6B6560;
        }
        
        /* CTA */
        .future-cta {
          text-align: center;
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
          transform: translateY(-2px);
        }
        
        .arrow {
          font-size: 20px;
          display: inline-block;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .diferenciador-futuro {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .section-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }
          
          .features-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-card {
            padding: 36px 28px;
            min-height: auto;
          }
          
          .feature-icon {
            font-size: 48px;
          }
          
          .timeline {
            gap: 30px;
          }
          
          .timeline::before {
            left: 15%;
            right: 15%;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .glow-orb,
          .ai-bar,
          .pulse-dot {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .diferenciador-futuro {
            background: linear-gradient(180deg, #1a1a1a 0%, #2C2825 100%);
          }
          
          .feature-card {
            background: rgba(44, 40, 37, 0.8);
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .feature-title {
            color: #FDFBF7;
          }
          
          .feature-subtitle,
          .feature-description,
          .benefits-list li,
          .cta-text {
            color: #A8A39E;
          }
          
          .coming-soon {
            background: rgba(44, 40, 37, 0.9);
            color: #A8A39E;
          }
        }
      `}</style>
    </section>
  )
}

export default DiferenciadorFuturo