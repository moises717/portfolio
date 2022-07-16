import './contentTitle.scss';

interface Props {
    title: string
}

export const ContentTitle = ({ title }: Props) => {
    return (
        <div className="content-title">
            <h2>{title}</h2>
        </div>
    )
}
