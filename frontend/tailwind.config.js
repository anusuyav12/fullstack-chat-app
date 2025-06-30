import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // ✅ this is correct
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake","retro"],
  }
}
