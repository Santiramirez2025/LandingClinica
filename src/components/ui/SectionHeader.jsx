// components/ui/SectionHeader.js
import { motion } from 'framer-motion'

export const SectionHeader = ({ badge, title, description }) => (
  <motion.div 
    className="section-header"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.span 
      className="section-badge"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      {badge}
    </motion.span>
    
    <h2 className="section-title">
      <span className="title-regular">Entendemos tu</span>
      <span className="title-gradient">{title}</span>
    </h2>
    
    <p className="section-description">{description}</p>
  </motion.div>
)