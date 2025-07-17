import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, MapPin, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react'

// Datos de los casos de éxito
const casosExito = [
  {
    id: 1,
    titulo: "Aumento de recurrencia y fidelización",
    ciudad: "Madrid",
    clientesPerfil: "Mujeres entre 30 y 50 años",
    problemaInicial: "Las clientas solo venían una vez y no volvían",
    solucionAplicada: "Sistema de seguimiento y beneficios VIP",
    resultados: {
      metrica: "30% de aumento en recurrencia",
      tiempo: "3 meses",
      beneficiosAdicionales: [
        "Agenda más llena",
        "Mayor satisfacción de clientas",
        "Clientas se sienten más cuidadas y valoradas"
      ]
    },
    icono: "🔄",
    color: "emerald",
    testimonial: "Una clínica en Madrid, que atendía principalmente a mujeres entre 30 y 50 años, enfrentaba el problema de que muchas clientas solo venían una vez y no volvían. Después de implementar nuestro sistema de seguimiento y beneficios VIP, lograron aumentar la recurrencia en un 30% en solo 3 meses. Esto no solo llenó su agenda, sino que mejoró la satisfacción de las clientas, que se sentían más cuidadas y valoradas."
  },
  {
    id: 2,
    titulo: "Reducción de costes en promociones",
    ciudad: "Barcelona",
    clientesPerfil: "Clientas regulares",
    problemaInicial: "Alto gasto en descuentos y promociones para llenar huecos",
    solucionAplicada: "Herramienta de fidelización y automatización",
    resultados: {
      metrica: "40% de reducción en presupuesto publicitario",
      tiempo: "Inmediato",
      beneficiosAdicionales: [
        "Aumento en fidelización",
        "Mejora en boca a boca",
        "Menos dependencia de ofertas constantes"
      ]
    },
    icono: "💰",
    color: "blue",
    testimonial: "En Barcelona, una clínica gastaba mucho en descuentos y promociones para llenar sus huecos. Tras comenzar a usar nuestra herramienta, pudieron reducir en un 40% el presupuesto en publicidad, porque la fidelización y el boca a boca aumentaron notablemente. Las clientas volvían sin que tuvieran que 'pelear' por ellas con ofertas constantes."
  },
  {
    id: 3,
    titulo: "Mejor gestión del tiempo y experiencia del cliente",
    ciudad: "Valencia",
    clientesPerfil: "Clientas VIP",
    problemaInicial: "Seguimiento manual muy tiempo-consumidor y pérdida de clientas",
    solucionAplicada: "Automatización de mensajes post-tratamiento y recordatorios VIP",
    resultados: {
      metrica: "25% de aumento en citas repetidas",
      tiempo: "Inmediato",
      beneficiosAdicionales: [
        "Ahorro de horas semanales",
        "Mejor experiencia del cliente",
        "Mayor satisfacción del equipo"
      ]
    },
    icono: "⏰",
    color: "purple",
    testimonial: "Una clínica en Valencia nos comentó que el seguimiento manual les llevaba mucho tiempo y que a veces se les escapaban clientas por falta de contacto. Con nuestro sistema, automatizaron los mensajes post-tratamiento y los recordatorios VIP. Esto les permitió mejorar la experiencia del cliente, ahorrar horas semanales y aumentar un 25% las citas repetidas."
  }
];

const colorConfig = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
    button: "bg-emerald-600 hover:bg-emerald-700",
    gradient: "from-emerald-500 to-emerald-600"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    button: "bg-blue-600 hover:bg-blue-700",
    gradient: "from-blue-500 to-blue-600"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    badge: "bg-purple-100 text-purple-800",
    button: "bg-purple-600 hover:bg-purple-700",
    gradient: "from-purple-500 to-purple-600"
  }
};

const CasosExito = () => {
  const [selectedCaso, setSelectedCaso] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = (caso) => {
    setSelectedCaso(caso)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setTimeout(() => setSelectedCaso(null), 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-700 font-semibold">Casos de Éxito Reales</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            <span className="font-normal">Transformaciones</span>{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              comprobadas
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubrí cómo más de 200 clínicas en España ya están revolucionando 
            su gestión y multiplicando sus resultados
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {casosExito.map((caso, index) => {
            const colors = colorConfig[caso.color]
            return (
              <motion.div
                key={caso.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105`}
                onClick={() => openPopup(caso)}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{caso.icono}</div>
                  <div className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                    <MapPin className="w-4 h-4 mr-1" />
                    {caso.ciudad}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {caso.titulo}
                </h3>
                
                <div className={`${colors.text} text-lg font-bold mb-4`}>
                  {caso.resultados.metrica}
                </div>
                
                <div className="text-gray-600 mb-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{caso.clientesPerfil}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Resultado en {caso.resultados.tiempo}</span>
                  </div>
                </div>
                
                <motion.button
                  className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver caso completo
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ¿Lista para ser el próximo caso de éxito?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Únete a las +200 clínicas que ya transformaron su negocio
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar demo gratuita
          </motion.button>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && selectedCaso && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`${colorConfig[selectedCaso.color].bg} p-8 rounded-t-2xl`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">{selectedCaso.icono}</div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {selectedCaso.titulo}
                      </h2>
                      <div className="flex items-center mt-2">
                        <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                        <span className="text-gray-600">{selectedCaso.ciudad}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                <div className={`${colorConfig[selectedCaso.color].text} text-xl font-bold mb-4`}>
                  {selectedCaso.resultados.metrica}
                </div>
              </div>

              <div className="p-8">
                {/* Testimonial */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Historia completa</h3>
                  <div className="bg-gray-50 rounded-lg p-6 italic text-gray-700 leading-relaxed">
                    "{selectedCaso.testimonial}"
                  </div>
                </div>

                {/* Detalles del caso */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Problema inicial</h4>
                    <p className="text-gray-600 mb-4">{selectedCaso.problemaInicial}</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-3">Solución aplicada</h4>
                    <p className="text-gray-600">{selectedCaso.solucionAplicada}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Perfil de clientas</h4>
                    <div className="flex items-center mb-4">
                      <Users className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="text-gray-600">{selectedCaso.clientesPerfil}</span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 mb-3">Tiempo de resultado</h4>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="text-gray-600">{selectedCaso.resultados.tiempo}</span>
                    </div>
                  </div>
                </div>

                {/* Beneficios adicionales */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Beneficios adicionales</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedCaso.resultados.beneficiosAdicionales.map((beneficio, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <motion.button
                    className={`bg-gradient-to-r ${colorConfig[selectedCaso.color].gradient} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quiero resultados similares
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CasosExito