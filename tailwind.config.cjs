/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#191d2b',
					100: '#1e1568',
				},
				secondary: {
					DEFAULT: '#27ae60',
					100: '#6e5ef8',
				},
				tertiary: {
					DEFAULT: '#f56692',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
