import React, {useEffect, useState} from 'react';
import './Nav.css'

import {Link} from'react-router-dom';
import logo from '../../Images/aribelLogo.jpg';


const Nav = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[])
    
    return (
        <div className='navbar' id={expandNavbar? "open" : "close"}>
            <div className='nav-header'>
                <a className='navbar-brand' href='/'>
                    <img className='brand-img' src={logo} alt='aribel-logo'></img>
                </a>
                <button className='navbar-toggler' id='toggle-btn' type='button' onClick={() => {setExpandNavbar((prev) => !prev)}}>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
            <div className='nav-body'>
                <div className='nav-item'> 
                    <a className='nav-link' href='/'> Home </a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='/#about-me'> About Me </a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='/#skills'> My Skills </a>
                </div>
                <div className='nav-item'>
                    <a className='nav-link' href='/#projects'> Projects </a>
                </div>
                <Link className='nav-item contact-btn' to='/contact' onClick={() => {setExpandNavbar((prev) => !prev)}}> 
                    <div className='nav-link'> Contact Me </div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;