import { useEffect, useState } from 'react';

import { Project } from '@interfaces/VercelDeployment';
import { getVercelDeployment } from '@services/vercel';

export const useVercelDeployments = () => {
	const [projects, setProjects] = useState<Project[]>();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		getVercelDeployment().then(({ projects }) => {
			setProjects(projects);
			setIsLoading(false);
		});
	}, []);

	return {
		projects,
		isLoading,
	};
};
