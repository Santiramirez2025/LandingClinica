import { useState } from 'react'

const LeadMagnet = () => {
  const [clicked, setClicked] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      setShowGuide(true)
      setClicked(false)
    }, 800)
  }

  return (
    <>
      <section className="hero">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        
        <div className="content">
          <div className="badge">🎁 Oferta Limitada - Solo Hoy</div>
          
          <h1>
            <span className="gradient-text">Convierte Pacientes</span>
            <br />
            <span>en Fans VIP</span>
          </h1>
          
          <p className="subtitle">
            Descubre la guía secreta que las clínicas más exitosas usan para 
            <strong> fidelizar pacientes premium</strong> y 
            <strong> triplicar su facturación</strong>
          </p>

          <div className="benefits">
            <div className="benefit">👥 +87% Retención</div>
            <div className="benefit">⭐ 5★ Reseñas</div>
            <div className="benefit">🛡️ 100% Probado</div>
          </div>

          <button 
            className={`cta ${clicked ? 'loading' : ''}`}
            onClick={handleClick}
            disabled={clicked}
          >
            {clicked ? '✨ ¡Preparando tu regalo!' : '🎁 Obtener Guía Gratis Ahora →'}
          </button>
          
          <p className="urgency">🔥 137 profesionales ya la descargaron hoy</p>
        </div>
      </section>
      
      {showGuide && (
        <div className="modal" onClick={() => setShowGuide(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setShowGuide(false)}>×</button>
            
            <div className="modal-header">
              <h2>🎉 ¡Tu Guía VIP Está Lista!</h2>
              <p>5 Estrategias Exclusivas para Fidelizar Pacientes Premium</p>
            </div>

            <div className="strategies">
              <div className="strategy">
                <div className="icon">💖</div>
                <div>
                  <h3>El Toque Personal que Enamora</h3>
                  <p>Crea experiencias únicas recordando cada detalle. Usa un CRM inteligente para anticiparte a sus necesidades.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">⭐</div>
                <div>
                  <h3>Club VIP de Beneficios Exclusivos</h3>
                  <p>Diseña un programa de lealtad irresistible con acceso anticipado a tratamientos innovadores.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">✨</div>
                <div>
                  <h3>Experiencia 360° Memorable</h3>
                  <p>Cada punto de contacto debe brillar: desde la bienvenida hasta el seguimiento post-tratamiento.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">💬</div>
                <div>
                  <h3>Comunicación que Conecta</h3>
                  <p>Mantén una relación continua con contenido de valor y newsletters exclusivas.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">🎁</div>
                <div>
                  <h3>Sorpresas que Crean Vínculos</h3>
                  <p>Los detalles inesperados marcan la diferencia: regalos y upgrades sorpresa.</p>
                </div>
              </div>
            </div>

            <div className="modal-cta">
              <h3>¿Lista para transformar tu clínica?</h3>
              <button onClick={() => window.open('mailto:info@tuclinica.com', '_blank')}>
                💬 Solicitar Consultoría Gratuita
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffeef8 0%, #fff 50%, #f8f0ff 100%);
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }

        .blob1 {
          width: 300px;
          height: 300px;
          background: #ff6b9d;
          top: -150px;
          right: -150px;
        }

        .blob2 {
          width: 400px;
          height: 400px;
          background: #c77dff;
          bottom: -200px;
          left: -200px;
          animation-delay: 5s;
        }

        .blob3 {
          width: 250px;
          height: 250px;
          background: #ffd93d;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge {
          display: inline-block;
          background: #ffe0ec;
          color: #d63384;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #2d3748;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ff6b9d 0%, #c77dff 50%, #ff6b9d 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s linear infinite;
        }

        @keyframes gradient {
          to {
            background-position: 200% center;
          }
        }

        .subtitle {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: #4a5568;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .subtitle strong {
          color: #ff6b9d;
          font-weight: 600;
        }

        .benefits {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .benefit {
          background: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          font-weight: 600;
          color: #2d3748;
          transform: translateY(0);
          transition: all 0.3s ease;
        }

        .benefit:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .cta {
          background: linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%);
          color: white;
          padding: 20px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255,107,157,0.3);
          position: relative;
          overflow: hidden;
        }

        .cta:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255,107,157,0.4);
        }

        .cta:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .cta.loading {
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .urgency {
          margin-top: 20px;
          color: #718096;
          font-size: 14px;
          animation: pulse 2s infinite;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: white;
          border-radius: 24px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideIn 0.4s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f7fafc;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .close:hover {
          background: #e2e8f0;
          transform: rotate(90deg);
        }

        .modal-header {
          background: linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%);
          padding: 40px;
          text-align: center;
          color: white;
        }

        .modal-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .modal-header p {
          opacity: 0.9;
          font-size: 1.1rem;
        }

        .strategies {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .strategy {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: #f8fafc;
          border-radius: 16px;
          border-left: 4px solid #ff6b9d;
          transition: all 0.3s ease;
        }

        .strategy:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transform: translateX(5px);
        }

        .icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .strategy h3 {
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 1.2rem;
        }

        .strategy p {
          color: #4a5568;
          line-height: 1.6;
        }

        .modal-cta {
          padding: 40px;
          text-align: center;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .modal-cta h3 {
          color: #2d3748;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        .modal-cta button {
          background: linear-gradient(135deg, #ff6b9d 0%, #c77dff 100%);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-cta button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,107,157,0.3);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 15px;
          }

          h1 {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .benefits {
            flex-direction: column;
            gap: 15px;
          }

          .benefit {
            font-size: 0.9rem;
            padding: 12px 20px;
          }

          .cta {
            font-size: 1rem;
            padding: 18px 30px;
          }

          .modal-header h2 {
            font-size: 1.5rem;
          }

          .strategies {
            padding: 20px;
          }

          .strategy {
            flex-direction: column;
            padding: 20px;
          }

          .blob {
            display: none;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .badge {
            font-size: 12px;
            padding: 6px 15px;
          }

          .modal-content {
            border-radius: 16px;
          }

          .modal-header {
            padding: 30px 20px;
          }

          .close {
            width: 35px;
            height: 35px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default LeadMagnet