import { ProjectSection } from '@components/ProjectSection/ProjectSection';
import { GithubSection } from '@components/GithubSection/GithubSection';

import './projects.scss';

export const Projects = () => {
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                <ProjectSection />
                <GithubSection />
            </div>
        </div>
    )
}
