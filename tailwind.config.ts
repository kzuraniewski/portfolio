import type { Config } from 'tailwindcss';

const colors = {
	// charcoal: '#222831',
	// gunmetal: '#393E46',
	// mustard: '#FFD369',
	// silver: '#EEEEEE',

	superSilver: '#EEEEEE',
	limedSpruce: '#3A4750',
	forcefulOrange: '#EA9215',
	prestigeBlue: '#303841',
	eerieBlack: '#1c1c1c',
};

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			// primary: colors.charcoal,
			// secondary: colors.gunmetal,
			// accent: colors.mustard,

			primary: colors.superSilver,
			secondary: colors.limedSpruce,
			accent: colors.forcefulOrange,
		},
		textColor: {
			// accent: colors.mustard,
			// 'on-primary': colors.silver,
			// 'on-secondary': colors.silver,
			// 'on-accent': colors.charcoal,
			// light: colors.silver,
			// dark: colors.charcoal,

			accent: colors.forcefulOrange,
			'on-primary': colors.eerieBlack,
			'on-secondary': colors.superSilver,
			'on-accent': colors.superSilver,
			light: colors.superSilver,
			dark: colors.eerieBlack,
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
