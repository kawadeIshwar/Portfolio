import { motion } from 'framer-motion'

export default function Contact({ dark }) {
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
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="sm:col-span-1">
          <label className={`text-sm font-medium mb-2 block ${
            dark ? 'text-white/80' : 'text-gray-700'
          }`}>Name</label>
          <input 
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
            rows="5" 
            className={`resize-none ${
              dark ? 'input-modern text-white placeholder-white/50' : 'input-modern-light text-gray-800 placeholder-gray-500'
            }`}
            placeholder="Tell me about your project..." 
          />
        </div>
        <div className="sm:col-span-2 flex justify-center">
          <button className="btn-primary px-8 py-4 text-lg">
            Send Message
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
