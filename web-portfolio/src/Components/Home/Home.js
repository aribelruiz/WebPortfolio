import React from 'react';
import './Home.css';

import {Link} from 'react-router-dom';

import logo from '../../Images/aribelLogo.jpg';
import profile from '../../Images/aribelProfile.jpg';
import profile2 from '../../Images/aribelProfile2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                        <a> My Projects </a>
                        <FontAwesomeIcon className='btn-icon' icon={['fas', 'folder']}/>
                    </Link>
                </div>
                <div className='splash-img'>
                    <img id='logo-img' src={profile}></img>
                </div>
            </div>
            <hr></hr>
            <div className='home-div about-me' id='about-me'>
                <div className='about-img'>
                    <img id='logo-img' src={profile2}></img>
                </div>
                <div className='about-txt'>
                    <h1 className='heading'>About Me</h1>
                    <h3 className='subheading'>Aribel Ruiz - Software Developer</h3>
                    <h6 className='txt-body'> I am a Computer Science graduate with a minor in Secure Computing & Networks (SCAN) and a former Undergraduate Learning Assistant from the University of Central Florida.</h6>
                    <h6 className='txt-body'> Currently seeking employment with an interest in software engineering and application/front-end development. </h6>
                </div>
            </div>
            <hr></hr>
            <div className='home-div skills' id='skills'>
                <h1>Skills</h1>
            </div>
            <hr></hr>
            <div className='home-div projects' id='projects'>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Home;