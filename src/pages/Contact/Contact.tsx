import './contact.scss'

export const Contact = () => {
    return (
        <div className='contact'>
            <form action='mailto:moisesrocha717@gmail.com' method='POST'>
                <div className="contact__form">
                    <div className='contact__form--name'>
                        <label htmlFor="name">Nombre</label>
                        <input className='contact__form--name' type="text" name='name' autoFocus placeholder='Nombre completo' />
                    </div>
                    <div className='contact__form--message'>
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" />
                    </div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}
