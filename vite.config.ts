import path from 'path';
import { lingui } from '@lingui/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['macros'],
			},
		}),

		lingui(),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(path.join(__dirname, 'src')),
			'@root': path.resolve(__dirname),
		},
	},
});
