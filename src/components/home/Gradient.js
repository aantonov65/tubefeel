import React from "react";
import { ReactComponent as Blob } from "../../assets/blob.svg";

const Gradient = () => {
  return (
    <div className="blob position-absolute d-none d-md-block">
      <Blob />
    </div>
  );
};

export default Gradient;
