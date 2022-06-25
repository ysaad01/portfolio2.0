import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  // any logic will be declared before the return
  return (
    <div className="about-me-content">
      <section id="about-me" class="intro">
        <h1 className="text-center"> About Me</h1>
        <Row>
          <Col lg={4} md={4}>
            <div className="text-center">
              <img
                className="yas-img"
                src={`${process.env.PUBLIC_URL}/images/yas.jpeg`}
                alt="yas siting on a bench in the metroparks surrounded by trees"
              />
            </div>
          </Col>

          <Col lg={8} md={8}>
            <div>
              <h3 className="text-center">
                Hi, I'm Yasmine but you can call me Yas!
              </h3>
              <p>
                I am a 26 year old who's always had a passion for computers.
                This passion led me to enroll in coding electives in highschool
                and I found the process of building websites to be mind blowing.
              </p>
              <p>
                A lot has changed in the tech realm since then which led me to
                enroll in the Michigan State University Coding Bootcamp to
                improve and build my skill set.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;
