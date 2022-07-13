import { ReactElement } from "react";

import { Content } from "../components/Content";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";

import './Layout.scss';

interface Layout {
    children: ReactElement | ReactElement[];
}

const Layout = ({ children }: Layout) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;