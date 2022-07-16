import { ReactElement, useState } from "react";

import { Content } from "../components/Content";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";
import ThemeButton from "../components/ThemeButtom/ThemeButton";


import './Layout.scss';

interface Layout {
    children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Layout) => {
    const [theme, setTheme] = useState<boolean>(false);

    return (
        <div className={`layout ${theme && 'light'}`}>

            {children}

            <ThemeButton isLightningOn={theme} onClick={() => setTheme(t => !t)} />
        </div >
    )
}

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;