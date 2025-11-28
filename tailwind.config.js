/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00bfff',
          dark: '#0080ff',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          cardInner: '#0f0f0f',
        }
      },
      animation: {
        float: 'float 20s infinite ease-in-out',
        floatReverse: 'float 15s infinite ease-in-out reverse',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
