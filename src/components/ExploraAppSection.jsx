import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Play, Smartphone, Pause, Volume2, VolumeX, Zap, Shield, Clock } from 'lucide-react'
import './ExploraAppSection.css'

const ExploraAppSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState({})
  const [videosPlaying, setVideosPlaying] = useState({})
  const [videoErrors, setVideoErrors] = useState({})
  const [isMuted, setIsMuted] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState({})
  const [isInView, setIsInView] = useState(false)
  
  const videoRefs = useRef({})
  const containerRef = useRef(null)
  const autoplayTimerRef = useRef(null)
  const observerRef = useRef(null)

  // 🎯 Mensaje claro y jerarquía visual mejorada
  const slides = [
    {
      id: 1,
      title: "Dashboard Intuitivo",
      benefit: "Visualiza métricas clave de tu clínica en tiempo real",
      shortDesc: "Control total en una pantalla",
      videoSrc: "/videos/dashboard.mov",
      placeholder: "📊",
      color: "#E8B4B8",
      badge: "Analíticas"
    },
    {
      id: 2,
      title: "Pacientes VIP",
      benefit: "Gestión premium de expedientes con seguridad hospitalaria",
      shortDesc: "Privacidad y excelencia",
      videoSrc: "/videos/vipscreen.mov",
      placeholder: "⭐",
      color: "#B4C7E8",
      badge: "Seguridad"
    },
    {
      id: 3,
      title: "Agenda Rápida",
      benefit: "Reserva tratamientos de botox y rellenos en segundos",
      shortDesc: "Citas en un click",
      videoSrc: "/videos/agendarrapido.mov",
      placeholder: "⚡",
      color: "#D4AF37",
      badge: "Velocidad"
    },
    {
      id: 4,
      title: "Gestión de Citas",
      benefit: "Organiza consultas y seguimientos sin conflictos",
      shortDesc: "Todo bajo control",
      videoSrc: "/videos/Appointment.mov",
      placeholder: "📅",
      color: "#9CC8B4",
      badge: "Organización"
    },
    {
      id: 5,
      title: "Perfil Profesional",
      benefit: "Administra tu equipo con accesos personalizados",
      shortDesc: "Equipo sincronizado",
      videoSrc: "/videos/profile.mov",
      placeholder: "👨‍⚕️",
      color: "#E8D4B4",
      badge: "Colaboración"
    }
  ]

  // 🚀 Intersection Observer para lazy loading y animaciones optimizadas
  useEffect(() => {
    if (typeof window === 'undefined') return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // 📱 Detección de dispositivo móvil optimizada
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    const debouncedResize = debounce(checkMobile, 100)
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  // 🎯 Función debounce para optimizar performance
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // ⚡ Autoplay optimizado - solo se ejecuta cuando está en vista
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
    }
    
    if (isAutoplay && isInView) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 6000) // Reducido de 8s a 6s para mejor engagement
    }
  }, [isAutoplay, isInView, slides.length])

  useEffect(() => {
    resetAutoplayTimer()
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [resetAutoplayTimer])

  // 🚀 Preload inteligente - solo videos adyacentes
  useEffect(() => {
    if (!isInView) return

    const preloadVideo = (index) => {
      const video = videoRefs.current[index]
      if (video && !videosLoaded[index] && !videoErrors[index]) {
        video.load()
      }
    }

    const nextIndex = (currentSlide + 1) % slides.length
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length
    
    preloadVideo(nextIndex)
    preloadVideo(prevIndex)
  }, [currentSlide, slides.length, videosLoaded, videoErrors, isInView])

  // 🎬 Gestión de video optimizada
  useEffect(() => {
    if (!isInView) return

    const handleVideoPlayback = async () => {
      // Pausa todos los videos excepto el actual
      Object.keys(videoRefs.current).forEach(key => {
        const video = videoRefs.current[key]
        if (video && parseInt(key) !== currentSlide) {
          video.pause()
          setVideosPlaying(prev => ({ ...prev, [key]: false }))
        }
      })

      // Reproduce el video actual
      const currentVideo = videoRefs.current[currentSlide]
      if (currentVideo && videosLoaded[currentSlide] && !videoErrors[currentSlide]) {
        try {
          currentVideo.currentTime = 0
          await currentVideo.play()
          setVideosPlaying(prev => ({ ...prev, [currentSlide]: true }))
        } catch (error) {
          console.error('Error playing video:', error)
        }
      }
    }

    handleVideoPlayback()
  }, [currentSlide, videosLoaded, videoErrors, isInView])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
  }, [slides.length])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoplay(false)
  }, [])

  const handleVideoLoad = useCallback((slideIndex) => {
    setVideosLoaded(prev => ({ ...prev, [slideIndex]: true }))
    setLoadingProgress(prev => ({ ...prev, [slideIndex]: 100 }))
  }, [])

  const handleVideoError = useCallback((slideIndex) => {
    console.error(`Error loading video for slide ${slideIndex}`)
    setVideoErrors(prev => ({ ...prev, [slideIndex]: true }))
    setLoadingProgress(prev => ({ ...prev, [slideIndex]: 0 }))
  }, [])

  const handleVideoProgress = useCallback((slideIndex, e) => {
    const video = e.target
    if (video.buffered.length > 0) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1)
      const duration = video.duration
      const progress = (bufferedEnd / duration) * 100
      setLoadingProgress(prev => ({ ...prev, [slideIndex]: progress }))
    }
  }, [])

  const toggleVideoPlayback = useCallback((slideIndex, e) => {
    e.stopPropagation()
    const video = videoRefs.current[slideIndex]
    if (!video || videoErrors[slideIndex]) return

    if (videosPlaying[slideIndex]) {
      video.pause()
      setVideosPlaying(prev => ({ ...prev, [slideIndex]: false }))
      setIsAutoplay(false)
    } else {
      video.play().then(() => {
        setVideosPlaying(prev => ({ ...prev, [slideIndex]: true }))
        setIsAutoplay(false)
      }).catch(console.error)
    }
  }, [videoErrors, videosPlaying])

  const toggleMute = useCallback((e) => {
    e.stopPropagation()
    setIsMuted(prev => !prev)
    
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = !isMuted
      }
    })
  }, [isMuted])

  // 📱 Touch handlers optimizados
  const handleTouchStart = useCallback((e) => {
    if (!isMobile) return
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
    setIsAutoplay(false)
  }, [isMobile])

  const handleTouchMove = useCallback((e) => {
    if (!isMobile || !isDragging) return
    setCurrentX(e.touches[0].clientX)
  }, [isMobile, isDragging])

  const handleTouchEnd = useCallback(() => {
    if (!isMobile || !isDragging) return
    const diff = startX - currentX
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
  }, [isMobile, isDragging, startX, currentX, nextSlide, prevSlide])

  // ⌨️ Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === ' ') {
        e.preventDefault()
        toggleVideoPlayback(currentSlide, e)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, nextSlide, prevSlide, toggleVideoPlayback])

  // 🎯 CTA optimizado con scroll suave
  const scrollToDemo = () => {
    const demoElement = document.querySelector('#demo-section')
    if (demoElement) {
      demoElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="app-showcase-section" ref={containerRef}>
      <div className="container">
        {/* 🎯 Hero mejorado con mensaje claro en 5 segundos */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="header-badge">
            <motion.span 
              className="badge-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ⚡
            </motion.span>
            <span className="badge-text">Gestión Inteligente</span>
          </div>
          
          <h2 className="section-title">
            La App que
            <motion.span 
              className="title-highlight"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {" "}Revoluciona{" "}
            </motion.span>
            tu Clínica Estética
          </h2>
          
          <p className="section-subtitle">
            Automatiza citas, gestiona pacientes VIP y controla métricas importantes.
            <strong> Todo desde una sola app premium.</strong>
          </p>

          {/* 🚀 Beneficios clave visibles */}
          <motion.div 
            className="quick-benefits"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="benefit-item">
              <Zap className="benefit-icon" size={16} />
              <span>Setup en 24h</span>
            </div>
            <div className="benefit-item">
              <Shield className="benefit-icon" size={16} />
              <span>Datos seguros</span>
            </div>
            <div className="benefit-item">
              <Clock className="benefit-icon" size={16} />
              <span>Ahorra 3h/día</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="carousel-container">
          <motion.div 
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {!isMobile && (
              <motion.button 
                className="nav-button nav-prev"
                onClick={prevSlide}
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Slide anterior"
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}

            <div className="carousel-track">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  className="slide-wrapper"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                >
                  <div className="slide">
                    {/* 📱 Badge del slide */}
                    <motion.div 
                      className="slide-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {slides[currentSlide].badge}
                    </motion.div>

                    <div className="video-container">
                      <div className="phone-mockup">
                        <div className="phone-frame">
                          <div className="phone-screen">
                            {!videoErrors[currentSlide] ? (
                              <div className="video-wrapper">
                                <video
                                  ref={el => videoRefs.current[currentSlide] = el}
                                  className="phone-video"
                                  src={slides[currentSlide].videoSrc}
                                  muted={isMuted}
                                  loop
                                  playsInline
                                  preload="metadata"
                                  onLoadedData={() => handleVideoLoad(currentSlide)}
                                  onError={() => handleVideoError(currentSlide)}
                                  onProgress={(e) => handleVideoProgress(currentSlide, e)}
                                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23E8B4B8'/%3E%3C/svg%3E"
                                />
                                
                                <div className="video-controls">
                                  <motion.button
                                    className="control-button play-button"
                                    onClick={(e) => toggleVideoPlayback(currentSlide, e)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                      opacity: videosPlaying[currentSlide] ? 0 : 1,
                                      scale: videosPlaying[currentSlide] ? 0.8 : 1
                                    }}
                                    transition={{ duration: 0.3 }}
                                    aria-label={videosPlaying[currentSlide] ? "Pausar video" : "Reproducir video"}
                                  >
                                    {videosPlaying[currentSlide] ? <Pause size={20} /> : <Play size={20} />}
                                  </motion.button>

                                  <motion.button
                                    className="control-button mute-button"
                                    onClick={toggleMute}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                                  >
                                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                  </motion.button>
                                </div>

                                <AnimatePresence>
                                  {!videosLoaded[currentSlide] && (
                                    <motion.div 
                                      className="video-loading"
                                      initial={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="loading-content">
                                        <motion.div 
                                          className="loading-spinner"
                                          animate={{ rotate: 360 }}
                                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        <span className="loading-text">Cargando demo...</span>
                                        <div className="loading-bar">
                                          <motion.div 
                                            className="loading-progress"
                                            animate={{ width: `${loadingProgress[currentSlide] || 0}%` }}
                                            transition={{ duration: 0.3 }}
                                          />
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <motion.div 
                                className="video-placeholder"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ background: `linear-gradient(135deg, ${slides[currentSlide].color} 0%, ${slides[currentSlide].color}99 100%)` }}
                              >
                                <div className="placeholder-content">
                                  <motion.span 
                                    className="placeholder-icon"
                                    animate={{ 
                                      rotate: [0, 10, -10, 0],
                                      scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      repeatDelay: 1
                                    }}
                                  >
                                    {slides[currentSlide].placeholder}
                                  </motion.span>
                                  <Smartphone className="smartphone-icon" size={32} />
                                  <span className="placeholder-text">{slides[currentSlide].title}</span>
                                  <span className="placeholder-subtitle">{slides[currentSlide].shortDesc}</span>
                                </div>
                              </motion.div>
                            )}
                            
                            <div className="phone-notch"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="slide-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="slide-title">{slides[currentSlide].title}</h3>
                      <p className="slide-benefit">{slides[currentSlide].benefit}</p>
                      <span className="slide-short-desc">{slides[currentSlide].shortDesc}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {!isMobile && (
              <motion.button 
                className="nav-button nav-next"
                onClick={nextSlide}
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Siguiente slide"
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </motion.div>

          <motion.div 
            className="carousel-indicators"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="dots-container">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              className="autoplay-toggle"
              onClick={() => setIsAutoplay(!isAutoplay)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={isAutoplay ? "Pausar reproducción automática" : "Activar reproducción automática"}
            >
              {isAutoplay ? <Pause size={14} /> : <Play size={14} />}
              <span>{isAutoplay ? 'Pausar' : 'Auto'}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* 🎯 CTA mejorado con jerarquía visual clara */}
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-primary"
            onClick={scrollToDemo}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 16px 48px rgba(232, 180, 184, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.span 
              className="button-text"
              initial={{ x: 0 }}
              whileHover={{ x: -2 }}
            >
              Modernizar mi clínica ahora
            </motion.span>
            <motion.span 
              className="button-icon"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </motion.button>
          
          <motion.p 
            className="cta-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <strong>Demo gratuita</strong> • Sin compromiso • <strong>Setup en 24hs</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ExploraAppSection