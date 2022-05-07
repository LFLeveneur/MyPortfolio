import React from 'react';

const IconButton = ({text, svg}) => {
    return (
        <div className="icon-button">
            <button className='btn-text'>{text}</button>
            <button className='btn-icon'>{svg}</button>
        </div>
    )
}

export default IconButton;