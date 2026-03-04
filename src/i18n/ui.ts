import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';
import Nicaragua from '@/components/flags/Nicaragua.astro';

export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof UnitedStatesFlag }> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: Nicaragua,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'hero.info': 'Disponible para trabajar.',
		'hero.description': 'Egresado de la carrera de Ingeniería en Sistemas, apasionado por la tecnología y el desarrollo de software.',
		'hero.title': 'Hola, Soy Moises Barillas',
		'hero.button1': 'Contactarme',
	},
	en: {
		'hero.info': 'Available for work.',
		'hero.description': 'Graduate of Systems Engineering, passionate about technology and software development.',
		'hero.title': "Hello, I'm Moises Barillas",
		'hero.button1': 'Contact Me',
	},
} as const;

export const routes = {
	es: {},
	en: {},
};
