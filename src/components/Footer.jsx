export default function Footer({ dark }) {
  return (
    <footer className={`py-16 text-center border-t ${
      dark ? 'border-white/10' : 'border-gray-200/60'
    }`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h3 className={`text-2xl font-bold mb-2 ${
            dark ? 'text-white' : 'text-gray-800'
          }`}>
            Ishwar<span className="gradient-text-static">.dev</span>
          </h3>
          <p className={dark ? 'text-white/70' : 'text-gray-600'}>
            Building the future, one line of code at a time.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-6">
            <a href="#projects" className={`hover:text-secondary-300 transition-colors duration-200 ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}>
              Projects
            </a>
            <a href="#skills" className={`hover:text-secondary-300 transition-colors duration-200 ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}>
              Skills
            </a>
            <a href="#contact" className={`hover:text-secondary-300 transition-colors duration-200 ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}>
              Contact
            </a>
          </div>
          
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              dark 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <svg className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm9.25 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              dark 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <svg className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              dark 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <svg className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={`pt-8 border-t ${
          dark ? 'border-white/10' : 'border-gray-200/60'
        }`}>
          <p className={`text-sm ${
            dark ? 'text-white/50' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} Ishwar • Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
