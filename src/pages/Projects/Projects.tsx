import { GithubSection } from '@components/GithubSection/GithubSection';
import { VercelSection } from '@components/VercelSection/VercelSection';

import './projects.scss';

export const Projects = () => {
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                <VercelSection />
                <GithubSection />
            </div>
        </div>
    )
}
