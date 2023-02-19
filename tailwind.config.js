/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'csgo': '#1D202B',
        'main': '#232834',
        'header': '#2F3646',
        'fontmain': '#9FA9CE',
        'neutral': '#363E52',
        'buttonActive': '#809DFE',
      },
    },
  },
  plugins: [],
}