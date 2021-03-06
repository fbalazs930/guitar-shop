import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <form action="">
                    <input className='input' type="text" placeholder='Iratkozz fel hírlevelünkre' />
                    <button type="submit">Feliratkozás</button>
                </form>
                <img src="https://images.ctfassets.net/4jcppgetbqrc/6WToDGcMMgACuki24qYAkK/ffb38e3d25308c6bd5fa021b77718ef7/jackson-logo.png" alt="" />
            </div>
            <div className="bottom">
                <p>Adatvédelem</p>
                <p>Felhasználsái feltételek</p>
                <p>Regisztáció</p>
            </div>
        </div>
    )
}

export default Footer;