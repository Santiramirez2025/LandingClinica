import { motion } from 'framer-motion'
import { useState } from 'react'

const HeroButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyles = {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    color: 'white',
    padding: 0,
    borderRadius: '14px',
    fontSize: '17px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '280px',
    height: '64px',
    boxShadow: '0 4px 20px 0 rgba(30, 58, 138, 0.3), 0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateZ(0)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    letterSpacing: '0.2px',
  }

  const contentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    height: '100%',
    padding: '0 24px',
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
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    width: '20px',
    height: '20px',
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
    whiteSpace: 'nowrap',
    flex: 1,
    minWidth: 0,
  }

  const arrowStyles = {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    lineHeight: 1,
    color: 'white',
    flexShrink: 0,
    width: '20px',
    height: '20px',
  }

  return (
    <motion.button 
      style={buttonStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        style={contentStyles}
        animate={{ 
          x: isHovered ? 2 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300,
          damping: 20
        }}
      >
        <motion.span 
          style={iconStyles}
          animate={{ 
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200,
            damping: 15
          }}
        >
          💼
        </motion.span>
        <span style={textStyles}>Solicitar Demostración</span>
        <motion.span 
          style={arrowStyles}
          animate={{ 
            x: isHovered ? 4 : 0,
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            damping: 20
          }}
        >
          →
        </motion.span>
      </motion.div>
      
      <motion.div 
        style={shimmerStyles}
        animate={{ 
          x: isHovered ? "100%" : "-100%"
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  )
}

export default HeroButton
