import { Linkedin, Mail } from '@icons/index';
import './contact.scss';

export const Contact = () => {
	return (
		<div className='contact' id='contact'>
			<div className='contact__social'>
				<p>
					Estoy buscando mi primera oportunidad como desarrollador web, también estoy abierto a aprender y enfrentarme a
					nuevos retos, si consideras que mi perfil se ajusta a lo que buscas, <strong>no dudes en contactarme!</strong>
					,
				</p>
				<div className='contact__icons'>
					<a href='https://www.linkedin.com/in/moises-barillas/' className='icon-card' target='_blank'>
						<Linkedin className='icon-card__linkedin' />
					</a>
					<a
						href='mailto:moisesrocha717@gmail.com?cc=moisesbarillas717@gmail.com'
						className='icon-card'
						target='_blank'
					>
						<Mail className='icon-card__mail' />
					</a>
				</div>
			</div>
		</div>
	);
};
