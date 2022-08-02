import {useEffect, useState} from 'react';
import {getGithubFiles, GithubFiles} from '@services/github';

export const useGithubFiles = (props: GithubFiles) => {
	const [fileGithubInfo, setGithubFileInfo] = useState<string>('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getGithubFiles({...props}).then((res) => {
			const result = res as string;
			setGithubFileInfo(result);
			setLoading(false);
		});
	}, []);

	return {
		fileGithubInfo,
		loading,
	};
};
