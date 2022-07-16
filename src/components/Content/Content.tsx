import { Home } from '../../pages/Home/Home';
import { ContentTitle } from '../ContentTitle/ContentTitle';

import './content.scss'


export const Content = () => {
    return (
        <div className="content">
            <Home />
            <ContentTitle title='Habilidades' />
        </div>
    )
}
