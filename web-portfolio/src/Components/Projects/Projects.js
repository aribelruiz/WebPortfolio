import React from "react";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Projects.css"
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// import { ProjectList } from "./ProjectList";
import bbImg from '../../Images/Projects/BrainBeatsHome.png';

const Projects = () => {

    // // creating project
    // let defaultImg = bbImg;
    let emptyProject = {
        name: "",
        img: "",
        tagline: "",
        description: "",
        role: "",
        contributions: ""
    }

    // Setting projects
    let brainBeats = {
        name: "Brain Beats V4",
        img: bbImg,
        tagline: "Music Sharing Platform",
        role: "Front-End Developer",
        description: "Version 4 of a music sharing web app built for converting brain activity" +
        " into Musical Instrument Digital Interface files (MIDI).",
        contributions: "Modularized the previous front-end system• Wrote extensive documentation for future developers" +
        "• Worked alongside backend developers to implement functional front-end components" + 
        "• Designed and implemented UI/UX"
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
                    <h1 className="heading header-underline">My Personal Projects</h1>
                </div>
                <div className="projects-body">
                    <div className="project-list">
                        {/* {ProjectList.map((project) => {
                            return  
                            <div className='project-card-btn' onClick={() => setProject(project)}>
                                <ProjectCard name={project.name} image={project.img} tagline={project.tagline}/>
                            </div>
                        })} */}
                        
                        <div className='project-card-btn' onClick={() => setProject(brainBeats)}>
                            <ProjectCard name={brainBeats.name} image={brainBeats.img} tagline={brainBeats.tagline}/>
                        </div>
                        {/* <ProjectCard name={"Epilapse"} image={epilapseImg} tagline={"Seizure Tracking Application"}/>
                        <ProjectCard name={"Long Live Decay"} image={lldImg} tagline={"Action/Adventure Video Game"}/> */}
                    </div>
                </div>
            </div>
            <Modal id='pop-up' show={show} onHide={handleClose}>
                <ProjectModal 
                    name={currentProject.name}
                    img={currentProject.img}
                    description={currentProject.description}
                    contributions={currentProject.contributions}
                    closeModal={setShow}/>
            </Modal>
        </div>
    );
}

export default Projects;