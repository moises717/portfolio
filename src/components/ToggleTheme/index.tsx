import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconMoon, IconSun } from '../icons';

const persistTheme = localStorage.getItem('theme') || 'light';

export const ToggleTheme = () => {
	const [theme, setTheme] = useState(persistTheme);
	const [icon, setIcon] = useState(theme === 'light' ? 'sun' : 'moon');
	const controls = useAnimation();

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		const newIcon = theme === 'light' ? 'moon' : 'sun';

		setTheme(newTheme);
		setIcon(newIcon);

		if (newTheme === 'dark') {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}

		controls.start({
			scale: [1, 1.2, 1],
			transition: { duration: 0.2 },
		});
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add(theme);
		} else {
			document.documentElement.classList.remove(theme);
		}
	}, [theme]);

	return (
		<motion.button
			className='text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
			onClick={toggleTheme}
			animate={controls}
			aria-label='Cambiar tema'
		>
			{icon === 'sun' ? (
				<motion.span layoutId='sun-icon' className='block w-6 h-6 '>
					<IconSun className='hover:transform hover:scale-110' />
				</motion.span>
			) : (
				<motion.span layoutId='moon-icon' className='block w-6 h-6'>
					<IconMoon />
				</motion.span>
			)}
		</motion.button>
	);
};
