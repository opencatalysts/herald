const tailwindRadix = require('tailwindcss-radix')

module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './common/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#2CB67D',
					50: '#AEEBD2',
					100: '#9EE7C9',
					200: '#7DE0B7',
					300: '#5CD8A5',
					400: '#3BD092',
					500: '#2CB67D',
					600: '#21895E',
					700: '#165C3F',
					800: '#0B2E20',
					900: '#000101',
				},
				rose: {
					50: '#fff1f2',
					100: '#ffe4e6',
					200: '#fecdd3',
					300: '#fda4af',
					400: '#fb7185',
					500: '#f43f5e',
					600: '#e11d48',
					700: '#be123c',
					800: '#9f1239',
					900: '#881337',
				},
				slate: {
					DEFAULT: '#060606',
					50: '#B3B3B3',
					100: '#A9A9A9',
					200: '#959595',
					300: '#808080',
					400: '#6C6C6C',
					500: '#585858',
					600: '#434343',
					700: '#2F2F2F',
					800: '#1A1A1A',
					900: '#060606',
				},
			},
		},
	},
	plugins: [tailwindRadix()],
}
