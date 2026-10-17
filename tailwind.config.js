/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aws: {
          dark: '#080B11',
          card: '#0F1623',
          border: 'rgba(255, 153, 0, 0.15)',
          orange: '#FF9900',
          amber: '#FFB800',
          yellow: '#FCD34D',
          navy: '#131A26',
          deep: '#04070B',
          glow: 'rgba(255, 153, 0, 0.4)',
          purple: '#8B5CF6',
          blue: '#38BDF8',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 153, 0, 0.15), rgba(99, 102, 241, 0.08), transparent 80%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF9900 0%, #FFB800 100%)',
        'purple-blue-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 153, 0, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
