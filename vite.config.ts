import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss', 'css'],
		alias: {
			'@components': '/src/components',
			'@utils': '/src/utils',
			'@pages': '/src/pages',
			'@assets': '/src/assets',
			'@styles': '/src/styles',
			'@router': '/src/router',
			'@icons': '/src/icons',
			'@layouts': '/src/layout',
			'@constants': '/src/constants',
			'@services': '/src/services',
			'@interfaces': '/src/interfaces',
			'@hooks': '/src/hooks',
		},
	},
});
