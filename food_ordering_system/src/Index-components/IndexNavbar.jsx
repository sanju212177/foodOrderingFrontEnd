import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-scroll';
import "./Index.css"
function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className='index'>
            <nav className={nav ? "nav active" : "nav"}>
                <Link to='main' className='logo' smooth={true} duration={2000}>
                    <img src={logo} alt='' />
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link className='navbarButton' to='main' smooth={true} duration={1000}>Header</Link></li>
                    <li><Link className='navbarButton' to='features' smooth={true} duration={1000}>Features</Link></li>
                    <li><Link className='navbarButton' to='offer' smooth={true} duration={1000}>Offer</Link></li>
                    <li><Link className='navbarButton' to='about' smooth={true} duration={1000}>About</Link></li>
                    <li><Link className='navbarButton' to='contact' smooth={true} duration={1000}>Contact</Link></li>
                    <li><a href='/admin'>Admin</a></li>
                    
                </ul>
            </nav>
        </div>
    )

}
export default Navbar;