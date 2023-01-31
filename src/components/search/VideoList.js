import React from "react";
import { Container, Row } from "react-bootstrap";
import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <Container>
      {data.length !== 0 && (
        <h2 className="h1 text-center mt-4">Изберете песен</h2>
      )}
      <Row className="video-row">
        <Video data={data} onVideoSelected={onVideoSelected} />
      </Row>
    </Container>
  );
};

export default VideoList;
