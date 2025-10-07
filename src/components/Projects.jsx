import { motion } from 'framer-motion'
import { useState } from 'react'

const cards = [
  { 
    title: 'StudyHub', 
    desc: 'Notes sharing platform for students with uploads and previews. Built with modern MERN stack for seamless collaboration.', 
    image: 'https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: 'https://studyhub4all.netlify.app/', 
    githubUrl: 'https://github.com/kawadeIshwar/Study-Hub.git',
    chip: 'MERN',
    features: ['File Upload', 'Notes Explore', 'Cloud storage', 'User Authentication', 'Responsive design']
  },
  {
  title: 'Jijau Pathology Lab',
  desc:' A clean and responsive website for Jijau Pathology Lab with test info and easy patient contact.',
  image: 'https://plus.unsplash.com/premium_photo-1667516516089-c2f5e5df0db9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  liveUrl: 'https://jijaupathologylab.com/',
  githubUrl: 'https://github.com/kawadeIshwar/JIJAU-PATHOLOGY-LAB.git',
  chip: 'MERN',
  features: ['Responsive Design', 'Test Information Section', 'Contact Form', 'Location Map', 'Clean UI']
},
  { 
    title: 'TuneWave - Spotify Clone', 
    desc: 'A front-end Spotify clone built using HTML & CSS, replicating the sleek UI and design of the original app. ',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: 'https://tunewave-spotify-clone.netlify.app/', 
    githubUrl: 'https://github.com/kawadeIshwar/Spotify-Clone.git',
    chip: 'HTML / CSS',
    features: ['Modern UI', 'Responsive Design', 'Player Bar', 'Playlist Section']
  },
]

export default function Projects({ dark }) {
  const [active, setActive] = useState(null)
  const open = (project) => setActive(project)
  const close = () => setActive(null)
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
            className={`group relative overflow-hidden gpu ${
              dark ? 'card card-hover' : 'card-light card-hover-light'
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl gpu">
              <img 
                src={c.image} 
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 gpu"
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
                  : 'border-indigo-200/60 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-medium shadow-sm'
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
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium shadow-sm'
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
                  className="flex-1 bg-gradient-to-r from-secondary-500 to-accent-500 text-white text-xs md:text-sm font-medium py-2 px-4 rounded-xl hover:from-secondary-600 hover:to-accent-600 transition-all duration-200 text-center"
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
                      : 'border-indigo-200/60 bg-gradient-to-r from-white/90 to-indigo-50/80 text-indigo-700 hover:from-indigo-50 hover:to-purple-50 hover:shadow-lg hover:shadow-indigo-100/50'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
                <button
                  type="button"
                  onClick={() => open(c)}
                  className={`text-sm font-medium py-2 px-4 rounded-xl transition-all duration-200 ${
                    dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200 hover:shadow-lg hover:shadow-indigo-100/50'
                  }`}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.95, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 140, damping: 16 }}
            className={`${dark ? 'card' : 'card-light'} max-w-2xl w-[92%] relative`}
            onClick={(e)=>e.stopPropagation()}
          >
            <button onClick={close} className={`absolute top-3 right-3 text-sm ${dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>✕</button>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={active.image} alt={active.title} className="md:w-1/2 w-full h-48 md:h-auto object-cover rounded-2xl"/>
              <div className="flex-1 space-y-3">
                <h3 className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-gray-800'}`}>{active.title}</h3>
                <p className={`${dark ? 'text-white/70' : 'text-gray-600'}`}>{active.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {active.features.map((f, i)=>(
                    <span key={i} className={`text-xs px-2 py-1 rounded-md ${dark ? 'bg-white/10 text-white/80' : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium shadow-sm'}`}>{f}</span>
                  ))}
                </div>
                <div className="pt-2 flex gap-3">
                  <a href={active.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-sm">Live</a>
                  <a href={active.githubUrl} target="_blank" rel="noopener noreferrer" className={`text-sm px-4 py-2 rounded-xl border ${dark ? 'border-white/20 text-white/90' : 'border-indigo-200/60 bg-gradient-to-r from-white/90 to-indigo-50/80 text-indigo-700 hover:from-indigo-50 hover:to-purple-50'}`}>Code</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
