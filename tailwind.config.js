/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        katana: {
          bg: '#070809',
          surface: '#0E1014',
          card: '#15171D',
          border: '#242830',
          red: '#E5252A',
          darkred: '#8B0000',
          glow: 'rgba(229, 37, 42, 0.35)',
          gold: '#C5A059',
        },
        txt: {
          primary: '#F2F2F0',
          secondary: '#A5A8AC',
          muted: '#686D76',
        }
      },
      fontFamily: {
        brush: ['Permanent Marker', 'cursive'],
        bebas: ['Bebas Neue', 'sans-serif'],
        shoju: ['Shojumaru', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        widest: '0.22em',
        katana: '0.15em',
      },
      boxShadow: {
        'katana-red': '0 0 25px rgba(229, 37, 42, 0.4)',
        'katana-glow': '0 0 45px rgba(229, 37, 42, 0.25)',
      }
    },
  },
  plugins: [],
}
