export const customFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
	const response = await fetch(url, {
		...options,
		headers: {
			Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
		},
	});

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}
	return response.json();
};
