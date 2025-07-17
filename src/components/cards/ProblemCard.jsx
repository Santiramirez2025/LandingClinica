// components/cards/ProblemCard.js
import { motion } from 'framer-motion'

export const ProblemCard = ({ problema, index, hoveredIndex, onHover }) => (
  <motion.div
    className="card pain-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
    onHoverStart={() => onHover(index)}
    onHoverEnd={() => onHover(null)}
  >
    <motion.div 
      className="card-glow"
      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
    
    <div className="card-header">
      <motion.span 
        className="card-icon"
        animate={{ rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0 }}
        transition={{ duration: 0.4 }}
      >
        {problema.icon}
      </motion.span>
      <h3 className="card-title">{problema.titulo}</h3>
    </div>
    
    <p className="card-description">{problema.descripcion}</p>
    
    <motion.div 
      className="impact-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span className="impact-icon">⚠️</span>
      <span className="impact-text">{problema.impacto}</span>
    </motion.div>
  </motion.div>
)
