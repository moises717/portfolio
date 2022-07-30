import ReactMarkdown from 'react-markdown'
import remarkGemoji from 'remark-gemoji'

import { GitHub, Linkedin } from '@icons/index';
import { useGithubReadme } from '@hooks/useGithubReadme';
import { Loading } from '@components/Loading/Loading';

import profile from '@assets/images/profile.png'
import './Home.scss'

export const Home = () => {
    const { readmeText, loading } = useGithubReadme();

    return (
        <div className="home fade-in">
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
                {
                    loading && <Loading />
                }
                <ReactMarkdown className='home__about-me' remarkPlugins={[remarkGemoji]} children={readmeText} />
            </div>

        </div>
    )
}
