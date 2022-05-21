import React from 'react';
import { useState } from 'react';

// Fill data
import { dataWorks } from '../data';

// Fill React component
import Navigation from "../compenents/react/Navigation";
import CardProject from "../compenents/react/CardProject";
import Footer from "../compenents/react/Footer";

const Works = () => {

    const [selectedCompetentceType, setSelectedCompetentceType] = useState("");
    const compenentsTypes = ["Developer", "Designer 3D", "Designer UI/UX"];

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