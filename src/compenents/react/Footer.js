import React from 'react';
import IconButton from './IconButton';

// Fill svg
import SvgMail from './svg-icon/SvgMail';
import SvgDribble from './svg-icon/SvgDribble';
import SvgLinkedin from './svg-icon/SvgLinkedin';

const Footer = () => {
    

    return (
        <div className="footer">
            <a href='mailto:louisf.leveneur@gmail.com' >
                <IconButton text='louisf.leveneur@gmail.com' svg={<SvgMail />}/>
            </a>
            <a href='https://dribbble.com/LEVENEUR' target='_blank' rel='noreferrer'>
                <IconButton text='LEVENEUR' svg={<SvgDribble />}/>
            </a>
            <a href='https://www.linkedin.com/in/louis-leveneur-74410b1b9/' target='_blank' rel='noreferrer'>
                <IconButton text='Louis Leveneur' svg={<SvgLinkedin />}/>
            </a>
        </div>
    )
}

export default Footer;