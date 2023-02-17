import React from "react";
import { Col } from "react-bootstrap";

const Resources = () => {
  return (
    <Col className="col-12 col-md-6 col-lg-3 text-center text-md-start">
      <h4 className="m-0 mt-2">Източници</h4>
      <ul className="list-unstyled">
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="text-decoration-none text-white">
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://developers.google.com/youtube/v3"
            target="_blank"
            className="text-decoration-none text-white">
            Youtube API
          </a>
        </li>
        <li>
          <a
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
            className="text-decoration-none text-white">
            Spotify Web API
          </a>
        </li>
      </ul>
    </Col>
  );
};

export default Resources;
