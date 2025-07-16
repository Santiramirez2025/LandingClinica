import { motion } from 'framer-motion'

const CTAFlotante = () => {
  return (
    <motion.div 
      className="cta-flotante"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <a href="#demo" className="cta-primary">Probá el demo gratis</a>
      
      <style jsx>{`
        .cta-flotante {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
          .cta-flotante {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default CTAFlotante