import React, { useEffect, useState } from "react";

// Fill data
import { dataWorks } from '../data';

// Fill React component
import Navigation from "../compenents/react/Navigation";
import CardProject from "../compenents/react/CardProject";
import Footer from "../compenents/react/Footer";

const Works = () => {
    

    return (
        <div className="work">
            <Navigation />
            <div className="home">
                <h1>{dataWorks.title}</h1>
                <CardProject title="title" language="language" description="description" />
            </div>
            <Footer />
        </div>
    );
}

export default Works;