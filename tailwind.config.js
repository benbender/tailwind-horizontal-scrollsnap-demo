module.exports = {
    purge: [
        './src/**/*.html',
    ],
    theme: {
        extend: {},
    },
    variants: {
        // Add variants as needed
        scrollSnapType: ['responsive'],
    },
    plugins: [
        require('tailwindcss-scroll-snap')
    ],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: 'all',
}
