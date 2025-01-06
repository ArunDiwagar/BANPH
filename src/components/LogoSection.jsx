import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.png";
import "../styles/Logo.css"

const LogoSection = () => {
  return (
    <div className="logo-section">
      <img src={logo1} alt="Hitachi" className="logo" />
      <img src={logo2} alt="Microsoft" className="logo" />
      <img src={logo3} alt="VMware" className="logo" />
      <img src={logo4} alt="Dell" className="logo" />
    </div>
  );
};

export default LogoSection;
