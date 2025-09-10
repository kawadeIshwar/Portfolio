import { motion } from 'framer-motion'

export default function Hero({ dark }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] gpu">
        <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-5xl blur-3xl rounded-full bg-gradient-to-r from-secondary-500/20 via-accent-500/20 to-primary-500/20 ${dark ? '' : 'opacity-60'} gpu`} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gpu">
        <div className="text-center space-y-12">
          {/* Hero Text */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight ${
                dark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Hi, I'm <span className="gradient-text">Ishwar</span>.
              <div className="mt-4 flex justify-center">
                <span className={`typing-mern`}>
                  MERN Stack Developer.
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
              className={`text-xl sm:text-2xl lg:text-3xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed ${
                dark ? 'text-white/80' : 'text-gray-600'
              }`}
            >
              Transforming Ideas into Web Experiences. Clean UIs, smooth animations, and high-performance backends.
              <br className="hidden sm:block" />
              <span className="gradient-text-static">Creating digital experiences that matter.</span>
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <a href="#projects" className="btn-primary px-8 py-4 text-lg font-semibold min-w-[200px] shadow-glow-lg">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary px-8 py-4 text-lg font-semibold min-w-[200px]">
              Contact Me
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`text-lg font-medium ${
              dark ? 'text-white/60' : 'text-gray-500'
            }`}>
              Technologies I work with:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'MongoDB', 'Tailwind', 'JavaScript', 'Express'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className={`skill-badge text-base px-6 py-3 ${
                    dark ? 'text-white/90' : 'text-gray-700'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            viewport={{ once: true }}
            className="pt-16"
          >
            <div className={`w-6 h-10 border-2 rounded-full mx-auto flex justify-center ${
              dark ? 'border-white/30' : 'border-gray-400'
            }`}>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-1 h-3 rounded-full mt-2 ${
                  dark ? 'bg-white/60' : 'bg-gray-500'
                }`}
              />
            </div>
            <p className={`text-sm mt-4 ${
              dark ? 'text-white/50' : 'text-gray-400'
            }`}>
              Scroll to explore
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
