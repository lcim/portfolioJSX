import "./ProjectCard.css";
import PropTypes from 'prop-types'
// import React from 'react'

const ProjectCard = ({
  projectName,
  projectDescription,
  imageUrl,
  projectUrl,
  visitProject,
}) => {
  return (
    <div className="projectCard__container">
      <div className="project__image__container">
        <a
          href={projectUrl}
          className="project__link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={imageUrl} alt="project image" className="project__image" />
        </a>
      </div>
      <div className="project__details__container">
        <h1 className="project__heading">{projectName}</h1>
        <p className="project__details">{projectDescription}</p>
        <a href={visitProject} className="visit__project" target="_blank" rel="noreferrer">More Details</a>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
    projectDescription: PropTypes.string,
    projectName: PropTypes.string,
    imageUrl: PropTypes.string,
  projectUrl: PropTypes.string,
    visitProject: PropTypes.string
}
export default ProjectCard;
