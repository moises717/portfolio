import { useRoutes } from 'react-router-dom'
import { RouterConfig } from './RouterConfig';

export const Router = () => {
    const routing = useRoutes(RouterConfig);

    return routing;
}
