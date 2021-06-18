module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                'link': '#575CCC',
                'black': '#000',
                'green': '#00CD00',
                'white': '#FFF'
            },
            backgroundColor: {
                'blue': '#575CCC',
                'black': "#000",
                'grey': '#F6F6F6'
            },
            backgroundImage: {
                'gradient': 'linear-gradient(23.07deg, #575CCC -4.4%, #F2295B 100%);'
            }
        },
        colors: {
            green: '#00CD00',
            black: '#000',
            white: '#FFF',
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'responsive'],
        }
    },
    plugins: [],
}
