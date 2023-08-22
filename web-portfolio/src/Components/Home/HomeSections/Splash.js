import React from 'react';
import profile from '../../../Images/aribelProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Splash = () => {

    return (
        <>
            <div className='home-div splash-page' id='splash'>
            <div className='splash-txt'>
                <h1 className='heading'>Hi, I'm Aribel!</h1>
                <h3  className='subheading'>Software Developer</h3>
                <h5  className='txt-body'>
                    #WomanInSTEM with a passion for software engineering, front-end development, and education.
                </h5>
                <a className='splash-btn' href="/contact">
                    <div> Contact Me </div>
                </a>
                <div className='splash-socials'>
                    <a href='https://www.linkedin.com/in/aribel-ruiz/' target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className='social-icon' icon={["fab", "linkedin"]}/>
                    </a>
                    <a href='https://github.com/aribelruiz' target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon className='social-icon' icon={["fab", "github"]}/>
                    </a>
                </div>
            </div>
            <div className='splash-img'>
                <img className='logo-img' src={profile} alt='profile-img'></img>
            </div>
        </div>
        </>
    );
}

export default Splash;