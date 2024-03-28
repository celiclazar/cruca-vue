/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gotu', 'sans-serif'],
        about: ['Gotu', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        button: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
          'heading': '5.375rem',
          'body': '1.667rem',
          'button': '1.338rem',
          'about': '5.375rem'
      },
    },
  },
  plugins: [],
}

