import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "react-bootstrap/Modal";

const ProjectModal = (project) => {

    // Splitting contributions array into separate elements
    let str = project.contributions;
    let strArr = str.split("\u2022");

    return (
        <>
        <div>
            <div className="modal-background">
                <Modal.Header className='modal-container-header' closeButton>
                </Modal.Header> 
                <Modal.Body className='modal-container-body'>
                    <div className="modal-img-div">
                        <img className='modal-img' src={project.img} alt='project-img'></img>
                    </div>
                    <div className="modal-txt">
                    <h1>{project.name}</h1>
                        <h4>Front-End Developer</h4>
                        <div className="txt-body">
                            <h6 className="txt-body">{project.description}</h6>
                            <br></br>
                        </div>
                        <a className='project-link' href='https://github.com/Brainbeats-v4/BrainBeatsv4'>                    
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                            View Github
                        </a>
                        <hr></hr>

                        <h6 className="subheading">My Contributions</h6>
                        <h6 className="txt-body">
                            <ul class='task-bullets' id='tasks-list'>
                                {strArr.map((str, bullet) =>
                                    <div className="task-bullet">
                                        <FontAwesomeIcon className='bullet-icon' icon={["fas", "circle-check"]}/>
                                        <h6 key={bullet} className="txt-body">{str}</h6>
                                    </div>
                                )}
                            </ul>
                        </h6>
                    </div>
                </Modal.Body>
            </div>
        </div>
        </>
    );
}

export default ProjectModal;