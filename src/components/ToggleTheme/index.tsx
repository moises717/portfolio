import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconMoon, IconSun } from '../icons';

export const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');
	const [icon, setIcon] = useState(theme === 'light' ? 'sun' : 'moon');
	const controls = useAnimation();

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		const newIcon = theme === 'light' ? 'moon' : 'sun';

		setTheme(newTheme);
		setIcon(newIcon);

		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// Realizar la animación
		controls.start({
			scale: [1, 1.2, 1], // Escala de 1 a 1.2 y luego a 1
			transition: { duration: 0.2 }, // Duración de la animación en segundos
		});
	};

	return (
		<motion.button
			className='text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'
			onClick={toggleTheme}
			animate={controls}
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
