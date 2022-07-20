import { ReactElement } from 'react';
import './contentTitle.scss';

interface Props {
    title: string,
    textIcon?: ReactElement,
}

export const ContentTitle = ({ title, textIcon }: Props) => {
    return (
        <div className="content-title">
            <h2>{title}</h2> {textIcon}
        </div>
    )
}
