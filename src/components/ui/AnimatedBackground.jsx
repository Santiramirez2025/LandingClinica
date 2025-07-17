// components/ui/AnimatedBackground.js
import { motion } from 'framer-motion'

export const AnimatedBackground = ({ backgroundX, backgroundY }) => (
  <motion.div 
    className="background-gradient"
    style={{ x: backgroundX, y: backgroundY }}
  >
    <div className="gradient-sphere sphere-1" />
    <div className="gradient-sphere sphere-2" />
  </motion.div>
)