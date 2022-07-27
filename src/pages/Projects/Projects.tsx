import { ContentTitle } from '@components/ContentTitle/ContentTitle';
import { ProjectSection } from '@components/ProjectSection/ProjectSection';
import { GithubSection } from '@components/GithubSection/GithubSection';

import './projects.scss';
import { useGithubProfile } from '../../hooks/useGithubProfile';

export const Projects = () => {
    const { gitHubProfile } = useGithubProfile("moises717");
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                <ContentTitle title='Proyectos' />
                <ProjectSection />
                <ContentTitle title={`Github (${gitHubProfile?.public_repos})`} />
                <GithubSection />
            </div>
        </div>
    )
}
