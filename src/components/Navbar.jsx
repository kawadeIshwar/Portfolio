import { Moon, Sun, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setOpen(false)
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LinkItem = ({ href, children }) => (
    <a href={href} className={`group px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
      dark 
        ? 'hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-accent-500/20 text-white hover:text-secondary-300 hover:shadow-secondary-500/25' 
        : 'hover:bg-gradient-to-r hover:from-secondary-100 hover:to-accent-100 text-gray-700 hover:text-secondary-600 hover:shadow-secondary-500/25'
    }`}>
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-xl shadow-lg' 
        : 'backdrop-blur-sm'
    } ${
      dark 
        ? `glass-nav border-white/20 ${scrolled ? 'bg-dark-900/80' : 'bg-dark-900/20'}` 
        : `glass-nav-light border-gray-200/60 ${scrolled ? 'bg-white/90' : 'bg-white/60'}`
    }`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'h-16' : 'h-20'
      }`}>
        <a href="#" className={`font-bold tracking-tight transition-all duration-300 ${
          scrolled ? 'text-lg' : 'text-xl'
        } ${
          dark 
            ? 'text-white hover:text-secondary-300' 
            : 'text-gray-800 hover:text-secondary-600'
        }`}>
          Ishwar<span className="gradient-text-static">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#skills">Skills</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(v => !v)}
            className={`group rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer relative z-10 ${
              scrolled ? 'p-2' : 'p-3'
            } ${
              dark 
                ? 'border-white/20 bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:shadow-yellow-500/25' 
                : 'border-gray-200/60 bg-white/80 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 hover:shadow-yellow-500/25'
            }`}
          >
            {dark ? <Sun size={scrolled ? 16 : 18} className="text-white"/> : <Moon size={scrolled ? 16 : 18} className="text-gray-700"/>}
          </button>
        </nav>

        <button 
          className={`group md:hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer relative z-10 ${
            scrolled ? 'p-2' : 'p-3'
          } ${
            dark 
              ? 'border-white/20 bg-white/10 hover:bg-gradient-to-r hover:from-gray-500/20 hover:to-slate-500/20 hover:shadow-gray-500/25' 
              : 'border-gray-200/60 bg-white/80 hover:bg-gradient-to-r hover:from-gray-100 hover:to-slate-100 hover:shadow-gray-500/25'
          }`}
          onClick={() => setOpen(v => !v)}
        >
          <Menu size={scrolled ? 18 : 20} className={dark ? 'text-white' : 'text-gray-700'}/>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className={`flex flex-col gap-2 ${
            dark ? 'glass-card' : 'glass-card-light'
          }`}>
            <a href="#projects" onClick={()=>setOpen(false)} className={`group py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
              dark 
                ? 'hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-accent-500/20 text-white hover:text-secondary-300 hover:shadow-secondary-500/25' 
                : 'hover:bg-gradient-to-r hover:from-secondary-100 hover:to-accent-100 text-gray-700 hover:text-secondary-600 hover:shadow-secondary-500/25'
            }`}>Projects</a>
            <a href="#skills" onClick={()=>setOpen(false)} className={`group py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
              dark 
                ? 'hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-accent-500/20 text-white hover:text-secondary-300 hover:shadow-secondary-500/25' 
                : 'hover:bg-gradient-to-r hover:from-secondary-100 hover:to-accent-100 text-gray-700 hover:text-secondary-600 hover:shadow-secondary-500/25'
            }`}>Skills</a>
            <a href="#contact" onClick={()=>setOpen(false)} className={`group py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
              dark 
                ? 'hover:bg-gradient-to-r hover:from-secondary-500/20 hover:to-accent-500/20 text-white hover:text-secondary-300 hover:shadow-secondary-500/25' 
                : 'hover:bg-gradient-to-r hover:from-secondary-100 hover:to-accent-100 text-gray-700 hover:text-secondary-600 hover:shadow-secondary-500/25'
            }`}>Contact</a>
            <button
              aria-label="Toggle theme"
              onClick={() => { setDark(v=>!v); setOpen(false)}}
              className={`group mt-2 p-3 rounded-xl border backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative z-10 ${
                dark 
                  ? 'border-white/20 bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:shadow-yellow-500/25 text-white' 
                  : 'border-gray-200/60 bg-white/80 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 hover:shadow-yellow-500/25 text-gray-700'
              }`}
            >
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
