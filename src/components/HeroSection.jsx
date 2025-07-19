import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Download } from 'lucide-react'

const DownloadButtons = () => {
  return (
    <div className="download-buttons">
      <motion.a
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn android"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="store-text">
          <span className="store-label">Descárgalo en</span>
          <span className="store-name">Google Play</span>
        </div>
      </motion.a>

      <motion.a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn ios"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>
        <div className="store-text">
          <span className="store-label">Descárgalo en</span>
          <span className="store-name">App Store</span>
        </div>
      </motion.a>
    </div>
  )
}

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)
  
  // Spring animations for smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), springConfig)
  
  // Video configuration - usando el video local
  const videoSrc = "/videos/presentacion.mov"
  const videoPoster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23E8B4B8'/%3E%3C/svg%3E"
  
  
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

  // Auto-play video when loaded
  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true)
      }).catch(() => {
        setIsVideoPlaying(false)
      })
    }
  }, [isVideoLoaded])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsVideoLoaded(false)
  }

  const toggleVideoPlayback = (e) => {
    e.stopPropagation()
    if (!videoRef.current || videoError) return

    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true)
      }).catch(console.error)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const scrollToPricing = () => {
    const pricingElement = document.querySelector('.pricing-section')
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
              <DownloadButtons />
              
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
                    {!videoError ? (
                      <div className="video-wrapper">
                        <video
                          ref={videoRef}
                          className="phone-video"
                          src={videoSrc}
                          muted={isMuted}
                          loop
                          playsInline
                          preload="metadata"
                          onLoadedData={handleVideoLoad}
                          onError={handleVideoError}
                          poster={videoPoster}
                        />
                        
                        <div className="video-controls">
                          <motion.button
                            className="control-button play-button"
                            onClick={toggleVideoPlayback}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              opacity: isVideoPlaying ? 0 : 1,
                              scale: isVideoPlaying ? 0.8 : 1
                            }}
                            transition={{ duration: 0.3 }}
                            aria-label={isVideoPlaying ? "Pausar video" : "Reproducir video"}
                          >
                            {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
                          </motion.button>

                          <motion.button
                            className="control-button mute-button"
                            onClick={toggleMute}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                          >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                          </motion.button>
                        </div>

                        {!isVideoLoaded && (
                          <motion.div 
                            className="video-loading"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="loading-spinner"></div>
                            <span className="loading-text">Cargando demo...</span>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <motion.div 
                        className="video-fallback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="status-bar">
                          <span className="time">9:41</span>
                          <div className="status-icons">
                            <span>📶</span>
                            <span>🔋</span>
                          </div>
                        </div>
                        
                        <div className="app-header">
                          <h3>Hola, Dra. García ✨</h3>
                          <p>Tu clínica está funcionando perfectamente</p>
                        </div>
                        
                        <div className="metric-cards">
                          <motion.div 
                            className="metric-card"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <span className="metric-icon">💉</span>
                            <span className="metric-value">8</span>
                            <span className="metric-label">Tratamientos<br/>hoy</span>
                          </motion.div>
                          
                          <motion.div 
                            className="metric-card accent"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <span className="metric-icon">💎</span>
                            <span className="metric-value">€4.2k</span>
                            <span className="metric-label">Ingresos<br/>del día</span>
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
                              <p className="treatment">Botox + Ácido Hialurónico</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="phone-notch"></div>
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
        
        .download-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .download-btn.android {
          background: #1a1a1a;
          color: white;
          border-color: #1a1a1a;
        }
        
        .download-btn.android:hover {
          background: #2d2d2d;
          border-color: #2d2d2d;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        
        .download-btn.ios {
          background: white;
          color: #1a1a1a;
          border-color: #e0e0e0;
        }
        
        .download-btn.ios:hover {
          background: #f8f8f8;
          border-color: #d0d0d0;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .store-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        
        .store-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }
        
        .store-label {
          font-size: 11px;
          opacity: 0.8;
          font-weight: 500;
        }
        
        .store-name {
          font-size: 16px;
          font-weight: 700;
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
          height: 650px;
        }
        
        .phone-mockup {
          position: relative;
          z-index: 10;
        }
        
        .phone-frame {
          width: 320px;
          height: 650px;
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: 48px;
          padding: 8px;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.2),
            0 15px 30px rgba(0, 0, 0, 0.1),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .video-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 40px;
        }
        
        .phone-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: relative;
        }
        
        .video-controls {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 10;
        }
        
        .control-button {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E8B4B8;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          pointer-events: auto;
          transition: all 0.3s ease;
        }
        
        .play-button {
          width: 60px;
          height: 60px;
        }
        
        .mute-button {
          position: absolute;
          bottom: 30px;
          right: 20px;
          width: 36px;
          height: 36px;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          z-index: 15;
        }
        
        .video-wrapper:hover .mute-button,
        .mute-button:focus {
          opacity: 0.9;
        }
        
        .mute-button:hover {
          opacity: 1 !important;
          transform: scale(1.05);
        }
        
        .control-button:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .video-loading {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(232, 180, 184, 0.95);
          backdrop-filter: blur(10px);
          gap: 16px;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-text {
          color: white;
          font-size: 14px;
          font-weight: 500;
        }
        
        .video-fallback {
          width: 100%;
          height: 100%;
          background: #FDFBF7;
          overflow: hidden;
        }
        
        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 128px;
          height: 24px;
          background: #1a1a1a;
          border-radius: 0 0 16px 16px;
          z-index: 10;
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
          
          .download-buttons {
            justify-content: center;
          }
          
          .trust-indicators {
            justify-content: center;
          }
          
          .app-showcase {
            width: 280px;
            height: 560px;
          }
          
          .phone-frame {
            width: 280px;
            height: 560px;
            border-radius: 40px;
            padding: 6px;
          }
          
          .phone-screen {
            border-radius: 34px;
          }
          
          .phone-notch {
            width: 110px;
            height: 20px;
            border-radius: 0 0 14px 14px;
          }
          
          .play-button {
            width: 50px;
            height: 50px;
          }
          
          .mute-button {
            width: 36px;
            height: 36px;
            bottom: 30px;
            right: 16px;
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
          
          .download-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .download-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
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
            width: 240px;
            height: 480px;
          }
          
          .phone-frame {
            width: 240px;
            height: 480px;
            border-radius: 32px;
            padding: 5px;
          }
          
          .phone-screen {
            border-radius: 27px;
          }
          
          .phone-notch {
            width: 90px;
            height: 16px;
            border-radius: 0 0 12px 12px;
          }
          
          .play-button {
            width: 45px;
            height: 45px;
          }
          
          .mute-button {
            width: 32px;
            height: 32px;
            bottom: 12px;
            right: 12px;
          }
          
          .loading-spinner {
            width: 32px;
            height: 32px;
          }
          
          .loading-text {
            font-size: 13px;
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
          
          .download-btn {
            padding: 12px 20px;
          }
          
          .store-label {
            font-size: 10px;
          }
          
          .store-name {
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
            width: 200px;
            height: 400px;
          }
          
          .phone-frame {
            width: 200px;
            height: 400px;
            border-radius: 28px;
            padding: 4px;
          }
          
          .phone-screen {
            border-radius: 24px;
          }
          
          .phone-notch {
            width: 70px;
            height: 14px;
            border-radius: 0 0 10px 10px;
          }
          
          .play-button {
            width: 40px;
            height: 40px;
          }
          
          .mute-button {
            width: 28px;
            height: 28px;
            bottom: 10px;
            right: 10px;
          }
          
          .control-button svg {
            width: 16px;
            height: 16px;
          }
          
          .loading-spinner {
            width: 28px;
            height: 28px;
          }
          
          .loading-text {
            font-size: 12px;
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
          
          .orb-1 {
            width: 250px;
            height: 250px;
            top: -50px;
            right: -50px;
          }
          
          .orb-2 {
            width: 200px;
            height: 200px;
            bottom: -40px;
            left: -40px;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (hover: none) and (pointer: coarse) {
          .download-btn {
            min-height: 48px;
          }
          
          .cta-link {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }
          
          .play-button {
            min-width: 55px;
            min-height: 55px;
          }
          
          .mute-button {
            min-width: 44px;
            min-height: 44px;
          }
          
          .metric-card {
            min-height: 44px;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .loading-spinner {
            animation: none !important;
            border: 3px solid white;
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
        
        /* Focus styles for accessibility */
        .download-btn:focus,
        .cta-link:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .metric-card:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .phone-frame {
            border: 2px solid #000;
          }
          
          .play-button,
          .mute-button {
            border: 2px solid #000;
          }
          
          .metric-card {
            border: 2px solid #000;
          }
          
          .download-btn {
            border-width: 2px;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .hero {
            background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%);
          }
          
          .hero-title {
            color: #f0f0f0;
          }
          
          .hero-subtitle {
            color: #b0b0b0;
          }
          
          .note-item {
            color: #909090;
          }
          
          .indicator-number {
            color: #f0f0f0;
          }
          
          .indicator-text {
            color: #b0b0b0;
          }
          
          .video-fallback {
            background: #1a1a1a;
          }
          
          .app-header h3 {
            color: #f0f0f0;
          }
          
          .metric-value {
            color: #f0f0f0;
          }
          
          .client-name {
            color: #f0f0f0;
          }
          
          .download-btn.ios {
            background: #2a2a2a;
            color: #f0f0f0;
            border-color: #3a3a3a;
          }
          
          .download-btn.ios:hover {
            background: #3a3a3a;
            border-color: #4a4a4a;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection