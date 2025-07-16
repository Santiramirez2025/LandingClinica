import HeroSection from './components/HeroSection'
import ProblemaVsSolucion from './components/ProblemaVsSolucion'
import LeadMagnet from './components/LeadMagnet'
import PricingSection from './components/PricingSection'  // <-- Importa el nuevo componente
import CTAFlotante from './components/CTAFlotante'

function App() {
  return (
    <>
      <HeroSection />
      <ProblemaVsSolucion />
      <LeadMagnet />
      <PricingSection />     {/* Aquí agregas la sección de precios */}
      <CTAFlotante />
    </>
  )
}

export default App
