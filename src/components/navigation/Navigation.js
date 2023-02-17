import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../assets/css/nav.css";
import { Button, Nav } from "react-bootstrap";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      className="position-sticky top-0 w-100 shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img width={55} src={logo} alt="logo" className="me-2" />
          <p className="h4 d-inline">TubeFeel</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isLoggedIn ? <NavigationLinks /> : null}
          <Nav>
            <Button
              className="py-2 px-3 px-xxl-5"
              variant="danger"
              onClick={"function"}>
              Излезте
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
