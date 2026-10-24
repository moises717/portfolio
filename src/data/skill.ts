export type Skill = {
	name: string;
	icon: string;
};

interface SkillList {
	backend: Skill[];
	frontend: Skill[];
	cloud: Skill[];
	databases: Skill[];
	learning: Skill[];
	otros: Skill[];
}

export const skills: SkillList = {
	backend: [
		{
			name: '.NET',
			icon: 'dotnetcore/dotnetcore-original.svg',
		},
		{
			name: 'ASP.NET Core',
			icon: 'dotnetcore/dotnetcore-original.svg',
		},
		{
			name: 'C#',
			icon: 'csharp/csharp-original.svg',
		},
		{
			name: 'Microservicios',
			icon: 'microservices',
		},
		{
			name: 'Node.js',
			icon: 'nodejs/nodejs-original.svg',
		},
		{
			name: 'Express',
			icon: 'express/express-original.svg',
		},
	],
	frontend: [
		{
			name: 'React',
			icon: 'react/react-original.svg',
		},
		{
			name: 'Next.js',
			icon: 'nextjs/nextjs-original.svg',
		},
		{
			name: 'Astro',
			icon: 'astro/astro-original.svg',
		},
		{
			name: 'TypeScript',
			icon: 'typescript/typescript-original.svg',
		},
		{
			name: 'JavaScript',
			icon: 'javascript/javascript-original.svg',
		},
		{
			name: 'Tailwind CSS',
			icon: 'tailwindcss/tailwindcss-original.svg',
		},
		{
			name: 'HTML5',
			icon: 'html5/html5-original.svg',
		},
		{
			name: 'CSS3',
			icon: 'css3/css3-original.svg',
		},
	],
	cloud: [
		{
			name: 'Microsoft Azure',
			icon: 'azure/azure-original.svg',
		},
		{
			name: 'Docker',
			icon: 'docker/docker-original.svg',
		},
		{
			name: 'Linux',
			icon: 'linux/linux-original.svg',
		},
	],
	databases: [
		{
			name: 'AWS DynamoDB',
			icon: 'dynamodb/dynamodb-original.svg',
		},
		{
			name: 'SQL Server',
			icon: 'microsoftsqlserver/microsoftsqlserver-original.svg',
		},
		{
			name: 'PostgreSQL',
			icon: 'postgresql/postgresql-original.svg',
		},
		{
			name: 'MySQL',
			icon: 'mysql/mysql-original.svg',
		},
		{
			name: 'MongoDB',
			icon: 'mongodb/mongodb-original.svg',
		},
		{
			name: 'Supabase',
			icon: 'supabase/supabase-original.svg',
		},
		{
			name: 'SQLite',
			icon: 'sqlite/sqlite-original.svg',
		},
	],
	learning: [
		{
			name: 'Rust',
			icon: 'rust/rust-original.svg',
		},
	],
	otros: [
		{
			name: 'Power Automate',
			icon: 'powerautomate',
		},
		{
			name: 'Apps Script',
			icon: 'googleappsscript',
		},
		{
			name: 'Git',
			icon: 'git/git-original.svg',
		},
		{
			name: 'VS Code',
			icon: 'vscode/vscode-original.svg',
		},
	],
};
