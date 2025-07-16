import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const SimulacionVisita = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const sunRotation = useTransform(scrollYProgress, [0, 1], [0, 180])
  
  const momentos = [
    {
      hora: '7:00 AM',
      periodo: 'Amanecer',
      titulo: 'Tu día comienza con claridad',
      descripcion: 'El Panel Inteligente ya procesó la información nocturna. 12 citas confirmadas, 3 recordatorios enviados automáticamente, y un resumen de métricas que te empoderan.',
      emoji: '🌅',
      color: 'linear-gradient(135deg, #FFE5CC 0%, #FFCAB0 100%)',
      ambiente: 'morning',
      stats: [
        { icon: '📅', value: '12', label: 'Citas' },
        { icon: '✉️', value: '3', label: 'Recordatorios' },
        { icon: '📈', value: '+15%', label: 'vs ayer' }
      ]
    },
    {
      hora: '10:00 AM',
      periodo: 'Mañana radiante',
      titulo: 'La experiencia VIP en acción',
      descripcion: 'María García, tu clienta premium, acaba de llegar. El sistema ya le envió su saludo personalizado y preparó su perfil completo: preferencias, historial, y sugerencias de tratamiento.',
      emoji: '💎',
      color: 'linear-gradient(135deg, #FFE8E8 0%, #FFD6D6 100%)',
      ambiente: 'midmorning',
      stats: [
        { icon: '⭐', value: 'VIP', label: 'Status' },
        { icon: '💕', value: '24', label: 'Visitas' },
        { icon: '💰', value: '$12k', label: 'LTV' }
      ]
    },
    {
      hora: '2:00 PM',
      periodo: 'Tarde productiva',
      titulo: 'Insights que transforman',
      descripcion: 'Un vistazo al Analytics revela oportunidades: los tratamientos faciales aumentaron 30% este mes. El sistema sugiere una campaña personalizada para maximizar esta tendencia.',
      emoji: '📊',
      color: 'linear-gradient(135deg, #E8E8FF 0%, #D6D6FF 100%)',
      ambiente: 'afternoon',
      stats: [
        { icon: '📊', value: '+30%', label: 'Faciales' },
        { icon: '🎯', value: '85%', label: 'Ocupación' },
        { icon: '💡', value: '3', label: 'Insights' }
      ]
    },
    {
      hora: '7:00 PM',
      periodo: 'Atardecer sereno',
      titulo: 'Cierre con tranquilidad',
      descripcion: 'Todo está listo para mañana: confirmaciones enviadas, inventario actualizado, equipo coordinado. Tu clínica funciona mientras vos disfrutás tu tiempo personal.',
      emoji: '🌙',
      color: 'linear-gradient(135deg, #D8C5E8 0%, #C5B3D8 100%)',
      ambiente: 'evening',
      stats: [
        { icon: '✅', value: '100%', label: 'Listo' },
        { icon: '🔄', value: '15', label: 'Confirmadas' },
        { icon: '😊', value: '4.9', label: 'Rating' }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((index) => (index + 1) % momentos.length)
          return 0
        }
        return prev + 1
      })
    }, 50)
    
    return () => clearInterval(interval)
  }, [momentos.length])

  return (
    <section className="simulacion-visita" ref={containerRef}>
      {/* Animated Sky Background */}
      <motion.div 
        className="sky-gradient"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="sun"
          style={{ rotate: sunRotation }}
        />
        <div className="clouds">
          <motion.div 
            className="cloud cloud-1"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
          <motion.div 
            className="cloud cloud-2"
            animate={{ x: [0, -80, 0] }}
            transition={{ duration: 40, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="container">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="header-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Experiencia Diaria
          </motion.span>
          
          <h2 className="section-title">
            <span>Un día en tu</span>
            <span className="title-highlight">clínica inteligente</span>
          </h2>
          
          <p className="section-description">
            Descubrí cómo la tecnología transforma cada momento en una oportunidad
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div 
          className="timeline-nav"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {momentos.map((momento, index) => (
            <motion.button
              key={index}
              className={`timeline-dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: activeIndex === index ? momento.color : 'rgba(255,255,255,0.5)'
              }}
            >
              <span className="dot-emoji">{momento.emoji}</span>
              <span className="dot-time">{momento.hora}</span>
            </motion.button>
          ))}
          
          <motion.div 
            className="timeline-line"
            style={{
              background: `linear-gradient(to right, 
                ${momentos[activeIndex].color.match(/rgba?\([^)]+\)/g)?.[0] || '#E8B4B8'} 0%, 
                ${momentos[activeIndex].color.match(/rgba?\([^)]+\)/g)?.[1] || '#D4AF37'} ${progress}%, 
                rgba(255,255,255,0.2) ${progress}%)`
            }}
          />
        </motion.div>

        {/* Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="momento-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              background: momentos[activeIndex].color
            }}
          >
            <div className="card-content">
              <div className="card-header">
                <motion.span 
                  className="periodo-badge"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {momentos[activeIndex].periodo}
                </motion.span>
                
                <motion.div 
                  className="hora-display"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <span className="hora-emoji">{momentos[activeIndex].emoji}</span>
                  <span className="hora-text">{momentos[activeIndex].hora}</span>
                </motion.div>
              </div>
              
              <motion.h3 
                className="momento-titulo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {momentos[activeIndex].titulo}
              </motion.h3>
              
              <motion.p 
                className="momento-descripcion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {momentos[activeIndex].descripcion}
              </motion.p>
              
              {/* Stats Grid */}
              <motion.div 
                className="stats-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {momentos[activeIndex].stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="stat-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="stat-icon">{stat.icon}</span>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="card-decoration"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <motion.div 
          className="progress-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="progress-bar"
            style={{
              width: `${progress}%`,
              background: momentos[activeIndex].color
            }}
          />
        </motion.div>

        {/* Interactive Hint */}
        <motion.p 
          className="interaction-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.span
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←
          </motion.span>
          Deslizá o hacé clic para explorar tu día
          <motion.span
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.p>
      </div>
      
      <style jsx>{`
        .simulacion-visita {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FFF8F3 0%, #FDFBF7 100%);
          min-height: 100vh;
        }
        
        /* Sky Animation */
        .sky-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0.3;
          background: linear-gradient(
            180deg,
            #FFE5CC 0%,
            #FFD6D6 25%,
            #E8E8FF 50%,
            #D8C5E8 75%,
            #2C2825 100%
          );
        }
        
        .sun {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #FFD700 0%, #FFA500 100%);
          border-radius: 50%;
          top: 10%;
          right: 10%;
          box-shadow: 0 0 60px rgba(255, 215, 0, 0.5);
        }
        
        .clouds {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 100px;
          opacity: 0.6;
        }
        
        .cloud-1 {
          width: 100px;
          height: 40px;
          top: 20%;
          left: 10%;
        }
        
        .cloud-2 {
          width: 150px;
          height: 50px;
          top: 30%;
          right: 20%;
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
          margin-bottom: 80px;
        }
        
        .header-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 10px 24px;
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
          line-height: 1.3;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .title-highlight {
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
        
        /* Timeline Navigation */
        .timeline-nav {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 800px;
          margin: 0 auto 60px;
          padding: 0 20px;
        }
        
        .timeline-dot {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-dot.active {
          transform: scale(1.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        
        .dot-emoji {
          font-size: 28px;
          display: block;
        }
        
        .dot-time {
          font-size: 11px;
          font-weight: 600;
          color: #2C2825;
          margin-top: 4px;
        }
        
        .timeline-line {
          position: absolute;
          top: 50%;
          left: 40px;
          right: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%);
          z-index: 1;
          border-radius: 2px;
          transition: background 0.3s ease;
        }
        
        /* Content Card */
        .momento-card {
          max-width: 900px;
          margin: 0 auto 40px;
          padding: 60px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .card-content {
          position: relative;
          z-index: 2;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .periodo-badge {
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          color: #6B6560;
          letter-spacing: 0.5px;
        }
        
        .hora-display {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.9);
          padding: 12px 24px;
          border-radius: 30px;
        }
        
        .hora-emoji {
          font-size: 24px;
        }
        
        .hora-text {
          font-size: 18px;
          font-weight: 600;
          color: #2C2825;
        }
        
        .momento-titulo {
          font-size: 2.5rem;
          font-weight: 600;
          color: #2C2825;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .momento-descripcion {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #4A4541;
          margin-bottom: 40px;
          max-width: 700px;
        }
        
        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 24px;
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .stat-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon {
          font-size: 28px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #2C2825;
        }
        
        .stat-label {
          font-size: 14px;
          color: #6B6560;
          font-weight: 500;
        }
        
        /* Decorative Elements */
        .card-decoration {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          top: -150px;
          right: -150px;
          pointer-events: none;
        }
        
        /* Progress Bar */
        .progress-container {
          max-width: 900px;
          margin: 0 auto 40px;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-bar {
          height: 100%;
          transition: width 0.1s linear;
          border-radius: 3px;
        }
        
        /* Interaction Hint */
        .interaction-hint {
          text-align: center;
          font-size: 16px;
          color: #8B8680;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .simulacion-visita {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .timeline-nav {
            gap: 10px;
            padding: 0;
          }
          
          .timeline-dot {
            width: 60px;
            height: 60px;
          }
          
          .dot-emoji {
            font-size: 20px;
          }
          
          .dot-time {
            display: none;
          }
          
          .momento-card {
            padding: 40px 24px;
          }
          
          .momento-titulo {
            font-size: 1.8rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .stat-card {
            padding: 16px;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .sky-gradient,
          .cloud,
          .card-decoration {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .simulacion-visita {
            background: linear-gradient(180deg, #2C2825 0%, #1a1a1a 100%);
          }
          
          .momento-card {
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          
          .momento-titulo {
            color: #FDFBF7;
          }
          
          .momento-descripcion {
            color: #D8D3CE;
          }
        }
      `}</style>
    </section>
  )
}

export default SimulacionVisita