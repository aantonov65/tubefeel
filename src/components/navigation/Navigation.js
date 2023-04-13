import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../assets/css/nav.css";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as SmileIcon } from "../../assets/icons/emoji-smile.svg";

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
      <Tippy content="Средна позитивност" className="positivity-tooltip">
        <span
          id="positivity-score"
          className="positivity-score bg-danger me-4 shadow-sm p-1 px-2 rounded position-absolute end-0 border border-2 border-danger text-white">
          <SmileIcon className="me-2" />
          8.23
        </span>
      </Tippy>
    </Navbar>
  );
};

export default Navigation;
