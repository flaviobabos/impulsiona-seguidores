module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors:{
            green: '#00CD00',
            black: '#000',
            white: '#FFF',
        }
    },
    variants: {
        extend: {
          backgroundColor: ['active','responsive'],
        }
      },
    plugins: [],
}
