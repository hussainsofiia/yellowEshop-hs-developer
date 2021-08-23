module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite ease-in-out',
        bluecircle: 'bounce 0.6s infinite ease-in-out',
        greencircle: 'bounce 0.9s infinite ease-in-out',
        redcircle: 'bounce 1.2s infinite ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"),require('@tailwindcss/line-clamp'),require('tailwind-scrollbar')],
 
  
    

   
 
};

