import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// import "./Contact.css"; // Import your CSS file

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sarthaksonawane147@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918669079845";
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/sarthaksonawane/",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleLeetCodeClick = () => {
    window.open(
      "https://leetcode.com/sarthaksonawane147/",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <Container className="mt-5 contact-container">
      <Row className="text-center">
        <Col>
          <div className="aboutTxt">
            <span>Chat With</span>
            <span className="blueTxt"> Sarthak</span>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4 mb-4">
        <Col md={4} sm={6} xs={12} className="text-center mb-3">
          <Button
            onClick={handleEmailClick}
            variant="outline-primary"
            className="contact-button"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
            sarthaksonawane147@gmail.com
          </Button>
        </Col>
        <Col md={4} sm={6} xs={12} className="text-center mb-3">
          <Button
            onClick={handlePhoneClick}
            variant="outline-success"
            className="contact-button"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />{" "}
            +91-8669079845
          </Button>
        </Col>
        <Col md={4} xs={12} className="text-center mb-3">
          <Button
            onClick={handleLinkedInClick}
            variant="outline-info"
            className="contact-button"
          >
            LinkedIn
          </Button>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <div className="aboutTxt">
            <span className="blueTxt">LeetCode</span>
            <span> Profile</span>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={4} xs={12} className="text-center">
          <Button
            onClick={handleLeetCodeClick}
            variant="outline-warning"
            className="contact-button"
          >
            LeetCode
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

// import { Form } from "react-bootstrap";

// const handleSubmit = (event) => {
//   event.preventDefault();
//  //Add your form submission logic here
// };

/* <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            className="contact-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            className="contact-input"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            required
            className="contact-input"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="contact-submit-button mt-2"
        >
          Send
        </Button>
      </Form> */
