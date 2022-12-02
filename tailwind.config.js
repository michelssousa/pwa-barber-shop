module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '0.3rem',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a991f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
        },
      },
      'winter',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
