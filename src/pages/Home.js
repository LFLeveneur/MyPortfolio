import React from 'react';
import { Link } from 'react-router-dom';

// Fill data
import { dataHome } from '../data';

// Fill React component
import Navigation from '../compenents/react/Navigation';
import CardCompetence from '../compenents/react/CardCompetence';
import Footer from '../compenents/react/Footer';

// Fill img
import Developer from '../assets/img/png/card-competence/developer.jpg';
import Designer3D from '../assets/img/png/card-competence/3d-designer.png';
import DesignerUIUX from '../assets/img/png/card-competence/uiux-designer.png';

// Fill 3D
/* import Model from '../compenents/three/model'; */

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="home">
                <div className="description">
                    <h2>{dataHome.titleH2}</h2>
                    <h1>{dataHome.titleH1}</h1>
                    <p>{dataHome.description}</p>
                </div>
                {/* <Model className='model' /> */}
                <div className="competences">
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}}><div className='competence developer'><CardCompetence img={Developer} competence={dataHome.competences[0]} /></div></Link>
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}}><div className='competence designer-3d'><CardCompetence img={Designer3D} competence={dataHome.competences[1]} /></div></Link>
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}}><div className='competence designer-ui-ux'><CardCompetence img={DesignerUIUX} competence={dataHome.competences[2]} /></div></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;