// components/ui/TabSwitcher.js
import { motion } from 'framer-motion'

export const TabSwitcher = ({ activeTab, onTabChange }) => (
  <motion.div 
    className="tab-switcher"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
  >
    <motion.button
      className={`tab ${activeTab === 'problema' ? 'active' : ''}`}
      onClick={() => onTabChange('problema')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="tab-icon">😔</span>
      <span className="tab-text">Desafíos actuales</span>
    </motion.button>
    
    <motion.button
      className={`tab ${activeTab === 'solucion' ? 'active' : ''}`}
      onClick={() => onTabChange('solucion')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="tab-icon">✨</span>
      <span className="tab-text">Tu transformación</span>
    </motion.button>
    
    <motion.div 
      className="tab-indicator"
      animate={{ x: activeTab === 'problema' ? 0 : '100%' }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </motion.div>
)