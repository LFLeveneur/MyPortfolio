import React from 'react';

// Fill React component
import Navigation from '../compenents/react/Navigation';
import CardCompetence from '../compenents/react/CardCompetence';
import Footer from '../compenents/react/Footer';

// Fill img
import Developer from '../assets/img/png/card-competence/developer.jpg';
import Designer3D from '../assets/img/png/card-competence/3d-designer.png';
import DesignerUIUX from '../assets/img/png/card-competence/uiux-designer.png';

// Fill 3D
import Model from '../compenents/three/model';

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="home">
                <div className="description">
                    <h2>Hello, I’m</h2>
                    <h1>Louis</h1>
                    <p> a student web developer based in Paris. I’m a passionate and creative person who loves to create and build things. I’m a self-taught developer and I’m always looking for new challenges and opportunities to learn and grow.</p>
                </div>
                <Model className='model' />
                <div className="competences">
                    <div className='competence developer'><CardCompetence img={Developer} competence='Developer' /></div>
                    <div className='competence designer-3d'><CardCompetence img={Designer3D} competence='Designer 3D' /></div>
                    <div className='competence designer-ui-ux'><CardCompetence img={DesignerUIUX} competence='Designer UI/UX' /></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;