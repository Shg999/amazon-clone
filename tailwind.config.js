/** @type {import('tailwindcss').Config} */
// import './styles/globals.css';
module.exports = {
  mode: "jit",
  purge: [ 
    "./src/pages/**/*.{js,ts,jsx,tsx}*",
    "./src/components/**/*.{js,ts,jsx,tsx}*",
  ],
  darkMode:false,
  theme: {
    extend: {
      colors:{
        amazon_blue: {
          light: "#232f3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants:{
    extend: {},
  },
  plugins: [],
};

