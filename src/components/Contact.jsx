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
    </section>
  )
}
