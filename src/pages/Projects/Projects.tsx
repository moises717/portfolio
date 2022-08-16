import { GithubSection } from '@components/GithubSection/GithubSection';
import { VercelSection } from '@components/VercelSection/VercelSection';
import { ProjectSection } from '@components/ProjectSection/ProjectSection';

import './projects.scss';

export const Projects = () => {
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                <ProjectSection />
                <VercelSection />
                <GithubSection />
            </div>
        </div>
    )
}
