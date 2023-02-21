import React from "react";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import albumImage from "../../assets/images/album-image.png";

const SongData = () => {
  return (
    <Row className="row align-items-center justify-content-center mt-2 mb-5 px-5">
      <Col className="col-12 col-lg-6">
        {/* <img
          id="albumImage"
          src={albumImage}
          className="img-fluid mt-3 shadow-sm border border-danger border-4"
          alt="Album"
        /> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4-9H9DTj_R0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </Col>
      <Col className="col-12 col-lg-6 mt-4 skill-right">
        <h3 className="h2">Byala Roza</h3>
        <h4 id="songAuthor">
          <strong>Артист:</strong> Slavka Kalcheva
        </h4>
        <p id="messageForUser" className="h5">
          Тук може да видите различните характеристики на избраната от Вас
          песен!
        </p>
        <div className="mt-4">
          <ProgressBar title="Танцувалност" percentage={68} />
          <ProgressBar title="Енергичност" percentage={91} />
          <ProgressBar title="Инструменталност" percentage={0} />
          <ProgressBar title="Акустичност" percentage={17} />
        </div>
      </Col>
    </Row>
  );
};

export default SongData;
