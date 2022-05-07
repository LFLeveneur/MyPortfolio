import React from "react";


// Fill data
import { dataServices } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import Navigation from "../compenents/react/Navigation";

const Services = () => {
    return (
        <div className="services">
            <Navigation />
                <h1 className="home">{dataServices.title}</h1>
            <Footer />
        </div>
    );
}

export default Services;