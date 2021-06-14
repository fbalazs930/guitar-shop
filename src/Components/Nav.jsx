import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='nav'>
            <div className="logo">
                &nbsp;
                <Link onClick={() => { setClick(false) }} to='/'>
                    <img src="https://images.ctfassets.net/4jcppgetbqrc/6WToDGcMMgACuki24qYAkK/ffb38e3d25308c6bd5fa021b77718ef7/jackson-logo.png" alt="" />
                    &nbsp;
                </Link>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link onClick={() => { setClick(false) }} to='/guitars' className="nav-link">
                        Gitárok
                    </Link>
                </li>
                <li>
                    <Link onClick={() => { setClick(false) }} to='/' className="nav-link">
                        Basszusgitárok
                    </Link>
                </li>
                <li>
                    <Link onClick={() => { setClick(false) }} to='/' className="nav-link">
                        Tartozékok
                    </Link>
                </li>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>


    )
}

export default Nav;
