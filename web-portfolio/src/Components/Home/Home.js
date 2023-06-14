import React from 'react';
import './Home.css';

import {Link} from 'react-router-dom';

import logo from '../../Images/aribelLogo.jpg';
import profile from '../../Images/aribelProfile.jpg';


const Home = () => {
    return (
        <div className='home-main'>
            <div className='home-div splash-page'>
                <div className='splash-txt'>
                    <h1 className='heading'>Hi, I'm Aribel!</h1>
                    <h3  className='subheading'>Software Developer</h3>
                    <h5  className='txt-body'>
                        #WomenInSTEM with a passion for software engineering, front-end development, and learning.
                    </h5>
                    <Link className='projects-btn' to='/projects'>
                        <a>My Projects</a>
                    </Link>
                </div>
                <div className='splash-img'>
                    <img id='logo-img' src={profile}></img>
                </div>
            </div>
            <hr></hr>
            <div className='home-div about-me'>
                <h1>About Me</h1>
            </div>
            <br></br>
            <div className='home-div skills'>
                <h1>Skills</h1>
            </div>
            <br></br>
            <div className='home-div projects'>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Home;