/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      boxShadow:{
        'glow':'0 0 15px rgba(0, 255, 221, 0.15)',
      }
    },
  },
  plugins: [],
}

