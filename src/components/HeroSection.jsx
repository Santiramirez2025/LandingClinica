import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoadAttempted, setVideoLoadAttempted] = useState(false)
  const videoRef = useRef(null)
  
  // Mouse tracking optimizado
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [2, -2]), { 
    damping: 30, 
    stiffness: 100 
  })
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-2, 2]), { 
    damping: 30, 
    stiffness: 100 
  })
  
  // Throttled mouse movement
  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return
    
    const rect = document.querySelector(`.${styles.phoneWrapper}`)?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((e.clientX - centerX) * 0.3)
      mouseY.set((e.clientY - centerY) * 0.3)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    let throttleTimer = null
    const throttledMouseMove = (e) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          handleMouseMove(e)
          throttleTimer = null
        }, 16) // 60fps
      }
    }
    
    window.addEventListener('mousemove', throttledMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      if (throttleTimer) clearTimeout(throttleTimer)
    }
  }, [handleMouseMove])

  // Función mejorada para verificar si el video existe
  const checkVideoExists = useCallback(async (src) => {
    try {
      const response = await fetch(src, { method: 'HEAD' })
      return response.ok
    } catch {
      return false
    }
  }, [])

  const togglePlay = useCallback(() => {
    if (!videoRef.current || hasError) return
    
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error('Error playing video:', error)
          setIsPlaying(false)
        })
    }
  }, [isPlaying, hasError])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      setIsMuted(newMutedState)
      videoRef.current.muted = newMutedState
    }
  }, [isMuted])

  const scrollToPricing = useCallback(() => {
    document.querySelector('.pricing-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  // Efecto para intentar cargar el video
  useEffect(() => {
    if (!videoLoadAttempted) {
      setVideoLoadAttempted(true)
      
      // Verificar si el archivo de video existe
      checkVideoExists('/videos/presentacion.mov').then(exists => {
        if (!exists) {
          console.warn('Video presentacion.mov no encontrado en /public/videos/')
          checkVideoExists('/videos/presentacion.mp4').then(mp4Exists => {
            if (!mp4Exists) {
              console.error('No se encontró ningún archivo de video')
              setHasError(true)
            }
          })
        }
      })
    }
  }, [videoLoadAttempted, checkVideoExists])

  return (
    <section className={styles.hero} aria-label="Gestiona tu clínica estética de forma simple y rentable">
      {/* Orbs optimizados */}
      <div className={styles.orbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            ✨ Experiencia Premium
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Gestiona tu clínica estética<br/>
            <span className={styles.accent}>simple y rentable</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software profesional que simplifica citas, tratamientos y pagos. 
            Aumenta tus ingresos hasta 30% con herramientas diseñadas para tu éxito.
          </motion.p>
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.primaryActions}>
              <a 
                href="https://calendly.com/tu-demo" 
                className={`${styles.btn} ${styles.btnPrimary}`}
                aria-label="Agendar demo gratuita"
              >
                <span>Agendar Demo Gratis</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
              
              <button 
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={scrollToPricing}
                aria-label="Ver precios y planes"
              >
                Ver Precios
              </button>
            </div>
            
            <div className={styles.appStores}>
              <a 
                href="https://play.google.com/store/apps" 
                className={styles.storeBtn}
                aria-label="Descargar en Google Play"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <span>Disponible en</span>
                  <strong>Google Play</strong>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com" 
                className={styles.storeBtn}
                aria-label="Descargar en App Store"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div>
                  <span>Disponible en</span>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>
            
            <div className={styles.trustSignals}>
              <span>🔒 Datos seguros y privados</span>
              <span>✓ Configuración en 5 minutos</span>
              <span>📞 Soporte inmediato</span>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <strong>500+</strong>
              <span>Clínicas activas</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Rating promedio</span>
            </div>
            <div>
              <strong>+30%</strong>
              <span>Más ingresos</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.phoneWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
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
                    poster="/images/app-preview.jpg"
                    preload="metadata"
                    muted={isMuted}
                    loop
                    playsInline
                    webkit-playsinline="true"
                    onCanPlay={() => {
                      setIsLoaded(true)
                      console.log('Video can play')
                    }}
                    onLoadedData={() => {
                      console.log('Video loaded successfully')
                      // Auto-play solo en desktop
                      if (window.innerWidth >= 1024) {
                        setTimeout(() => {
                          videoRef.current?.play()
                            .then(() => {
                              console.log('Auto-play successful')
                              setIsPlaying(true)
                            })
                            .catch((error) => {
                              console.log('Auto-play failed:', error)
                            })
                        }, 500)
                      }
                    }}
                    onError={(e) => {
                      console.error('Video error:', e.target.error)
                      console.error('Error code:', e.target.error?.code)
                      console.error('Error message:', e.target.error?.message)
                      setHasError(true)
                    }}
                    onLoadStart={() => {
                      console.log('Video load started')
                    }}
                  >
                    <source src="/videos/presentacion.mp4" type="video/mp4" />
                    <source src="/videos/presentacion.mov" type="video/quicktime" />
                    <source src="/videos/presentacion.webm" type="video/webm" />
                    Su navegador no soporta el elemento de video.
                  </video>
                  
                  {!isLoaded && !hasError && (
                    <div className={styles.videoPlaceholder}>
                      <div className={styles.spinner} />
                      <span>Cargando demo...</span>
                    </div>
                  )}
                  
                  <motion.button
                    className={styles.playBtn}
                    onClick={togglePlay}
                    animate={{ opacity: isPlaying ? 0 : 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </motion.button>
                  
                  <button 
                    className={styles.muteBtn} 
                    onClick={toggleMute} 
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              ) : (
                <div className={styles.fallback}>
                  <div className={styles.statusBar}>
                    <span>9:41</span>
                    <div>
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  
                  <div className={styles.appContent}>
                    <div className={styles.greeting}>
                      <h2>¡Hola, Dra. García! ✨</h2>
                      <p>Tu clínica está funcionando perfectamente</p>
                    </div>
                    
                    <div className={styles.cards}>
                      <motion.div 
                        className={styles.card}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <span className={styles.cardIcon}>💉</span>
                        <strong>12</strong>
                        <span>Citas hoy</span>
                      </motion.div>
                      
                      <motion.div 
                        className={`${styles.card} ${styles.cardAccent}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <span className={styles.cardIcon}>💎</span>
                        <strong>€5.8k</strong>
                        <span>Ingresos hoy</span>
                      </motion.div>
                    </div>
                    
                    <div className={styles.nextAppointment}>
                      <div className={styles.appointmentTime}>
                        <span className={styles.time}>10:30</span>
                        <span className={styles.status}>Próxima</span>
                      </div>
                      <div className={styles.appointmentDetails}>
                        <strong>Ana Rodríguez</strong>
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