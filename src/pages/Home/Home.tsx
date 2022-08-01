import ReactMarkdown from 'react-markdown'
import remarkGemoji from 'remark-gemoji'

import { GitHub, Linkedin } from '@icons/index';
import { useGithubReadme } from '@hooks/useGithubReadme';
import { HomeSkeleton } from '@components/HomeSkeleton/HomeSkeleton';

import profile from '@assets/images/profile.png'
import './Home.scss'

export const Home = () => {
    const { readmeText, loading } = useGithubReadme();

    return (
        <div className="home">
            <div className="home__content">
                <div className='home__presentation'>
                    <div className='home__image'>
                        <img src={profile} alt="Moises barillas picture" />
                    </div>
                    <div className='home__description'>
                        <h1> Hola! Soy Moisés Barillas <span>desarrollador web fullstack</span>
                        </h1>
                        <div className='home__social'>
                            <a href="https://github.com/moises717" target="__blank">
                                <GitHub className='home__github' />
                            </a>
                            <a href="https://www.linkedin.com/in/moises-barillas/" target="__blank">
                                <Linkedin className='home__linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home__about-me fade-in">
                    {
                        loading && <HomeSkeleton />
                    }
                    <ReactMarkdown remarkPlugins={[remarkGemoji]} children={readmeText} />
                </div>

            </div>
        </div>
    )
}
