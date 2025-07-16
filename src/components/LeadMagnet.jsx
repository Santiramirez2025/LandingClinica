import { useState } from 'react'
import { motion } from 'framer-motion'

const LeadMagnet = () => {
 const [email, setEmail] = useState('')
 const [submitted, setSubmitted] = useState(false)

 const handleSubmit = (e) => {
   e.preventDefault()
   console.log('Email:', email)
   setSubmitted(true)
   setTimeout(() => setSubmitted(false), 3000)
 }

 const openGuide = () => {
   window.open('/guia-fidelizacion.html', '_blank')
 }

 return (
   <section className="lead-magnet">
     <div className="container">
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
       >
         <h2>Regalo Exclusivo</h2>
         <p>Descargá GRATIS la Guía Secreta para Fidelizar Pacientes VIP en tu Clínica Estética</p>
         
         <form className="lead-form" onSubmit={handleSubmit}>
           <input 
             type="email" 
             placeholder="Tu email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
           <button 
             type="button" 
             className="cta-submit"
             onClick={openGuide}
           >
             {submitted ? '¡Enviado! 💕' : 'Ver Guía Gratis'}
           </button>
         </form>
       </motion.div>
     </div>
     
     <style jsx>{`
       .lead-magnet {
         padding: 80px 0;
         background: var(--rosa-empolvado);
         color: white;
         text-align: center;
       }
       
       .lead-magnet h2 {
         color: white;
         margin-bottom: 20px;
       }
       
       .lead-magnet p {
         font-size: 1.2rem;
         margin-bottom: 30px;
       }
       
       .lead-form {
         max-width: 500px;
         margin: 40px auto 0;
       }
       
       .lead-form input {
         width: 100%;
         padding: 15px;
         border: none;
         border-radius: 30px;
         margin-bottom: 20px;
         font-family: 'Poppins', sans-serif;
       }
       
       .cta-submit {
         background: white;
         color: var(--rosa-empolvado);
         width: 100%;
         padding: 15px 30px;
         border: none;
         border-radius: 30px;
         font-weight: 500;
         cursor: pointer;
         transition: all 0.3s ease;
       }
       
       .cta-submit:hover {
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
       }
     `}</style>
   </section>
 )
}

export default LeadMagnet