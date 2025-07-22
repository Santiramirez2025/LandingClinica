import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ModernFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      const scrollThreshold = isMobile ? 150 : 200
      setIsVisible(window.scrollY > scrollThreshold)
    }

    // Auto-show after delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, isMobile ? 1500 : 2000)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [isMobile])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="cta-container"
          initial={{ 
            opacity: 0, 
            scale: 0.8, 
            y: 100,
            rotate: -5 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotate: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.6, 
            y: 150,
            rotate: 5
          }}
          transition={{ 
            type: "spring",
            stiffness: isMobile ? 200 : 260,
            damping: isMobile ? 22 : 18,
            duration: isMobile ? 0.5 : 0.7
          }}
        >
          {/* Background Glow */}
          <motion.div 
            className="glow-bg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.button
            className="cta-button"
            onClick={handleClick}
            onHoverStart={() => !isMobile && setIsHovered(true)}
            onHoverEnd={() => !isMobile && setIsHovered(false)}
            whileHover={!isMobile ? { 
              scale: 1.08,
              y: -6,
              rotateX: 5
            } : {}}
            whileTap={{ 
              scale: 0.92,
              y: 2
            }}
            animate={{
              y: isHovered ? -4 : [0, -3, 0],
              rotateY: [0, 2, 0, -2, 0]
            }}
            transition={{
              y: {
                duration: isHovered ? 0.3 : 3.5,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut"
              },
              rotateY: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Animated border */}
            <motion.div 
              className="animated-border"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Main content */}
            <div className="cta-content">
              <motion.div 
                className="icon-container"
                animate={{
                  rotate: isHovered ? [0, 15, -10, 0] : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="rocket-icon">🚀</span>
              </motion.div>
              
              <div className="text-content">
                <motion.span 
                  className="main-text"
                  animate={{
                    scale: isHovered ? 1.02 : 1
                  }}
                >
                  Demo Gratuito
                </motion.span>
                <motion.span 
                  className="sub-text"
                  animate={{
                    opacity: isHovered ? 0.9 : 0.8,
                    x: isHovered ? 2 : 0
                  }}
                >
                  ¡Pruébalo ahora!
                </motion.span>
              </div>
            </div>
            
            {/* Shine effect */}
            <motion.div 
              className="shine-effect"
              animate={{
                x: ['-120%', '220%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4
              }}
            />
            
            {/* Particle effects */}
            <motion.div className="particles">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  animate={{
                    y: [-10, -30, -10],
                    x: [0, Math.sin(i * 2) * 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          {/* Pulsing notification */}
          <motion.div 
            className="notification-pulse"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Status indicator */}
          <motion.div 
            className="status-dot"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 10px rgba(34, 197, 94, 0.5)',
                '0 0 20px rgba(34, 197, 94, 0.8)',
                '0 0 10px rgba(34, 197, 94, 0.5)'
              ]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ModernFloatingCTAWithStyles = () => {
  return (
    <>
      <ModernFloatingCTA />
      <style jsx>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          --glow-color: rgba(232, 180, 184, 0.3);
          --text-dark: #1a1a1a;
          --border-radius: clamp(20px, 3vw, 28px);
          --shadow-strong: 0 25px 60px rgba(0, 0, 0, 0.15);
        }
        
        .cta-container {
          position: fixed;
          bottom: clamp(20px, 4vw, 36px);
          right: clamp(16px, 4vw, 36px);
          z-index: 1000;
          pointer-events: none;
          perspective: 1000px;
        }
        
        .glow-bg {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: var(--glow-color);
          border-radius: 50%;
          filter: blur(25px);
          pointer-events: none;
          z-index: 0;
        }
        
        .cta-button {
          position: relative;
          background: white;
          backdrop-filter: blur(20px);
          border: none;
          border-radius: var(--border-radius);
          padding: clamp(14px, 3vw, 18px) clamp(20px, 4vw, 26px);
          cursor: pointer;
          box-shadow: 
            var(--shadow-strong),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          pointer-events: auto;
          overflow: hidden;
          min-width: clamp(140px, 30vw, 180px);
          transform-style: preserve-3d;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        .animated-border {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: conic-gradient(
            from 0deg,
            transparent 70%,
            var(--primary-gradient),
            transparent 100%
          );
          border-radius: calc(var(--border-radius) + 2px);
          pointer-events: none;
          opacity: 0.6;
        }
        
        .cta-content {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2.5vw, 14px);
          position: relative;
          z-index: 2;
        }
        
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 6vw, 38px);
          height: clamp(32px, 6vw, 38px);
          background: var(--primary-gradient);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(232, 180, 184, 0.3);
        }
        
        .rocket-icon {
          font-size: clamp(16px, 3.5vw, 20px);
          line-height: 1;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          gap: 1px;
          text-align: left;
          min-width: 0;
        }
        
        .main-text {
          color: var(--text-dark);
          font-weight: 800;
          font-size: clamp(14px, 3.2vw, 17px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .sub-text {
          color: #6b7280;
          font-weight: 600;
          font-size: clamp(11px, 2.5vw, 13px);
          line-height: 1;
          letter-spacing: 0.01em;
        }
        
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 80%
          );
          transform: skewX(-15deg);
          pointer-events: none;
          z-index: 3;
        }
        
        .particles {
          position: absolute;
          top: -10px;
          right: 10px;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary-gradient);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(232, 180, 184, 0.6);
        }
        
        .notification-pulse {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          background: #ef4444;
          border-radius: 50%;
          pointer-events: none;
        }
        
        .status-dot {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 16px;
          height: 16px;
          background: #22c55e;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .cta-container {
            bottom: clamp(16px, 5vw, 24px);
            right: clamp(12px, 4vw, 20px);
          }
          
          .glow-bg {
            top: -15px;
            left: -15px;
            right: -15px;
            bottom: -15px;
            filter: blur(20px);
          }
          
          .cta-button {
            box-shadow: 
              0 15px 40px rgba(0, 0, 0, 0.12),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          
          .particles {
            display: none; /* Hide particles on mobile for performance */
          }
          
          .status-dot {
            width: 12px;
            height: 12px;
            border-width: 2px;
          }
          
          .notification-pulse {
            width: 16px;
            height: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .cta-container {
            bottom: 14px;
            right: 10px;
          }
          
          .cta-button {
            min-width: 120px;
          }
          
          .status-dot {
            width: 10px;
            height: 10px;
            top: -4px;
            right: -4px;
          }
        }
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cta-button {
            min-height: 52px;
            display: flex;
            align-items: center;
          }
          
          .cta-button:active {
            transform: scale(0.95);
            box-shadow: 
              0 8px 25px rgba(0, 0, 0, 0.15),
              inset 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        }
        
        /* Accessibility & Performance */
        @media (prefers-reduced-motion: reduce) {
          .glow-bg,
          .animated-border,
          .shine-effect,
          .particles .particle,
          .notification-pulse,
          .status-dot {
            animation: none !important;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.2s !important;
          }
        }
        
        @media (prefers-contrast: high) {
          .cta-button {
            background: #ffffff;
            border: 3px solid var(--text-dark);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          
          .main-text {
            -webkit-text-fill-color: var(--text-dark);
            color: var(--text-dark);
          }
          
          .sub-text {
            color: var(--text-dark);
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .cta-button {
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 25px 60px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.05);
          }
        }
        
        /* Safe area handling */
        @supports (padding: env(safe-area-inset-bottom)) {
          .cta-container {
            bottom: calc(clamp(20px, 4vw, 36px) + env(safe-area-inset-bottom));
            right: calc(clamp(16px, 4vw, 36px) + env(safe-area-inset-right));
          }
          
          @media (max-width: 768px) {
            .cta-container {
              bottom: calc(clamp(16px, 5vw, 24px) + env(safe-area-inset-bottom));
              right: calc(clamp(12px, 4vw, 20px) + env(safe-area-inset-right));
            }
          }
        }
        
        /* Focus styles */
        .cta-button:focus-visible {
          outline: 3px solid #E8B4B8;
          outline-offset: 4px;
        }
        
        /* Performance optimizations */
        .glow-bg,
        .animated-border,
        .cta-button,
        .particles .particle {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>
    </>
  )
}

export default ModernFloatingCTAWithStyles