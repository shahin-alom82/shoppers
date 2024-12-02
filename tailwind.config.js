/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: '#FE6E44',
        darkOrange: 'rgb(255,77,17)',
        lightText: '#888888',
        accent: '#000000',
        accentWhite: '#FFFFFF',
        lightRed: '#EF3636',
        lightGreen: '#41CE09',
        bgLight: '#F5F5F5',
      },
    },
  },
  plugins: [],
}