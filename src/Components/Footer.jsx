import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center mt-5">
      <Container>
        <Row className="mt-4">
          <Col>
            <p>Visit us on:</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col>
            <FaFacebook size={30} />
          </Col>
          <Col>
            <FaTwitter size={30} />
          </Col>
          <Col>
            <FaLinkedin size={30} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>
            <p>All rights reserved to SugarBit© 2021</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
