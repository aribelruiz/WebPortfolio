import React, {useEffect, useState} from 'react';
import './Nav.css'

import {Link, useLocation} from'react-router-dom';
import logo from '../../Images/aribelLogo.jpg';


const Nav = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    
    return (
        <div className='navbar' id={expandNavbar? "open" : "close"}>
            <div className='nav-header'>
                <a class='navbar-brand' href='/'>
                    <img className='brand-img' src={logo} alt='aribel-logo'></img>
                </a>
                <button className='navbar-toggler' id='toggle-btn' type='button' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
            <div className='nav-body'>
                <Link className='nav-item' to='/'> 
                    <a className='nav-link'> Home </a>
                </Link>
                <div className='nav-item' href="#about-me">
                    <a className='nav-link' href='#about-me'> About Me </a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='#skills'> Skills </a>
                </div>
                <Link className='nav-item' to='/projects'> 
                    <a className='nav-link'> Projects </a> 
                </Link>
                <Link className='nav-item contact-btn' to='/contact'> 
                    <a className='nav-link'> Contact Me </a>
                </Link>
            </div>
        </div>
    );
}

export default Nav;