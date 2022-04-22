module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/images/logo.png')",
        'background': "url('/src/images/background2.png')",
      }
    },
  },
  plugins: [],
}
