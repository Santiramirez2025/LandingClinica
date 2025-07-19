import { useState } from 'react'

const LeadMagnet = () => {
  const [clicked, setClicked] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleClick = () => {
    setClicked(true)
    
    // Mostrar confirmación brevemente
    setTimeout(() => {
      openGuide()
    }, 500)
    
    // Reset del botón
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  const openGuide = () => {
    // Abrir la guía en una nueva pestaña
    setShowGuide(true)
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
              <button 
                className="cta-submit"
                onClick={handleClick}
                disabled={clicked}
              >
                {clicked ? '¡Abriendo Guía! 💕' : 'Obtener Guía Gratis'}
              </button>
            </div>
            
            {clicked && (
              <div className="success-message">
                <p>✅ ¡Preparando tu guía exclusiva!</p>
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
          min-height: 100vh;
          display: flex;
          align-items: center;
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
          width: 100%;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .lead-magnet h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
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
        
        .cta-submit {
          background: white;
          color: #ff6b9d;
          width: 100%;
          padding: 20px 30px;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1.2rem;
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
          padding: 20px;
          box-sizing: border-box;
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
          color: #333;
          animation: modalSlideIn 0.3s ease;
          width: 100%;
          box-sizing: border-box;
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
          z-index: 10;
        }
        
        .close-btn:hover {
          color: #ff6b9d;
        }
        
        .guide-content h2 {
          color: #ff6b9d;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
          padding-right: 50px;
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
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .lead-magnet {
            padding: 60px 15px;
            min-height: 100vh;
          }
          
          .lead-magnet h2 {
            font-size: 2rem;
            margin-bottom: 15px;
          }
          
          .lead-magnet p {
            font-size: 1.1rem;
            margin-bottom: 30px;
            padding: 0 10px;
          }
          
          .lead-form {
            padding: 25px 20px;
            margin: 30px auto 0;
            border-radius: 15px;
          }
          
          .cta-submit {
            padding: 18px 25px;
            font-size: 1.1rem;
          }
          
          .guide-modal {
            padding: 10px;
            align-items: flex-start;
            padding-top: 20px;
          }
          
          .guide-content {
            padding: 25px 20px;
            margin: 0;
            max-height: 85vh;
            border-radius: 15px;
          }
          
          .guide-content h2 {
            font-size: 1.6rem;
            padding-right: 40px;
            margin-bottom: 25px;
          }
          
          .close-btn {
            top: 15px;
            right: 20px;
            font-size: 1.8rem;
          }
          
          .guide-section {
            padding: 15px;
            margin-bottom: 20px;
          }
          
          .guide-section h3 {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }
          
          .guide-section p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .contact-btn {
            padding: 12px 25px;
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 480px) {
          .lead-magnet {
            padding: 40px 10px;
          }
          
          .lead-magnet h2 {
            font-size: 1.7rem;
            line-height: 1.3;
          }
          
          .lead-magnet p {
            font-size: 1rem;
            padding: 0 5px;
          }
          
          .lead-form {
            padding: 20px 15px;
            margin: 25px auto 0;
          }
          
          .cta-submit {
            padding: 16px 20px;
            font-size: 1rem;
          }
          
          .guide-content {
            padding: 20px 15px;
            max-height: 80vh;
          }
          
          .guide-content h2 {
            font-size: 1.4rem;
            padding-right: 35px;
          }
          
          .close-btn {
            top: 12px;
            right: 15px;
            font-size: 1.6rem;
          }
          
          .guide-section {
            padding: 12px;
          }
          
          .guide-section h3 {
            font-size: 1rem;
          }
          
          .guide-section p {
            font-size: 0.85rem;
          }
          
          .contact-btn {
            padding: 10px 20px;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 360px) {
          .lead-magnet h2 {
            font-size: 1.5rem;
          }
          
          .lead-magnet p {
            font-size: 0.95rem;
          }
          
          .guide-content h2 {
            font-size: 1.3rem;
          }
          
          .guide-section h3 {
            font-size: 0.95rem;
          }
          
          .guide-section p {
            font-size: 0.8rem;
          }
        }
        
        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .lead-magnet {
            padding: 30px 15px;
            min-height: auto;
          }
          
          .lead-magnet h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }
          
          .lead-magnet p {
            font-size: 1rem;
            margin-bottom: 20px;
          }
          
          .lead-form {
            margin: 20px auto 0;
            padding: 20px;
          }
          
          .guide-modal {
            padding: 15px;
            align-items: flex-start;
          }
          
          .guide-content {
            max-height: 85vh;
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default LeadMagnet