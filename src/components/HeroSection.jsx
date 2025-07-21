import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import styles from './HeroSection.module.css'

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
      const rect = document.querySelector(`.${styles.phoneWrapper}`)?.getBoundingClientRect()
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
    <section className={styles.hero} aria-label="Sección principal">
      <div className={styles.orbs}>
        <motion.div 
          className={`${styles.orb} ${styles.orb1}`}
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={`${styles.orb} ${styles.orb2}`}
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Experiencia Premium
        </motion.div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tu clínica estética,<br/>
          <span className={styles.accent}>más simple, más rentable.</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Gestioná tu clínica estética desde una app simple, profesional y fácil de usar.
        </motion.p>
        
        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://play.google.com/store/apps" className={`${styles.btn} ${styles.btnDark}`} aria-label="Descargar en Google Play">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div>
              <span>Descárgalo en</span>
              <strong>Google Play</strong>
            </div>
          </a>
          
          <a href="https://apps.apple.com" className={`${styles.btn} ${styles.btnLight}`} aria-label="Descargar en App Store">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <div>
              <span>Descárgalo en</span>
              <strong>App Store</strong>
            </div>
          </a>
          
          <button className={styles.linkBtn} onClick={() => document.querySelector('.pricing-section')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver precios y planes
          </button>
          
          <div className={styles.features}>
            <span>✓ Configuración gratuita</span>
            <span>🔒 Datos seguros</span>
            <span>📞 Soporte 24/7</span>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.stats}
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
          className={styles.phoneWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ rotateX, rotateY }}
        >
          <div className={styles.phone}>
            <div className={styles.screen}>
              {!hasError ? (
                <div className={styles.videoContainer}>
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
                    className={styles.playBtn}
                    onClick={togglePlay}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? <Pause /> : <Play />}
                  </motion.button>
                  
                  <button className={styles.muteBtn} onClick={toggleMute} aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              ) : (
                <div className={styles.fallback}>
                  <div className={styles.statusBar}>
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  
                  <div className={styles.appContent}>
                    <h2>Hola, Dra. García ✨</h2>
                    <p>Tu clínica está funcionando perfectamente</p>
                    
                    <div className={styles.cards}>
                      <motion.div className={styles.card} whileHover={{ scale: 1.02 }}>
                        <span>💉</span>
                        <strong>8</strong>
                        <span>Tratamientos hoy</span>
                      </motion.div>
                      <motion.div className={`${styles.card} ${styles.cardAccent}`} whileHover={{ scale: 1.02 }}>
                        <span>💎</span>
                        <strong>€4.2k</strong>
                        <span>Ingresos del día</span>
                      </motion.div>
                    </div>
                    
                    <div className={styles.appointment}>
                      <span className={styles.time}>10:00</span>
                      <div>
                        <strong>Ana García</strong>
                        <span>Botox + Ácido Hialurónico</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.notch} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection