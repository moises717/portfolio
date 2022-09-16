import { Content } from '@components/Content';
import { Header } from '@components/Header';
import ThemeButton from '@components/ThemeButtom/ThemeButton';
import { useTheme } from '@hooks/useTheme';

import './Layout.scss';

const Layout = () => {
	const { theme, onChangeTheme } = useTheme();

	return (
		<main className={`layout ${theme ? 'light' : 'dark'}`} id='/'>
			<Header />
			<Content />
			<ThemeButton isLightningOn={theme} onClick={onChangeTheme} />
		</main>
	);
};

export default Layout;
