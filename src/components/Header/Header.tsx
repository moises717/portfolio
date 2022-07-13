import { Contact, Folder, Home, Lightning } from '../../icons';
import { NavItem } from './NavItem/NavItem';

import './Header.scss';

export const Header = () => {

    return (
        <div className="header">
            <div className="header__logo">
                Moises barillas
            </div>
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