import React from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-return-right.svg";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Widget = (props) => {
  return (
    <Col as={Link} to={props.to} href className="bg-white rounded">
      <h2 className="text-danger m-0">
        {props.title} <ArrowIcon className="ms-2 mt-1" />
      </h2>
      <p className="mt-2 h5">{props.desc}</p>
    </Col>
  );
};

export default Widget;
