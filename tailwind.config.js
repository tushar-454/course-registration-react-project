/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'F3F3F3',
        black: '#1C1B1B',
        gray: '#1C1B1B99',
        darkGray: '#1C1B1BCC',
        blue: '#2F80ED',
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
