/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#222831',
			secondary: '#393E46',
			accent: '#FFD369',
			light: '#EEEEEE',
		},
		container: {
			center: true,
			padding: '1.25rem',
		},
		fontFamily: {
			display: ['Oswald', 'ui-sans-serif'],
		},
	},
	plugins: [],
};
