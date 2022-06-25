import React from "react";
import { Row } from "react-bootstrap";
import { Nav, Button } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="page-content">
      <h1>Resume</h1>
      <Row>
        <Nav className="resume-pdf">
          <Button
            variant="link"
            href={`${process.env.PUBLIC_URL}/yas-resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Full Resume
          </Button>
        </Nav>
      </Row>
    </div>
  );
};

export default Resume;
