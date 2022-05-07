import React from "react";

const CardProject = ({title, language, description}) => {
    return (
        <div className="card-project">
            <img src="https://via.placeholder.com/150" alt="Card Project" />
            <h2>{title}</h2>
            <p>{language}</p>
            <p>{description}</p>
        </div>
    );
}

export default CardProject;