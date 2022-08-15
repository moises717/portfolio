interface CustomFetch {
	customToken?: string;
	url: string;
}

export const customFetch = async <T>({url, customToken}: CustomFetch, options?: RequestInit): Promise<T> => {
	const response = await fetch(url, {
		...options,
		headers: {
			Authorization: !customToken ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}` : customToken,
		},
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
};
