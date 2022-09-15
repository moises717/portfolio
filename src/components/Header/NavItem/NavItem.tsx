import { ReactElement } from 'react';

interface Props {
	icon: ReactElement[] | ReactElement;
	title: string;
	to: string;
}

export function NavItem({ icon, title, to }: Props) {
	//nav-items--active
	return (
		<li className={`nav-items__list`}>
			<a href={`#${to}`} className='nav-items__item'>
				<span className='nav-items__icon'>{icon}</span>
				<span className='nav-items__text'>{title}</span>
			</a>
		</li>
	);
}
