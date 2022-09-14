import { Contact, Folder, Home } from '@icons/index';
import { NavItem } from './NavItem/NavItem';

import './Header.scss';

export const Header = () => {
	return (
		<div className='header'>
			<a href='#/' className='header__logo'>
				<span className='header__name'>Moisés</span>
				<span className='header__surname'>Barillas</span>
			</a>
			<ul className='nav-items'>
				<NavItem icon={<Home />} to='/' title='Inicio' />
				<NavItem icon={<Folder />} to='projects' title='Proyectos' />
				<NavItem icon={<Contact />} to='contact' title='Contactar' />
				<div className='indicator'></div>
			</ul>
		</div>
	);
};
