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
            <div className="about-content">
                <h1>{dataAbout.title}</h1>
                <p>{dataAbout.text1}</p>
                <br/>
                <p>{dataAbout.text2}</p>
                <a href={dataAbout.cv} target='_blank'><button className="btn-cv">My CV</button></a>
            </div>
            <Footer />
        </div>
    );
}

export default About;