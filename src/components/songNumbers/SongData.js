import React from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import albumImage from "../../assets/images/album-image.png";

const SongData = () => {
  return (
    <Row className="row align-items-center justify-content-center mt-2 mb-5 px-5">
      <Col className="col-12 col-lg-6">
        <img
          id="albumImage"
          src={albumImage}
          className="img-fluid mt-3 shadow-sm border border-danger border-4"
          alt="Album"
        />
      </Col>
      <Col className="col-12 col-lg-6 mt-4 skill-right">
        <h3 className="h2">*Име на песен*</h3>
        <h4 id="songAuthor">
          <strong>Артист:</strong> *Име на артист*
        </h4>
        <p id="messageForUser" className="h5">
          Тук може да видите различните характеристики на избраната от Вас
          песен!
        </p>
        <div className="mt-4">
          <ProgressBar title="Танцувалност" percentage={75} />
          <ProgressBar title="Енергичност" percentage={95} />
          <ProgressBar title="Инструменталност" percentage={99} />
          <ProgressBar title="Акустичност" percentage={75} />
        </div>
      </Col>
    </Row>
  );
};

export default SongData;
