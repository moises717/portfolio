import { useState } from 'react';

import { Content } from '@components/Content';
import { Header } from '@components/Header';
import ThemeButton from '@components/ThemeButtom/ThemeButton';

import './Layout.scss';

const Layout = () => {
	const [theme, setTheme] = useState<boolean>(false);

	return (
		<main className={`layout ${theme ? 'light' : 'dark'}`}>
			<Header />
			<Content />
			<ThemeButton isLightningOn={theme} onClick={() => setTheme(t => !t)} />
		</main>
	);
};

export default Layout;
