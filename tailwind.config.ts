import ContainerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		fontFamily: {
			display: ['Oswald', 'ui-sans-serif'],
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
		extend: {
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
	plugins: [ContainerQueries],
} satisfies Config;
