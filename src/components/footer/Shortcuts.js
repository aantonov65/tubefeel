import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shortcuts = () => {
  return (
    <Col className="col-12 col-md-6 col-lg-3 text-center text-md-start">
      <h4 className="m-0 mt-2">Бързи връзки</h4>
      <ul className="list-unstyled">
        <li>
          <Link className="text-decoration-none text-white" to="/feeling">
            Настроение от последните 50 песни
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none text-white" to="/days-feeling">
            Средно чувство по дни
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none text-white" to="/positivity">
            Подобрете настроението си
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none text-white" to="/my-positivity">
            Най-позитивните песни слушани от Вас
          </Link>
        </li>
      </ul>
    </Col>
  );
};

export default Shortcuts;
