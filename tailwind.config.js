/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steelBlue: '#80A1C1',
        ashGrey: '#B7C2B6',
        vanillaCustard: '#EEE3AB',
        pearlBeige: '#E4D9B6',
        bone: '#D9CFC1',
        khakiBeige: '#C0A78D',
        fadedCopper: '#A77E58',
        cinnamonWood: '#B15F3B',
        rustySpice: '#BA3F1D',
      },
    },
  },
  plugins: [],
}

