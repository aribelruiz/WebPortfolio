import React from 'react';
import './Contact.css';
import logo from '../../Images/aribelLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AribelResume from '../Files/AribelResumeWeb.pdf';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-logo'>
                <img className='logo-img' src={logo} alt='logo-img'></img>
            </div>
            <div className='contact-txt'>
                <div className='contact-txt-header'>
                    <h1>Interested in hiring?</h1>
                    <h2 className='subheading'>Get in touch</h2>
                </div>
                <div className='contact-txt-body'>
                    <h4 className='contact-line'>
                        <FontAwesomeIcon icon={["fas", "envelope"]}/>
                        Email:  
                        <a href='mailto: aribelr1@gmail.com'>aribelr1@gmail.com</a>    
                    </h4>
                    <h4 className='contact-line'>
                        <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                        LinkedIn:  
                        <a href='https://www.linkedin.com/in/aribel-ruiz/'>linkedin.com/in/aribel-ruiz/</a>    
                    </h4>
                    <a className='resume-btn' href={AribelResume} download>
                        My Resume
                        <FontAwesomeIcon className='btn-icon' icon={['fas', 'file']}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;