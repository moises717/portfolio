import { lazy, Suspense } from 'react';

// import { VercelSection } from '../VercelSection/VercelSection';
import { GithubSection } from '../GithubSection/GithubSection';

import { Home } from '@pages/Home/Home';
import { useIntersecting } from '@hooks/useIntersection';
import { Contact } from '@pages/Contact/Contact';

const VercelSection = lazy(() => import('../VercelSection/VercelSection'));

import './content.scss';

export const Content = () => {
	const [intersectingRef, intersecting] = useIntersecting({ rootMargin: '0px' }, true);

	return (
		<div className='content'>
			<Suspense fallback={null}>
				<Home />
				<div ref={intersectingRef}>
					{intersecting && (
						<>
							<VercelSection />
							<GithubSection />
							<Contact />
						</>
					)}
				</div>
			</Suspense>
		</div>
	);
};
