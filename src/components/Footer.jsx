import React from 'react';
import { FaInstagram, FaGoogle, FaFacebookF } from 'react-icons/fa';
import "../styles/Footer.css";


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-header">BANPH Tech Academy</div>
      <div className="footer-links">
        <a href="#about-us">About us</a>
        <a href="#courses">Courses</a>
        <a href="#news-and-events">News and Events</a>
        <a href="#faq">FAQ</a>
        <a href="#terms">Terms and Conditions</a>
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#contact-us">Contact us</a>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 BANPH All Rights Reserved</p>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaGoogle className="icon" />
          <FaFacebookF className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
