import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills = () => {
    return (
        <>
            <div className='home-div skills' >
                <div className='skills-header'>
                    <h1 className='heading'> Skills </h1>
                    <h5 className='subheading'>My Technical Skills</h5>
                </div>
                <div className='skills-body'>
                    <div className='skills-item'>
                        <div className='skills-txt'>
                            <FontAwesomeIcon className='skills-icon' icon={['fas', 'laptop-code']}/>
                            <h2 className='subheading'> Languages </h2>
                            <br></br>
                            <h5 style={{textAlign:'left'}}>Front-End</h5>
                            <ul className='skills-list list-bg txt-body'>
                                <div className='skill'> 
                                    <FontAwesomeIcon className='skill-check' icon={['fab', 'js']}/>
                                    <h6 className=' skill-txt txt-body'> JavaScript </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon className='skill-check' icon={['fas', 'square-check']}/>
                                    <h6 className='skill-txt txt-body'> TypeScript </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon className='skill-check' icon={['fab', 'html5']}/>
                                    <h6 className='skill-txt txt-body'> HTML </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon className='skill-check' icon={['fab', 'css3-alt']}/>
                                    <h6 className='skill-txt txt-body'> CSS </h6>
                                </div>
                            </ul>
                            <h5 style={{textAlign:'left'}}>Programming</h5>
                            <ul className='skills-list list-bg txt-body'>
                                <div className='skill'> 
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                    <h6 className='skill-txt subheading'> Java </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                    <h6 className='skill-txt txt-body'> C </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                    <h6 className='skill-txt txt-body'> Python </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                    <h6 className='skill-txt txt-body'> C++ </h6>
                                </div>
                                <div className='skill'> 
                                    <FontAwesomeIcon icon={['fas', 'circle-check']}/>
                                    <h6 className='skill-txt txt-body'> C# </h6>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='skills-item'>
                        <div className='skills-txt'>
                            <h2 className='subheading'> Skills List 1 </h2>
                            <br></br>
                            <ul className='skills-list txt-body'>
                                <div> 1 point </div>
                                <div> 2 points </div>
                            </ul>
                        </div>
                    </div>
                    <div className='skills-item'>
                        <div className='skills-txt'>
                            <h2 className='subheading'> Skills List 1 </h2>
                            <br></br>
                            <ul className='skills-list txt-body'>
                                <div> 1 point </div>
                                <div> 2 points </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;