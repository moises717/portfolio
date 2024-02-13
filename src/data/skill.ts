export type Skill = {
	name: string;
	icon: string;
};

interface SkillList {
	backend: Skill[];
	frontend: Skill[];
	learning: Skill[];
	databases: Skill[];
	otros: Skill[];
}
export const skills: SkillList = {
	backend: [
		{
			name: 'Node.js',
			icon: 'nodejs-original.svg',
		},
		{
			name: 'Express',
			icon: 'express-original.svg',
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
		{
			name: 'tailwindcss',
			icon: 'tailwindcss-original.svg',
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
		{
			name: 'SQLServer',
			icon: 'microsoftsqlserver-original.svg',
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
	otros: [
		{
			name: 'linux',
			icon: 'linux-original.svg',
		},
		{
			name: 'electron',
			icon: 'electron-original.svg',
		},
		{
			name: 'tauri',
			icon: 'tauri-original.svg',
		},
		{
			name: 'vscode',
			icon: 'vscode-original.svg',
		},
	],
};
