import React from "react";
import { Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <div className="page-content">
      <h1>Projects</h1>

      <Row className="project-wrapper">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Row>
    </div>
  );
};

export default Projects;
