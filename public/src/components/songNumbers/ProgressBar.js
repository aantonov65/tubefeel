import React from "react";

const ProgressBar = ({ title, percentage }) => {
  return (
    <div>
      <div>
        <span className="me-2">{title}</span>
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
