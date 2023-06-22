import React from "react";
import "./Projects.css"
import ProjectCard from "./ProjectCard";
import bbImg from "../../Images/Projects/BrainBeatsHome.png"
import epilapseImg from "../../Images/Projects/EpilapseHome.png"
import lldImg from "../../Images/Projects/LLDHome.png"


const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-div">
                <div className="projects-header">
                    <h1 className="heading header-underline">My Personal Projects</h1>
                </div>
                <div className="projects-body">
                    <div className="project-list">
                        <ProjectCard name={"Brain Beats V4"} image={bbImg} tagline={"Music Sharing Platform"}/>
                        <ProjectCard name={"Epilapse"} image={epilapseImg} tagline={"Seizure Tracking Application"}/>
                        <ProjectCard name={"Long Live Decay"} image={lldImg} tagline={"Action/Adventure Video Game"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;