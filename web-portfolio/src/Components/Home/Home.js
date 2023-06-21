import React from 'react';
import './Home.css';

//Import sub sections
import Splash from './HomeSections/Splash';
import AboutMe from './HomeSections/About/AboutMe';
import Skills from './HomeSections/Skills/Skills';

const Home = () => {
    return (
        <div className='home-main'>
            <Splash/>
            <hr id='about-me'></hr>
            <AboutMe/>
            <hr id='skills'></hr>
            <Skills/>
            <hr id='projects'></hr>
            <div className='home-div projects'>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Home;