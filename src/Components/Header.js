import React, {useRef}from "react";
import Logo from './LOGO.png';

export default function Header(){
        const navMenu = useRef(null);
        const signIn = useRef(null);
        const showMenu = (TSE) => {
            navMenu.current.classList.toggle('active');
        }
    return(
        <header>
        <div className="logo">
            <img src={Logo}  alt="Our Logo"/>
        </div>
        <li className="create-account"><a to="form" className="sign-link" ref={signIn}>sign in</a></li>
        <nav className="navigation-wrapper">
            <ul className="navigation-menu" ref={navMenu}>
                <li><a href="#updates" className="link">updates</a></li>
                {/* <li><a href="#apply" class="link">apply</a></li> */}
                <li><a href="#about" className="link">about us</a></li>
                <li><a href="#contact" className="link">contact</a></li>
            </ul>

             <div className="mobile-menu" id="menu-btn" onClick={showMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
            </div>
        </nav>

        </header>
       
    )
}