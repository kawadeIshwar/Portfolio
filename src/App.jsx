import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Dark mode - default to dark, check localStorage
  const [dark, setDark] = useState(true)
  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 })
  
  // Set dark mode immediately on page load to prevent flash
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial = stored ? stored === 'dark' : true // Default to dark mode
    setDark(initial)
    // Apply dark class immediately
    document.documentElement.classList.toggle('dark', initial)
  }, [])
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      dark 
        ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className={`fixed top-0 left-0 right-0 h-1 origin-left z-[60] ${dark ? 'bg-gradient-to-r from-secondary-500 to-accent-500' : 'bg-gradient-to-r from-secondary-500 to-accent-500'}`}
      />
      {/* Animated background elements */}
      <div className={`absolute inset-0 bg-grid-modern ${dark ? 'opacity-30' : 'opacity-20'}`}></div>
      <div className={`absolute top-0 left-0 w-full h-full bg-mesh ${dark ? 'opacity-10' : 'opacity-5'}`}></div>
      
      {/* Floating orbs */}
      <div className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float ${dark ? '' : 'opacity-60'}`}></div>
      <div className={`absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-float ${dark ? '' : 'opacity-60'}`} style={{animationDelay: '1s'}}></div>
      <div className={`absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-float ${dark ? '' : 'opacity-60'}`} style={{animationDelay: '2s'}}></div>
      
      <Navbar dark={dark} setDark={setDark} />
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <Hero dark={dark} />
        <Projects dark={dark} />
        <Skills dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 p-3 ${
          dark ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-100'
        }`}
        style={{ display: 'var(--show-top, none)' }}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
