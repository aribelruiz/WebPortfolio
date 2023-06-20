import React from "react";

const ProjectCard = ({image, name}) => {
    return(
        <div className="project-card">
            <div style={{backgroundImage: `url(${image})`}} className='project-img'/>
            <h2> {name} </h2>
        </div>
    );
}

export default ProjectCard;