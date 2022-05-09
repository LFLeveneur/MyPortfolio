import React from "react";


// Fill data
import { dataServices } from '../data';

// Fill React component
import Footer from "../compenents/react/Footer";
import CardService from "../compenents/react/CardService";
import Navigation from "../compenents/react/Navigation";

const Services = () => {
    return (
        <div className="services">
            <Navigation />
            <div className="services-content">
                <h1>{dataServices.title}</h1>
                {/* Content of the banner section in top of the page */}
                <div className="services-info">
                    {/* Content of the right side of the banner sectio */}
                    <div className="services-info-content">
                        <ul>
                            {dataServices.myServices.map((element, i) => {
                                return (
                                    <li key={i}><h4>{element}</h4></li>
                                );
                            }
                            )}
                        </ul>
                        <h2>Work at home and,<br/> I can move in Paris</h2>
                    </div>
                    {/* Content of the left side of the banner section */}
                    <div className="services-info-indicatif">
                        {/* Content of the available services */}
                        <div className="services-info-available">
                            <div>
                                <div className="services-info-available-cercle"></div>
                                <p>{dataServices.available}</p>
                            </div>
                            <p>{dataServices.availableDate}</p>
                        </div>
                        {/* Content of the services : price and experience */}
                        <div className="services-info-price-experience">
                            <div className="sevrvices-info-price">
                                <p>Indicative price</p>
                                <p>{dataServices.price}</p>
                            </div>
                            <div className="sevrvices-info-experience">
                                <p>Experience</p>
                                <p>{dataServices.experience}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-cards">
                    {dataServices.services.map((element, i) => {
                        const { image, title, language, description} = element;
                        return (
                            <CardService key={i} img={image} title={title} language={language} description={description} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;