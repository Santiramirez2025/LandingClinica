import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroButton = () => {
  return (
    <motion.button
      className="cta-primary"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className="button-text">Empezar gratis</span>
      <span className="button-icon">→</span>
    </motion.button>
  )
}

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Spring animations for smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), springConfig)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleMouseMove = (e) => {
      if (isMobile) return
      
      const rect = document.querySelector('.hero-visual')?.getBoundingClientRect()
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        mouseX.set(x)
        mouseY.set(y)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [mouseX, mouseY, isMobile])

  const scrollToPricing = () => {
    const pricingElement = document.querySelector('#pricing-section')
    if (pricingElement) {
      pricingElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero">
      {/* Gradient Background */}
      <div className="gradient-orbs">
        <motion.div 
          className="orb orb-1"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="orb orb-2"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="premium-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-text">✨ Experiencia Premium</span>
            </motion.div>
            
            <h1 className="hero-title">
            Tu clínica<br/>
             estética,<br/>
              <span className="title-accent">más simple, más rentable.</span>
            </h1>
            
            <p className="hero-subtitle">
              Gestioná tu clínica estética desde una app simple, profesional y fácil de usar.
            </p>
            
            <div className="cta-container">
              <HeroButton />
              
              <motion.div 
                className="cta-secondary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="cta-link" onClick={scrollToPricing}>
                  Ver precios y planes
                </button>
              </motion.div>
              
              <motion.div 
                className="cta-note"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="note-content">
                  <span className="note-item">
                    <span className="note-icon">✓</span>
                    Configuración gratuita
                  </span>
                  <span className="note-divider">•</span>
                  <span className="note-item">
                    <span className="note-icon">🔒</span>
                    Datos seguros y privados
                  </span>
                  <span className="note-divider">•</span>
                  <span className="note-item">
                    <span className="note-icon">📞</span>
                    Soporte en español
                  </span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="trust-indicators"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="indicator">
                <span className="indicator-number">200+</span>
                <span className="indicator-text">Clínicas premium</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">4.9</span>
                <span className="indicator-text">Rating usuarios</span>
              </div>
              <div className="indicator">
                <span className="indicator-number">24/7</span>
                <span className="indicator-text">Soporte dedicado</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
              transformPerspective: 1200
            }}
          >
            <div className="app-showcase">
              <motion.div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="status-bar">
                      <span className="time">9:41</span>
                      <div className="status-icons">
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    
                    <div className="app-header">
                      <h3>Hola, María ✨</h3>
                      <p>Tu día se ve increíble</p>
                    </div>
                    
                    <div className="metric-cards">
                      <motion.div 
                        className="metric-card"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="metric-icon">📅</span>
                        <span className="metric-value">12</span>
                        <span className="metric-label">Citas<br/>hoy</span>
                      </motion.div>
                      
                      <motion.div 
                        className="metric-card accent"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="metric-icon">💎</span>
                        <span className="metric-value">3</span>
                        <span className="metric-label">VIP<br/>activas</span>
                      </motion.div>
                    </div>
                    
                    <div className="schedule-preview">
                      <motion.div 
                        className="schedule-item"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="schedule-time">10:00</div>
                        <div className="schedule-detail">
                          <p className="client-name">Ana García</p>
                          <p className="treatment">Tratamiento facial premium</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {!isMobile && (
              <motion.div 
                className="floating-badge badge-ai"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AI
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        .gradient-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.6;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: multiply;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 218, 225, 0.7) 0%, transparent 70%);
          top: -150px;
          right: -150px;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 237, 213, 0.7) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .hero-text {
          max-width: 580px;
        }
        
        .premium-badge {
          display: inline-flex;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .badge-text {
          background: linear-gradient(135deg, #FFE5E5 0%, #FFF0E5 100%);
          border: 1px solid rgba(255, 200, 200, 0.4);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #B86B6B;
          letter-spacing: 0.3px;
          backdrop-filter: blur(10px);
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 32px;
          letter-spacing: -1.5px;
          color: #1a1a1a;
        }
        
        .title-accent {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        
        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 48px;
          font-weight: 400;
          max-width: 520px;
        }
        
        .cta-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 56px;
        }
        
        .cta-primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(232, 180, 184, 0.3);
          transition: all 0.3s ease;
        }
        
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(232, 180, 184, 0.4);
        }
        
        .button-text {
          font-weight: 600;
        }
        
        .button-icon {
          font-size: 18px;
          font-weight: 600;
          transition: transform 0.3s ease;
        }
        
        .cta-primary:hover .button-icon {
          transform: translateX(2px);
        }
        
        .cta-secondary {
          margin-top: 4px;
        }
        
        .cta-link {
          background: none;
          border: none;
          color: #1e40af;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }
        
        .cta-link:hover {
          color: #1e3a8a;
          border-bottom-color: #1e3a8a;
        }
        
        .cta-note {
          margin-top: 8px;
        }
        
        .note-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .note-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .note-icon {
          color: #059669;
          font-size: 12px;
          font-weight: 600;
        }
        
        .note-divider {
          color: #d1d5db;
          font-size: 12px;
        }
        
        .trust-indicators {
          display: flex;
          gap: 48px;
        }
        
        .indicator {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .indicator-number {
          font-size: 28px;
          font-weight: 700;
          color: #2d2d2d;
          line-height: 1;
        }
        
        .indicator-text {
          font-size: 14px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }
        
        .app-showcase {
          position: relative;
          width: 320px;
          height: 640px;
        }
        
        .phone-mockup {
          position: relative;
          z-index: 10;
        }
        
        .phone-frame {
          width: 300px;
          height: 620px;
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 40px;
          padding: 12px;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.2),
            0 15px 30px rgba(0, 0, 0, 0.1),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #FDFBF7;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }
        
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 24px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .status-icons {
          display: flex;
          gap: 8px;
          font-size: 16px;
        }
        
        .app-header {
          padding: 32px 24px 24px;
          background: linear-gradient(180deg, #FDFBF7 0%, transparent 100%);
        }
        
        .app-header h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        
        .app-header p {
          font-size: 16px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .metric-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 0 24px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 20px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        
        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .metric-card.accent {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.15), rgba(255, 237, 213, 0.15));
          border-color: rgba(232, 180, 184, 0.3);
        }
        
        .metric-icon {
          font-size: 24px;
          display: block;
          margin-bottom: 12px;
        }
        
        .metric-value {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          display: block;
          margin-bottom: 8px;
          line-height: 1;
        }
        
        .metric-label {
          font-size: 13px;
          color: #6a6a6a;
          font-weight: 500;
          line-height: 1.3;
        }
        
        .schedule-preview {
          padding: 0 24px;
        }
        
        .schedule-item {
          display: flex;
          gap: 16px;
          background: white;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.02);
        }
        
        .schedule-time {
          font-size: 14px;
          font-weight: 700;
          color: #E8B4B8;
          min-width: 50px;
        }
        
        .client-name {
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
          font-size: 15px;
        }
        
        .treatment {
          font-size: 14px;
          color: #6a6a6a;
          font-weight: 500;
        }
        
        .floating-badge {
          position: absolute;
          background: linear-gradient(135deg, #FFE5E5, #FFF0E5);
          color: #B86B6B;
          padding: 12px 20px;
          border-radius: 50px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          font-size: 16px;
          font-weight: 700;
          z-index: 15;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 200, 200, 0.3);
        }
        
        .badge-ai {
          top: 40px;
          right: -20px;
        }
        
        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .hero-text {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .cta-container {
            align-items: center;
          }
          
          .trust-indicators {
            justify-content: center;
          }
          
          .app-showcase {
            width: 280px;
            height: 560px;
          }
          
          .phone-frame {
            width: 260px;
            height: 540px;
          }
        }
        
        /* Mobile breakpoint */
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px;
            min-height: 100vh;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .hero-content {
            gap: 40px;
          }
          
          .hero-title {
            font-size: clamp(2.2rem, 8vw, 3rem);
            margin-bottom: 24px;
            letter-spacing: -1px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 36px;
          }
          
          .cta-container {
            margin-bottom: 40px;
            gap: 12px;
          }
          
          .cta-primary {
            padding: 14px 28px;
            font-size: 15px;
          }
          
          .cta-link {
            font-size: 15px;
          }
          
          .note-content {
            justify-content: center;
            gap: 8px;
          }
          
          .note-item {
            font-size: 13px;
          }
          
          .trust-indicators {
            gap: 32px;
            flex-wrap: wrap;
          }
          
          .indicator-number {
            font-size: 24px;
          }
          
          .indicator-text {
            font-size: 13px;
          }
          
          .app-showcase {
            width: 260px;
            height: 520px;
          }
          
          .phone-frame {
            width: 240px;
            height: 500px;
            border-radius: 32px;
            padding: 10px;
          }
          
          .phone-screen {
            border-radius: 24px;
          }
          
          .status-bar {
            padding: 12px 20px;
            font-size: 13px;
          }
          
          .app-header {
            padding: 24px 20px 20px;
          }
          
          .app-header h3 {
            font-size: 24px;
          }
          
          .app-header p {
            font-size: 15px;
          }
          
          .metric-cards {
            padding: 0 20px;
            gap: 12px;
            margin-bottom: 24px;
          }
          
          .metric-card {
            padding: 20px 12px;
            border-radius: 16px;
          }
          
          .metric-icon {
            font-size: 20px;
            margin-bottom: 8px;
          }
          
          .metric-value {
            font-size: 28px;
            margin-bottom: 6px;
          }
          
          .metric-label {
            font-size: 12px;
          }
          
          .schedule-preview {
            padding: 0 20px;
          }
          
          .schedule-item {
            padding: 16px;
            border-radius: 12px;
            gap: 12px;
          }
          
          .schedule-time {
            font-size: 13px;
            min-width: 40px;
          }
          
          .client-name {
            font-size: 14px;
            margin-bottom: 3px;
          }
          
          .treatment {
            font-size: 13px;
          }
          
          .orb-1 {
            width: 350px;
            height: 350px;
            top: -100px;
            right: -100px;
          }
          
          .orb-2 {
            width: 300px;
            height: 300px;
            bottom: -80px;
            left: -80px;
          }
        }
        
        /* Small mobile breakpoint */
        @media (max-width: 480px) {
          .hero {
            padding: 60px 0 40px;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .hero-content {
            gap: 32px;
          }
          
          .premium-badge {
            margin-bottom: 24px;
          }
          
          .badge-text {
            padding: 8px 20px;
            font-size: 13px;
          }
          
          .hero-title {
            font-size: clamp(1.8rem, 9vw, 2.5rem);
            margin-bottom: 20px;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 32px;
          }
          
          .cta-container {
            margin-bottom: 32px;
          }
          
          .cta-primary {
            padding: 12px 24px;
            font-size: 14px;
          }
          
          .note-content {
            flex-direction: column;
            gap: 6px;
          }
          
          .note-divider {
            display: none;
          }
          
          .trust-indicators {
            gap: 24px;
            justify-content: space-around;
          }
          
          .indicator-number {
            font-size: 22px;
          }
          
          .indicator-text {
            font-size: 12px;
          }
          
          .app-showcase {
            width: 220px;
            height: 440px;
          }
          
          .phone-frame {
            width: 200px;
            height: 420px;
            border-radius: 28px;
            padding: 8px;
          }
          
          .phone-screen {
            border-radius: 20px;
          }
          
          .status-bar {
            padding: 10px 16px;
            font-size: 12px;
          }
          
          .app-header {
            padding: 20px 16px 16px;
          }
          
          .app-header h3 {
            font-size: 20px;
          }
          
          .app-header p {
            font-size: 14px;
          }
          
          .metric-cards {
            padding: 0 16px;
            gap: 10px;
            margin-bottom: 20px;
          }
          
          .metric-card {
            padding: 16px 10px;
            border-radius: 14px;
          }
          
          .metric-icon {
            font-size: 18px;
            margin-bottom: 6px;
          }
          
          .metric-value {
            font-size: 24px;
            margin-bottom: 4px;
          }
          
          .metric-label {
            font-size: 11px;
          }
          
          .schedule-preview {
            padding: 0 16px;
          }
          
          .schedule-item {
            padding: 14px;
            border-radius: 10px;
            gap: 10px;
          }
          
          .schedule-time {
            font-size: 12px;
            min-width: 35px;
          }
          
          .client-name {
            font-size: 13px;
            margin-bottom: 2px;
          }
          
          .treatment {
            font-size: 12px;
          }
        }
        
        /* Extra small mobile breakpoint */
        @media (max-width: 360px) {
          .hero-title {
            font-size: clamp(1.6rem, 10vw, 2.2rem);
            line-height: 1.15;
          }
          
          .hero-subtitle {
            font-size: 0.95rem;
            line-height: 1.5;
          }
          
          .cta-primary {
            padding: 11px 20px;
            font-size: 13px;
          }
          
          .trust-indicators {
            gap: 20px;
          }
          
          .indicator-number {
            font-size: 20px;
          }
          
          .indicator-text {
            font-size: 11px;
          }
          
          .app-showcase {
            width: 200px;
            height: 400px;
          }
          
          .phone-frame {
            width: 180px;
            height: 380px;
            border-radius: 24px;
            padding: 6px;
          }
          
          .phone-screen {
            border-radius: 18px;
          }
          
          .status-bar {
            padding: 8px 14px;
            font-size: 11px;
          }
          
          .app-header {
            padding: 16px 14px 14px;
          }
          
          .app-header h3 {
            font-size: 18px;
          }
          
          .app-header p {
            font-size: 13px;
          }
          
          .metric-cards {
            padding: 0 14px;
            gap: 8px;
            margin-bottom: 16px;
          }
          
          .metric-card {
            padding: 14px 8px;
            border-radius: 12px;
          }
          
          .metric-icon {
            font-size: 16px;
            margin-bottom: 4px;
          }
          
          .metric-value {
            font-size: 20px;
            margin-bottom: 3px;
          }
          
          .metric-label {
            font-size: 10px;
          }
          
          .schedule-preview {
            padding: 0 14px;
          }
          
          .schedule-item {
            padding: 12px;
            border-radius: 8px;
            gap: 8px;
          }
          
          .schedule-time {
            font-size: 11px;
            min-width: 30px;
          }
          
          .client-name {
            font-size: 12px;
            margin-bottom: 1px;
          }
          
          .treatment {
            font-size: 11px;
          }
        }
        
        /* Landscape mobile orientation */
        @media (max-width: 768px) and (orientation: landscape) and (max-height: 500px) {
          .hero {
            padding: 40px 0 30px;
            min-height: auto;
          }
          
          .hero-content {
            gap: 24px;
          }
          
          .hero-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            margin-bottom: 16px;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 24px;
          }
          
          .cta-container {
            margin-bottom: 24px;
            gap: 8px;
          }
          
          .trust-indicators {
            gap: 24px;
          }
          
          .app-showcase {
            width: 200px;
            height: 400px;
          }
          
          .phone-frame {
            width: 180px;
            height: 380px;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .phone-frame {
            box-shadow: 
              0 30px 60px rgba(0, 0, 0, 0.25),
              0 15px 30px rgba(0, 0, 0, 0.15),
              inset 0 1px 2px rgba(255, 255, 255, 0.1);
          }
          
          .metric-card {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          }
          
          .schedule-item {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .orb-1,
          .orb-2,
          .floating-badge {
            animation: none !important;
          }
          
          .hero-visual {
            transform: none !important;
          }
        }
        
        /* Print styles */
        @media print {
          .hero {
            background: white !important;
            min-height: auto;
            padding: 40px 0;
          }
          
          .gradient-orbs,
          .floating-badge {
            display: none !important;
          }
          
          .phone-frame {
            box-shadow: none !important;
            border: 2px solid #ccc;
          }
          
          .metric-card,
          .schedule-item {
            box-shadow: none !important;
            border: 1px solid #ddd;
          }
          
          .cta-primary {
            background: #333 !important;
            -webkit-print-color-adjust: exact;
          }
        }
        
        /* Focus styles for accessibility */
        .cta-primary:focus,
        .cta-link:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .metric-card:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        /* Touch target improvements */
        @media (hover: none) and (pointer: coarse) {
          .cta-primary {
            min-height: 44px;
            min-width: 44px;
          }
          
          .cta-link {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }
          
          .metric-card {
            min-height: 44px;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection