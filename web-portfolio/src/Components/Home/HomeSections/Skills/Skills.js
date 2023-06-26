import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Importing Icon images
import jsImg from '../../../../Images/Icons/javascript.png'; 
import tsImg from '../../../../Images/Icons/typescript.png';
import htmlImg from '../../../../Images/Icons/html.png';
import cssImg from '../../../../Images/Icons/css.png'; 

import reactImg from '../../../../Images/Icons/react.png'; 
import bootstrapImg from '../../../../Images/Icons/bootstrap.png'; 
import figmaImg from '../../../../Images/Icons/figma.png';

import javaImg from '../../../../Images/Icons/java.png';
import cImg from '../../../../Images/Icons/c.png';
import cplusImg from '../../../../Images/Icons/cplus.png';

import gitImg from '../../../../Images/Icons/github.png';
import plasticImg from '../../../../Images/Icons/plasticScm.png';
import vsImg from '../../../../Images/Icons/vscode.png';
import unityImg from '../../../../Images/Icons/unity.png';

const Skills = () => {
    return (
        <>
            <div className='home-div skills' >
                <div className='skills-header skills-underline'>
                    {/* <h1 className='heading'> Skills </h1>
                    <h1 className='subheading'> - </h1> */}
                    <h1 className='heading header-underline'> Technical Skills</h1>
                </div>
                <div className='skills-body'>
                    <div className='skills-item'>
                        <div className='skills-item-header'>
                            <FontAwesomeIcon className='skills-icon' icon={['fas', 'laptop-code']}/>
                            <h2 style={{fontWeight: "600"}} className='subheading'> Front-End </h2>
                        </div>
                        {/* <br></br> */}
                        <div className='skills-item-body'>                 
                            {/* <h5 style={{textAlign:'left'}}>Languages</h5> */}
                            <ul className='skills-list'>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={jsImg}></img>
                                    <h6 className='subheading'> JavaScript </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={tsImg}></img>
                                    <h6 className='subheading'> TypeScript </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={htmlImg}></img>
                                    <h6 className='subheading'> HTML </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={cssImg}></img>
                                    <h6 className='subheading'> CSS </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={reactImg}></img>
                                    <h6 className='subheading'> React </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={bootstrapImg}></img>
                                    <h6 className='subheading'> Bootstrap </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={figmaImg}></img>
                                    <h5 className='subheading'> Figma </h5>
                                </div>
                            </ul>
                        </div>
                    </div>
                 
                    <div className='skills-item'>
                        <div className='skills-item-header'>
                            <FontAwesomeIcon className='skills-icon' icon={['fas', 'file-code']}/>
                            <h2 style={{fontWeight: "600"}} className='subheading'> Software Development </h2>
                        </div>
                        {/* <br></br> */}
                        <div className='skills-item-body'>                 
                            {/* <h5 style={{textAlign:'left'}}>Languages</h5> */}
                                <ul className='skills-list'>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={javaImg}></img>
                                    <h6 className='subheading'> Java </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={cImg}></img>
                                    <h6 className='subheading'> C </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={cplusImg}></img>
                                    <h6 className='subheading'> C++ </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={gitImg}></img>
                                    <h6 className='subheading'> GitHub </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={vsImg}></img>
                                    <h6 className='subheading'> VS Code </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={unityImg}></img>
                                    <h6 className='subheading'> Unity </h6>
                                </div>
                                <div className='skill skill-icon'> 
                                    <img className='icon-img' src={plasticImg}></img>
                                    <h6 className='subheading'> plasticScm </h6>
                                </div>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default Skills;