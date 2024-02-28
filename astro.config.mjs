import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://moisesbarillas.com',
	integrations: [tailwind(), react(), sitemap()],
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
