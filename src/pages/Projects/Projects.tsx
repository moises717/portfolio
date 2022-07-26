import { ContentTitle } from '@components/ContentTitle/ContentTitle';
import { GithubSection } from '@components/GithubSection/GithubSection';
import { ProjectSection } from '@components/ProjectSection/ProjectSection';

import './projects.scss';

export const Projects = () => {
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                <ContentTitle title='Proyectos' />
                <ProjectSection />
                <ContentTitle title='Github' />
                <GithubSection />
            </div>
        </div>
    )
}
