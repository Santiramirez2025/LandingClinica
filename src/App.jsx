import HeroSection from './components/HeroSection'
import ProblemaVsSolucion from './components/ProblemaVsSolucion'
import LeadMagnet from './components/LeadMagnet'
import ExploraAppSection from './components/ExploraAppSection'  // Nueva sección
import PricingSection from './components/PricingSection'  
import CTAFlotante from './components/CTAFlotante'

function App() {
  return (
    <>
      <HeroSection />
      <ExploraAppSection />     {/* Movido a segunda posición */}
      <ProblemaVsSolucion />
      <LeadMagnet />
      <PricingSection />
      <CTAFlotante />
    </>
  )
}

export default App