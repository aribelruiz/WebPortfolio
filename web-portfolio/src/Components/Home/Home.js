import React from 'react';
import './Home.css';

//Import sub sections
import Splash from './HomeSections/Splash';
import AboutMe from './HomeSections/About/AboutMe';
import Skills from './HomeSections/Skills/Skills';
import ProjectsHome from './HomeSections/ProjectsHome';


const Home = () => {
    return (
        <div className='home-main'>
            <Splash/>
            {/* <hr id='about-me'></hr> */}
            <AboutMe/>
            {/* <hr id='skills'></hr> */}
            <Skills/>
            {/* <hr id='projects'></hr> */}
            <ProjectsHome/>
        </div>
    );
}

export default Home;