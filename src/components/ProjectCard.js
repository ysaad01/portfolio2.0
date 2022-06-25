import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>

    <Col xs={12} md={6} lg={4} xl={3} className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/Images/${project.image}`}
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
