import React from "react";
import { Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

const Info = () => {
  return (
    <Col className="col-12 col-md-6 col-lg-3">
      <p className="h4">
        <img width={55} src={logo} alt="logo" className="me-2" />
        TubeFeel
      </p>
      <p>
        НОИТ 2023<br></br>
        Проект 279<br></br>
        Антъни Антонов<br></br>
        Симеон Теремков<br></br>
        <a
          href="https://pgi-pernik.bg-schools.com/"
          className="text-decoration-none text-white footer__link"
          target="_blank"
        >
          ПГ по икономика - Перник
        </a>
      </p>
    </Col>
  );
};

export default Info;
