import React from 'react';
import { Link } from 'react-router-dom';
import imgMolang3D from '../assets/img/png/molang3D.png';

// Fill data
import { dataHome } from '../data';

// Fill React component
import Navigation from '../compenents/react/Navigation';
import CardCompetence from '../compenents/react/CardCompetence';
import Footer from '../compenents/react/Footer';

// Fill img
import Developer from '../assets/img/png/card-competence/developer.png';
import Designer3D from '../assets/img/png/card-competence/3d-designer.png';
import DesignerUIUX from '../assets/img/png/card-competence/uiux-designer.png';

// Fill 3D
/* import Model from '../compenents/three/model'; */

const Home = () => {

    return (
        <div className="home">
            <Navigation />
            <div className="home-content">
                <div className="description">
                    <h2>{dataHome.titleH2}</h2>
                    <h1>{dataHome.titleH1}</h1>
                    <p>{dataHome.description}</p>
                </div>
                <img src={imgMolang3D} alt="molang3D" className='molang3D'/>
                {/* <Model className='model' /> */}
                <div className="competences">
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}} className='competence developer'><CardCompetence img={Developer} competence={dataHome.competences[0]} /></Link>
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}} className='competence designer-3d'><CardCompetence img={Designer3D} competence={dataHome.competences[1]} /></Link>
                    <Link to={{pathname: "/works", state: {selectedCompetentceType: "Developer"}}} className='competence designer-ui-ux'><CardCompetence img={DesignerUIUX} competence={dataHome.competences[2]} /></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;