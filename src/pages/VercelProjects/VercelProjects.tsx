import { lazy, Suspense } from 'react';

const VercelProjectList = lazy(() => import('@components/VercelProjectList/VercelProjectList'));

import { useIntersecting } from '@hooks/useIntersection';
import { List } from '@components/Skeleton/List/List';

export const VercelProjects = () => {
	const [intersectingRef, isIntersecting] = useIntersecting({ rootMargin: '0px' }, true);

	return (
		<div ref={intersectingRef} className='project-page' id='projects'>
			<Suspense fallback={<List lines={4} quantity={4} numberOfItems={4} showItems title />}>
				{isIntersecting && <VercelProjectList />}
			</Suspense>
		</div>
	);
};
