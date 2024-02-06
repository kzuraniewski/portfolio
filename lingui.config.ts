import type { LinguiConfig } from '@lingui/conf';

const config = {
	locales: ['en-US', 'pl-PL'] as const,
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src'],
		},
	],
} satisfies LinguiConfig;

export default config;
