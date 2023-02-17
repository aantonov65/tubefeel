import React from "react";
import technologies from "../../assets/images/footer_technologies.png";
import { Col, Container, Row } from "react-bootstrap";
import Info from "./Info";
import Shortcuts from "./Shortcuts";
import Resources from "./Resources";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container className="h5">
        <Row className="d-flex justify-content-center text-center text-md-start">
          <Info />
          <Shortcuts />
          <Resources />
          <Col className="col-12 col-md-6 col-lg-3">
            <img
              width={190}
              alt="used technologies for the project"
              title="technologies"
              src={technologies}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
