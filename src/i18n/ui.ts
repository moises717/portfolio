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
		'hero.description':
			'<strong>Ingeniero de Sistemas</strong> y <strong>Analista Programador</strong> con experiencia en desarrollo de software empresarial. Especializado en arquitectura de <strong>microservicios con .NET</strong>, soluciones en la nube (<strong>Azure / AWS</strong>) y sistemas de alta disponibilidad.',
		'hero.title': 'Hola, Soy Moises Barillas',
		'hero.button1': 'Contactarme',
	},
	en: {
		'hero.info': 'Available for work.',
		'hero.description':
			'<strong>Systems Engineer</strong> & <strong>Programmer Analyst</strong> experienced in enterprise software development. Specialized in <strong>microservices architecture with .NET</strong>, cloud solutions (<strong>Azure / AWS</strong>), and high-availability systems.',
		'hero.title': "Hello, I'm Moises Barillas",
		'hero.button1': 'Contact Me',
	},
} as const;

export const routes = {
	es: {},
	en: {},
};
