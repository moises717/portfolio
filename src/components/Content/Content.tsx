import { Contact } from '../../pages/Contact/Contact';
import { Home } from '../../pages/Home/Home';
import { GithubSection } from '../GithubSection/GithubSection';
import { VercelSection } from '../VercelSection/VercelSection';

import './content.scss';

export const Content = () => {
	return (
		<div className='content'>
			<Home />
			<VercelSection />
			<GithubSection />
			<Contact />
		</div>
	);
};
