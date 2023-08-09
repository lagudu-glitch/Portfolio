/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./templates/**/*.{html,htm}"],
  theme: {
    extend: {
      fontFamily : {
        Incon: "'Inconsolata', monospace;"
      }
    },
  },
  plugins: [],
}