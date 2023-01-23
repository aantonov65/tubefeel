import React from "react";

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="progress_container">
      <div className="progress_text">
        <span className="title me-2">{title}</span>
        <span id="dancePercent" className="precent text-danger">
          {percentage}%
        </span>
      </div>
      <div className="progress">
        <div
          id="dance"
          className="progress-bar bg-danger"
          style={{
            width: percentage + "%",
          }}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
