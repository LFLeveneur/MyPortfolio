import React from "react";

// Fill data
import { dataContact } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import Navigation from "../compenents/react/Navigation";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
                <h1 className="home">{dataContact.title}</h1>
            <Footer />
        </div>
    );
}

export default Contact;