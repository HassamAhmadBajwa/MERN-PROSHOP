import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ProShop &copy; {currentDate} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
