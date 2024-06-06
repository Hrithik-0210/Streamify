import React from "react";
import logo from "../images/youtube-logo.jpg";

const Header = () => {
  return (
    <div className="flex">
      <i className="fa-solid fa-bars"></i>
      <img src={logo} alt="logo" className="w-32 h-8 rounded" />
    </div>
  );
};

export default Header;
