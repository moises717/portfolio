import {useEffect, useState} from 'react';

import {getUserRepos} from '@services/github';
import {GithubResponse} from '@interfaces/GithubResponse';

export const useGithubRepos = () => {
	const [githubRepos, setGithubRepos] = useState<GithubResponse[]>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getUserRepos({perPage: 10}).then((repos: GithubResponse[]) => {
			setGithubRepos(repos);
			setLoading(false);
		});
	}, []);

	return {
		githubRepos,
		loading,
	};
};
