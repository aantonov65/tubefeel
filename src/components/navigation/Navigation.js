import logo from "../../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import "../../assets/css/nav.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as SmileIcon } from "../../assets/icons/emoji-smile.svg";
import { baseURL } from "../../api/config";
import axios from "axios";

const Navigation = () => {
  const userID = localStorage.getItem("userID");
  const [averagePositivity, setAveragePositivity] = useState("0.000");
  const navigate = useNavigate();
  const location = useLocation();


  if (userID !== null) {
    axios.get(baseURL + "/users/averageValence/" + userID).then((res) => {
        setAveragePositivity(res.data[0].avg_valence);
    }).catch((err) => {
        if (err.response.status == 403) {
            localStorage.removeItem("userID");
            localStorage.removeItem("avg_user_valence");
            if (location.pathname !== "/") {
                navigate("/");
            } else {
                window.location.href = window.location.href;
            } 
        }
    });
  }

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

      {userID ? (
        <Tippy
          content="Тази стойност е средностатистическата позитивност за всички песни слушани от Вас. Позитивността е колко положителна е дадена песен чрез число между 0 и 1. Колкото тя е по-близо до 1, толкова по-позитивно е чувството на дадената песен."
          className="positivity-tooltip">
          <span
            id="positivity-score"
            className="positivity-score bg-danger me-4 shadow-sm p-1 px-2 rounded position-absolute end-0 border border-2 border-danger text-white">
            <SmileIcon className="me-2" />
            {averagePositivity}
          </span>
        </Tippy>
      ) : null}
    </Navbar>
  );
};

export default Navigation;
