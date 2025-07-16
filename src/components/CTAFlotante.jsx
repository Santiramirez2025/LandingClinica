import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const CTAFlotante = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      // Mostrar después de hacer scroll de 200px en mobile, 300px en desktop
      const scrollThreshold = isMobile ? 200 : 300
      setIsVisible(window.scrollY > scrollThreshold)
    }

    // Mostrar automáticamente después de 2 segundos en mobile, 3 en desktop
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, isMobile ? 2000 : 3000)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [isMobile])

  const handleClick = () => {
    // Scroll suave hacia arriba para mostrar el demo
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cta-flotante-container"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: isMobile ? 250 : 300, 
            damping: isMobile ? 25 : 20,
            duration: isMobile ? 0.4 : 0.6
          }}
        >
          <motion.button
            className="cta-flotante"
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={!isMobile ? { 
              scale: 1.05,
              y: -4
            } : {}}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: isHovered || isMobile ? 0 : [0, -8, 0],
            }}
            transition={{
              y: {
                duration: isMobile ? 3 : 2,
                repeat: isHovered || isMobile ? 0 : Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Gradient ring animation - reducida en mobile */}
            <motion.div 
              className="cta-ring"
              animate={{
                scale: [1, isMobile ? 1.1 : 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{
                duration: isMobile ? 3 : 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Button content */}
            <div className="cta-content">
              <span className="cta-icon">🚀</span>
              <div className="cta-text">
                <span className="cta-main">Demo gratuito</span>
                <span className="cta-sub">¡Probalo ahora!</span>
              </div>
            </div>
            
            {/* Shine effect - menos frecuente en mobile */}
            <motion.div 
              className="cta-shine"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: isMobile ? 2.5 : 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: isMobile ? 5 : 3
              }}
            />
          </motion.button>

          {/* Notification dot - más pequeño en mobile */}
          <motion.div 
            className="notification-dot"
            animate={{
              scale: [1, isMobile ? 1.2 : 1.3, 1],
            }}
            transition={{
              duration: isMobile ? 2 : 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const CTAFlotanteWithStyles = () => {
  return (
    <>
      <CTAFlotante />
      <style jsx>{`
        .cta-flotante-container {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 1000;
          pointer-events: none;
        }
        
        .cta-flotante {
          position: relative;
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          border: none;
          border-radius: 28px;
          padding: 16px 24px;
          cursor: pointer;
          box-shadow: 
            0 8px 32px rgba(232, 180, 184, 0.4),
            0 4px 16px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          pointer-events: auto;
          overflow: hidden;
          min-width: 160px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        .cta-flotante:hover {
          box-shadow: 
            0 12px 48px rgba(232, 180, 184, 0.5),
            0 8px 24px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .cta-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          border-radius: 32px;
          pointer-events: none;
        }
        
        .cta-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }
        
        .cta-icon {
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }
        
        .cta-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: left;
          min-width: 0;
        }
        
        .cta-main {
          color: white;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.2;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }
        
        .cta-sub {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.2px;
          white-space: nowrap;
        }
        
        .cta-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 30%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
        }
        
        .notification-dot {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
        }
        
        /* Tablet styles */
        @media (max-width: 1024px) {
          .cta-flotante-container {
            bottom: 28px;
            right: 28px;
          }
        }
        
        /* Mobile Large - 768px and down */
        @media (max-width: 768px) {
          .cta-flotante-container {
            bottom: 20px;
            right: 20px;
          }
          
          .cta-flotante {
            padding: 14px 20px;
            border-radius: 24px;
            min-width: 140px;
            box-shadow: 
              0 6px 24px rgba(232, 180, 184, 0.4),
              0 3px 12px rgba(0, 0, 0, 0.1);
          }
          
          .cta-flotante:hover {
            box-shadow: 
              0 8px 32px rgba(232, 180, 184, 0.5),
              0 4px 16px rgba(0, 0, 0, 0.15);
          }
          
          .cta-ring {
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border-radius: 27px;
          }
          
          .cta-content {
            gap: 10px;
          }
          
          .cta-icon {
            font-size: 20px;
          }
          
          .cta-main {
            font-size: 14px;
            font-weight: 600;
          }
          
          .cta-sub {
            font-size: 11px;
          }
          
          .notification-dot {
            width: 12px;
            height: 12px;
            top: -2px;
            right: -2px;
          }
        }
        
        /* Mobile Medium - 480px and down */
        @media (max-width: 480px) {
          .cta-flotante-container {
            bottom: 16px;
            right: 16px;
          }
          
          .cta-flotante {
            padding: 12px 16px;
            border-radius: 20px;
            min-width: 120px;
            box-shadow: 
              0 4px 16px rgba(232, 180, 184, 0.4),
              0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .cta-flotante:hover {
            box-shadow: 
              0 6px 24px rgba(232, 180, 184, 0.5),
              0 3px 12px rgba(0, 0, 0, 0.15);
          }
          
          .cta-ring {
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 22px;
          }
          
          .cta-content {
            gap: 8px;
          }
          
          .cta-icon {
            font-size: 18px;
          }
          
          .cta-main {
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.2px;
          }
          
          .cta-sub {
            font-size: 10px;
            letter-spacing: 0.1px;
          }
          
          .notification-dot {
            width: 10px;
            height: 10px;
            top: -1px;
            right: -1px;
            border-width: 1px;
          }
        }
        
        /* Mobile Small - 360px and down */
        @media (max-width: 360px) {
          .cta-flotante-container {
            bottom: 12px;
            right: 12px;
          }
          
          .cta-flotante {
            padding: 10px 14px;
            border-radius: 18px;
            min-width: 100px;
          }
          
          .cta-content {
            gap: 6px;
          }
          
          .cta-icon {
            font-size: 16px;
          }
          
          .cta-main {
            font-size: 12px;
          }
          
          .cta-sub {
            font-size: 9px;
          }
          
          .notification-dot {
            width: 8px;
            height: 8px;
            top: 0px;
            right: 0px;
          }
        }
        
        /* Landscape mobile orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .cta-flotante-container {
            bottom: 12px;
            right: 12px;
          }
          
          .cta-flotante {
            padding: 10px 16px;
            border-radius: 18px;
          }
          
          .cta-main {
            font-size: 12px;
          }
          
          .cta-sub {
            font-size: 9px;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cta-flotante {
            /* Increase touch target size */
            min-height: 48px;
            display: flex;
            align-items: center;
          }
          
          .cta-flotante:hover {
            /* Reset hover styles for touch devices */
            box-shadow: 
              0 8px 32px rgba(232, 180, 184, 0.4),
              0 4px 16px rgba(0, 0, 0, 0.1);
          }
          
          .cta-flotante:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .cta-flotante,
          .cta-ring,
          .cta-shine,
          .notification-dot {
            animation: none !important;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .cta-flotante {
            background: #000;
            border: 3px solid #fff;
            color: #fff;
          }
          
          .cta-main,
          .cta-sub {
            color: #fff;
          }
          
          .cta-ring {
            background: #fff;
          }
          
          .notification-dot {
            background: #ff0000;
            border-color: #fff;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .cta-flotante {
            background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 
              0 8px 32px rgba(232, 180, 184, 0.3),
              0 4px 16px rgba(0, 0, 0, 0.3);
          }
          
          .cta-flotante:hover {
            box-shadow: 
              0 12px 48px rgba(232, 180, 184, 0.4),
              0 8px 24px rgba(0, 0, 0, 0.4);
          }
        }
        
        /* Safe area handling for devices with notches */
        @supports (padding: env(safe-area-inset-bottom)) {
          .cta-flotante-container {
            bottom: calc(32px + env(safe-area-inset-bottom));
            right: calc(32px + env(safe-area-inset-right));
          }
          
          @media (max-width: 768px) {
            .cta-flotante-container {
              bottom: calc(20px + env(safe-area-inset-bottom));
              right: calc(20px + env(safe-area-inset-right));
            }
          }
          
          @media (max-width: 480px) {
            .cta-flotante-container {
              bottom: calc(16px + env(safe-area-inset-bottom));
              right: calc(16px + env(safe-area-inset-right));
            }
          }
        }
      `}</style>
    </>
  )
}

export default CTAFlotanteWithStyles