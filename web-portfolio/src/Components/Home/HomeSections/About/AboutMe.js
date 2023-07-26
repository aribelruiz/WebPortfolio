import React from 'react';
import profile2 from '../../../../Images/aribelProfile2.jpg';

import {LazyLoadImage as Img} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './AboutMe.scss';

const AboutMe = () => {
    return (
        <>
            <div className='home-div about-me' id='about-me'>
                <div className='about-me-body'>
                    <div className='about-img'>
                        <Img className='profile-img' src={profile2} alt='profile-img' effect='blur'></Img>
                    </div>
                    <div className='about-txt'>
                        <h1 className='heading'>About Me</h1>
                        <h3 className='subheading'>Aribel Ruiz - Software Developer</h3>
                        <br></br>
                        <h5 className='txt-body'> I am a Computer Science graduate with a minor in Secure Computing & Networks (SCAN) and a former Undergraduate Learning Assistant from the University of Central Florida.</h5>
                        <h5 className='txt-body'> Currently seeking employment with an interest in software engineering and application/front-end development. </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;