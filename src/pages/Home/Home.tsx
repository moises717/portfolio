import { ContentTitle } from '@components/ContentTitle/ContentTitle';
import { useGithubProfile } from '@hooks/useGithubProfile';
import { GitHub, Linkedin, Book, User } from '@icons/index';
import { getAge } from '@utils/Age';

import profile from '@assets/images/profile.png'
import './Home.scss'

const age = getAge();

export const Home = () => {
    const { gitHubProfile } = useGithubProfile('moises717');
    return (
        <div className="home fade-in">
            <div className="home__content">
                <div className='home__presentation'>
                    <div className='home__image'>
                        <img src={profile} alt="Moises barillas picture" />

                    </div>
                    <div>
                        <h1> Hola! Soy {gitHubProfile?.name}, <span>
                            {gitHubProfile?.bio}
                        </span>
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


                <div className="home__about-me">
                    <ContentTitle title='Sobre mi' textIcon={<Book />} />
                    <p>
                        Tengo {age} años, actualmente me encuentro cursando la carrera de ingeniería en sistemas, me gustan los retos y aprender cosas nuevas cada dia, lo cual me ah llevado a conocer entornos de desarrollo como <strong>frontend</strong> y <strong>backend</strong>.
                    </p>
                    <ContentTitle title='Mi historia' textIcon={<User />} />
                    <p>
                        Hace 3 años hice una búsqueda en internet, <b>¿Como se hace una pagina web?</b> y uno de los resultados fue <b>html, css y javascript</b>, <strong>javascript</strong> es un lenguaje de programación al que le he dedicado tiempo, desde como funciona en el navegador, hasta como se ejecuta en el servidor. Fue una pregunta sencilla pero que desencadeno mi curiosidad y me insto a aprender nuevas tecnologías.
                    </p>
                </div>
            </div>

        </div>
    )
}
