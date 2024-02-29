import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LANGS = ['es', 'en'];
const persistedLang = localStorage.getItem('lang');

export const LangPicker = () => {
	const [theme, setTheme] = useState(persistedLang || 'es');
	const controls = useAnimation();

	const toggleTheme = () => {
		const index = LANGS.indexOf(theme);
		const nextIndex = (index + 1) % LANGS.length;
		const nextTheme = LANGS[nextIndex] as 'es' | 'en';

		setTheme(nextTheme);
		localStorage.setItem('lang', nextTheme);
		window.location.href = `/${nextTheme === 'es' ? '' : nextTheme}`;

		controls.start({
			scale: [1, 1.2, 1],
			transition: { duration: 0.2 },
		});
	};

	const TemeIcons = {
		en: (
			<motion.span layoutId='sun-icon' className='block w-6 h-6 '>
				en
			</motion.span>
		),
		es: (
			<motion.span layoutId='mon-icon' className='block w-6 h-6 '>
				es
			</motion.span>
		),
	} as { [key: string]: JSX.Element };

	return (
		<motion.a
			className='text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white rounded-full'
			onClick={toggleTheme}
			animate={controls}
			aria-label='Cambiar tema'
		>
			{TemeIcons[theme]}
		</motion.a>
	);
};
