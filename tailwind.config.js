/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poetsen One', 'sans-serif'],
      serif: ['Poetsen One', 'sans-serif'],
    },

  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ryanair: {
          "primary": "#073590",
          "primary-content": "#073590",
          "secondary": "#2091eb",
          "accent": "#f1c933",
          "neutral": "#f4f4f4",
          "base-100": "#fff",
          "base-content": '#073590',
          "info": "#073590",
          "success": "#f1c933",
          "warning": "#AE1200",
          "error": "#AE1200",
        },
        wizzair: {
          "primary": "#cc2788",
          "primary-content": "#cc2788",
          "secondary": "#5a5a5a",
          "accent": "#4f1993",
          "neutral": "#f4f4f4",
          "base-100": "#ffffff",
          "base-content": "#cc2788",
          "info": "#4f1993",
          "success": "#cc2788",
          "warning": "#ff8800",
          "error": "#ff0000"
        }
      },
      "light"
    ],
  },
}

