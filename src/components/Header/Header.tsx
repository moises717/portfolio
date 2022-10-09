import { useHeaderItems } from '@hooks/useHeaderItems';
import { Contact, Folder, Home } from '@icons/index';
import { HeaderItems } from '@interfaces/HeaderItems';

import { NavItem } from './NavItem/NavItem';

import './Header.scss';

const HEADER_ITEMS: HeaderItems[] = [
	{
		id: 1,
		text: 'Inicio',
		icon: <Home />,
		to: '/',
	},
	{
		id: 2,
		text: 'Proyectos',
		icon: <Folder />,
		to: 'projects',
	},
	{
		id: 3,
		text: 'Contactar',
		icon: <Contact />,
		to: 'contact',
	},
];

export const Header = () => {
	const { headerItems, toggleActive, toggleActiveStyle } = useHeaderItems(HEADER_ITEMS);

	return (
		<div className='header'>
			<a href='#/' className='header__logo'>
				<span className='header__name'>Moisés</span>
				<span className='header__surname'>Barillas</span>
			</a>
			<ul className='nav-items'>
				{headerItems.list.map((element, index) => (
					<NavItem
						key={element.id}
						icon={element.icon}
						to={element.to}
						title={element.text}
						onClick={() => toggleActive(index)}
						className={toggleActiveStyle(index)}
					/>
				))}
			</ul>
		</div>
	);
};
