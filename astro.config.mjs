import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://moisesbarillas.com',
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		domains: ['cdn.jsdelivr.net'],
	},
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
