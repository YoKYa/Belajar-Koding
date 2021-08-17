module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            animation: {
                'fade-out': 'fade-out 1s ease-out',
                'fade-in': 'fade-in 500ms ease-in',
            },
            // eslint-disable-next-line no-unused-vars
            backgroundImage: theme => ({
                'belajar-koding': "url('./assets/img/bk/BG.png')",
            }),
        }
    },
    variants: {
        extend: {
            width: ['hover', 'focus'],
            height: ['hover', 'focus'],
            animation: ['responsive'],
        },
    },
    plugins: [],
}
