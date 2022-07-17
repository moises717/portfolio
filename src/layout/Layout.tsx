import { ReactElement, useState } from "react";

import { Content } from "../components/Content";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";
import ThemeButton from "../components/ThemeButtom/ThemeButton";


import './Layout.scss';


const Layout = () => {
    const [theme, setTheme] = useState<boolean>(false);

    return (
        <div className={`layout ${theme ? 'light' : 'dark'}`}>
            <Header />
            <Content />
            <Footer />
            <ThemeButton isLightningOn={theme} onClick={() => setTheme(t => !t)} />
        </div >
    )
}



export default Layout;