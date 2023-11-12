/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: ['0px', '400px'],
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily:{
      abgalumo: ['Abgalumo'],
      sans: ['ui-sans-serif', 'system-ui']
    }
  },
  plugins: [require('@tailwindcss/forms')],
}