module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx}', 
    "./**/*.html"],
  theme: {
    extend: {
      animation: {
        slide: "slideAnnouncements 15s infinite"
      },
      keyframes: {
        slideAnnouncements: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-200%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}