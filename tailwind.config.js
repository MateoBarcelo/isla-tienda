/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': {
          25: "#F5F7F4",
          50: "#E5EEE7",
          100: "#D7E7DA",
          300: "#BED9C8",
          500: "#82B6AA",
          700: "#327262",
          900: "#1F443D"
        }
    }
    },
    fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}

