/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xs': { 'max': '400px'},
        'xs': { 'max': '500px' },   // Custom breakpoint 'xs' (max-width: 639px)
        'sm': { 'max': '767px' },   // Custom breakpoint 'sm' (max-width: 767px)
        'md': { 'max': '840px' },  // Custom breakpoint 'md' (max-width: 1023px)
        'semi-lg': {'max': '1000px'},
        'lg': { 'max': '1279px'  },  // Custom breakpoint 'lg' (max-width: 1279px)
        'xl': { 'max': '1535px' },  // Custom breakpoint 'xl' (max-width: 1535px)
      },
    },
  },
  plugins: [],
})

