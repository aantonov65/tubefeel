import React from "react";

const VideoPlayer = ({ videoId }) => {
  if (!videoId) {
    return;
  }
  return (
    <iframe
      className="player__iframe w-100 h-75 p-2"
      title={videoId}
      src={`https://www.youtube.com/embed/${videoId}`}
    ></iframe>
  );
};
export default VideoPlayer;
