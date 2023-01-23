import React from "react";
import { Container, Row } from "react-bootstrap";
import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
  console.log(data);
  return (
    <Container className="mt-4">
      {data.length != 0 && <h2 className="h1 text-center">Изберете песен</h2>}
      <Row className="video__container">
        <Video data={data} onVideoSelected={onVideoSelected} />
      </Row>
    </Container>
  );
};

export default VideoList;
