import img from '../../assets/images/hero.png';
import { ContentTitle } from '../../components/ContentTitle/ContentTitle';
import { GitHub, Linkedin } from '../../icons';

import './Home.scss'

export const Home = () => {
    return (
        <div className="home" id='home'>
            <div className="home__content">

                <div className='home__presentation'>
                    <h1>Hola! Soy Moisés, <span>desarrollador web</span></h1>
                </div>
                <div className='home__social'>
                    <a href="https://github.com/moises717" target="__blank">
                        <GitHub className='home__github' />
                    </a>
                    <a href="https://www.linkedin.com/in/moises-barillas/" target="__blank">
                        <Linkedin className='home__linkedin' />
                    </a>
                </div>

                <div className="home__about-me">
                    <ContentTitle title='Sobre mi' />
                    <p>
                        Soy Moisés Barillas, me encanta el desarrollo de software, particularmente en el ecosistema de javascript, me gusta aprender cosas nuevas cada día, lo cual me ah llevado a conocer entornos de desarrollo como frontend y backend, aunque no soy experto, me considero con las habilidades necesarias para aprender y llevar mis conocimientos a otro nivel.
                    </p>
                </div>
            </div>

        </div>
    )
}
