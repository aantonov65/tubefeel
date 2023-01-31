import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../assets/css/nav.css";

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
        </Navbar.Collapse>
        {/* <h3 className="m-0">User</h3> */}
      </Container>
    </Navbar>
  );
};

export default Navigation;
