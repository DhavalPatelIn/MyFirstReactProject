import React from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom"
import {useState} from 'react';

import Logo from "../images/logo.png";
const Header = () => {

const [toggleMenu, settoggleMenu] = useState(false);
const navTogglerHnadle = () => {
    if(toggleMenu){
        settoggleMenu(false);
    }
    else{
        settoggleMenu(true);
    }
}
const closeMenu = () => {
settoggleMenu(false);
}

    return(
        <div className='min--header'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='logo'><NavLink to="/"><img src={Logo} alt="Logo" /></NavLink></div>
                    <div className={`mobile-nav  ${toggleMenu ? 'active' : '' } `} onClick={navTogglerHnadle}>
                        <div></div>
                    </div> 
                    <div className="minmenu">
                        <nav className={`navbar site-nav  ${toggleMenu ? 'open-mobile-nav' : '' } `}>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/projects">Projects</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;