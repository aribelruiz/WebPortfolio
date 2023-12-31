import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import {LazyLoadImage as Img} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import './Skills.scss';

// Importing Icon images
import jsImg from '../../../../Images/Icons/javascript.png'; 
import tsImg from '../../../../Images/Icons/typescript.png';
import htmlImg from '../../../../Images/Icons/html.png';
import cssImg from '../../../../Images/Icons/css.png'; 

import reactImg from '../../../../Images/Icons/react.png'; 
import bootstrapImg from '../../../../Images/Icons/bootstrap.png'; 
import figmaImg from '../../../../Images/Icons/figma.png';
import sassImg from '../../../../Images/Icons/sass.png';

import javaImg from '../../../../Images/Icons/java.png';
import cImg from '../../../../Images/Icons/c.png';
import cplusImg from '../../../../Images/Icons/cplus.png';

import gitImg from '../../../../Images/Icons/github.png';
import plasticImg from '../../../../Images/Icons/plasticScm.png';
import vsImg from '../../../../Images/Icons/vscode.png';
import unityImg from '../../../../Images/Icons/unity.png';

const Skills = () => {

    const [toggleSkills, setToggleSkills] = useState(true);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);


    // Initializes observer reference for skill animation
    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });

        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();

        //eslint-disable-next-line
    }, []);

    // When element comes into view, display element animation
    useEffect(() => {
        if(isIntersecting){
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.add('skill-show');
            });
        }
        else {
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.remove('skill-show');
            });
        }
    }, [isIntersecting]);

    return (
        <>
            <div className='home-div skills' id='skills'>
                <div className='skills-header skills-underline'>
                    <h1 className='heading header-underline'> Technical Skills</h1>
                </div>
                
                <div className='skills-body'>
                    <div id='skills-btns'>
                        <button className={!toggleSkills? 'skills-toggle-btn': 'toggle-active'} onClick={() => setToggleSkills(!toggleSkills)}> 
                            <FontAwesomeIcon icon={['fas', 'laptop-code']}/>
                            <h4 style={{fontWeight: "600"}} className='subheading'> Front-End </h4> 
                        </button>
                        <button className={toggleSkills? 'skills-toggle-btn': 'toggle-active'} onClick={() => setToggleSkills(!toggleSkills)}>
                            <FontAwesomeIcon icon={['fas', 'file-code']}/>
                            <h4 style={{fontWeight: "600"}} className='subheading'> Software Development </h4>
                        </button>
                    </div>

                    <div className='skills-item' ref={ref}>
                        <div className='skills-item-body skill-hide'>      

                            {/* Front End Skills */}           
                            {toggleSkills && <ul className='skills-list'>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={jsImg} alt='javascript-logo'></Img>
                                    <h6 className='subheading'> JavaScript </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={tsImg} alt='typescript-logo'></Img>
                                    <h6 className='subheading'> TypeScript </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={htmlImg} alt='html-logo'></Img>
                                    <h6 className='subheading'> HTML </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={cssImg} alt='css-logo'></Img>
                                    <h6 className='subheading'> CSS </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={reactImg} alt='react-logo'></Img>
                                    <h6 className='subheading'> React </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={bootstrapImg} alt='bootstrap-logo'></Img>
                                    <h6 className='subheading'> Bootstrap </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={figmaImg} alt='figma-logo'></Img>
                                    <h5 className='subheading'> Figma </h5>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={sassImg} alt='css-logo'></Img>
                                    <h6 className='subheading'> SASS </h6>
                                </div>
                            </ul>}

                            {/* Software Development Skills */}
                            {!toggleSkills && <ul className='skills-list'>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={javaImg} alt='java-logo'></Img>
                                    <h6 className='subheading'> Java </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={cImg} alt='c-file-icon'></Img>
                                    <h6 className='subheading'> C </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={cplusImg} alt='c++-logo'></Img>
                                    <h6 className='subheading'> C++ </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={gitImg} alt='github-logo'></Img>
                                    <h6 className='subheading'> GitHub </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={vsImg} alt='VScode-logo'></Img>
                                    <h6 className='subheading'> VS Code </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={unityImg} alt='unity-logo'></Img>
                                    <h6 className='subheading'> Unity </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <Img effect='opacity'   className='icon-img' src={plasticImg} alt='plastic-logo'></Img>
                                    <h6 className='subheading'> plasticScm </h6>
                                </div>
                            </ul>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;