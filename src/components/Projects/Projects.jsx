import Header from "../Header/Header";
import "./Projects.css";
import { projectsData } from "../../assets/projectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
// import React from 'react'

const Projects = () => {
  const projectCard = projectsData.map(
    ({ projectName, projectDescription, imageUrl, projectUrl }, ind) => {
      return (
        <ProjectCard
          key={ind}
          projectName={projectName}
          projectDescription={projectDescription}
          imageUrl={imageUrl}
          projectUrl={projectUrl}
        />
      );
    }
  );
  return (
    <div className="component-wrapper">
      <div className="projectspage__background">
        {/* <div className="background__color"></div> */}
          <Header
            heading="Some Of My Projects"
            details="Take a look at some of the projects. The list will be continually updated."
          />
        <div className="projectsCard__container">{projectCard}</div>
      </div>
    </div>
  );
};

export default Projects;
