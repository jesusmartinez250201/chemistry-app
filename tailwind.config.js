/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeOutLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
        },
        fadeOutRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0%)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
        },
    },
    animation: {
      fadeInLeft: 'fadeInLeft 0.5s ease-in-out',
      fadeInRight: 'fadeInRight 0.5s ease-in-out',
      fadeOutLeft: 'fadeOutLeft 0.5s ease-in-out',
      fadeOutRight: 'fadeOutRight 0.5s ease-in-out',
    },
    },
  },
  plugins: [],
}

