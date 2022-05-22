import React from "react";
import { Link } from "react-router-dom";

const CardService = ({img, title, language, description, url}) => {
    return (
        <div className="card-service">
            <img src={img} alt="card-service" />
            <div className="card-service-content">
                <div>
                    <h2>{title}</h2>
                    <ul>
                        {language.map((element, i) => {
                            return (
                                <li key={i}>{element}</li>
                            );
                        }
                        )}
                    </ul>
                    {/* <p>{description}</p> */}
                </div>
                <button className="btn-url-view"><Link to='/works' state={{compenentsTypesState: title}}>View all project</Link></button>
            </div>
        </div>
    );
}

export default CardService;