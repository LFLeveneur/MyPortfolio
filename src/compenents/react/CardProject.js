import React from "react";

import SvgUrlGitHub from './svg-icon/SvgUrlGitHub'


const CardProject = ({img, title, language, description, url, urlGitHub}) => {
    return (
        <div className="card-project">
            <div>
                <img src={img} alt="Card Project" />
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
            <div className="card-project-links">
                <button className="btn-url-git-hub" style={urlGitHub ? {display: 'block'} : {display: 'none'}}><a href={urlGitHub} target="_blank" rel="noopener noreferrer"><SvgUrlGitHub /></a></button>
                <button className="btn-url-view"><a href={url} target="_blank" rel="noopener noreferrer"><h3>View</h3></a></button>
            </div>
        </div>
    );
}

export default CardProject;