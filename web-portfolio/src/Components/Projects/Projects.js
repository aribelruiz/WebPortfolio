import React from "react";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Projects.css"
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { ProjectList } from "./ProjectList";
// import bbImg from '../../Images/Projects/BrainBeatsHome.png';

const Projects = () => {

    // let defaultImg = bbImg;
    let emptyProject = {
        name: "",
        img: "",
        tagline: "",
        description: "",
        role: "",
        contributions: ""
    }

    // // Setting projects
    // let brainBeats = {
    //     name: "Brain Beats V4",
    //     img: bbImg,
    //     tagline: "Music Sharing Platform",
    //     role: "Front-End Developer",
    //     description: "Version 4 of a music sharing web app built for converting brain activity" +
    //     " into Musical Instrument Digital Interface files (MIDI).",
    //     contributions: "Modularized the previous front-end system• Wrote extensive documentation for future developers" +
    //     "• Worked alongside backend developers to implement functional front-end components" + 
    //     "• Designed and implemented UI/UX"
    // }


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
                    <h1 className="heading header-underline">Projects</h1>
                </div>
                <h4 style={{textAlign:"left", paddingTop: "0px"}} className="projects-header subeading">Below are some of my projects:</h4>
                <div className="projects-body">
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
                <ProjectModal 
                    name={currentProject.name}
                    img={currentProject.img}
                    role={currentProject.role}
                    description={currentProject.description}
                    contributions={currentProject.contributions}
                    projectLink = {currentProject.projectLink}
                    github = {currentProject.github}
                    viewProject = {currentProject.viewProject}
                    closeModal={setShow}/>
            </Modal>
        </div>
    );
}

export default Projects;