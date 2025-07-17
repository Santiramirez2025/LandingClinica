// hooks/useMouseParallax.js
import { useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

export const useMouseParallax = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const backgroundX = useTransform(mouseX, [-100, 100], [-5, 5])
  const backgroundY = useTransform(mouseY, [-100, 100], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x / 5)
      mouseY.set(y / 5)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return { backgroundX, backgroundY }
}