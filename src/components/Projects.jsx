import { motion } from 'framer-motion'

const cards = [
  { 
    title: 'StudyHub', 
    desc: 'Notes sharing app for students with uploads and previews. Built with modern MERN stack for seamless collaboration.', 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center',
    liveUrl: 'https://studyhub4all.netlify.app/', 
    githubUrl: 'https://github.com/kawadeIshwar/Study-Hub.git',
    chip: 'MERN',
    features: ['File Upload', 'Notes Explore', 'cloud storage', 'User Authentication', 'responsive design']
  },
  { 
    title: 'Rank-Rush', 
    desc: 'Restaurant ordering assistant using NLP. Intelligent chatbot that understands natural language orders ', 
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop&crop=center',
    liveUrl: 'https://rank-rush1.netlify.app/', 
    githubUrl: 'https://github.com/kawadeIshwar/Rank-Rush.git',
    chip: 'AI / Chat',
    features: ['NLP Processing', 'Voice Commands', 'Menu Integration', 'Order Tracking']
  },
  { 
    title: 'RideShare Mini', 
    desc: 'Intercity ride matching prototype. Connect drivers and passengers for efficient long-distance travel with real-time tracking.', 
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=center',
    liveUrl: 'https://rideshare-mini.netlify.app', 
    githubUrl: 'https://github.com/ishwar/rideshare-mini',
    chip: 'Fullstack',
    features: ['Real-time GPS', 'Payment Integration', 'Rating System', 'Route Optimization']
  },
]

export default function Projects({ dark }) {
  return (
    <section id="projects" className="py-24">
      <div className="flex items-baseline justify-between mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            dark ? 'text-white' : 'text-gray-800'
          }`}
        >
          Featured <span className="gradient-text-static">Projects</span>
        </motion.h2>
        <a href="#contact" className="text-sm link-gradient hover:scale-105 transition-transform duration-200">Need something built?</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative overflow-hidden ${
              dark ? 'card card-hover' : 'card-light card-hover-light'
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <img 
                src={c.image} 
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Live Demo Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/90 text-white backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  Live Demo
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Tech Stack Chip */}
              <div className={`text-xs inline-flex rounded-full border px-3 py-1 backdrop-blur-xl ${
                dark 
                  ? 'border-white/20 bg-white/10 text-white/90' 
                  : 'border-gray-200/60 bg-white/80 text-gray-700'
              }`}>
                {c.chip}
              </div>

              {/* Project Title */}
              <h3 className={`font-semibold text-xl group-hover:text-secondary-300 transition-colors duration-200 ${
                dark ? 'text-white' : 'text-gray-800'
              }`}>
                {c.title}
              </h3>

              {/* Project Description */}
              <p className={`text-sm leading-relaxed ${
                dark ? 'text-white/70' : 'text-gray-600'
              }`}>
                {c.desc}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                <p className={`text-xs font-medium ${
                  dark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  Key Features:
                </p>
                <div className="flex flex-wrap gap-1">
                  {c.features.map((feature, index) => (
                    <span key={index} className={`text-xs px-2 py-1 rounded-md ${
                      dark 
                        ? 'bg-white/10 text-white/80' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <a 
                  href={c.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-secondary-500 to-accent-500 text-white text-sm font-medium py-2 px-4 rounded-xl hover:from-secondary-600 hover:to-accent-600 transition-all duration-200 text-center"
                >
                  Live Demo
                </a>
                <a 
                  href={c.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 border text-sm font-medium py-2 px-4 rounded-xl transition-all duration-200 text-center ${
                    dark 
                      ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' 
                      : 'border-gray-200/60 bg-white/80 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
              </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
