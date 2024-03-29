import React from 'react';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import SvgLogo from './svg-icon/SvgLogo';
import SvgButtonMenu from './svg-icon/SvgButtonMenu';

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
            if (widthScreen > 991) {
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
                <NavLink to="/" className="logo">
                    {SvgLogo}
                </NavLink>
                
                {/* If isOpen is true, or the screen is bigger than 768px, the menu will be open/display */}
                {(isOpen || widthScreen > 991) && (
                    <ul>
                        <li><NavLink to="/Works" >Works</NavLink></li>
                        <li><NavLink to="/Services" >Services</NavLink></li>
                        <li><NavLink to="/About" >About</NavLink></li>
                        
                        {/* Come in soon in V2 */}
                        {/* <li><NavLink to="/Contact" className="no"><button className="btn-contact">Contact</button></NavLink></li> */}
                        
                    </ul>
                )}
                <button className="btn-menu" onClick={handleClick}><SvgButtonMenu /></button>
            </nav>
        </div>
    )
}

export default Navigation;