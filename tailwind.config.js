/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#c6c6c6',
          400: '#9e9e9e',
          500: '#7b7b7b',
          600: '#525252',
          700: '#3f3f3f',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
