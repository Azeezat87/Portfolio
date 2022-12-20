/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      md: { max: '767px' },
    },
    extend: {
      keyframes: {
        'fade-out-down': {
          '0%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(30px)' },
        },
        'fade-in-down': {
          '0%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(60px)' },
        },
      },
      animation: {
        'fade-out-down': 'fade-out-down 1.5s ease-out infinite',
        'fade-in-down': 'fade-in-down 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
