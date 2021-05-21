import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='nav'>
            <img src="https://images.ctfassets.net/4jcppgetbqrc/6WToDGcMMgACuki24qYAkK/ffb38e3d25308c6bd5fa021b77718ef7/jackson-logo.png" alt="" className="logo" />
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link className="nav-link">
                    Gitárok
                </Link>           
                <Link className="nav-link">
                    Basszusgitárok
                </Link>           
                <Link className="nav-link">
                    Tartozékok
                </Link>           
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        </div>

        
    )
}
