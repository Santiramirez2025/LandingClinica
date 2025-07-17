// components/cards/SolutionCard.js
import { motion } from 'framer-motion'

export const SolutionCard = ({ solucion, index, hoveredIndex, onHover }) => (
  <motion.div
    className="card solution-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
    onHoverStart={() => onHover(index)}
    onHoverEnd={() => onHover(null)}
  >
    <motion.div 
      className="card-sparkle"
      animate={{ 
        opacity: hoveredIndex === index ? [0, 1, 0] : 0,
        scale: hoveredIndex === index ? [0.8, 1.2, 0.8] : 1
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    
    <div className="card-header">
      <motion.span 
        className="card-icon"
        animate={{ scale: hoveredIndex === index ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.6 }}
      >
        {solucion.icon}
      </motion.span>
      <h3 className="card-title">{solucion.titulo}</h3>
    </div>
    
    <p className="card-description">{solucion.descripcion}</p>
    
    <motion.div 
      className="benefit-badge"
      whileHover={{ scale: 1.05 }}
    >
      <span className="benefit-icon">📈</span>
      <span className="benefit-text">{solucion.beneficio}</span>
    </motion.div>
  </motion.div>
)