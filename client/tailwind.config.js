/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#D0FF71",
        'dark-bg': "#0E0F11"
      }
    },
  },
  plugins: [],
}