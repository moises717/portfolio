import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconMoon, IconSun, IconSystem } from '../icons';

const persistTheme = localStorage.getItem('theme') || 'light';
const THEMES = ['light', 'dark', 'system'];

export const ToggleTheme = () => {
	const [theme, setTheme] = useState(persistTheme);
	const controls = useAnimation();

	const toggleTheme = () => {
		const index = THEMES.indexOf(theme);

		const nextIndex = (index + 1) % THEMES.length;
		const nextTheme = THEMES[nextIndex] as 'light' | 'dark' | 'system';

		setTheme(nextTheme);
		localStorage.setItem('theme', nextTheme);

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(nextTheme);

		controls.start({
			scale: [1, 1.2, 1],
			transition: { duration: 0.2 },
		});
	};

	const TemeIcons = {
		light: (
			<motion.span layoutId='sun-icon' className='block w-6 h-6 '>
				<IconSun className='hover:transform hover:scale-110' />
			</motion.span>
		),
		dark: (
			<motion.span layoutId='mon-icon' className='block w-6 h-6 '>
				<IconMoon className='hover:transform hover:scale-110' />
			</motion.span>
		),
		system: (
			<motion.span layoutId='system-icon' className='block w-6 h-6 '>
				<IconSystem className='hover:transform hover:scale-110' />
			</motion.span>
		),
	} as { [key: string]: JSX.Element };

	return (
		<motion.button
			className='text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
			onClick={toggleTheme}
			animate={controls}
			aria-label='Cambiar tema'
		>
			{TemeIcons[theme]}
		</motion.button>
	);
};
