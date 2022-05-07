import React from 'react';
import IconButton from './IconButton';

// Fill svg
import SvgMail from './svg-icon/SvgMail';
import SvgDribble from './svg-icon/SvgDribble';
import SvgLinkedin from './svg-icon/SvgLinkedin';

const Footer = () => {
    return (
        <div className="footer">
            <IconButton text='louisf.leveneur@gmail.com' svg={<SvgMail />}/>
            <IconButton text='LEVENEUR' svg={<SvgDribble />}/>
            <IconButton text='Louis Leveneur' svg={<SvgLinkedin />}/>
        </div>
    )
}

export default Footer;