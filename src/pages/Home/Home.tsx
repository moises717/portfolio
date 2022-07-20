import { ContentTitle } from '@components/ContentTitle/ContentTitle';
import { GitHub, Linkedin, Book, User } from '@icons/index';
import { getAge } from '@utils/Age';

import './Home.scss'

const age = getAge();

export const Home = () => {
    return (
        <div className="home" id='home'>
            <div className="home__content">
                <div className='home__presentation'>
                    <h1> Hola! Soy Moisés Barillas, <span>
                        Desarrollador web fullstack
                    </span>
                    </h1>
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
                    <ContentTitle title='Sobre mi' textIcon={<Book />} />
                    <p>
                        Tengo {age} años, actualmente me encuentro cursando la carrera de ingeniería en sistemas. soy una persona al que le gustan los retos y aprender cosas nuevas cada dia, lo cual me ah llevado a conocer entornos de desarrollo como <strong>frontend</strong> y <strong>backend</strong>.
                    </p>
                    <ContentTitle title='Mi historia' textIcon={<User />} />
                    <p>
                        Hace 3 años me hice la pregunta, <b>¿Como se hace una pagina web?</b> y uno de los resultados fue <b>javascript</b>, Este es un lenguaje al que le he dedicado tiempo, desde como funciona en el navegador hasta como se ejecuta en el servidor. Fue una pregunta sencilla pero que desencadeno mi curiosidad y me insto a aprender nuevas tecnologías.
                    </p>
                </div>
            </div>

        </div>
    )
}
