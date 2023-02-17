import React from "react";
import { Col, Row } from "react-bootstrap";

const Description = () => {
  return (
    <Row className="row pb-5 px-5 align-items-center justify-content-start">
      <Col className="col-lg-6">
        <h5>
          <strong>Енергичност</strong> показва с число между 0 и 1 нивото на
          интензивност на песента.
        </h5>
        <h5>
          <strong>Инструменталност</strong> представя колко процента песента е
          инструментална и не съдържа думи.
        </h5>
        <h5>
          <strong>Танцувалност</strong> оценява колко подходяща за танцуване е
          песента.
        </h5>
        <h5>
          <strong>Акустичност</strong> представя колко процента елекронно
          неподправена е представена песента.
        </h5>
      </Col>
    </Row>
  );
};

export default Description;
