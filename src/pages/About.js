import React from "react";
import { Row } from "react-bootstrap";

const About = () => {
  // any logic will be declared before the return
  return (
    <div>
      <h1 className="text-center"> About Me</h1>
      <Row className="about-me">
        <div className="card border-primary mb-3 bg-light">
          <div class="card-header">
            <h2 className="text-center about-me-header">
              Hi, I'm Yasmine but you can call me Yas!
            </h2>
            <div className="d-flex justify-content-center">
              <img
                className="yas-img"
                src={`${process.env.PUBLIC_URL}/images/yas.jpeg`}
                alt="yas siting on a bench in the metroparks surrounded by trees"
              />
            </div>
          </div>
          <div class="card-body about-card-body">
            <p>
              I am a 26 year old who's always had a passion for computers. This
              passion led me to enroll in coding electives in highschool and I
              found the process of building websites to be mind blowing.
            </p>
            <p>
              A lot has changed in the tech realm since then which led me to
              enroll in the Michigan State University Coding Bootcamp to improve
              and build my skill set.
            </p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default About;
