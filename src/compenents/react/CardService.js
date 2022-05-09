import React from "react";

const CardService = ({img, title, language, description}) => {
    return (
        <div className="card-service">
            <img src={img} alt="card-service" />
            <div className="card-service-content">
                <div>
                    <h2>{title}</h2>
                    <ul>
                        {language.map((element, i) => {
                            return (
                                <li key={i}><h6>{element}</h6></li>
                            );
                        }
                        )}
                    </ul>
                    <p>{description}</p>
                </div>
                <button className="btn-url-view"><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><h3>View all project</h3></a></button>
            </div>
        </div>
    );
}

export default CardService;