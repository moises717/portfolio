import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import { cn } from '@/utils/cn';
import { IconBrainCog, IconBriefcase, IconHome } from '../icons';
import { ToggleTheme } from '../ToggleTheme';

export const FloatingNav = ({ className }: { className?: string }) => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, 'change', current => {
		let direction = current - (scrollYProgress.getPrevious() ?? 0);

		if (scrollYProgress.get() < 0.0) {
			setVisible(false);
		} else {
			if (direction < 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}
	});
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					'flex max-w-fit z-[500] fixed h-16 shadow-sm bottom-10 md:top-10 mx-auto border border-transparent rounded-full dark:bg-gray-950  bg-gray-200 items-center justify-center space-x-4 sm:space-x-8 sm:pr-8 sm:pl-12 sm:py-4 sm:inset-x-12 sm:rounded-3xl pr-2 pl-8 py-2',
					className,
				)}
			>
				<a
					href={'/'}
					className={cn(
						'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
					)}
				>
					<span className='block sm:hidden'>
						<IconHome className='w-6 h-6' />
					</span>
					<span className='hidden sm:block text-sm'>Inicio</span>
				</a>
				<a
					href={'/'}
					className={cn(
						'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
					)}
				>
					<span className='block sm:hidden'>
						<IconBriefcase className='w-7 h-7' />
					</span>
					<span className='hidden sm:block text-sm'>Proyectos</span>
				</a>
				<a
					href={'/'}
					className={cn(
						'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
					)}
				>
					<span className='block sm:hidden'>
						<IconBrainCog className='w-6 h-6' />
					</span>
					<span className='hidden sm:block text-sm'>Habilidades</span>
				</a>
				<ToggleTheme />
			</motion.div>
		</AnimatePresence>
	);
};
