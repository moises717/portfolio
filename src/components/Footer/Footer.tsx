import { Code } from '@icons/index';
import './footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            {new Date().getFullYear()}
            <Code />
        </div>
    )
}
