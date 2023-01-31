import React from "react";
import { Col, Row } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";

const VideoDetails = ({ videoId, title, desc, channel }) => {
  if (!videoId) {
    return;
  }
  return (
    <Row className="details-row bg-light text-black px-5 w-100">
      <Col className="details-video-container col-12 col-md-6 d-flex align-items-center position-relative me-5">
        <VideoPlayer videoId={videoId} title={title} />
      </Col>
      <Col className="details-info-container col-12 col-md-5">
        <h2 className="h1 m-0">{title}</h2>
        <h3>{channel}</h3>
        <p className="h5 mt-2 text-secondary">{desc}</p>
        <button className="btn btn-danger text-white mt-2 px-2">
          Добавете към вашата история
        </button>
      </Col>
    </Row>
  );
};

export default VideoDetails;
