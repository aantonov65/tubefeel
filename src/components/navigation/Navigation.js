import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../assets/css/nav.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const userID = localStorage.getItem("userID");

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof userID == "object") {
      navigate("/");
    }
  }, []);

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
          {userID ? <NavigationLinks /> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
