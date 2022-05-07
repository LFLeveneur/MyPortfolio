import React from "react";

// Fill data
import { dataAbout } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import Navigation from "../compenents/react/Navigation";

const About = () => {
    return (
        <div className="about">
            <Navigation />
                <h1 className="home">{dataAbout.title}</h1>
            <Footer />
        </div>
    );
}

export default About;