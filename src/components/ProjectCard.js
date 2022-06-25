import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
      <Card style={{ width: "22rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/images/${project.image}`}
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Button
            variant="link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </Button>
          <Button
            variant="link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
