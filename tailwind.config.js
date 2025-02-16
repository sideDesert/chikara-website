/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        author: ["Author-Regular", "sans-serif"],
        "author-light": ["Author-Light", "sans-serif"],
        "author-medium": ["Author-Medium", "sans-serif"],
        "author-bold": ["Author-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
