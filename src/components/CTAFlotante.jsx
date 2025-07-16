import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const CTAFlotante = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de hacer scroll de 300px
      setIsVisible(window.scrollY > 300)
    }

    // Mostrar automáticamente después de 3 segundos si no hay scroll
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

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
            stiffness: 300, 
            damping: 20,
            duration: 0.6
          }}
        >
          <motion.button
            className="cta-flotante"
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ 
              scale: 1.05,
              y: -4
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: isHovered ? 0 : [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Gradient ring animation */}
            <motion.div 
              className="cta-ring"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{
                duration: 2,
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
            
            {/* Shine effect */}
            <motion.div 
              className="cta-shine"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3
              }}
            />
          </motion.button>

          {/* Notification dot */}
          <motion.div 
            className="notification-dot"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
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
        }
        
        .cta-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: left;
        }
        
        .cta-main {
          color: white;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.2;
          letter-spacing: 0.3px;
        }
        
        .cta-sub {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.2px;
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
        
        @media (max-width: 768px) {
          .cta-flotante-container {
            bottom: 24px;
            right: 24px;
          }
          
          .cta-flotante {
            padding: 14px 20px;
            border-radius: 24px;
            min-width: 140px;
          }
          
          .cta-content {
            gap: 10px;
          }
          
          .cta-icon {
            font-size: 20px;
          }
          
          .cta-main {
            font-size: 14px;
          }
          
          .cta-sub {
            font-size: 11px;
          }
          
          .notification-dot {
            width: 14px;
            height: 14px;
            top: -3px;
            right: -3px;
          }
        }
        
        @media (max-width: 480px) {
          .cta-flotante-container {
            bottom: 20px;
            right: 20px;
          }
          
          .cta-flotante {
            padding: 12px 16px;
            border-radius: 20px;
            min-width: 120px;
          }
          
          .cta-content {
            gap: 8px;
          }
          
          .cta-icon {
            font-size: 18px;
          }
          
          .cta-main {
            font-size: 13px;
          }
          
          .cta-sub {
            font-size: 10px;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .cta-flotante {
            animation: none;
          }
          
          .cta-ring,
          .cta-shine,
          .notification-dot {
            animation: none;
          }
        }
        
        /* High contrast mode */
        @media (prefers-contrast: high) {
          .cta-flotante {
            background: #000;
            border-color: #fff;
            color: #fff;
          }
          
          .cta-ring {
            background: #fff;
          }
        }
      `}</style>
    </>
  )
}

export default CTAFlotanteWithStyles