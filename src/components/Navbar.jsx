import React from "react";
import menu from"../assets/menu.png";
import "../styles/Navbar.css"

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
