import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const ModuloComponent = ({ 
  titulo, 
  dolor, 
  descripcion, 
  cta, 
  color, 
  reverse, 
  icon,
  features = [],
  stats = {},
  mockupType = 'phone'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef(null)
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring config for smooth animations
  const springConfig = { damping: 30, stiffness: 150 }
  
  // Transform values for 3D effect
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), springConfig)
  
  // Parallax layers
  const backgroundX = useTransform(mouseX, [-100, 100], [-20, 20])
  const backgroundY = useTransform(mouseY, [-100, 100], [-20, 20])
  const foregroundX = useTransform(mouseX, [-100, 100], [-40, 40])
  const foregroundY = useTransform(mouseY, [-100, 100], [-40, 40])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = (e.clientX - centerX) / (rect.width / 2) * 100
      const y = (e.clientY - centerY) / (rect.height / 2) * 100
      
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Auto-rotate features
  useEffect(() => {
    if (features.length === 0) return
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <motion.section 
      className={`modulo ${reverse ? 'reverse' : ''}`}
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="modulo-background">
        <motion.div 
          className="bg-element bg-1"
          style={{ x: backgroundX, y: backgroundY }}
        />
        <motion.div 
          className="bg-element bg-2"
          style={{ x: foregroundX, y: foregroundY }}
        />
      </div>

      <div className="container">
        <div className="modulo-content">
          {/* Text Content */}
          <motion.div 
            className="modulo-text"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="dolor-badge"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              <span className="dolor-icon">💭</span>
              <span className="dolor-text">{dolor}</span>
            </motion.div>
            
            <h3 className="modulo-title">
              {icon && <span className="title-icon">{icon}</span>}
              {titulo}
            </h3>
            
            <p className="modulo-description">{descripcion}</p>
            
            {features.length > 0 && (
              <motion.div 
                className="features-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ x: 10 }}
                  >
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {stats && Object.keys(stats).length > 0 && (
              <motion.div 
                className="stats-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {Object.entries(stats).map(([key, value], index) => (
                  <motion.div 
                    key={key}
                    className="stat-item"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{key}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            <motion.div 
              className="cta-wrapper"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                className="cta-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="cta-text">{cta}</span>
                <motion.span 
                  className="cta-icon"
                  animate={{ x: isHovered ? 8 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </button>
              <motion.div 
                className="cta-glow"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          {/* Visual Content */}
          <motion.div 
            className="modulo-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1200
            }}
          >
            <div className="visual-container">
              {/* Glassmorphism Layers */}
              <motion.div 
                className="glass-layer layer-1"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="glass-layer layer-2"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Mockup */}
              <motion.div 
                className={`mockup mockup-${mockupType}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mockup-screen">
                  {/* Dynamic Content based on mockupType */}
                  {mockupType === 'phone' && (
                    <>
                      <div className="status-bar">
                        <span className="time">9:41</span>
                        <div className="status-icons">📶 🔋</div>
                      </div>
                      <div className="app-content">
                        <div className="content-header" style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}>
                          <h4>{titulo.split(' ')[0]}</h4>
                        </div>
                        <div className="content-body">
                          {features.map((feature, index) => (
                            <motion.div 
                              key={index}
                              className="content-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: activeFeature === index ? 1 : 0.3,
                                x: activeFeature === index ? 0 : -20
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {mockupType === 'tablet' && (
                    <div className="tablet-content">
                      <div className="dashboard-grid">
                        {[1, 2, 3, 4].map((item) => (
                          <motion.div 
                            key={item}
                            className="dashboard-card"
                            style={{ background: `linear-gradient(135deg, ${color}22, white)` }}
                            whileHover={{ scale: 1.05 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating UI Elements */}
                <motion.div 
                  className="floating-ui ui-1"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity
                  }}
                  style={{ background: color }}
                />
                <motion.div 
                  className="floating-ui ui-2"
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .modulo {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        
        /* Background Elements */
        .modulo-background {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .bg-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }
        
        .bg-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, ${color}40 0%, transparent 70%);
          top: 10%;
          right: 10%;
        }
        
        .bg-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          bottom: 10%;
          left: 10%;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        
        .modulo-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        
        .reverse .modulo-content {
          grid-template-columns: 1.2fr 1fr;
          direction: rtl;
        }
        
        .reverse .modulo-text {
          direction: ltr;
        }
        
        /* Text Content */
        .modulo-text {
          max-width: 600px;
        }
        
        .dolor-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 10px 24px;
          border-radius: 50px;
          margin-bottom: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .dolor-icon {
          font-size: 20px;
        }
        
        .dolor-text {
          font-size: 14px;
          font-weight: 500;
          color: #8B8680;
          letter-spacing: 0.3px;
        }
        
        .modulo-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #2C2825;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .title-icon {
          font-size: 0.8em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, ${color}20, ${color}10);
          border-radius: 24px;
          box-shadow: 0 8px 24px ${color}20;
        }
        
        .modulo-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #6B6560;
          margin-bottom: 40px;
        }
        
        /* Features List */
        .features-list {
          margin-bottom: 40px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .feature-item.active {
          background: white;
          border-color: ${color}40;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, ${color}, ${color}80);
          color: white;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
        }
        
        .feature-text {
          flex: 1;
          font-size: 16px;
          color: #2C2825;
        }
        
        /* Stats Row */
        .stats-row {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, ${color}, #D4AF37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 8px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #8B8680;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* CTA Button */
        .cta-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #E8B4B8 0%, #D9A5A9 100%);
          color: white;
          padding: 20px 48px;
          border: none;
          border-radius: 60px;
          font-size: 17px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 32px rgba(232, 180, 184, 0.3);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          box-shadow: 0 16px 40px rgba(232, 180, 184, 0.4);
        }
        
        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, ${color}40 0%, transparent 70%);
          border-radius: 60px;
          opacity: 0;
          z-index: 0;
        }
        
        /* Visual Content */
        .modulo-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }
        
        .visual-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        
        /* Glass Layers */
        .glass-layer {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
        
        .layer-1 {
          width: 300px;
          height: 200px;
          top: -50px;
          left: -50px;
          background: linear-gradient(135deg, ${color}10, transparent);
        }
        
        .layer-2 {
          width: 250px;
          height: 150px;
          bottom: -30px;
          right: -40px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
        }
        
        /* Mockup Styles */
        .mockup {
          position: relative;
          z-index: 10;
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));
        }
        
        .mockup-phone {
          width: 320px;
          height: 640px;
          background: #1a1a1a;
          border-radius: 40px;
          padding: 12px;
          margin: 0 auto;
        }
        
        .mockup-tablet {
          width: 500px;
          height: 350px;
          background: #1a1a1a;
          border-radius: 24px;
          padding: 20px;
        }
        
        .mockup-screen {
          width: 100%;
          height: 100%;
          background: #FDFBF7;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
        }
        
        /* Phone Content */
        .status-bar {
          display: flex;
          justify-content: space-between;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 500;
        }
        
        .app-content {
          padding: 24px;
          height: calc(100% - 44px);
          display: flex;
          flex-direction: column;
        }
        
        .content-header {
          padding: 24px;
          border-radius: 20px;
          margin-bottom: 24px;
          color: white;
        }
        
        .content-header h4 {
          font-size: 24px;
          font-weight: 600;
        }
        
        .content-body {
          flex: 1;
          position: relative;
        }
        
        .content-item {
          position: absolute;
          width: 100%;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          font-size: 16px;
          color: #2C2825;
        }
        
        /* Tablet Content */
        .tablet-content {
          padding: 24px;
          height: 100%;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          height: 100%;
        }
        
        .dashboard-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        /* Floating UI Elements */
        .floating-ui {
          position: absolute;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 16px 24px;
        }
        
        .ui-1 {
          top: 20px;
          right: -40px;
          width: 120px;
          height: 60px;
        }
        
        .ui-2 {
          bottom: 40px;
          left: -30px;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #FFE5E5, #FFF0E5);
          border-radius: 50%;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .modulo-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .reverse .modulo-content {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          
          .modulo-text {
            max-width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .stats-row {
            justify-content: center;
          }
          
          .mockup-phone {
            width: 280px;
            height: 560px;
          }
        }
        
        @media (max-width: 768px) {
          .modulo {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .modulo-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
            flex-direction: column;
            text-align: center;
          }
          
          .features-list {
            max-width: 400px;
          }
          
          .stats-row {
            flex-wrap: wrap;
            gap: 24px;
          }
          
          .glass-layer {
            display: none;
          }
          
          .floating-ui {
            display: none;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .bg-element,
          .glass-layer,
          .floating-ui {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .modulo {
            background: #1a1a1a;
          }
          
          .modulo-title {
            color: #FDFBF7;
          }
          
          .modulo-description {
            color: #A8A39E;
          }
          
          .feature-item {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .feature-item.active {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .mockup-screen {
            background: #2C2825;
          }
        }
      `}</style>
    </motion.section>
  )
}

export default ModuloComponent