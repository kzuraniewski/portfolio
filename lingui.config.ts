import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
	locales: ['en-US', 'pl-PL'],
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src'],
		},
	],
};

export default config;
