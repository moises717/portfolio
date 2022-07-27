import { useGithubRepos } from '@hooks/useGithubRepos';
import { Code, GitHub } from '@icons/index';
import { Loading } from '../Loading/Loading';

import './GithubSection.scss';

export const GithubSection = () => {
    const { githubRepos, loading } = useGithubRepos();

    return (
        <section className='projects__github'>
            {loading ? <Loading /> : null}
            {
                githubRepos && githubRepos.map((repo) => {
                    return (
                        <div key={repo.id} className="github-card">
                            <div className='github-card__content'>
                                <a href={repo.html_url} target="_blank" className='github-card__name'>
                                    {repo.name}
                                </a>
                                <div className='github-card__description'>
                                    {repo.description}
                                </div>
                                <div className='github-card__footer'>
                                    <Code /> {repo.language && <span className='github-card__language'> {repo.language}</span>}
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </section>
    )
}