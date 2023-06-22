import React from "react";
import "../../Projects/Projects.css";
import ProjectCard from "../../Projects/ProjectCard";
import bbImg from "../../../Images/Projects/BrainBeatsHome.png";
import epilapseImg from "../../../Images/Projects/EpilapseHome.png";
import lldImg from "../../../Images/Projects/LLDHome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className="home-div projects">
            <div className="projects-div">
                <div className="projects-header">
                    <h1 className="heading header-underline">My Personal Projects</h1>
                </div>
                <div className="projects-body">
                    <div className="project-list">
                        <ProjectCard name={"Brain Beats V4"} image={bbImg}/>
                        <ProjectCard name={"Epilapse"} image={epilapseImg}/>
                        <ProjectCard name={"Long Live Decay"} image={lldImg}/>
                    </div>
                </div>  
                <div className="projects-footer">
                    <Link className='more-btn' to='/projects'> 
                        <h4>See More Projects</h4>
                        <FontAwesomeIcon icon={["fas", "arrow-circle-right"]}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;