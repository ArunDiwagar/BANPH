import React from 'react';
import i1 from '../img/i1.png';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <section className="header">
      <div className="header-content">
        <h1>Empower Youth. <br /> Build Strength. <br /> Change Life.</h1>
        <p>
          Empowering diverse youth for high-paying tech careers, fostering inclusion, and driving
          workforce diversity for an equitable future.
        </p>
        <div className="btn-container">
          <button className="cta-button">Success Starts Here<FaArrowRight className="icon" /></button>

        </div>
      </div>
      <img src={i1} alt="Students" className="header-img" />
    </section>
  );
};

export default Header;
