/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      screens:{
        "mb":{"max":"510px"},
        "deck":{"min":"511px"},
      }
    },
  },
  plugins: [],
}

