import { ContentTitle } from '../ContentTitle/ContentTitle';
import { Loading } from '../Loading/Loading';
import { GithubItem } from '../GithubItem/GithubItem';

import { GithubResponse } from '@interfaces/GithubResponse';
import { useGithubRepos } from '@hooks/useGithubRepos';
import { useGithubProfile } from '@hooks/useGithubProfile';

import './GithubSection.scss';

export const GithubSection = () => {
    const { githubRepos, loading } = useGithubRepos();
    const { gitHubProfile } = useGithubProfile("moises717");

    return (
        <section className='github-section'>
            <ContentTitle title={`Github (${gitHubProfile ? gitHubProfile?.public_repos : '0'})`} />
            <div className='github-section__content'>
                {loading ? <Loading /> : null}
                {
                    githubRepos && githubRepos.map((repo: GithubResponse) => {
                        return (
                            <GithubItem key={repo.id} {...repo} />
                        )
                    }
                    )
                }
            </div>
            <div className='github-section__complete-list'>
                <a href="https://github.com/moises717" target="_blank">Ver todos</a>
            </div>
        </section>
    )
}