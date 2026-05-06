/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        champagne: '#F7E1C7',
        saddle: '#8B4513',
        saddleDark: '#6E3B1F',
        brownDark: '#3B2A1A',
      }
    },
  },
  plugins: [],
}