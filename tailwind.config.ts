import type { Config } from 'tailwindcss';

export default {
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
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
} satisfies Config;
