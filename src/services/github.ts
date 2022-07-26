import {API_URL} from '@constants/index';
import {GithubResponse} from '@interfaces/GithubResponse';
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
		`${API_URL}/users/${username}/repos?page=${page}&per_page=${perPage}`
	);

	return response;
};
