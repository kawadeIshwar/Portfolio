import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [botField, setBotField] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Honeypot: if hidden field is filled, treat as success without sending
      if (botField && botField.trim().length > 0) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setShowModal(true)
        return
      }
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_5to9maw'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_aypkaui' // Auto-reply template (To: {{email}})
      const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || '' // Owner notification template (fixed To)
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ItoMg-1b122sfWWyM'

      // Payload for auto-reply template (To: {{email}})
      const autoReplyParams = {
        email: formData.email,
        name: formData.name,
        title: formData.message,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }

      // Payload for owner notification template (To: your fixed email inside template)
      const ownerParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }

      const sendTasks = [
        emailjs.send(serviceId, templateId, autoReplyParams, publicKey)
      ]
      if (ownerTemplateId) {
        sendTasks.push(emailjs.send(serviceId, ownerTemplateId, ownerParams, publicKey))
      }

      const result = await Promise.all(sendTasks)

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setShowModal(true)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center ${
          dark ? 'text-white' : 'text-gray-800'
        }`}
      >
        Let's <span className="gradient-text-static">Connect</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-center text-lg mb-12 max-w-2xl mx-auto ${
          dark ? 'text-white/70' : 'text-gray-600'
        }`}
      >
        Have a project in mind? Let's discuss how we can bring your ideas to life.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto ${
          dark ? 'card' : 'card-light'
        }`}
        onSubmit={handleSubmit}
      >
        {/* Honeypot hidden field */}
        <input
          type="text"
          name="company"
          value={botField}
          onChange={(e)=>setBotField(e.target.value)}
          autoComplete="off"
          tabIndex="-1"
          aria-hidden="true"
          className="sr-only absolute left-[-9999px] opacity-0"
        />
        <div className="sm:col-span-1">
          <label className={`text-sm font-medium mb-2 block ${
            dark ? 'text-white/80' : 'text-gray-700'
          }`}>Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${
              dark ? 'input-modern text-white placeholder-white/50' : 'input-modern-light text-gray-800 placeholder-gray-500'
            }`}
            placeholder="Your name" 
          />
        </div>
        <div className="sm:col-span-1">
          <label className={`text-sm font-medium mb-2 block ${
            dark ? 'text-white/80' : 'text-gray-700'
          }`}>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${
              dark ? 'input-modern text-white placeholder-white/50' : 'input-modern-light text-gray-800 placeholder-gray-500'
            }`}
            placeholder="you@example.com" 
          />
        </div>
        <div className="sm:col-span-2">
          <label className={`text-sm font-medium mb-2 block ${
            dark ? 'text-white/80' : 'text-gray-700'
          }`}>Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5" 
            className={`resize-none ${
              dark ? 'input-modern text-white placeholder-white/50' : 'input-modern-light text-gray-800 placeholder-gray-500'
            }`}
            placeholder="Tell me about your project..." 
          />
        </div>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="sm:col-span-2 text-center">
            <p className="text-green-500 font-medium">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="sm:col-span-2 text-center">
            <p className="text-red-500 font-medium">
              ❌ Failed to send message. Please try again or contact me directly.
            </p>
          </div>
        )}
        
        <div className="sm:col-span-2 flex justify-center">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary px-8 py-4 text-lg transition-all duration-200 ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className={`flex items-center gap-3 ${
            dark ? 'text-white/70' : 'text-gray-600'
          }`}>
            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
            <span>Available for freelance work</span>
          </div>
          <div className={`flex items-center gap-3 ${
            dark ? 'text-white/70' : 'text-gray-600'
          }`}>
            <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
            <span>Quick response time</span>
          </div>
          <div className={`flex items-center gap-3 ${
            dark ? 'text-white/70' : 'text-gray-600'
          }`}>
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <span>Remote collaboration</span>
          </div>
        </div>
      </motion.div>
      {/* Success Modal */}
      {showModal && submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 140, damping: 16 }}
            className={`${dark ? 'card' : 'card-light'} max-w-md w-[90%] text-center relative`}
            onClick={(e)=>e.stopPropagation()}
          >
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-r from-secondary-500 to-accent-500 flex items-center justify-center text-white text-2xl">✓</div>
            <h3 className={`text-xl font-semibold mb-2 ${dark ? 'text-white' : 'text-gray-800'}`}>Message sent!</h3>
            <p className={`${dark ? 'text-white/70' : 'text-gray-600'} mb-6`}>Thanks for reaching out. I’ll get back to you shortly.</p>
            <button className="btn-primary px-6 py-3" onClick={()=>setShowModal(false)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
