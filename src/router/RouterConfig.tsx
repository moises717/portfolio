import { RouteObject } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Skill } from '../pages/Skills/Skill'
import Layout from '../layout';

export const RouterConfig: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				index: true,
			},
			{
				path: '/skills',
				element: <Skill />,
			}
		],
	},
];
