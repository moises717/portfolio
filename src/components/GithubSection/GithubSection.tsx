import { useEffect, useState } from 'react';

import { getUserRepos } from '@services/github';
import { GithubResponse } from '@interfaces/GithubResponse';

import './GithubSection.scss';

export const GithubSection = () => {
    const [githubRepos, setGithubRepos] = useState<GithubResponse[]>();

    useEffect(() => {
        getUserRepos({ perPage: 10 }).then((repos: GithubResponse[]) => {
            setGithubRepos(repos);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(githubRepos);

    return (
        <div className='projects__github'>
            {
                githubRepos && githubRepos.map((repo) => {
                    return (
                        <div key={repo.id}>
                            <a href={repo.html_url} target="_blank">
                                <div className="projects__github__item">
                                    <div className="projects__github__item__title">
                                        {repo.name}
                                    </div>
                                    <div className="projects__github__item__description">
                                        {repo.description}
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }
                )

            }
        </div>
    )
}
