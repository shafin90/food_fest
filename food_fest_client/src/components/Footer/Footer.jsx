import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
          <Col md={4} className="d-md-flex justify-content-md-end">
            <p>&copy; {new Date().getFullYear()} Your Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
