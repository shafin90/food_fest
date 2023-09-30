import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>
              Address: 123 Main St<br />
              City, State 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </p>
          </Col>


          <Col md={4}>
            <h4>Follow Us</h4>

            <FaFacebook className=' me-2 ' />



            <FaTwitter className=' me-2 ' />

            <FaInstagram className=' me-2 ' />

            <FaPinterest />

          </Col>


          <Col md={4}>
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and recipes.</p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
