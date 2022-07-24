import { ReactElement } from 'react'
import './Card.scss'

interface Props {
    title: string
    children?: ReactElement | ReactElement[],
    image?: string
}

const Card = ({ title, image, children }: Props) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={image} alt="project-1" />
            </div>
            <div className="card__header">
                <h3>{title}</h3>
            </div>
            <div className="card__body">
                {children}
            </div>
        </div>
    )
}

export const Text = ({ children }: { children: string }) => {
    return (
        <p>
            {children}
        </p>
    )
}

export const Technologies = ({ children }: { children: ReactElement | ReactElement[] }) => {
    return (
        <div className='card__tecnologies'>
            {children}
        </div>
    )
}

Card.Text = Text
Card.Technologies = Technologies

export default Card;
