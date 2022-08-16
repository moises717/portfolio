import { DevIcons } from "@icons/DevIcons";
import { Code } from "@icons/index";
import { GithubResponse } from "@interfaces/GithubResponse";

import './githubItem.scss';

export const GithubItem = ({ name, description, html_url, language }: GithubResponse) => {
    const programingLanguage = language ? language.toLowerCase() : null;

    return (
        <ul className="github-list">
            <div className='github-list__content'>
                <a href={html_url} target="_blank" className='github-list__name'>
                    {name}
                </a>
                <div className='github-list__description'>
                    {description}
                </div>
                <div className='github-list__footer'>
                    {programingLanguage ? DevIcons[programingLanguage] : <><Code /> Unknown</>}
                    {language && <span className='github-list__language'> {language}</span>}
                </div>
            </div>
            <div className='github-complete-list'>
                <a href="https://github.com/moises717" target="_blank">Ver todos</a>
            </div>
        </ul>
    )
}
