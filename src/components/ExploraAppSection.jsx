import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Play, Smartphone, Pause, Volume2, VolumeX } from 'lucide-react'

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
  
  const videoRefs = useRef({})
  const containerRef = useRef(null)
  const autoplayTimerRef = useRef(null)

  const slides = [
    {
      id: 1,
      title: "Dashboard Intuitivo",
      benefit: "Controla todas las métricas de tu clínica estética desde un solo lugar",
      videoSrc: "/videos/dashboard.mov",
      placeholder: "📊",
      color: "#E8B4B8"
    },
    {
      id: 2,
      title: "Perfiles de Pacientes VIP",
      benefit: "Gestiona tratamientos estéticos y expedientes médicos con total privacidad",
      videoSrc: "/videos/vipscreen.mov",
      placeholder: "⭐",
      color: "#B4C7E8"
    },
    {
      id: 3,
      title: "Agenda Rápida",
      benefit: "Reserva citas de botox, rellenos y tratamientos en segundos",
      videoSrc: "/videos/agendarrapido.mov",
      placeholder: "⚡",
      color: "#D4AF37"
    },
    {
      id: 4,
      title: "Gestión de Citas",
      benefit: "Organiza consultas, tratamientos y seguimientos sin conflictos",
      videoSrc: "/videos/Appointment.mov",
      placeholder: "📅",
      color: "#9CC8B4"
    },
    {
      id: 5,
      title: "Perfil Profesional",
      benefit: "Administra tu equipo médico y especialistas con accesos personalizados",
      videoSrc: "/videos/profile.mov",
      placeholder: "👨‍⚕️",
      color: "#E8D4B4"
    }
  ]

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset autoplay timer
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
    }
    
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000)
    }
  }, [isAutoplay, slides.length])

  // Autoplay carousel
  useEffect(() => {
    resetAutoplayTimer()
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [resetAutoplayTimer])

  // Preload adjacent videos
  useEffect(() => {
    const preloadVideo = (index) => {
      const video = videoRefs.current[index]
      if (video && !videosLoaded[index] && !videoErrors[index]) {
        video.load()
      }
    }

    // Preload next and previous videos
    const nextIndex = (currentSlide + 1) % slides.length
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length
    
    preloadVideo(nextIndex)
    preloadVideo(prevIndex)
  }, [currentSlide, slides.length, videosLoaded, videoErrors])

  // Handle video playback
  useEffect(() => {
    const handleVideoPlayback = async () => {
      // Pause all videos
      Object.keys(videoRefs.current).forEach(key => {
        const video = videoRefs.current[key]
        if (video && parseInt(key) !== currentSlide) {
          video.pause()
          setVideosPlaying(prev => ({ ...prev, [key]: false }))
        }
      })

      // Play current video
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
  }, [currentSlide, videosLoaded, videoErrors])

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
    
    // Apply mute state to all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.muted = !isMuted
      }
    })
  }, [isMuted])

  // Touch handlers for mobile swipe
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

  // Keyboard navigation
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
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Descubre la App Perfecta para tu Clínica
          </h2>
          <p className="section-subtitle">
            Cada pantalla está diseñada específicamente para optimizar la gestión de tu clínica estética
          </p>
        </motion.div>

        <div className="carousel-container">
          <motion.div 
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {!isMobile && (
              <motion.button 
                className="nav-button nav-prev"
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{
                                      opacity: videosPlaying[currentSlide] ? 0 : 1,
                                      scale: videosPlaying[currentSlide] ? 0.8 : 1
                                    }}
                                    transition={{ duration: 0.3 }}
                                    aria-label={videosPlaying[currentSlide] ? "Pausar video" : "Reproducir video"}
                                  >
                                    {videosPlaying[currentSlide] ? <Pause size={24} /> : <Play size={24} />}
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

                                <AnimatePresence>
                                  {!videosLoaded[currentSlide] && (
                                    <motion.div 
                                      className="video-loading"
                                      initial={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="loading-content">
                                        <div className="loading-spinner"></div>
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
                                  <Smartphone className="smartphone-icon" size={40} />
                                  <span className="placeholder-text">{slides[currentSlide].title}</span>
                                  <span className="placeholder-subtitle">{slides[currentSlide].benefit}</span>
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
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {!isMobile && (
              <motion.button 
                className="nav-button nav-next"
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Siguiente slide"
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </motion.div>

          <div className="carousel-indicators">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isAutoplay ? "Pausar reproducción automática" : "Activar reproducción automática"}
            >
              {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
              <span>{isAutoplay ? 'Pausar' : 'Auto'}</span>
            </motion.button>
          </div>
        </div>

        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-primary"
            onClick={scrollToDemo}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="button-text">Quiero modernizar mi clínica estética</span>
            <span className="button-icon">→</span>
          </motion.button>
          
          <p className="cta-note">
            Demo gratuita • Sin compromiso • Implementación en 24hs
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .app-showcase-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #1a1a1a;
          letter-spacing: -1px;
        }

        .section-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.25rem);
          color: #4a4a4a;
          font-weight: 400;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 1px solid rgba(232, 180, 184, 0.2);
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          color: #6a6a6a;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: #E8B4B8;
          color: white;
          border-color: #E8B4B8;
        }

        .nav-button:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }

        .nav-prev {
          left: -80px;
        }

        .nav-next {
          right: -80px;
        }

        .carousel-track {
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          border-radius: 20px;
          position: relative;
        }

        .slide-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
          width: 100%;
        }

        .video-container {
          margin-bottom: 40px;
          perspective: 1000px;
        }

        .phone-mockup {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
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
          position: relative;
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
          align-items: center;
          justify-content: center;
          background: rgba(232, 180, 184, 0.95);
          backdrop-filter: blur(10px);
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px;
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

        .loading-bar {
          width: 120px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-progress {
          height: 100%;
          background: white;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
        }

        .placeholder-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px 20px;
        }

        .placeholder-icon {
          font-size: 48px;
          display: block;
        }

        .smartphone-icon {
          opacity: 0.6;
        }

        .placeholder-text {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.2;
        }

        .placeholder-subtitle {
          font-size: 14px;
          opacity: 0.9;
          line-height: 1.4;
          max-width: 200px;
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

        .slide-content {
          text-align: center;
          max-width: 500px;
        }

        .slide-title {
          font-size: 26px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .slide-benefit {
          font-size: 17px;
          color: #6a6a6a;
          font-weight: 400;
          line-height: 1.5;
        }

        .carousel-indicators {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 60px;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(232, 180, 184, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dot:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }

        .dot.active {
          background: #E8B4B8;
          transform: scale(1.2);
        }

        .dot.active::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid rgba(232, 180, 184, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .autoplay-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(232, 180, 184, 0.1);
          border: 1px solid rgba(232, 180, 184, 0.3);
          border-radius: 20px;
          padding: 8px 16px;
          font-size: 14px;
          color: #6a6a6a;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .autoplay-toggle:hover {
          background: rgba(232, 180, 184, 0.2);
          border-color: #E8B4B8;
          color: #4a4a4a;
        }

        .autoplay-toggle:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }

        .autoplay-toggle span {
          font-weight: 500;
        }

        .cta-container {
          text-align: center;
          margin-top: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-primary {
          background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          color: white;
          border: none;
          padding: 18px 36px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 32px rgba(232, 180, 184, 0.3);
          transition: all 0.3s ease;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
        }

        .cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .cta-primary:hover::before {
          left: 100%;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(232, 180, 184, 0.4);
        }

        .cta-primary:focus {
          outline: 2px solid #E8B4B8;
          outline-offset: 2px;
        }

        .button-text {
          font-weight: 600;
        }

        .button-icon {
          font-size: 20px;
          font-weight: 600;
          transition: transform 0.3s ease;
        }

        .cta-primary:hover .button-icon {
          transform: translateX(3px);
        }

        .cta-note {
          font-size: 14px;
          color: #6a6a6a;
          font-weight: 500;
        }

        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .app-showcase-section {
            padding: 80px 0;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .carousel-wrapper {
            gap: 20px;
          }

          .nav-button {
            width: 48px;
            height: 48px;
          }

          .nav-prev {
            left: -60px;
          }

          .nav-next {
            right: -60px;
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

          .phone-video {
            border-radius: 34px;
          }

          .phone-notch {
            width: 110px;
            height: 20px;
            border-radius: 0 0 14px 14px;
          }

          .placeholder-content {
            gap: 12px;
            padding: 30px 16px;
          }

          .placeholder-icon {
            font-size: 40px;
          }

          .placeholder-text {
            font-size: 16px;
          }

          .placeholder-subtitle {
            font-size: 13px;
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

          .slide-title {
            font-size: 24px;
          }

          .slide-benefit {
            font-size: 16px;
          }

          .carousel-indicators {
            margin-top: 50px;
          }

          .cta-container {
            margin-top: 60px;
          }
        }

        /* Mobile breakpoint */
        @media (max-width: 768px) {
          .app-showcase-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-title {
            font-size: clamp(2rem, 7vw, 2.5rem);
            margin-bottom: 20px;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .carousel-wrapper {
            gap: 0;
          }

          .nav-button {
            display: none;
          }

          .carousel-track {
            border-radius: 16px;
            max-width: 100%;
          }

          .slide {
            padding: 0 10px;
          }

          .video-container {
            margin-bottom: 32px;
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

          .phone-video {
            border-radius: 27px;
          }

          .phone-notch {
            width: 90px;
            height: 16px;
            border-radius: 0 0 12px 12px;
          }

          .placeholder-content {
            gap: 10px;
            padding: 25px 12px;
          }

          .placeholder-icon {
            font-size: 32px;
          }

          .smartphone-icon {
            width: 30px;
            height: 30px;
          }

          .placeholder-text {
            font-size: 14px;
          }

          .placeholder-subtitle {
            font-size: 12px;
            max-width: 160px;
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

          .slide-title {
            font-size: 22px;
            margin-bottom: 10px;
          }

          .slide-benefit {
            font-size: 15px;
          }

          .carousel-indicators {
            margin-top: 40px;
            gap: 16px;
          }

          .dots-container {
            gap: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }

          .autoplay-toggle {
            padding: 6px 12px;
            font-size: 13px;
          }

          .cta-container {
            margin-top: 50px;
          }

          .cta-primary {
            padding: 16px 32px;
            font-size: 16px;
            gap: 8px;
          }

          .button-icon {
            font-size: 18px;
          }

          .cta-note {
            font-size: 13px;
          }
        }

        /* Small mobile breakpoint */
        @media (max-width: 480px) {
          .app-showcase-section {
            padding: 40px 0;
          }

          .container {
            padding: 0 16px;
          }

          .section-header {
            margin-bottom: 32px;
          }

          .section-title {
            font-size: clamp(1.8rem, 8vw, 2.2rem);
            margin-bottom: 16px;
          }

          .section-subtitle {
            font-size: 1rem;
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

          .phone-video {
            border-radius: 24px;
          }

          .phone-notch {
            width: 70px;
            height: 14px;
            border-radius: 0 0 10px 10px;
          }

          .placeholder-content {
            gap: 8px;
            padding: 20px 10px;
          }

          .placeholder-icon {
            font-size: 28px;
          }

          .smartphone-icon {
            width: 24px;
            height: 24px;
          }

          .placeholder-text {
            font-size: 13px;
          }

          .placeholder-subtitle {
            font-size: 11px;
            max-width: 140px;
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

          .slide-title {
            font-size: 20px;
            margin-bottom: 8px;
          }

          .slide-benefit {
            font-size: 14px;
          }

          .carousel-indicators {
            margin-top: 32px;
            gap: 12px;
          }

          .dots-container {
            gap: 8px;
          }

          .dot {
            width: 8px;
            height: 8px;
          }

          .autoplay-toggle {
            padding: 5px 10px;
            font-size: 12px;
          }

          .autoplay-toggle svg {
            width: 14px;
            height: 14px;
          }

          .cta-container {
            margin-top: 40px;
          }

          .cta-primary {
            padding: 14px 28px;
            font-size: 15px;
            width: 100%;
            max-width: 300px;
          }

          .button-icon {
            font-size: 16px;
          }

          .cta-note {
            font-size: 12px;
          }

          .loading-content {
            padding: 30px;
          }

          .loading-spinner {
            width: 32px;
            height: 32px;
          }

          .loading-text {
            font-size: 12px;
          }

          .loading-bar {
            width: 100px;
            height: 3px;
          }
        }

        /* Touch-friendly adjustments */
        @media (hover: none) and (pointer: coarse) {
          .dot {
            width: 14px;
            height: 14px;
            min-width: 44px;
            min-height: 44px;
            background-clip: content-box;
            padding: 15px;
          }

          .cta-primary {
            min-height: 50px;
          }

          .play-button {
            min-width: 55px;
            min-height: 55px;
          }

          .mute-button {
            min-width: 44px;
            min-height: 44px;
          }

          .autoplay-toggle {
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

          .dot.active::after {
            animation: none !important;
          }

          .placeholder-icon {
            animation: none !important;
          }
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

          .nav-button {
            border: 2px solid #000;
          }

          .dot {
            border: 1px solid #000;
          }

          .autoplay-toggle {
            border: 2px solid #000;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .app-showcase-section {
            background: linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%);
          }

          .section-title {
            color: #f0f0f0;
          }

          .section-subtitle {
            color: #b0b0b0;
          }

          .nav-button {
            background: #2d2d2d;
            color: #f0f0f0;
            border-color: rgba(255, 255, 255, 0.1);
          }

          .nav-button:hover {
            background: #E8B4B8;
            color: white;
          }

          .slide-title {
            color: #f0f0f0;
          }

          .slide-benefit {
            color: #b0b0b0;
          }

          .autoplay-toggle {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.1);
            color: #b0b0b0;
          }

          .autoplay-toggle:hover {
            background: rgba(232, 180, 184, 0.2);
            color: #f0f0f0;
          }

          .cta-note {
            color: #b0b0b0;
          }
        }
      `}</style>
    </section>
  )
}

export default ExploraAppSection