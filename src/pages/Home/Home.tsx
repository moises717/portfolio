import img from '../../assets/images/hero.png';

import './Home.scss'

export const Home = () => {
    return (
        <div className="home" id='home'>
            <div className='home__image'>
                <img src={img} alt="" />
            </div>
            <div className='home__presentation'>
                <h1>Hola! Soy Moises Barillas desarrollador web</h1>
            </div>

        </div>
    )
}
