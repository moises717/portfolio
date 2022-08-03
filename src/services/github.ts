import {API_URL} from '@constants/index';
import {GithubResponse} from '@interfaces/GithubResponse';
import {GithubProfileInfo} from '@interfaces/GithubProfileInfo';
import {customFetch} from '@utils/customFetch';
import {b64DecodeUnicode} from '@utils/base64Decode';

interface getUserRepos {
	username?: string;
	page?: number;
	perPage?: number;
}

export interface GithubFiles {
	username: string;
	repo: string;
	file: string;
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

export const getGithubFiles = async ({username, repo, file}: GithubFiles): Promise<String> => {
	const {content} = await customFetch(API_URL + `/repos/${username}/${repo}/contents/${file}`);

	return b64DecodeUnicode(content);
};
