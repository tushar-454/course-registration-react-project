/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#F3F3F3',
        black: '#1C1B1B',
        gray: '#1c1b1bd1',
        darkGray: '#1c1b1b',
        blue: '#2F80ED',
        line: '#1C1B1B33',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
