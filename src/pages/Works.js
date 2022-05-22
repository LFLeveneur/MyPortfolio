import React from 'react';
import { useState, useEffect } from 'react';

// Fill data
import { dataWorks } from '../data';

// Fill React component
import Navigation from "../compenents/react/Navigation";
import CardProject from "../compenents/react/CardProject";
import Footer from "../compenents/react/Footer";
import { useLocation } from 'react-router';

const Works = () => {
    // Recover the state of the url
    const location = useLocation();
    const compenentsTypesLocationState = location.state;

    // Define the variable of the state
    const [selectedCompetentceType, setSelectedCompetentceType] = useState("");
    const compenentsTypes = ["Developer", "Designer 3D", "Designer UI/UX"];

    useEffect(() => {
        // Use the state of the url to display the right projects
        if (compenentsTypesLocationState) {
            setSelectedCompetentceType(compenentsTypesLocationState.compenentsTypesState);
        }
    }, [compenentsTypesLocationState]);

    return (
        <div className="works">
            <Navigation />
            <div className="works-content">
                <div className='works-filter'>
                    <ul>
                        {compenentsTypes.map((types, i) => {
                            return <li key={i}>
                                <input type="radio" name="compenentsTypes" id={types} checked={types === selectedCompetentceType} onChange={(event) => setSelectedCompetentceType(event.target.id)}/>
                                <label htmlFor={types}>{types}</label>
                            </li>
                        })}
                        {selectedCompetentceType && (
                            <li style={{paddingRight: 0}}><button onClick={() => setSelectedCompetentceType("")}>See all</button></li>
                        )}
                    </ul>
                </div>

                <div className="works-card-content">
                    {dataWorks.works.filter((competence) => competence.type.includes(selectedCompetentceType)).map((element, i) => {
                        const { image, title, language, description, urlGitHub, url } = element;
                        return (
                            <CardProject key={i} img={image} title={title} language={language} description={description} url={url} urlGitHub={urlGitHub} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Works;