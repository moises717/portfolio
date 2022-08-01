import { NavLink } from 'react-router-dom';
import { Contact, Folder, Home, Lightning } from '../../icons';
import { NavItem } from './NavItem/NavItem';

import './Header.scss';

export const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header__logo">
                <span className='header__name'>Moisés</span>
                <span className='header__surname'>Barillas</span>
            </NavLink>
            <ul className='nav-items'>
                <NavItem icon={<Home />} to="/" title='Inicio' />
                <NavItem icon={<Lightning />} to="skills" title='Habilidades' />
                <NavItem icon={<Folder />} to="projects" title='Proyectos' />
                <NavItem icon={<Contact />} to="contact" title='Contactar' />
                <div className='indicator'></div>
            </ul>

        </div >
    )
}