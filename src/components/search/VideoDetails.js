import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";

const VideoDetails = ({ videoId, title, desc, channel }) => {
  if (!videoId) {
    return;
  }
  return (
    <Container fluid className="m-0 g-0 h-75">
      <Row className="details__container bg-light text-black px-5 w-100">
        <Col className="col-12 col-md-6 d-flex align-items-center">
          <VideoPlayer videoId={videoId} title={title} />
        </Col>
        <Col className="col-12 col-md-5 details__col-info">
          <h2 className="h1 m-0">{title}</h2>
          <h3>{channel}</h3>
          <p className="h5 mt-2 text-secondary">{desc}</p>
          <button className="btn btn-search btn-danger text-white btn-search mt-2 px-2">
            Добавете към вашата история
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoDetails;
