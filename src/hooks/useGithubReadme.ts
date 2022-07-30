import {useEffect, useState} from 'react';
import {getGithubReadme} from '@services/github';

export const useGithubReadme = () => {
	const [readmeText, setReadmeText] = useState<string>('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getGithubReadme().then((res) => {
			const result = res as string;
			setReadmeText(result);
			setLoading(false);
		});
	}, []);

	return {
		readmeText,
		loading,
	};
};
