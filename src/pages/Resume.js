import React from "react";
import { Nav, Button, Row, Col } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="page-content">
      <h1>Resume</h1>
      <Row>
        <Nav className="resume-pdf">
          <Button
            className="btn btn-danger btn-lg"
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
          <div className="card border-primary mb-3 bg-light">
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
          <div className="card border-primary mb-3 bg-light">
            <div class="card-body">
              <h3 class="card-title">Technology Skills</h3>
              <ul className="card-text">
                <li>HTML, CSS, and Javascript</li>
                <li>jQuery</li>
                <li>Web APIs</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Model-View-Controller Paradigms</li>
                <li>SQL</li>
                <li>MongoDB and Mongoose</li>
                <li>Progressive Web Application Paradigms</li>
              </ul>
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
