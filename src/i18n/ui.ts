export const LANGUAGES: Record<string, { code: string; name: string }> = {
	ca: {
		code: 'ca',
		name: 'Català',
	},
	en: {
		code: 'en',
		name: 'English',
	},
	es: {
		code: 'es',
		name: 'Español',
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'hero.title': 'Disponible para trabajar.',
	},
	en: {
		'hero.title': 'Available for work.',
	},
} as const;

export const routes = {
	es: {},
	en: {},
};
