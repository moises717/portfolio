import { lazy, Suspense } from 'react';

const GithubProjectList = lazy(() => import('@components/GithubProjectList/GithubProjectList'));

import { useIntersecting } from '@hooks/useIntersection';
import { List } from '@components/Skeleton/List/List';

export const GithubProjects = () => {
	const [intersectingRef, isIntersecting] = useIntersecting({ rootMargin: '0px' }, true);

	return (
		<div ref={intersectingRef} className='github-projects' id='github'>
			<Suspense fallback={<List lines={5} quantity={3} title showItems numberOfItems={1} />}>
				{isIntersecting && <GithubProjectList />}
			</Suspense>
		</div>
	);
};
