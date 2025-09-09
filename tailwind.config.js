/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      keyframes: {
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'blink': {
          '0%,100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
            'transform': 'scale(1)'
          },
          '50%': { 
            'box-shadow': '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)',
            'transform': 'scale(1.02)'
          }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        typewriter: 'typewriter 3s steps(40) 1 both',
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      boxShadow: {
        'glow': '0 0 45px rgba(168, 85, 247, 0.25)',
        'glow-lg': '0 0 60px rgba(168, 85, 247, 0.3)',
        'glow-xl': '0 0 80px rgba(168, 85, 247, 0.4)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'grid': 'radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.15) 1px, transparent 0)',
        'mesh': 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      },
      backgroundSize: {
        'grid': '24px 24px',
        'mesh': '400% 400%',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
