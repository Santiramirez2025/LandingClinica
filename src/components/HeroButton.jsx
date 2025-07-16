import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const buttonStyles = {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    color: 'white',
    padding: 0,
    borderRadius: isMobile ? '12px' : '14px',
    fontSize: isMobile ? '15px' : '17px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isMobile ? '90vw' : '280px',
    maxWidth: isMobile ? '320px' : 'none',
    width: isMobile ? '100%' : 'auto',
    height: isMobile ? '56px' : '64px',
    boxShadow: isMobile 
      ? '0 3px 16px 0 rgba(30, 58, 138, 0.25), 0 1px 6px 0 rgba(0, 0, 0, 0.08)'
      : '0 4px 20px 0 rgba(30, 58, 138, 0.3), 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateZ(0)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    letterSpacing: '0.2px',
    margin: isMobile ? '0 auto' : '0',
  }

  const contentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '8px' : '12px',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    padding: isMobile ? '0 16px' : '0 24px',
  }

  const shimmerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    transform: 'translateX(-100%)',
    zIndex: 1,
  }

  const iconStyles = {
    fontSize: isMobile ? '16px' : '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    width: isMobile ? '18px' : '20px',
    height: isMobile ? '18px' : '20px',
    flexShrink: 0,
  }

  const textStyles = {
    fontWeight: 600,
    letterSpacing: '0.2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    color: 'white',
    textAlign: 'center',
    whiteSpace: isMobile ? 'normal' : 'nowrap',
    flex: 1,
    minWidth: 0,
    fontSize: isMobile ? '15px' : '17px',
  }

  const arrowStyles = {
    fontSize: isMobile ? '16px' : '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    lineHeight: 1,
    color: 'white',
    flexShrink: 0,
    width: isMobile ? '18px' : '20px',
    height: isMobile ? '18px' : '20px',
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '100%',
      padding: isMobile ? '0 16px' : '0',
      maxWidth: isMobile ? '100%' : 'none'
    }}>
      <motion.button
        style={buttonStyles}
        whileHover={!isMobile ? { scale: 1.02 } : {}}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <motion.div
          style={contentStyles}
          animate={{ x: isHovered && !isMobile ? 2 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            style={iconStyles}
            animate={{ scale: isHovered && !isMobile ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            💼
          </motion.span>
          <span style={textStyles}>Solicitar Demostración</span>
          <motion.span
            style={arrowStyles}
            animate={{ 
              x: isHovered && !isMobile ? 4 : 0, 
              opacity: isHovered && !isMobile ? 1 : 0.8 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            →
          </motion.span>
        </motion.div>

        <motion.div
          style={shimmerStyles}
          animate={{ x: isHovered && !isMobile ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.button>
    </div>
  )
}

export default HeroButton