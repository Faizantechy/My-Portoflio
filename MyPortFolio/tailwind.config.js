/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gradient-bg': 'bg-gradient-to-r from-pink-500 to-orange-500',
      },
      textColor: {
        'gradient-text': 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text',
      },
    },
  },
  plugins: [],
}
