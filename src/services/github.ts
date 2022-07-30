import {API_URL, GITHUB_RAW_URL_FILE} from '@constants/index';
import {GithubResponse} from '@interfaces/GithubResponse';
import {GithubProfileInfo} from '@interfaces/GithubProfileInfo';
import {customFetch} from '@utils/customFetch';

interface getUserRepos {
	username?: string;
	page?: number;
	perPage?: number;
}

export const getUserRepos = async ({
	page = 1,
	perPage,
	username = 'moises717',
}: getUserRepos): Promise<GithubResponse[]> => {
	const response = await customFetch<GithubResponse[]>(
		`${API_URL}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=author-date&direction=desc`
	);

	return response;
};

export const getUserInfo = async (username: string): Promise<GithubProfileInfo> => {
	const response = await customFetch<GithubProfileInfo>(`${API_URL}/users/${username}`);

	return response;
};

export const getGithubReadme = async (): Promise<String> => {
	const response = await fetch(GITHUB_RAW_URL_FILE);
	const result = await response.blob();
	const readme = await result.text();
	return readme;
};
