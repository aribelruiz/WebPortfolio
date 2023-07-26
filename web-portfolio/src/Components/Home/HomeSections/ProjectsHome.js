import React from "react";
import { useState, useEffect, useRef} from "react";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectModal from "../../Projects/ProjectModal";

import "../../Projects/Projects.css";
import ProjectCard from "../../Projects/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { ProjectList } from "../../Projects/ProjectList";


const Projects = () => {

    let emptyProject = {
        name: "",
        img: "",
        tagline: "",
        description: "",
        role: "",
        contributions: ""
    }

    // For displaying modal
    const [show, setShow] = useState(false);
    const [currentProject, setCurrentProject] = useState(emptyProject);
    const handleClose = () => setShow(false);

    // For handling animation
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    // Splitting Project list to first 3 projects
    let projectHomeList = ProjectList;
    if (ProjectList.length > 3) {
        projectHomeList = ProjectList.slice(0, 3);
    }

    function setProject(currentProject) {
        setCurrentProject(currentProject);
        setShow(true);    
    }
 

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
                el.classList.add('project-show');
            });
        }
        else {
            ref.current.querySelectorAll('div').forEach((el) => {
                el.classList.remove('project-show');
            });
        }
    }, [isIntersecting]);


    return (
        <div className="home-div projects" id='projects'>
            <div className="projects-div">
                <div className="projects-header">
                    <h1 className="heading header-underline">My Personal Projects</h1>
                </div>
                <div className="projects-body">
                <div className="project-list" ref={ref}>
                        {projectHomeList.map((project, index) => 
                            <div key={index} className='project-card-btn project-hide' onClick={() => setProject(project)}>
                                <ProjectCard name={project.name} image={project.img} tagline={project.tagline}/>
                            </div>
                        )}
                    </div>
                </div>  
                <div className="projects-footer">
                    <Link className='more-btn' to='/projects'> 
                        <h4>See More Projects</h4>
                        <FontAwesomeIcon icon={["fas", "arrow-circle-right"]}/>
                    </Link>
                </div>
            </div>
            <Modal id='pop-up' show={show} onHide={handleClose}>
                <ProjectModal {...currentProject}/>
            </Modal>
        </div>
    );
}

export default Projects;