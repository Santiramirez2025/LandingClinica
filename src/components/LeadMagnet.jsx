import { useState } from 'react'

const LeadMagnet = () => {
  const [clicked, setClicked] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const handleDownload = () => {
    setClicked(true)
    
    // Simular descarga
    setTimeout(() => {
      setShowGuide(true)
      setClicked(false)
    }, 800)
  }

  return (
    <>
      <style jsx>{`
        /* Variables CSS para mantener coherencia con el hero */
        :root {
          --primary-gradient: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
          --bg-gradient: linear-gradient(180deg, #FDFBF7 0%, #FFF8F3 100%);
          --text-dark: #1a1a1a;
          --text-medium: #4a4a4a;
          --text-light: #6a6a6a;
          --accent-color: #E8B4B8;
          --border-radius: clamp(16px, 2vw, 24px);
          --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.06);
          --shadow-strong: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero {
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem);
          position: relative;
          overflow: hidden;
          background: var(--bg-gradient);
        }

        /* Orbs de fondo igual que el hero original */
        .orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          will-change: transform;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          will-change: transform;
        }

        .orb1 {
          width: min(40vw, 400px);
          height: min(40vw, 400px);
          background: radial-gradient(circle, rgba(255, 218, 225, 0.6) 0%, transparent 70%);
          top: -15%;
          right: -15%;
          animation: float1 25s ease-in-out infinite;
        }

        .orb2 {
          width: min(35vw, 350px);
          height: min(35vw, 350px);
          background: radial-gradient(circle, rgba(255, 237, 213, 0.6) 0%, transparent 70%);
          bottom: -15%;
          left: -15%;
          animation: float2 30s ease-in-out infinite;
        }

        .orb3 {
          width: min(30vw, 300px);
          height: min(30vw, 300px);
          background: radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%);
          top: 50%;
          left: 20%;
          animation: float3 35s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(120deg); }
          66% { transform: translate(-20px, 10px) rotate(240deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -15px) rotate(-240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(25px, 35px) rotate(180deg); }
          66% { transform: translate(-30px, -20px) rotate(-180deg); }
        }

        .container {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
          gap: clamp(1.5rem, 3vw, 2rem);
          text-align: center;
        }

        .badge {
          background: linear-gradient(135deg, rgba(232, 180, 184, 0.15) 0%, rgba(255, 237, 213, 0.15) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #B86B6B;
          box-shadow: var(--shadow-soft);
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-dark);
          margin: 0;
        }

        .accent {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
        }

        @keyframes gradient-shift {
          to { background-position: 200% center; }
        }

        .subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0;
          max-width: 600px;
        }

        .subtitle strong {
          color: #B86B6B;
          font-weight: 600;
        }

        .benefits {
          display: flex;
          gap: clamp(1rem, 3vw, 1.5rem);
          justify-content: center;
          flex-wrap: wrap;
          margin: clamp(1rem, 3vw, 2rem) 0;
        }

        .benefit {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          padding: 0.875rem 1.5rem;
          border-radius: var(--border-radius);
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.9rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-soft);
        }

        .benefit:hover {
          transform: translateY(-2px);
          border-color: var(--accent-color);
          box-shadow: var(--shadow-strong);
        }

        .cta {
          background: linear-gradient(135deg, var(--text-dark) 0%, #333 100%);
          color: white;
          padding: 1.25rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-strong);
          position: relative;
          overflow: hidden;
        }

        .cta:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
        }

        .cta:active {
          transform: translateY(0);
        }

        .cta:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .cta.loading {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        .urgency {
          font-size: 0.875rem;
          color: var(--text-light);
          font-weight: 500;
          animation: subtle-pulse 3s infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        /* Modal con el mismo estilo */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 26, 26, 0.6);
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
          border-radius: clamp(20px, 3vw, 32px);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-strong);
          border: 1px solid rgba(232, 180, 184, 0.1);
        }

        @keyframes slideIn {
          from {
            transform: translateY(50px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(232, 180, 184, 0.2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          font-weight: 600;
        }

        .close:hover {
          background: white;
          transform: rotate(90deg) scale(1.1);
          border-color: var(--accent-color);
        }

        .modal-header {
          background: var(--primary-gradient);
          padding: 3rem 2rem 2rem;
          text-align: center;
          color: white;
          position: relative;
        }

        .modal-header h2 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          margin-bottom: 0.5rem;
          font-weight: 800;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .modal-header p {
          opacity: 0.9;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .download-success {
          padding: 2.5rem 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(232, 180, 184, 0.1);
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: bounce-in 0.6s ease;
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        .download-success h3 {
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .download-success p {
          color: var(--text-medium);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .tips {
          text-align: left;
          max-width: 450px;
          margin: 0 auto;
        }

        .tips h4 {
          color: var(--text-dark);
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 600;
        }

        .tip {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          padding: 0.875rem 1rem;
          border-radius: var(--border-radius);
          margin-bottom: 0.5rem;
          color: var(--text-medium);
          font-size: 0.9rem;
          border-left: 3px solid var(--accent-color);
          transition: all 0.2s ease;
        }

        .tip:hover {
          background: white;
          transform: translateX(5px);
        }

        .strategies {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .strategies > h3 {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .strategy {
          display: flex;
          gap: 1.5rem;
          padding: 1.8rem;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(232, 180, 184, 0.1);
          border-radius: var(--border-radius);
          border-left: 4px solid var(--accent-color);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-soft);
        }

        .strategy:hover {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: var(--shadow-strong);
          transform: translateX(8px);
          border-color: #D4AF37;
        }

        .icon {
          font-size: 1.8rem;
          width: 50px;
          height: 50px;
          background: var(--primary-gradient);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-soft);
        }

        .strategy h3 {
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .strategy p {
          color: var(--text-medium);
          line-height: 1.6;
        }

        .modal-cta {
          padding: 2.5rem 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(232, 180, 184, 0.1);
        }

        .modal-cta h3 {
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .modal-cta button {
          background: linear-gradient(135deg, var(--text-dark) 0%, #333 100%);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          margin: 0.5rem;
          box-shadow: var(--shadow-strong);
        }

        .modal-cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(26, 26, 26, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.9) !important;
          color: var(--text-dark) !important;
          border: 2px solid rgba(232, 180, 184, 0.3) !important;
        }

        .secondary-btn:hover {
          background: white !important;
          border-color: var(--accent-color) !important;
          box-shadow: var(--shadow-soft) !important;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem 1rem;
          }

          .benefits {
            flex-direction: column;
            gap: 1rem;
          }

          .benefit {
            font-size: 0.85rem;
            padding: 0.75rem 1.25rem;
          }

          .cta {
            font-size: 1rem;
            padding: 1rem 2rem;
          }

          .modal-header {
            padding: 2rem 1.5rem 1.5rem;
          }

          .strategies {
            padding: 1.5rem 1rem;
          }

          .strategy {
            flex-direction: column;
            padding: 1.5rem;
            gap: 1rem;
          }

          .download-success {
            padding: 2rem 1.5rem;
          }

          .tips {
            text-align: center;
          }

          .modal-cta {
            padding: 2rem 1.5rem;
          }

          .modal-cta button {
            display: block;
            width: 100%;
            margin: 0.75rem 0;
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
          outline: 3px solid var(--accent-color);
          outline-offset: 2px;
        }
      `}</style>

      <section className="hero">
        <div className="orbs">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="orb orb3"></div>
        </div>
        
        <div className="container">
          <div className="badge">🎁 Oferta Limitada - Solo Hoy</div>
          
          <h1 className="title">
            <span className="accent">Convierte Pacientes</span>
            <br />
            en Fans VIP
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
            onClick={handleDownload}
            disabled={clicked}
          >
            {clicked ? '📥 ¡Descargando tu guía!' : '🎁 Descargar Guía Gratis Ahora →'}
          </button>
          
          <p className="urgency">🔥 137 profesionales ya la descargaron hoy</p>
        </div>
      </section>
      
      {showGuide && (
        <div className="modal" onClick={() => setShowGuide(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setShowGuide(false)}>×</button>
            
            <div className="modal-header">
              <h2>🎉 ¡Descarga Completada!</h2>
              <p>Tu Guía VIP ya está guardada en tu dispositivo</p>
            </div>

            <div className="download-success">
              <div className="success-icon">✅</div>
              <h3>Archivo descargado exitosamente</h3>
              <p>Busca el archivo <strong>"guia-fidelizacion-pacientes-vip.html"</strong> en tu carpeta de descargas</p>
              
              <div className="tips">
                <h4>💡 Consejos para aprovechar tu guía:</h4>
                <div className="tip">🖥️ Abre el archivo con cualquier navegador web</div>
                <div className="tip">📱 Funciona perfectamente en móvil y tablet</div>
                <div className="tip">📋 Guárdalo en favoritos para acceso rápido</div>
                <div className="tip">📤 Compártelo con tu equipo de trabajo</div>
              </div>
            </div>

            <div className="strategies">
              <h3>Vista previa de lo que encontrarás:</h3>
              
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