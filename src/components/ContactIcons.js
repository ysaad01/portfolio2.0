import React from "react";
import { Row } from "react-bootstrap";

const ContactIcons = () => {
  return (
    <Row>
      <div>
        <h4 className="text-center">Contact Me</h4>
      </div>

      <div className="contact-info text-center">
        <a href="mailto:ysaad2325@gmail.com">
          <img
            className="contact-icon"
            src={`${process.env.PUBLIC_URL}/images/icons/email-icon.png`}
            alt="email contact icon"
          ></img>
        </a>

        <a href="https://github.com/ysaad01">
          <img
            className="contact-icon"
            src={`${process.env.PUBLIC_URL}/images/icons/github-icon.png`}
            alt="github contact icon"
          ></img>
        </a>
      </div>
    </Row>
  );
};

export default ContactIcons;
