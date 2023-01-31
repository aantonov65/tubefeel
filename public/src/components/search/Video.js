import React from "react";
import { Col } from "react-bootstrap";

const getCss = (imageUrl) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "rgba(106, 25, 25, 0.4) 5px 5px, rgba(138, 35, 35, 0.2) 9px 9px",
  };
  return styles;
};

const constructVideoTitles = (videosData, onVideoSelected) => {
  return videosData.map(({ snippet, id }, index) => {
    if (id.kind === "youtube#channel") {
      return;
    }
    return (
      <Col key={index}>
        <div
          style={getCss(snippet.thumbnails.high.url)}
          onClick={() => {
            onVideoSelected(
              id.videoId,
              snippet.title,
              snippet.description,
              snippet.channelTitle
            );
            window.scrollTo({
              left: 0,
              top: 250,
              behavior: "smooth",
            });
          }}
        ></div>
        <div className="p-2">
          <p className="h5">{snippet.title}</p>
        </div>
      </Col>
    );
  });
};

const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;
