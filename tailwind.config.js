/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
      },
      backgroundImage: {
        'gradient-radial-1': 'radial-gradient(96% 96% at 70.4% 31.2%, #838FFF 0%, rgba(227, 230, 255, 0) 100%, #030092 100%)',
        "gradient-radial-2":"background: radial-gradient(96% 96% at 70.4% 31.2%, #3244E8 0%, rgba(0, 2, 16, 0) 100%), #030092;",
        'shadow-like-bg': 'radial-gradient(circle at center, rgba(86, 0, 105, 0.3) 10%, transparent 100%)',
      },
      boxShadow: {
        'custom1': '0px 2.76726px 2.21381px 0px #6C49AC05',
        'custom2': '0px 6.65010px 5.32008px 0px #6C49AC07',
        'custom3': '0px 12.52155px 10.01724px 0px #6C49AC09',
        'custom4': '0px 22.33631px 17.86905px 0px #6C49AC0B',
        'custom5': '0px 41.77761px 33.42209px 0px #6C49AC0D',
        'custom6': '0px 100px 80px 0px #6C49AC12',
      },
    },
  },
  plugins: [],
}