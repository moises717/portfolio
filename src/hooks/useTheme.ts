import { useState } from 'react';

const currentTheme = localStorage.getItem('theme') || 'false';

export const useTheme = () => {
	const [theme, setTheme] = useState<boolean>(JSON.parse(currentTheme));

	const onChangeTheme = () => {
		setTheme(t => {
			localStorage.setItem('theme', JSON.stringify(!t));
			return !t;
		});
	};

	return {
		theme,
		onChangeTheme,
	};
};
