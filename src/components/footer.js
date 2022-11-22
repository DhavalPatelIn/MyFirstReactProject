import React from 'react';
import { BrowserRouter as Router, Link, NavLink} from "react-router-dom";

import Logo from "../images/footer-logo.png";

function Header () {
    return(
        <div className='min--footer'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='logo'><NavLink to="/"><img src={Logo} alt="Logo" /></NavLink></div>
                    <div className="minmenu">
                        <h5>Footer Link</h5>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>  
                    <div className='products--menu'>
                        <h5>Projects</h5>
                        <ul>
                        <li><Link to="/projects">Project 1</Link></li>
                        <li><Link to="/">Project 1</Link></li>
                        <li><Link to="/">Project 1</Link></li>
                        <li><Link to="/">Project 1</Link></li>
                        <li><Link to="/">Project 1</Link></li>
                        </ul>
                    </div>
                    <div className='address--wrapper'>
                    <h5>Address</h5>
                    <p>Muller Strasse 34, 74133<br />
                    Hamburg, Germany<br />
                    +18187882178<br />
                    info@stornoway.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;