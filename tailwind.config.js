/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./**/*.{html,js}"], 
  
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        black: "var(--black)",
        purple: {
          100: "var(--purple-100)",
          400: "var(--purple-400)",
          600: "var(--purple-600)"
        },
      },
       backgroundImage: {
        "hero-bg": "url('/src/images/allo-book-bg.svg')",
        "footer-gradient-bg": "url('./src/images/footer-gradient-bg.png')",

      },
    },
  },
  plugins: [],
}

