import { RouteObject } from 'react-router-dom';

import Layout from '../layout';
import { Home } from '../pages/Home/Home';
import { Skill } from '../pages/Skills/Skill'
import { Projects } from '../pages/Projects/Projects';
import { Contact } from '../pages/Contact/Contact';

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
			},
			{
				path: '/projects',
				element: <Projects />,

			},
			{
				path: '/contact',
				element: <Contact />,
			}
		],
	},
];
