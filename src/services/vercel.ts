import { VercelProjects } from '@interfaces/VercelDeployment';
import { VERCEL_API_URL } from '@constants/index';
import { customFetch } from '@utils/customFetch';

export const getVercelDeployment = async (): Promise<VercelProjects> => {
	const response = await customFetch<VercelProjects>({
		url: `${VERCEL_API_URL}/v6/projects`,
		customToken: 'Bearer ' + import.meta.env.VITE_APP_VERCEL_TOKEN,
	});
	return response;
};
