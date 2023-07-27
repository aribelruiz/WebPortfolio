import React from "react";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Projects.css"
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { ProjectList } from "./ProjectList";
import bbImg from '../../Images/Projects/BrainBeats/bb1.png';


const Projects = () => {

    let emptyProject = {
        name: "",
        img: "",
        slides: [bbImg],
        tagline: "",
        description: "",
        role: "",
        contributions: ""
    }

    // For displaying modal
    const [show, setShow] = useState(false);
    const [currentProject, setCurrentProject] = useState(emptyProject);
    const handleClose = () => setShow(false);

    function setProject(currentProject) {
        setCurrentProject(currentProject);
        setShow(true);    
    }

    return (
        <div className="projects">
            <div className="projects-div">
                <div className="projects-header">
                    <h1 className="heading header-underline">Previous Projects</h1>
                </div>
                <div className="projects-body">
                    {/* <h4 style={{textAlign:"left", paddingTop: "0px", color: 'black'}} className="projects-heading2 subheading">Below are some of my projects:</h4> */}
                    <div className="project-list">
                        {ProjectList.map((project, index) => 
                            <div key={index} className='project-card-btn' onClick={() => setProject(project)}>
                                <ProjectCard name={project.name} image={project.img} tagline={project.tagline}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal id='pop-up' show={show} onHide={handleClose}>
                <ProjectModal {...currentProject}/>
            </Modal>
        </div>
    );
}

export default Projects;