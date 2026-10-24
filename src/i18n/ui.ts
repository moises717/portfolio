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
		'hero.badge_ai': 'Desarrollo con IA & Agentes',
		'hero.description':
			'<strong>Ingeniero de Sistemas</strong> y <strong>Analista Programador</strong> con experiencia en desarrollo de software empresarial. Especializado en arquitectura de <strong>microservicios con .NET</strong>, soluciones Cloud (<strong>Azure / AWS</strong>) y adopción de <strong>agentes de código e Inteligencia Artificial</strong> para acelerar sistemas escalables y de alta disponibilidad.',
		'hero.title': 'Hola, Soy Moises Barillas',
		'hero.button1': 'Contactarme',
	},
	en: {
		'hero.info': 'Available for work.',
		'hero.badge_ai': 'AI-Augmented Developer',
		'hero.description':
			'<strong>Systems Engineer</strong> & <strong>Programmer Analyst</strong> experienced in enterprise software development. Specialized in <strong>.NET microservices architecture</strong>, Cloud solutions (<strong>Azure / AWS</strong>), and the adoption of <strong>coding agents & Artificial Intelligence</strong> to build scalable, high-availability systems.',
		'hero.title': "Hello, I'm Moises Barillas",
		'hero.button1': 'Contact Me',
	},
} as const;

export const routes = {
	es: {},
	en: {},
};
