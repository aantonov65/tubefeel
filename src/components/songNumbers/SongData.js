import React from "react";
import { Container } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import albumImage from "../../assets/images/album-image.png";

const SongData = () => {
  return (
    <Container className="mt-2 mb-5 px-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 skill-left">
          <h3 className="h2">*Име на песен*</h3>
          <p id="messageForUser">
            Тук може да видите различните характеристики на избраната от Вас
            песен!
          </p>
          <p id="songAuthor">
            <strong>Артист:</strong> *Име на артист*
          </p>
          <ProgressBar title="Танцувалност" percentage={75} />
          <ProgressBar title="Енергичност" percentage={95} />
          <ProgressBar title="Инструменталност" percentage={99} />
          <ProgressBar title="Акустичност" percentage={75} />
        </div>
        <div className="col-lg-6">
          <img
            id="albumImage"
            src={albumImage}
            className="img-fluid mt-3 shadow-sm border border-danger border-4"
            alt="Album"
          />
        </div>
      </div>
    </Container>
  );
};

export default SongData;
