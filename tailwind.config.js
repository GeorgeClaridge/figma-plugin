/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#0F1419',
      'white': '#fff',
      'green': '#00BA7C',
      'lightgreen': '#7FDCBD',
 
    },

    fontFamily: {
      'sans': ['IBM Plex Sans'],
      'mono': ['IBM Plex Mono'],
    },

    extend: {
      lineHeight: {
        'extra-loose': '1.25',
      }
    }
  },
  plugins: [],
}

