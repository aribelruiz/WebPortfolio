import React from 'react';
import profile from '../../../Images/aribelProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AribelResume from '../../Files/AribelResumeWeb.pdf';

const Splash = () => {
    return (
        <>
            <div className='home-div splash-page'>
            <div className='splash-txt'>
                <h1 className='heading'>Hi, I'm Aribel!</h1>
                <h3  className='subheading'>Software Developer</h3>
                <h5  className='txt-body'>
                    #WomanInSTEM with a passion for software engineering, front-end development, and education.
                </h5>
                <a className='resume-btn' href={AribelResume} download>
                    <div> My Resume </div>
                    <FontAwesomeIcon className='btn-icon' icon={['fas', 'file']}/>
                </a>
                <div className='splash-socials'>
                    <a href='https://www.linkedin.com/in/aribel-ruiz/'>
                        <FontAwesomeIcon className='social-icon' icon={["fab", "linkedin"]}/>
                    </a>
                    <a href='https://github.com/aribelruiz'>
                        <FontAwesomeIcon className='social-icon' icon={["fab", "github"]}/>
                    </a>
                </div>
            </div>
            <div className='splash-img'>
                <img id='logo-img' src={profile} alt='profile-img'></img>
            </div>
        </div>
        </>
    );
}

export default Splash;