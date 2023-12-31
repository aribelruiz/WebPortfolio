import React from "react";

const ProjectCard = ({image, name, tagline}) => {
    return(
        <div className="project-card">
            <div style={{backgroundImage: `url(${image})`}} className='project-img'/>
            <div className="project-card-txt">
                <h2> {name} </h2>
                <h5 className="subheading"> {tagline} </h5>
            </div>
            <h6 className="card-view-btn">Learn More </h6>
        </div>
    );
}

export default ProjectCard;