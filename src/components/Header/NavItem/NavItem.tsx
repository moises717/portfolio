import { ReactElement } from "react";
import { LinkProps, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

interface Props extends LinkProps {
    icon: ReactElement[] | ReactElement;
}

export function NavItem({ to, icon, title }: Props) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const navigate = useNavigate();

    return (
        <li className={`nav-items__list ${match && "nav-items--active"}`} >
            <a onClick={() => navigate(to)} className='nav-items__item' >
                <span className='nav-items__icon'>
                    {icon}
                </span>
                <span className='nav-items__text'>{title}</span>
            </a>
        </li>
    );
}
