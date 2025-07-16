import { useState } from 'react'

const LeadMagnet = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    console.log('Email:', email)
    setSubmitted(true)
    
    // Abrir la guía después de un breve delay para mostrar confirmación
    setTimeout(() => {
      openGuide()
    }, 500)
    
    // Reset del formulario
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const openGuide = () => {
    if (!email && !submitted) {
      alert('Por favor ingresa tu email primero')
      return
    }
    
    // Abrir la guía directamente desde la raíz del proyecto
    try {
      const newWindow = window.open('/guia-fidelizacion.html', '_blank')
      if (!newWindow) {
        // Si el popup fue bloqueado, intentar navegación directa
        window.location.href = '/guia-fidelizacion.html'
      }
    } catch (error) {
      console.log('Error opening guide:', error)
      // Fallback: navegación directa
      window.location.href = '/guia-fidelizacion.html'
    }
  }

  const GuideContent = () => (
    <div className="guide-modal">
      <div className="guide-content">
        <button 
          className="close-btn"
          onClick={() => setShowGuide(false)}
        >
          ×
        </button>
        
        <h2>🎉 ¡Guía Secreta de Fidelización VIP!</h2>
        
        <div className="guide-sections">
          <div className="guide-section">
            <h3>💎 Estrategia #1: El Toque Personal</h3>
            <p>Personaliza cada interacción recordando detalles específicos de tus pacientes. Usa un CRM para guardar sus preferencias, fechas importantes y historial de tratamientos.</p>
          </div>
          
          <div className="guide-section">
            <h3>🌟 Estrategia #2: Programa de Lealtad Exclusivo</h3>
            <p>Crea un sistema de puntos donde cada tratamiento suma beneficios. Ofrece descuentos exclusivos y acceso prioritario a nuevos servicios.</p>
          </div>
          
          <div className="guide-section">
            <h3>💖 Estrategia #3: Experiencia 360°</h3>
            <p>Desde la recepción hasta el seguimiento post-tratamiento, cada punto de contacto debe ser memorable y profesional.</p>
          </div>
          
          <div className="guide-section">
            <h3>📱 Estrategia #4: Comunicación Constante</h3>
            <p>Mantén contacto regular con newsletters, tips de cuidado personalizado y recordatorios de citas de seguimiento.</p>
          </div>
          
          <div className="guide-section">
            <h3>🎁 Estrategia #5: Sorpresas Inesperadas</h3>
            <p>Pequeños detalles como un regalo en su cumpleaños o un descuento sorpresa pueden crear una conexión emocional duradera.</p>
          </div>
        </div>
        
        <div className="guide-footer">
          <p>¿Quieres implementar estas estrategias en tu clínica?</p>
          <button 
            className="contact-btn"
            onClick={() => window.open('mailto:info@tuclinica.com', '_blank')}
          >
            Contáctanos para más información
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <section className="lead-magnet">
        <div className="container">
          <div className="content-wrapper">
            <h2>🎁 Regalo Exclusivo</h2>
            <p>Descargá GRATIS la Guía Secreta para Fidelizar Pacientes VIP en tu Clínica Estética</p>
            
            <div className="lead-form">
              <input 
                type="email" 
                placeholder="Tu email profesional"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
              <button 
                className="cta-submit"
                onClick={handleSubmit}
                disabled={submitted || !email}
              >
                {submitted ? '¡Enviado! 💕' : 'Obtener Guía Gratis'}
              </button>
            </div>
            
            {submitted && (
              <div className="success-message">
                <p>✅ ¡Email registrado! Abriendo tu guía...</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {showGuide && <GuideContent />}
      
      <style jsx>{`
        .lead-magnet {
          padding: 80px 20px;
          background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .lead-magnet::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .lead-magnet h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .lead-magnet p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .lead-form {
          max-width: 500px;
          margin: 40px auto 0;
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .lead-form input {
          width: 100%;
          padding: 18px 25px;
          border: none;
          border-radius: 30px;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        
        .lead-form input:focus {
          outline: none;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .lead-form input:disabled {
          background: #f0f0f0;
          cursor: not-allowed;
        }
        
        .cta-submit {
          background: white;
          color: #ff6b9d;
          width: 100%;
          padding: 18px 30px;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .cta-submit:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,255,255,0.4);
          background: #f8f8f8;
        }
        
        .cta-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .success-message {
          margin-top: 20px;
          padding: 15px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .guide-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: modalFadeIn 0.3s ease;
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .guide-content {
          background: white;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          border-radius: 20px;
          position: relative;
          margin: 20px;
          color: #333;
          animation: modalSlideIn 0.3s ease;
        }
        
        @keyframes modalSlideIn {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .close-btn {
          position: absolute;
          top: 20px;
          right: 30px;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #999;
          transition: color 0.3s ease;
        }
        
        .close-btn:hover {
          color: #ff6b9d;
        }
        
        .guide-content h2 {
          color: #ff6b9d;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
        }
        
        .guide-sections {
          margin-bottom: 30px;
        }
        
        .guide-section {
          margin-bottom: 25px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #ff6b9d;
        }
        
        .guide-section h3 {
          color: #ff6b9d;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .guide-section p {
          line-height: 1.6;
          color: #555;
        }
        
        .guide-footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .contact-btn {
          background: #ff6b9d;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
        }
        
        .contact-btn:hover {
          background: #ff5a8a;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .lead-magnet h2 {
            font-size: 2rem;
          }
          
          .lead-magnet p {
            font-size: 1.1rem;
          }
          
          .lead-form {
            padding: 20px;
          }
          
          .guide-content {
            padding: 20px;
            margin: 10px;
          }
          
          .guide-content h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default LeadMagnet