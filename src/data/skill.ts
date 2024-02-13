interface Skill {
	backend: {
		name: string;
		icon: string;
	}[];
	frontend: {
		name: string;
		icon: string;
	}[];
	learning: {
		name: string;
		icon: string;
	}[];
	databases: {
		name: string;
		icon: string;
	}[];
}
export const skills: Skill = {
	backend: [
		{
			name: 'Node.js',
			icon: 'nodejs-original.svg',
		},
		{
			name: 'Express',
			icon: 'express-original.svg',
		},
		{
			name: 'linux',
			icon: 'linux-original.svg',
		},
	],
	frontend: [
		{
			name: 'HTML5',
			icon: 'html5-original.svg',
		},
		{
			name: 'CSS3',
			icon: 'css3-original.svg',
		},
		{
			name: 'JavaScript',
			icon: 'javascript-original.svg',
		},
		{
			name: 'TypeScript',
			icon: 'typescript-original.svg',
		},
		{
			name: 'React',
			icon: 'react-original.svg',
		},
		{
			name: 'Next.js',
			icon: 'nextjs-original.svg',
		},
		{
			name: 'Astro',
			icon: 'astro-original.svg',
		},
	],
	databases: [
		{
			name: 'MongoDB',
			icon: 'mongodb-original.svg',
		},
		{
			name: 'PostgreSQL',
			icon: 'postgresql-original.svg',
		},
		{
			name: 'MySQL',
			icon: 'mysql-original.svg',
		},
		{
			name: 'SQLite',
			icon: 'sqlite-original.svg',
		},
		{
			name: 'realm',
			icon: 'realm-original.svg',
		},
	],
	learning: [
		{
			name: 'rust',
			icon: 'rust-original.svg',
		},
		{
			name: 'docker',
			icon: 'docker-original.svg',
		},
	],
};
