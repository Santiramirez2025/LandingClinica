import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef(null)
  
  // Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { damping: 25, stiffness: 150 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-3, 3]), { damping: 25, stiffness: 150 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return
      const rect = document.querySelector('.phone-wrapper')?.getBoundingClientRect()
      if (rect) {
        mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.5)
        mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.5)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const togglePlay = () => {
    if (!videoRef.current || hasError) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => setIsPlaying(false))
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) videoRef.current.muted = !isMuted
  }

  return (
    <section className="hero" aria-label="Sección principal">
      <div className="orbs">
        <motion.div 
          className="orb orb-1"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="orb orb-2"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Experiencia Premium
        </motion.div>
        
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tu clínica estética,<br/>
          <span className="accent">más simple, más rentable.</span>
        </motion.h1>
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Gestioná tu clínica estética desde una app simple, profesional y fácil de usar.
        </motion.p>
        
        <motion.div 
          className="cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://play.google.com/store/apps" className="btn btn-dark" aria-label="Descargar en Google Play">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div>
              <span>Descárgalo en</span>
              <strong>Google Play</strong>
            </div>
          </a>
          
          <a href="https://apps.apple.com" className="btn btn-light" aria-label="Descargar en App Store">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <div>
              <span>Descárgalo en</span>
              <strong>App Store</strong>
            </div>
          </a>
          
          <button className="link-btn" onClick={() => document.querySelector('.pricing-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver precios y planes
          </button>
          
          <div className="features">
            <span>✓ Configuración gratuita</span>
            <span>🔒 Datos seguros</span>
            <span>📞 Soporte 24/7</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <strong>200+</strong>
            <span>Clínicas premium</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>Rating usuarios</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Soporte dedicado</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="phone-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ rotateX, rotateY }}
        >
          <div className="phone">
            <div className="screen">
              {!hasError ? (
                <div className="video-container">
                  <video
                    ref={videoRef}
                    src="/videos/presentacion.mov"
                    muted={isMuted}
                    loop
                    playsInline
                    onLoadedData={() => videoRef.current?.play().then(() => setIsPlaying(true))}
                    onError={() => setHasError(true)}
                  />
                  
                  <motion.button
                    className="play-btn"
                    onClick={togglePlay}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? <Pause /> : <Play />}
                  </motion.button>
                  
                  <button className="mute-btn" onClick={toggleMute} aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              ) : (
                <div className="fallback">
                  <div className="status-bar">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  
                  <div className="app-content">
                    <h2>Hola, Dra. García ✨</h2>
                    <p>Tu clínica está funcionando perfectamente</p>
                    
                    <div className="cards">
                      <motion.div className="card" whileHover={{ scale: 1.02 }}>
                        <span>💉</span>
                        <strong>8</strong>
                        <span>Tratamientos hoy</span>
                      </motion.div>
                      <motion.div className="card accent" whileHover={{ scale: 1.02 }}>
                        <span>💎</span>
                        <strong>€4.2k</strong>
                        <span>Ingresos del día</span>
                      </motion.div>
                    </div>
                    
                    <div className="appointment">
                      <span className="time">10:00</span>
                      <div>
                        <strong>Ana García</strong>
                        <span>Botox + Ácido Hialurónico</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="notch" />
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem);
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
        }
        
        .orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
        }
        
        .orb-1 {
          width: clamp(250px, 40vw, 500px);
          height: clamp(250px, 40vw, 500px);
          background: radial-gradient(circle, rgba(255, 218, 225, 0.7) 0%, transparent 70%);
          top: -10%;
          right: -10%;
        }
        
        .orb-2 {
          width: clamp(200px, 35vw, 400px);
          height: clamp(200px, 35vw, 400px);
          background: radial-gradient(circle, rgba(255, 237, 213, 0.7) 0%, transparent 70%);
          bottom: -10%;
          left: -10%;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(1.5rem, 3vw, 2rem);
          position: relative;
          z-index: 1;
        }
        
        .badge {
          background: linear-gradient(135deg, #FFE5E5 0%, #FFF0E5 100%);
          border: 1px solid rgba(255, 200, 200, 0.4);
          padding: 0.625rem 1.5rem;
          border-radius: 50px;
          font-size: clamp(0.875rem, 2vw, 1rem);
          font-weight: 600;
          color: #B86B6B;
          backdrop-filter: blur(10px);
        }
        
        .title {
          font-size: clamp(2rem, 8vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0;
        }
        
        .accent {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.6;
          color: #4a4a4a;
          max-width: 520px;
          margin: 0;
        }
        
        .cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 400px;
        }
        
        .btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          width: 100%;
          justify-content: center;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .btn:focus-visible {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .btn-dark {
          background: #1a1a1a;
          color: white;
        }
        
        .btn-light {
          background: white;
          color: #1a1a1a;
          border-color: #e0e0e0;
        }
        
        .btn svg {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
        
        .btn div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.2;
        }
        
        .btn span {
          font-size: 0.75rem;
          opacity: 0.8;
        }
        
        .btn strong {
          font-size: 1rem;
        }
        
        .link-btn {
          background: none;
          border: none;
          color: #1e40af;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.5rem;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }
        
        .link-btn:hover {
          color: #1e3a8a;
          border-bottom-color: #1e3a8a;
        }
        
        .link-btn:focus-visible {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }
        
        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
          margin: 1rem 0;
        }
        
        .stats div {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .stats strong {
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: #2d2d2d;
        }
        
        .stats span {
          font-size: 0.875rem;
          color: #6a6a6a;
        }
        
        .phone-wrapper {
          margin-top: 2rem;
          perspective: 1200px;
        }
        
        .phone {
          width: clamp(200px, 60vw, 320px);
          height: clamp(400px, 60vh, 650px);
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
          border-radius: clamp(28px, 5vw, 48px);
          padding: clamp(4px, 1vw, 8px);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.2),
            0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: clamp(24px, 4.5vw, 40px);
          overflow: hidden;
          position: relative;
        }
        
        .video-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(45px, 10vw, 60px);
          height: clamp(45px, 10vw, 60px);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          color: #E8B4B8;
          transition: all 0.3s ease;
        }
        
        .mute-btn {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .video-container:hover .mute-btn,
        .mute-btn:focus {
          opacity: 0.9;
        }
        
        .fallback {
          width: 100%;
          height: 100%;
          background: #FDFBF7;
          display: flex;
          flex-direction: column;
        }
        
        .status-bar {
          display: flex;
          justify-content: space-between;
          padding: 0.875rem 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .app-content {
          flex: 1;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .app-content h2 {
          font-size: clamp(1.5rem, 4vw, 1.75rem);
          margin: 0;
        }
        
        .app-content p {
          font-size: 1rem;
          color: #6a6a6a;
          margin: 0;
        }
        
        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .card {
          background: white;
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 1rem;
          padding: 1.5rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .card.accent {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.15), rgba(255, 237, 213, 0.15));
        }
        
        .card span:first-child {
          font-size: 1.5rem;
        }
        
        .card strong {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          line-height: 1;
        }
        
        .card span:last-child {
          font-size: 0.75rem;
          color: #6a6a6a;
        }
        
        .appointment {
          display: flex;
          gap: 1rem;
          background: white;
          padding: 1.25rem;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          margin-top: auto;
        }
        
        .time {
          font-weight: 700;
          color: #E8B4B8;
          min-width: 3rem;
        }
        
        .appointment div {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: left;
        }
        
        .appointment strong {
          font-size: 0.875rem;
        }
        
        .appointment span {
          font-size: 0.8125rem;
          color: #6a6a6a;
        }
        
        .notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: clamp(70px, 20vw, 128px);
          height: clamp(14px, 3vw, 24px);
          background: #1a1a1a;
          border-radius: 0 0 1rem 1rem;
        }
        
        @media (min-width: 768px) {
          .container {
            gap: 2.5rem;
          }
          
          .cta-group {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 600px;
          }
          
          .btn {
            width: auto;
            min-width: 200px;
          }
          
          .features {
            width: 100%;
          }
          
          .stats {
            gap: 3rem;
          }
        }
        
        @media (min-width: 1024px) {
          .hero {
            padding: 2rem;
          }
          
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            text-align: left;
            align-items: center;
            grid-template-areas:
              "badge phone"
              "title phone"
              "subtitle phone"
              "cta phone"
              "stats phone";
          }
          
          .badge {
            grid-area: badge;
            justify-self: start;
          }
          
          .title {
            grid-area: title;
          }
          
          .subtitle {
            grid-area: subtitle;
          }
          
          .cta-group {
            grid-area: cta;
            align-items: flex-start;
            justify-content: flex-start;
          }
          
          .stats {
            grid-area: stats;
            justify-self: start;
          }
          
          .phone-wrapper {
            grid-area: phone;
            margin-top: 0;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .orb-1, .orb-2 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection