import React from 'react';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import SvgLogo from './svg-icon/SvgLogo';
import ButtonMenu from '../../assets/img/svg/button-menu.svg';

const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    // If the users click on the button menu, the menu will be open
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const changeWidth = () => {
            setWidthScreen(window.innerWidth);

            // If the screen is bigger than 768px, the menu will be close
            if (widthScreen > 768) {
                setIsOpen(false);
            }
        }

        // listen to the resize event
        window.addEventListener('resize', changeWidth);

        return () => {
            // Remove the event listener 
            window.removeEventListener('resize', changeWidth);
        }

    }, [widthScreen]);

    return (
        <div className="navigation">
            <nav>
                <NavLink to="/" className={"active" ? "no" : ""}>
                    {SvgLogo}
                </NavLink>

                {/* If isOpen is true, or the screen is bigger than 768px, the menu will be open/display */}
                {(isOpen || widthScreen > 768) && (
                    <ul>
                        <li><NavLink to="/Work" >Work</NavLink></li>
                        <li><NavLink to="/Service" >Service</NavLink></li>
                        <li><NavLink to="/About" >About</NavLink></li>
                        <li><NavLink to="/Contact" className={"active" ? "no" : ""}><button className="btn-contact">Contact</button></NavLink></li>
                    </ul>
                )}
                <button className="btn-menu" onClick={handleClick}><img src={ButtonMenu} alt="button menu" /></button>
            </nav>
        </div>
    )
}

export default Navigation;