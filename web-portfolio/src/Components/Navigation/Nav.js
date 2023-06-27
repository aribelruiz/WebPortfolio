import React, {useEffect, useState} from 'react';
import './Nav.css'

import {Link} from'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../../Images/aribelLogo.jpg';


const Nav = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[])
    
    return (
        <div className='navbar' id={expandNavbar? "open" : "close"}>
            <div className='nav-header' id='top'>
                <a className='navbar-brand' href='/'>
                    <img className='brand-img' src={logo} alt='aribel-logo'></img>
                </a>
                <button className='navbar-toggler' id='toggle-btn' type='button' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
            <div className='nav-body'>
                <Link className='nav-item' to='/' onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                    <div className='nav-link'> Home </div>
                </Link>
                <HashLink className='nav-item' to='/#about-me' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <div className='nav-link'> About Me </div>
                </HashLink>
                <HashLink className='nav-item' to='/#skills' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <div className='nav-link'> My Skills </div>
                </HashLink>
                <Link className='nav-item' to='/projects' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <div className='nav-link'> Projects </div>
                </Link>
                <Link className='nav-item contact-btn' to='/contact' onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                    <div className='nav-link'> Contact Me </div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;