/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'public-sans': ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

