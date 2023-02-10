import React from "react";
import { Col } from "react-bootstrap";

const Stat = (props) => {
  return (
    <Col className="d-flex align-items-center flex-column justify-content-center mt-4 col-12 col-md-6 col-lg-3">
      <h3>{props.title}</h3>
      <div className="d-flex gap-2">
        <span>{props.icon}</span>
        <span className="bg-danger px-5 rounded">
          <p className="h2 font-weight-bold text-white m-0 mt-1">
            {props.count}
          </p>
        </span>
      </div>
    </Col>
  );
};

export default Stat;
