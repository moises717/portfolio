import { Code } from '../../icons'
import './footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            {new Date().getFullYear()} - Moises Barillas
            <Code />
        </div>
    )
}
