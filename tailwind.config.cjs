/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#191d2b',
					50: '#6e5ef8',
					100: '#1e1568',
					200: '#171433',
				},
				secondary: {
					DEFAULT: '#27ae60',
				},
				tertiary: {
					DEFAULT: '#f56692',
				},
				pink: {
					DEFAULT: '#f56692',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
