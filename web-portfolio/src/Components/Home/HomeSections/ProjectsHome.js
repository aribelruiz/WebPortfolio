import React from "react";
import "../../Projects/Projects.css";
import ProjectCard from "../../Projects/ProjectCard";
import bbImg from "../../../Images/Projects/BrainBeatsHome.png";
import epilapseImg from "../../../Images/Projects/EpilapseHome.png";
import lldImg from "../../../Images/Projects/LLDHome.png";


const Projects = () => {
    return (
        <div className="home-div projects">
            <h1 className="heading header-underline">My Personal Projects</h1>
            <div className="project-list">
                <ProjectCard name={"Brain Beats V4"} image={bbImg}/>
                <ProjectCard name={"Epilapse"} image={epilapseImg}/>
                <ProjectCard name={"Long Live Decay"} image={lldImg}/>
            </div>
        </div>
    );
}

export default Projects;