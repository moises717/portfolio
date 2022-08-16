import { ReactElement } from "react";
import { ContentTitle } from "../ContentTitle/ContentTitle";
import { List } from "../Skeleton/List/List";

import './ProjectSection.scss'

interface ProjectSectionProps {
    children: ReactElement | ReactElement[];
    title?: string;
    isLoading?: boolean;
    loadingComponent?: ReactElement;
}

export const ProjectSection = ({ children, title, isLoading, loadingComponent }: ProjectSectionProps) => {
    return (
        <section className="project-section">
            <ContentTitle title={title ?? ''} />
            <div className="project-section__content">
                {children}
                {isLoading && loadingComponent}
            </div>
        </section>
    )
}
