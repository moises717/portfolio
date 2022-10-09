import { ReactElement } from 'react';

interface Props {
	icon: ReactElement[] | ReactElement;
	title: string;
	to: string;
	onClick?: () => void;
	className?: string;
}

export function NavItem({ icon, title, to, onClick, className }: Props) {
	return (
		<li className={`nav-items__list ${className}`} onClick={onClick}>
			<a href={`#${to}`} className='nav-items__item'>
				<span className='nav-items__icon'>{icon}</span>
				<span className='nav-items__text'>{title}</span>
			</a>
		</li>
	);
}
