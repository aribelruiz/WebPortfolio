import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <a href='https://www.linkedin.com/in/aribel-ruiz/'>
                  <FontAwesomeIcon className='footer-icon' icon={["fab", "linkedin"]}/>
                </a>
                <a href='https://github.com/aribelruiz'>
                  <FontAwesomeIcon className='footer-icon' icon={["fab", "github"]}/>
                </a>
                <a href='mailto: aribelr1@gmail.com'>
                  <FontAwesomeIcon className='footer-icon' icon={["fas", "envelope"]}/>
                </a>
            </div>
            <p className='footer-copyright'>&copy; 2023 aribelruiz.com</p>
        </div>
    );
}

export default Footer;