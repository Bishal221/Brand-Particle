/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1100px', // Define a custom breakpoint named "custom-lg"
        'custom-sm': '490px', // Define a custom breakpoint named "custom-lg"
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        "dark-primary": "#D0FF71",
        'dark-bg': "#0E0F11"
      },
      container: {
        center: true,
        screens: {
          '2xl': '1400px', // Set the max-width for the 2xl breakpoint
        },
      }
    },
  },
  plugins: [],
}