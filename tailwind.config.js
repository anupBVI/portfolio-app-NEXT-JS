/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'kaushan' : ['Kaushan Script']
      // 'sans': ['ui-sans-serif', 'system-ui', ...],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    },
    // colors:{
    //   green:{
    //     DEFAULT:'00F260'
    //   }
    // },
    extend: {
      colors:{
        'green':{
          DEFAULT:'00F260'
        }
      }
    },
  },
  plugins: [],
}
