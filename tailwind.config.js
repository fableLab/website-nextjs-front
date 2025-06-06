/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ou selon ton arborescence
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        display: ['var(--font-figtree)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

