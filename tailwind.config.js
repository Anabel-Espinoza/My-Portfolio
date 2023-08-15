/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        navy: "#003049",
        warm: "#d62828",
        yellow: "#f77f00",
        "light-yellow": "#fcbf49",
        shell: "#eae2b7",
        "dark-gray": "#121113",
        pink: "#DC4492",
        purple: "#c589e8",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-pink": 
          "linear-gradient(90deg, #f88dad 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      content: {
        colorSpot: "url('./assets/vecteezy_watercolor-abstract-background_10249450_712_.png')",
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: [],
}

