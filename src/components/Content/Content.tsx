import { Outlet } from 'react-router-dom';

import './content.scss'

export const Content = () => {
    return (
        <div className="content">
            {<Outlet />}
        </div>
    )
}
