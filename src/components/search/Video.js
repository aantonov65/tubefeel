import React from "react";
import { Col } from "react-bootstrap";

// const selectVideo = (videoIdObj, onVideoSelected) => {
//   onVideoSelected(videoIdObj.videoId);
// };

const getCss = (imageUrl) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative",
    borderRadius: "10px",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  };
  return styles;
};

const constructVideoTitles = (videosData, onVideoSelected) => {
  return videosData.map(({ snippet, id }, index) => {
    if (id.kind === "youtube#channel") {
      return;
    }
    return (
      <Col className="video__card" key={index}>
        <div
          style={getCss(snippet.thumbnails.high.url)}
          onClick={() => {
            onVideoSelected(
              id.videoId,
              snippet.title,
              snippet.description,
              snippet.channelTitle
            );
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
