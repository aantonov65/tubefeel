import React from "react";

const Header = (props) => {
  return (
    <div className="header text-center py-5 px-5 bg-danger">
      <h1 className="text-white">{props.title}</h1>
      <p className="text-white h5">{props.desc}</p>
    </div>
  );
};

export default Header;
