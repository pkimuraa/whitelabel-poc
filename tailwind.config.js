/** @type {import('tailwindcss').Config} */
require('dotenv').config()
import colors  from './src/config/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: colors[process.env.VITE_PRODUCT],},
    
  },
  plugins: [],
}





