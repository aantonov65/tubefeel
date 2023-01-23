import React from "react";

const Header = (props) => {
  return (
    <header className="text-center py-5 px-5 bg-danger header">
      <h1 className="text-white">{props.title}</h1>
      <p className="text-white h5">{props.desc}</p>
    </header>
  );
};

export default Header;
