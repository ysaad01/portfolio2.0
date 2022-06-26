import React from "react";
import { Nav, Button, Row, Col } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="page-content">
      <h1>Resume</h1>
      <Row>
        <Nav className="resume-pdf">
          <Button
            className="btn btn-danger"
            variant="link"
            href={`${process.env.PUBLIC_URL}/yas-resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Full Resume
          </Button>
        </Nav>
      </Row>

      <Row className="resume-body">
        <Col>
          <div class="card text-white bg-primary mb-3">
            <div class="card-body">
              <h3 class="card-title">Education</h3>
              <ul className="card-text">
                <li>Michigan State University, Full Stack Bootcamp</li>
                <li>Baldwin Wallace University, International Studies</li>
              </ul>
              <br />
              <h3 class="card-title">Work History</h3>
              <h4>Rocket Mortgage</h4>
              <ul>
                <li>SOS Loan Specialist</li>
                <li>Power Banker</li>
              </ul>
              <br />
              <h4>Angel Dental Care</h4>
              <ul>
                <li>Office Receptionist</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col>
          <h3>Technology Skills</h3>
          <br />
          <h4>Experience With:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Github</li>
            <li>ETC</li>
            <li>ETC</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
