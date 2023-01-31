import React from "react";
import { Col } from "react-bootstrap";

const Shortcuts = () => {
  return (
    <Col className="col-12 col-md-6 col-lg-3 text-center text-md-start">
      <h4 className="m-0 mt-2">Бързи връзки</h4>
      <ul className="list-unstyled">
        <li>
          <a href="#" className="text-decoration-none text-white">
            Настроение от последните 50 песни
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none text-white">
            Препоръчано от TubeFeel
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none text-white">
            Средно чувство по дни
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none text-white">
            Подобрете настроението си
          </a>
        </li>
      </ul>
    </Col>
  );
};

export default Shortcuts;
