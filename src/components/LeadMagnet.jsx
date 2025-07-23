import { useState, useEffect } from 'react'

const LeadMagnet = () => {
  const [clicked, setClicked] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Animación de entrada progresiva
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownload = () => {
    setClicked(true)
    
    // Crear y ejecutar descarga real del PDF
    const link = document.createElement('a')
    link.href = './guia-fidelizacion.pdf'
    link.download = 'guia-fidelizacion-pacientes-vip.pdf'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Mostrar modal de confirmación después de iniciar descarga
    setTimeout(() => {
      setShowGuide(true)
      setClicked(false)
    }, 800)
  }

  return (
    <>
      <style jsx>{`
        /* Variables CSS optimizadas */
        :root {
          --primary-gradient: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          --bg-gradient: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
          --text-dark: #1a1a1a;
          --text-medium: #4a4a4a;
          --text-light: #6a6a6a;
          --accent-color: #E8B4B8;
          --success-color: #10B981;
          --border-radius: clamp(12px, 2vw, 20px);
          --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.08);
          --shadow-strong: 0 8px 40px rgba(0, 0, 0, 0.12);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero {
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 1.5rem);
          position: relative;
          overflow: hidden;
          background: var(--bg-gradient);
        }

        /* Orbs optimizados para performance */
        .orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          will-change: transform;
          opacity: 0.6;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          will-change: transform;
        }

        .orb1 {
          width: min(35vw, 300px);
          height: min(35vw, 300px);
          background: radial-gradient(circle, rgba(255, 218, 225, 0.4) 0%, transparent 70%);
          top: -10%;
          right: -10%;
          animation: float1 20s ease-in-out infinite;
        }

        .orb2 {
          width: min(30vw, 250px);
          height: min(30vw, 250px);
          background: radial-gradient(circle, rgba(255, 237, 213, 0.4) 0%, transparent 70%);
          bottom: -10%;
          left: -10%;
          animation: float2 25s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -15px) rotate(180deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 15px) rotate(-180deg); }
        }

        .container {
          width: 100%;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          gap: clamp(1.25rem, 2.5vw, 1.75rem);
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          animation: ${isVisible ? 'slideInUp 0.8s ease forwards' : 'none'};
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.2) 0%, rgba(255, 237, 213, 0.2) 100%);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 180, 184, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #B86B6B;
          box-shadow: var(--shadow-soft);
          animation: ${isVisible ? 'badge-pulse 2s ease infinite' : 'none'};
          animation-delay: 0.3s;
        }

        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .title {
          font-size: clamp(2.25rem, 7vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-dark);
          margin: 0;
          animation-delay: 0.1s;
        }

        .accent {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient-shift 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        .subtitle {
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0;
          max-width: 580px;
          animation-delay: 0.2s;
        }

        .subtitle strong {
          color: #B86B6B;
          font-weight: 600;
        }

        .benefits {
          display: flex;
          gap: clamp(0.75rem, 2vw, 1.25rem);
          justify-content: center;
          flex-wrap: wrap;
          margin: clamp(0.75rem, 2vw, 1.5rem) 0;
          animation-delay: 0.4s;
        }

        .benefit {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          padding: 0.75rem 1.25rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.875rem;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
          cursor: default;
        }

        .benefit:hover {
          transform: translateY(-2px);
          border-color: var(--accent-color);
          box-shadow: var(--shadow-strong);
        }

        .cta {
          background: linear-gradient(135deg, var(--text-dark) 0%, #333 100%);
          color: white;
          padding: 1.25rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--shadow-strong);
          position: relative;
          overflow: hidden;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          animation-delay: 0.5s;
        }

        .cta:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta:hover:not(:disabled):before {
          left: 100%;
        }

        .cta:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .cta:active {
          transform: translateY(-1px);
        }

        .cta:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .cta.loading {
          animation: loading-pulse 1.5s infinite;
        }

        @keyframes loading-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .urgency {
          font-size: 0.875rem;
          color: var(--text-light);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          animation-delay: 0.6s;
        }

        .urgency::before {
          content: '🔥';
          animation: flicker 2s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Modal mejorado */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 26, 26, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--bg-gradient);
          border-radius: clamp(16px, 2.5vw, 24px);
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(232, 180, 184, 0.2);
        }

        @keyframes slideIn {
          from {
            transform: translateY(40px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          font-weight: 500;
        }

        .close:hover {
          background: white;
          transform: rotate(90deg) scale(1.1);
          border-color: var(--accent-color);
        }

        .modal-header {
          background: var(--primary-gradient);
          padding: 2.5rem 2rem 2rem;
          text-align: center;
          color: white;
          position: relative;
        }

        .modal-header h2 {
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          margin-bottom: 0.5rem;
          font-weight: 800;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .modal-header p {
          opacity: 0.95;
          font-size: 1rem;
          font-weight: 500;
        }

        .download-success {
          padding: 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce-in 0.6s ease;
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        .download-success h3 {
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .download-success p {
          color: var(--text-medium);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .tips {
          max-width: 400px;
          margin: 0 auto;
        }

        .tips h4 {
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1rem;
        }

        .tip {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius);
          margin-bottom: 0.5rem;
          color: var(--text-medium);
          font-size: 0.875rem;
          border-left: 3px solid var(--accent-color);
          transition: var(--transition);
          text-align: left;
        }

        .tip:hover {
          background: white;
          transform: translateX(4px);
        }

        .strategies {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .strategies > h3 {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .strategy {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 180, 184, 0.15);
          border-radius: var(--border-radius);
          border-left: 3px solid var(--accent-color);
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }

        .strategy:hover {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-strong);
          transform: translateX(4px);
          border-left-color: #D4AF37;
        }

        .icon {
          font-size: 1.5rem;
          width: 44px;
          height: 44px;
          background: var(--primary-gradient);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-soft);
        }

        .strategy h3 {
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .strategy p {
          color: var(--text-medium);
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .modal-cta {
          padding: 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(232, 180, 184, 0.15);
        }

        .modal-cta h3 {
          color: var(--text-dark);
          margin-bottom: 1.25rem;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .modal-cta button {
          background: linear-gradient(135deg, var(--text-dark) 0%, #333 100%);
          color: white;
          padding: 1rem 1.75rem;
          border: none;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          margin: 0.5rem;
          box-shadow: var(--shadow-strong);
        }

        .modal-cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(26, 26, 26, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.95) !important;
          color: var(--text-dark) !important;
          border: 2px solid rgba(232, 180, 184, 0.4) !important;
        }

        .secondary-btn:hover {
          background: white !important;
          border-color: var(--accent-color) !important;
          box-shadow: var(--shadow-soft) !important;
        }

        /* Responsive optimizado */
        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem 1rem;
          }

          .container {
            gap: 1rem;
          }

          .benefits {
            flex-direction: column;
            gap: 0.75rem;
          }

          .benefit {
            font-size: 0.8rem;
            padding: 0.6rem 1rem;
          }

          .cta {
            font-size: 1rem;
            padding: 1rem 1.5rem;
            width: 100%;
            max-width: 280px;
          }

          .modal-header {
            padding: 2rem 1.5rem 1.5rem;
          }

          .strategies {
            padding: 1.5rem 1rem;
            gap: 0.75rem;
          }

          .strategy {
            flex-direction: column;
            padding: 1.25rem;
            gap: 0.75rem;
            text-align: center;
          }

          .download-success {
            padding: 1.5rem 1rem;
          }

          .modal-cta {
            padding: 1.5rem 1rem;
          }

          .modal-cta button {
            display: block;
            width: 100%;
            margin: 0.5rem 0;
          }
        }

        /* Accessibility y Performance */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .cta:focus-visible,
        .close:focus-visible,
        .modal-cta button:focus-visible {
          outline: 2px solid var(--accent-color);
          outline-offset: 2px;
        }

        /* Optimización de contraste */
        @media (prefers-contrast: high) {
          :root {
            --text-medium: #2a2a2a;
            --text-light: #4a4a4a;
          }
        }
      `}</style>

      <section className="hero">
        <div className="orbs">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
        </div>
        
        <div className="container">
          <div className="badge">🎁 Oferta Limitada - Solo Hoy</div>
          
          <h1 className="title">
            <span className="accent">Convierte Pacientes</span>
            <br />
            en Fans VIP
          </h1>
          
          <p className="subtitle">
            La guía secreta que usan las clínicas más exitosas para 
            <strong> fidelizar pacientes premium</strong> y 
            <strong> triplicar su facturación</strong> en 90 días
          </p>

          <div className="benefits">
            <div className="benefit">👥 +87% Retención</div>
            <div className="benefit">⭐ 5★ Reseñas</div>
            <div className="benefit">🛡️ 100% Probado</div>
          </div>

          <button 
            className={`cta ${clicked ? 'loading' : ''}`}
            onClick={handleDownload}
            disabled={clicked}
            aria-label="Descargar guía gratuita para fidelizar pacientes"
          >
            {clicked ? (
              <>
                <span>📥</span>
                <span>¡Descargando tu guía!</span>
              </>
            ) : (
              <>
                <span>🎁</span>
                <span>Descargar Guía Gratis</span>
              </>
            )}
          </button>
          
          <p className="urgency">137 profesionales ya la descargaron hoy</p>
        </div>
      </section>
      
      {showGuide && (
        <div className="modal" onClick={() => setShowGuide(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close" 
              onClick={() => setShowGuide(false)}
              aria-label="Cerrar modal"
            >
              ×
            </button>
            
            <div className="modal-header">
              <h2>🎉 ¡Descarga Completada!</h2>
              <p>Tu Guía VIP ya está guardada en tu dispositivo</p>
            </div>

            <div className="download-success">
              <div className="success-icon">✅</div>
              <h3>Archivo descargado exitosamente</h3>
              <p>Busca <strong>"guia-fidelizacion-pacientes-vip.pdf"</strong> en tu carpeta de descargas</p>
              
              <div className="tips">
                <h4>💡 Consejos para aprovechar tu guía:</h4>
                <div className="tip">📖 Abre el PDF con cualquier lector</div>
                <div className="tip">📱 Descárgalo en tu móvil también</div>
                <div className="tip">🖨️ Imprímelo para referencia rápida</div>
                <div className="tip">📤 Compártelo con tu equipo</div>
              </div>
            </div>

            <div className="strategies">
              <h3>Vista previa de lo que encontrarás:</h3>
              
              <div className="strategy">
                <div className="icon">💖</div>
                <div>
                  <h3>El Toque Personal que Enamora</h3>
                  <p>Crea experiencias únicas recordando cada detalle importante de tus pacientes.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">⭐</div>
                <div>
                  <h3>Club VIP de Beneficios Exclusivos</h3>
                  <p>Diseña un programa de lealtad irresistible con acceso anticipado.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">✨</div>
                <div>
                  <h3>Experiencia 360° Memorable</h3>
                  <p>Cada punto de contacto debe brillar: bienvenida, tratamiento y seguimiento.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">💬</div>
                <div>
                  <h3>Comunicación que Conecta</h3>
                  <p>Mantén una relación continua con contenido de valor personalizado.</p>
                </div>
              </div>

              <div className="strategy">
                <div className="icon">🎁</div>
                <div>
                  <h3>Sorpresas que Crean Vínculos</h3>
                  <p>Los detalles inesperados marcan la diferencia y generan lealtad.</p>
                </div>
              </div>
            </div>

            <div className="modal-cta">
              <h3>¿Lista para transformar tu clínica?</h3>
              <button onClick={() => window.open('mailto:info@tuclinica.com', '_blank')}>
                💬 Solicitar Consultoría Gratuita
              </button>
              <button 
                className="secondary-btn"
                onClick={handleDownload}
              >
                📥 Descargar Nuevamente
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LeadMagnet