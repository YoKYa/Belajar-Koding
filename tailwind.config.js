const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Quicksand', 'ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
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
                'scale-in': {
                    '0%': {
                        transform: 'scale(0)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    },
                },
            },
            animation: {
                'fade-out': 'fade-out 1s ease-out',
                'fade-in': 'fade-in 500ms ease-in',
                'modalf-in': 'fade-in 200ms ease-in-out',
                'modal-in': 'scale-in 200ms ease-in-out'
            },
            colors: {
                'blueGray': colors.blueGray,
            },
            // eslint-disable-next-line no-unused-vars
            backgroundImage: theme => ({
                'belajar-koding': "url('./assets/img/bk/BG.png')",
            }),
        },

    },
    variants: {
        extend: {
            width: ['hover', 'focus'],
            height: ['hover', 'focus'],
            animation: ['responsive'],
            visibility: ['hover', 'focus'],
            outline: ['hover', 'focus'],
        },
    },
    plugins: [],
}