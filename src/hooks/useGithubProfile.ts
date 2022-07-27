import {useEffect, useState} from 'react';
import {GithubProfileInfo} from '@interfaces/GithubProfileInfo';
import {getUserInfo} from '@services/github';

export const useGithubProfile = (username: string) => {
	const [gitHubProfile, setGithubProfile] = useState<GithubProfileInfo>();

	useEffect(() => {
		getUserInfo(username).then((res) => {
			setGithubProfile(res);
		});
	}, []);

	return {
		gitHubProfile,
	};
};
