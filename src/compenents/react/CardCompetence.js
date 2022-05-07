import React from 'react';
import { useState } from 'react';

const CardCompetence = ({img, competence}) => {
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const imgBorderHover = isHover ? 'card-competence-img card-competence-img-hover' : 'card-competence-img';
    const imgHover = isHover ? 'card-competence-img-img card-competence-img-img-hover' : 'card-competence-img-img';

    return (
        <div className="card-competence">
            <div className={imgBorderHover}>
                <img src={img} alt=''
                    className={imgHover}
                    {...isClick ? {style: {margin: '-4px'}} : {}}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => setIsClick(!isClick)}
                />
            </div>
            <div className="card-competence-text" >
                <h3>{competence}</h3>
            </div>

        </div>
        
    )
}

export default CardCompetence;