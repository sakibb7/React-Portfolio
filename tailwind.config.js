/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:["Poppins", "sans-serif"],
        titleFont:["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "#414141",
        linkColor: "#0088EB",
        fontColor: "#676767",
      },

      spacing:{
        'c3.5': "4.5rem",
        'c17': "17rem",
        'hlh': "4rem"
      },

      keyframes:{
        blobs: {
          '0%': { rounded: '{30%|60%|70%|40%}' },
          '50%': { rounded: '[ 60% 70% 40%]/[50% 60% 30% 60%]' },
          '100%': { rounded: '[60% 40% 30% 70%]/[60% 30% 70% 40%]' },
        }
      },

      animation: {
        blobs: 'blob 8s ease-in-out infinite 1s',
      },

      screens: {
        'ss': {'max': '640px'},
      },

      

      
    },
  },
  plugins: [],
}

