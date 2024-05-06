import type { Config } from 'tailwindcss';

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: color('primary'),
			secondary: color('secondary'),
			accent: color('accent'),
		},
		textColor: {
			accent: color('accent'),
			'on-primary': color('text-on-primary'),
			'on-secondary': color('text-on-secondary'),
			'on-accent': color('text-on-accent'),
			light: color('text-light'),
			dark: color('text-dark'),
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
		extend: {
			transitionProperty: {
				dashoffset: 'stroke-dashoffset',
			},
			transitionDuration: {
				400: '400ms',
			},
			transitionTimingFunction: {
				steppy: 'steps(10, end)',
			},
			spacing: {
				header: '4.5rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
