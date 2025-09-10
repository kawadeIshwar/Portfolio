import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 'Expert', percentage: 95 },
  { name: 'CSS', level: 'Expert', percentage: 90 },
  { name: 'JavaScript', level: 'Advanced', percentage: 85 },
  { name: 'React', level: 'Advanced', percentage: 88 },
  { name: 'Node.js', level: 'Intermediate', percentage: 75 },
  { name: 'Express', level: 'Intermediate', percentage: 70 },
  { name: 'MongoDB', level: 'Intermediate', percentage: 72 },
  { name: 'Tailwind', level: 'Expert', percentage: 92 },
  { name: 'REST APIs', level: 'Intermediate', percentage: 89 },
  { name: 'VScode', level: 'Expert', percentage: 90 },
  { name: 'BootStrap', level: 'Intermediate', percentage: 85 },
  { name: 'Git', level: 'Advanced', percentage: 80 }
]

export default function Skills({ dark }) {
  // Smooth container and item animations
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.07, ease: 'easeOut', duration: 0.4 }
    }
  }

  const itemForIndex = (index) => {
    const col = index % 3
    const x = col === 0 ? -20 : col === 2 ? 20 : 0
    return {
      hidden: { opacity: 0, x, scale: 0.98 },
      show: { opacity: 1, x: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.45 } }
    }
  }

  return (
    <section id="skills" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className={`text-3xl sm:text-4xl font-bold tracking-tight mb-12 ${
          dark ? 'text-white' : 'text-gray-800'
        }`}
      >
        Technical <span className="gradient-text-static">Skills</span>
      </motion.h2>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gpu"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemForIndex(index)}
            className={`group relative overflow-hidden p-6 gpu ${
              dark ? 'skill-badge' : 'skill-badge-light'
            }`}
          >
            <div className="text-center mb-4">
              <div className={`font-medium text-lg group-hover:text-secondary-300 transition-colors duration-200 ${
                dark ? 'text-white' : 'text-gray-800'
              }`}>
                {skill.name}
              </div>
              <div className={`text-sm mt-1 ${
                dark ? 'text-white/60' : 'text-gray-600'
              }`}>
                {skill.level}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className={`w-full h-2 rounded-full ${
              dark ? 'bg-white/20' : 'bg-gray-200'
            }`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </motion.div>
            </div>
            
            {/* Percentage Text */}
            <div className={`text-right mt-2 text-sm font-medium ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}>
              {skill.percentage}%
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className={`text-lg max-w-2xl mx-auto ${
          dark ? 'text-white/70' : 'text-gray-600'
        }`}>
          Continuously learning and adapting to new technologies. 
          Passionate about creating efficient, scalable, and maintainable code.
        </p>
      </motion.div>
    </section>
  )
}
