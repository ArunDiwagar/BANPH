import React from "react";
import menu from "../img/menu.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">BANPH Tech Academy</h2>
      <button className="menu-button">
        <img src={menu} alt="Menu" className="menu-icon" />
      </button>
    </nav>
  );
};

export default Navbar;
