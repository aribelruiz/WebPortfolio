import React from 'react';
import profile2 from '../../../../Images/aribelProfile2.jpg';

const AboutMe = () => {
    return (
        <>
            <div className='home-div about-me'>
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
        </>
    );
}

export default AboutMe;