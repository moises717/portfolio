import { Suspense } from 'react';

import { Home } from '@pages/Home/Home';
import { Contact } from '@pages/Contact/Contact';
import { VercelProjects } from '@pages/VercelProjects/VercelProjects';
import { GithubProjects } from '@pages/GithubProjects/GithubProjects';

import './content.scss';

export const Content = () => {
	return (
		<div className='content'>
			<div>
				<Home />
				<VercelProjects />
				<GithubProjects />
				<Contact />
			</div>
		</div>
	);
};
