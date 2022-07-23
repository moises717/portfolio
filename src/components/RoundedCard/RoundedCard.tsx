import { ReactElement } from "react"

export interface RoundedCardProps {
    title: string,
    icon: ReactElement,
    classColor?: string,
}

export const RoundedCard = ({ title, icon, classColor }: RoundedCardProps) => {

    return (
        <div className={`rounded-card ${classColor}`}>
            {icon}
            <span>{title}</span>
        </div>
    )
}
