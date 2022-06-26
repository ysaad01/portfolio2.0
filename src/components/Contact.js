import React from "react";
import { Row } from "react-bootstrap";

const Contact = ({ contact }) => {
  console.log(contact);
  return (
    <Row>
      <div>
        <h4 className="text-center">Contact Me</h4>
      </div>

      <div className="contact-info text-center">
        <a href="mailto:ysaad2325@gmail.com">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/email-icon.png`}
            alt="email contact icon"
          ></img>
        </a>

        <a href="https://github.com/ysaad01">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/github-icon.png`}
            alt="github contact icon"
          ></img>
        </a>
        <a href="tel:(440) 681-0984">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/tel-icon.png`}
            alt="telephone contact icon"
          ></img>
        </a>
      </div>
    </Row>
  );
};

export default Contact;
